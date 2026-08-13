import {
  AimOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import {
  Cartesian3,
  Math as CesiumMath,
  Color,
  Credit,
  GeographicTilingScheme,
  type ImageryLayer,
  type TileProviderError,
  UrlTemplateImageryProvider,
  Viewer,
  WebMapServiceImageryProvider,
} from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import classNames from 'classnames';
import { type FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

type ImageryMode =
  'sentinel-2' | 'blue-marble' | 'modis-terra' | 'viirs-noaa20' | 'viirs-noaa21' | 'viirs-snpp';

type NasaDailyImageryMode = Extract<
  ImageryMode,
  'modis-terra' | 'viirs-noaa20' | 'viirs-noaa21' | 'viirs-snpp'
>;

type ErrorState = {
  message: string;
  retryable: boolean;
};

type ImageryDefinition = {
  label: string;
  source: string;
};

const NASA_GIBS_ROOTS = [
  'https://gibs.earthdata.nasa.gov/wmts/epsg4326/best',
  'https://gibs-a.earthdata.nasa.gov/wmts/epsg4326/best',
  'https://gibs-b.earthdata.nasa.gov/wmts/epsg4326/best',
  'https://gibs-c.earthdata.nasa.gov/wmts/epsg4326/best',
];
const NASA_CREDIT = new Credit('NASA Global Imagery Browse Services (GIBS)');
const EOX_CREDIT = new Credit(
  'EOX Sentinel-2 Cloudless 2025 · Contains modified Copernicus Sentinel data · CC BY-NC-SA 4.0',
);
const EOX_BLUE_MARBLE_CREDIT = new Credit('Blue Marble · NASA · hosted by EOX');
const EOX_SENTINEL_ROOT = 'https://tiles.maps.eox.at/wmts/1.0.0';
const PROBE_TIMEOUT = 6_000;
const INITIAL_LOAD_TIMEOUT = 20_000;
const TILE_ERROR_THRESHOLD = 6;

const NASA_DAILY_IMAGERY_LAYERS: Record<NasaDailyImageryMode, string> = {
  'modis-terra': 'MODIS_Terra_CorrectedReflectance_TrueColor',
  'viirs-noaa20': 'VIIRS_NOAA20_CorrectedReflectance_TrueColor',
  'viirs-noaa21': 'VIIRS_NOAA21_CorrectedReflectance_TrueColor',
  'viirs-snpp': 'VIIRS_SNPP_CorrectedReflectance_TrueColor',
};

const IMAGERY_DEFINITIONS: Record<ImageryMode, ImageryDefinition> = {
  'sentinel-2': {
    label: 'Sentinel-2 Cloudless 2025',
    source: 'EOX · Copernicus Sentinel-2',
  },
  'blue-marble': {
    label: 'Blue Marble 全球影像',
    source: 'NASA · EOX',
  },
  'modis-terra': {
    label: 'MODIS Terra 每日真彩',
    source: 'NASA GIBS · Terra',
  },
  'viirs-noaa20': {
    label: 'VIIRS NOAA-20 每日真彩',
    source: 'NASA GIBS · NOAA-20',
  },
  'viirs-noaa21': {
    label: 'VIIRS NOAA-21 每日真彩',
    source: 'NASA GIBS · NOAA-21',
  },
  'viirs-snpp': {
    label: 'VIIRS Suomi NPP 每日真彩',
    source: 'NASA GIBS · Suomi NPP',
  },
};

const TOOL_BUTTON_CLASS =
  'grid h-42px w-42px shrink-0 cursor-pointer place-items-center rounded-12px border border-[rgba(255,255,255,0.14)] bg-[rgba(2,8,23,0.76)] p-0 text-16px text-[#f8fafc] shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-[14px] transition-colors hover:border-[rgba(56,189,248,0.68)] hover:bg-[rgba(15,23,42,0.92)] focus-visible:border-[rgba(56,189,248,0.68)] focus-visible:outline-none';

const formatUtcDate = (date: Date) => date.toISOString().slice(0, 10);

const getLatestDailyImageryDate = () => {
  const latestStableDate = new Date();
  latestStableDate.setUTCDate(latestStableDate.getUTCDate() - 2);
  return formatUtcDate(latestStableDate);
};

const isNasaDailyImageryMode = (mode: ImageryMode): mode is NasaDailyImageryMode =>
  mode in NASA_DAILY_IMAGERY_LAYERS;

const getNasaProbeUrl = (root: string, mode: NasaDailyImageryMode, imageryDate: string) =>
  `${root}/${NASA_DAILY_IMAGERY_LAYERS[mode]}/default/${imageryDate}/250m/0/0/0.jpg`;

const getEoxTileUrl = (
  layer: 's2cloudless-2025_3857' | 'bluemarble_3857',
  level = '{z}',
  column = '{x}',
  row = '{y}',
) => {
  const tileMatrixSet = layer === 'bluemarble_3857' ? 'g' : 'GoogleMapsCompatible';
  return `${EOX_SENTINEL_ROOT}/${layer}/default/${tileMatrixSet}/${level}/${row}/${column}.jpg`;
};

const probeImageryTile = (url: string) =>
  new Promise<void>((resolve, reject) => {
    const probe = new Image();

    const handleLoad = () => {
      cleanUp();
      resolve();
    };

    const handleError = () => {
      cleanUp();
      reject(new Error('NASA GIBS imagery probe failed.'));
    };

    const cleanUp = () => {
      globalThis.clearTimeout(timeoutID);
      probe.removeEventListener('load', handleLoad);
      probe.removeEventListener('error', handleError);
    };

    probe.crossOrigin = 'anonymous';
    probe.decoding = 'async';
    probe.addEventListener('load', handleLoad);
    probe.addEventListener('error', handleError);
    const timeoutID = globalThis.setTimeout(() => {
      cleanUp();
      reject(new Error('NASA GIBS imagery probe timed out.'));
    }, PROBE_TIMEOUT);
    probe.src = url;
  });

const resolveNasaImageryRoot = async (mode: NasaDailyImageryMode, imageryDate: string) => {
  try {
    return await Promise.any(
      NASA_GIBS_ROOTS.map(async (root) => {
        await probeImageryTile(getNasaProbeUrl(root, mode, imageryDate));
        return root;
      }),
    );
  } catch {
    throw new Error('No available NASA GIBS endpoint.');
  }
};

const createSentinelImageryProvider = () =>
  new UrlTemplateImageryProvider({
    url: getEoxTileUrl('s2cloudless-2025_3857'),
    maximumLevel: 20,
    credit: EOX_CREDIT,
    enablePickFeatures: false,
    hasAlphaChannel: false,
  });

const createBlueMarbleImageryProvider = () =>
  new UrlTemplateImageryProvider({
    url: getEoxTileUrl('bluemarble_3857'),
    maximumLevel: 8,
    credit: EOX_BLUE_MARBLE_CREDIT,
    enablePickFeatures: false,
    hasAlphaChannel: false,
  });

const createNasaImageryProvider = (
  root: string,
  mode: NasaDailyImageryMode,
  imageryDate: string,
) => {
  const serviceRoot = root.replace('/wmts/', '/wms/').replace('/best', '/best/wms.cgi');

  return new WebMapServiceImageryProvider({
    url: serviceRoot,
    layers: NASA_DAILY_IMAGERY_LAYERS[mode],
    parameters: {
      format: 'image/jpeg',
      styles: '',
      transparent: false,
      version: '1.1.1',
      time: imageryDate,
    },
    enablePickFeatures: false,
    tilingScheme: new GeographicTilingScheme(),
    tileWidth: 512,
    tileHeight: 512,
    maximumLevel: 8,
    credit: NASA_CREDIT,
  });
};

const GlobalEarth: FC = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  const cesiumContainerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);
  const imageryLayerRef = useRef<ImageryLayer | null>(null);
  const removeImageryErrorListenerRef = useRef<(() => void) | null>(null);
  const loadingTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const tileErrorCountRef = useRef(0);
  const [viewerReady, setViewerReady] = useState(false);
  const [requestedImageryMode, setRequestedImageryMode] = useState<ImageryMode>('sentinel-2');
  const [activeImageryMode, setActiveImageryMode] = useState<ImageryMode | null>(null);
  const [activeSource, setActiveSource] = useState('正在连接卫星影像');
  const [retryVersion, setRetryVersion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [errorState, setErrorState] = useState<ErrorState | null>(null);
  const dailyImageryDate = useMemo(() => getLatestDailyImageryDate(), []);

  const clearLoadingTimeout = useCallback(() => {
    globalThis.clearTimeout(loadingTimeoutRef.current);
    loadingTimeoutRef.current = undefined;
  }, []);

  const resetCamera = useCallback((duration = 1.2) => {
    const viewer = viewerRef.current;
    if (!viewer || viewer.isDestroyed()) return;

    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(105, 22, 22_000_000),
      orientation: {
        heading: 0,
        pitch: CesiumMath.toRadians(-90),
        roll: 0,
      },
      duration,
    });
  }, []);

  const toggleFullscreen = useCallback(async () => {
    try {
      await (document.fullscreenElement
        ? document.exitFullscreen()
        : shellRef.current?.requestFullscreen());
    } catch {
      setErrorState({
        message: '浏览器未允许进入全屏模式，请检查浏览器权限后重试。',
        retryable: false,
      });
    }
  }, []);

  const retryImagery = useCallback(() => {
    setRetryVersion((currentVersion) => currentVersion + 1);
  }, []);

  useEffect(() => {
    const container = cesiumContainerRef.current;
    if (!container) return;

    let isDisposed = false;
    let viewer: Viewer;

    try {
      viewer = new Viewer(container, {
        animation: false,
        baseLayer: false,
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        infoBox: false,
        navigationHelpButton: false,
        scene3DOnly: true,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: false,
        requestRenderMode: true,
        maximumRenderTimeChange: Number.POSITIVE_INFINITY,
      });
    } catch {
      globalThis.queueMicrotask(() => {
        setErrorState({
          message: '无法初始化 3D 地球。请确认浏览器已开启 WebGL 硬件加速。',
          retryable: false,
        });
        setIsLoading(false);
      });
      return;
    }

    viewerRef.current = viewer;
    viewer.scene.backgroundColor = Color.fromCssColorString('#020817');
    viewer.scene.globe.baseColor = Color.fromCssColorString('#0a1730');
    viewer.scene.globe.maximumScreenSpaceError = 2;
    viewer.scene.screenSpaceCameraController.minimumZoomDistance = 100;
    viewer.scene.screenSpaceCameraController.maximumZoomDistance = 40_000_000;

    const removeTileProgressListener = viewer.scene.globe.tileLoadProgressEvent.addEventListener(
      (remainingTiles: number) => {
        if (remainingTiles === 0 && imageryLayerRef.current) {
          tileErrorCountRef.current = 0;
          clearLoadingTimeout();
          setIsLoading(false);
        }
      },
    );

    const removeRenderErrorListener = viewer.scene.renderError.addEventListener(() => {
      clearLoadingTimeout();
      setErrorState({
        message: '3D 场景渲染失败，请尝试刷新页面或开启浏览器硬件加速。',
        retryable: false,
      });
      setIsLoading(false);
    });

    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === shellRef.current);
      viewer.resize();
      viewer.scene.requestRender();
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    globalThis.queueMicrotask(() => {
      if (!isDisposed) setViewerReady(true);
    });
    resetCamera(0);

    return () => {
      isDisposed = true;
      clearLoadingTimeout();
      removeImageryErrorListenerRef.current?.();
      removeTileProgressListener();
      removeRenderErrorListener();
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      viewerRef.current = null;
      if (!viewer.isDestroyed()) viewer.destroy();
    };
  }, [clearLoadingTimeout, resetCamera]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewerReady || !viewer || viewer.isDestroyed()) return;

    let isCancelled = false;

    const loadImagery = async () => {
      clearLoadingTimeout();
      setErrorState(null);
      setIsLoading(true);
      tileErrorCountRef.current = 0;

      try {
        let root: string | null = null;
        if (requestedImageryMode === 'sentinel-2') {
          await probeImageryTile(getEoxTileUrl('s2cloudless-2025_3857', '0', '0', '0'));
        } else if (requestedImageryMode === 'blue-marble') {
          await probeImageryTile(getEoxTileUrl('bluemarble_3857', '0', '0', '0'));
        } else if (isNasaDailyImageryMode(requestedImageryMode)) {
          root = await resolveNasaImageryRoot(requestedImageryMode, dailyImageryDate);
        }
        if (isCancelled || viewer.isDestroyed()) return;

        let provider;
        if (requestedImageryMode === 'sentinel-2') {
          provider = createSentinelImageryProvider();
        } else if (requestedImageryMode === 'blue-marble') {
          provider = createBlueMarbleImageryProvider();
        } else if (isNasaDailyImageryMode(requestedImageryMode)) {
          provider = createNasaImageryProvider(
            root as string,
            requestedImageryMode,
            dailyImageryDate,
          );
        } else {
          throw new Error('Unsupported imagery mode.');
        }
        removeImageryErrorListenerRef.current?.();
        removeImageryErrorListenerRef.current = provider.errorEvent.addEventListener(
          (error: TileProviderError) => {
            error.retry = error.timesRetried < 1;
            tileErrorCountRef.current += 1;

            if (tileErrorCountRef.current >= TILE_ERROR_THRESHOLD) {
              clearLoadingTimeout();
              setErrorState({
                message: '部分卫星瓦片持续加载失败，请检查网络后重新加载影像。',
                retryable: true,
              });
              setIsLoading(false);
            }
          },
        );

        const previousLayer = imageryLayerRef.current;
        const nextLayer = viewer.imageryLayers.addImageryProvider(provider);
        imageryLayerRef.current = nextLayer;
        if (previousLayer) viewer.imageryLayers.remove(previousLayer, true);

        setActiveImageryMode(requestedImageryMode);
        let sourceLabel = IMAGERY_DEFINITIONS[requestedImageryMode].source;
        if (isNasaDailyImageryMode(requestedImageryMode) && root !== NASA_GIBS_ROOTS[0]) {
          sourceLabel = `${sourceLabel} · 可用节点`;
        }
        setActiveSource(sourceLabel);
        viewer.scene.requestRender();
        loadingTimeoutRef.current = globalThis.setTimeout(() => {
          setIsLoading(false);
        }, INITIAL_LOAD_TIMEOUT);
      } catch {
        if (isCancelled) return;
        clearLoadingTimeout();
        setErrorState({
          message: '卫星影像服务暂时不可达，请检查网络或稍后重新加载。',
          retryable: true,
        });
        setIsLoading(false);
      }
    };

    loadImagery();

    return () => {
      isCancelled = true;
    };
  }, [clearLoadingTimeout, dailyImageryDate, requestedImageryMode, retryVersion, viewerReady]);

  const activeImageryLabel = activeImageryMode
    ? IMAGERY_DEFINITIONS[activeImageryMode].label
    : '卫星影像连接中';

  return (
    <section
      ref={shellRef}
      className={classNames(
        'relative isolate w-full overflow-hidden rounded-18px border border-[rgba(148,163,184,0.2)] bg-[#020817] text-[#f8fafc] shadow-[0_24px_70px_rgba(2,8,23,0.3)] [&_.cesium-widget-credits]:pr-8px [&_.cesium-widget-credits]:text-10px',
        {
          'h-screen w-screen rounded-none border-0': isFullscreen,
        },
      )}
      aria-label='全球 3D 卫星地球'
    >
      <div
        ref={cesiumContainerRef}
        className={classNames(
          'h-[min(72vh,720px)] min-h-520px w-full max-md:h-[64vh] max-md:min-h-460px',
          {
            '[height:100vh!important] min-h-0': isFullscreen,
          },
        )}
      />

      <div className='pointer-events-none absolute left-18px top-18px z-2 flex flex-col gap-2px rounded-12px border border-[rgba(255,255,255,0.12)] bg-[rgba(2,8,23,0.72)] px-13px py-10px shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-[14px] max-md:left-12px max-md:top-68px'>
        {/* <strong className='text-14px leading-1.4 tracking-[0.02em]'>全球卫星地球</strong> */}
        <span className='text-11px text-[#94a3b8] leading-1.4'>
          {activeImageryLabel} · {activeSource}
        </span>
      </div>

      <div className='absolute right-18px top-18px z-3 flex items-center gap-8px max-md:left-12px max-md:right-12px max-md:top-12px max-md:justify-end'>
        <label className='flex h-42px items-center gap-8px rounded-12px border border-[rgba(255,255,255,0.14)] bg-[rgba(2,8,23,0.76)] px-10px pl-12px shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-[14px] focus-within:border-[rgba(56,189,248,0.68)] max-md:flex-1'>
          <span className='text-12px text-[#94a3b8] max-md:hidden'>影像</span>
          <select
            className='max-w-220px cursor-pointer border-0 bg-transparent text-12px text-[#f8fafc] outline-none [&_option]:bg-[#0f172a] [&_option]:text-[#f8fafc] max-md:w-full max-md:max-w-none'
            value={requestedImageryMode}
            onChange={(event) => setRequestedImageryMode(event.target.value as ImageryMode)}
            aria-label='选择卫星影像图层'
          >
            <option value='sentinel-2'>Sentinel-2 Cloudless 2025</option>
            <option value='blue-marble'>Blue Marble 全球影像</option>
            <option value='viirs-noaa20'>VIIRS NOAA-20 · {dailyImageryDate}</option>
            <option value='viirs-noaa21'>VIIRS NOAA-21 · {dailyImageryDate}</option>
            <option value='viirs-snpp'>VIIRS Suomi NPP · {dailyImageryDate}</option>
            <option value='modis-terra'>MODIS Terra · {dailyImageryDate}</option>
          </select>
        </label>
        <button
          className={TOOL_BUTTON_CLASS}
          type='button'
          onClick={() => resetCamera()}
          aria-label='复位地球视角'
          title='复位视角'
        >
          <AimOutlined />
        </button>
        <button
          className={TOOL_BUTTON_CLASS}
          type='button'
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? '退出全屏' : '进入全屏'}
          aria-pressed={isFullscreen}
          title={isFullscreen ? '退出全屏' : '进入全屏'}
        >
          {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        </button>
      </div>

      {isLoading && !errorState && (
        <div
          className='pointer-events-none absolute left-1/2 top-1/2 z-2 flex max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 items-center gap-10px rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(2,8,23,0.82)] px-15px py-11px text-center text-13px text-[#e2e8f0] shadow-[0_12px_36px_rgba(0,0,0,0.24)] backdrop-blur-[14px]'
          role='status'
        >
          <span
            className='h-14px w-14px shrink-0 animate-spin rounded-full border-2 border-[rgba(148,163,184,0.34)] border-t-[#38bdf8] motion-reduce:animate-[spin_1.8s_linear_infinite]'
            aria-hidden='true'
          />
          正在加载卫星影像…
        </div>
      )}

      {errorState && (
        <div
          className='absolute left-1/2 top-1/2 z-3 flex max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10px rounded-12px border border-[rgba(248,113,113,0.36)] bg-[rgba(2,8,23,0.88)] px-16px py-13px text-center text-13px text-[#fecaca] shadow-[0_12px_36px_rgba(0,0,0,0.24)] backdrop-blur-[14px]'
          role='alert'
        >
          <span>{errorState.message}</span>
          {errorState.retryable && (
            <button
              className='flex cursor-pointer items-center gap-6px rounded-8px border border-[rgba(248,113,113,0.42)] bg-[rgba(127,29,29,0.42)] px-12px py-7px text-12px text-[#fee2e2] transition-colors hover:bg-[rgba(153,27,27,0.58)] focus-visible:outline-2 focus-visible:outline-[#fca5a5]'
              type='button'
              onClick={retryImagery}
            >
              <ReloadOutlined />
              重新加载影像
            </button>
          )}
        </div>
      )}

      <div className='pointer-events-none absolute bottom-26px left-18px z-2 rounded-9px border border-[rgba(255,255,255,0.1)] bg-[rgba(2,8,23,0.68)] px-10px py-7px text-11px text-[#cbd5e1] backdrop-blur-[12px] max-md:bottom-30px max-md:left-12px max-md:right-12px max-md:text-center'>
        左键拖拽旋转 · 滚轮缩放 · 右键拖拽俯仰
      </div>
    </section>
  );
};

export default GlobalEarth;
