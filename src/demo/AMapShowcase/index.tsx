import {
  AimOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import classNames from 'classnames';
import { type FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  type AMapCenter,
  type AMapLayer,
  type AMapMap,
  type AMapNamespace,
  loadAMapJsApi,
} from './amap';

type MapMode =
  | 'china-standard'
  | 'china-roadnet'
  | 'china-satellite'
  | 'satellite-roadnet'
  | 'china-administration'
  | 'guangdong-administration'
  | 'world-administration'
  | 'city-3d'
  | 'city-night'
  | 'indoor-beijing'
  | 'realtime-traffic'
  | 'theme-dark'
  | 'theme-light'
  | 'theme-fresh'
  | 'theme-grey'
  | 'theme-graffiti'
  | 'theme-macaron'
  | 'theme-blue'
  | 'theme-wine';

type MapModeDefinition = {
  center: AMapCenter;
  features: string[];
  label: string;
  mapStyle: string;
  pitch: number;
  rotation: number;
  summary: string;
  zoom: number;
};

type DistrictProperties = {
  NAME_CHN?: string;
  NAME_ENG?: string;
  SOC?: string;
  adcode?: number | string;
  adcode_pro?: number | string;
};

type WorldDistrictDefinition = {
  NAME_CHN?: string;
  NAME_ENG?: string;
  bounds: [number, number, number, number];
};

type ModeResources = {
  abortController?: AbortController;
  layers: AMapLayer[];
  overlays: AMapLayer[];
};

type ErrorState = {
  message: string;
};

const MAP_MODE_GROUPS: { label: string; modes: MapMode[] }[] = [
  {
    label: '基础图层',
    modes: ['china-standard', 'china-roadnet', 'china-satellite', 'satellite-roadnet'],
  },
  {
    label: '行政与交通专题',
    modes: [
      'china-administration',
      'guangdong-administration',
      'world-administration',
      'realtime-traffic',
    ],
  },
  {
    label: '3D 与室内',
    modes: ['city-3d', 'city-night', 'indoor-beijing'],
  },
  {
    label: '官方主题',
    modes: [
      'theme-dark',
      'theme-light',
      'theme-fresh',
      'theme-grey',
      'theme-graffiti',
      'theme-macaron',
      'theme-blue',
      'theme-wine',
    ],
  },
];

const MAP_MODE_DEFINITIONS: Record<MapMode, MapModeDefinition> = {
  'china-standard': {
    label: '全国标准地图',
    summary: '高德标准矢量底图与道路、地点、建筑要素',
    center: [104, 35],
    zoom: 4.4,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/normal',
    features: ['bg', 'point', 'road', 'building'],
  },
  'china-roadnet': {
    label: '全国简洁路网',
    summary: '仅保留区域面与道路标注，突出全国交通骨架',
    center: [104, 35],
    zoom: 4.4,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/light',
    features: ['bg', 'road'],
  },
  'china-satellite': {
    label: '全国卫星影像',
    summary: '高德官方卫星影像，适合查看全国地表与城市纹理',
    center: [104, 35],
    zoom: 4.4,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/normal',
    features: [],
  },
  'satellite-roadnet': {
    label: '卫星影像 + 路网',
    summary: '卫星底图叠加道路与地名标注',
    center: [113.2644, 23.1291],
    zoom: 11.5,
    pitch: 38,
    rotation: -12,
    mapStyle: 'amap://styles/normal',
    features: [],
  },
  'china-administration': {
    label: '全国行政区划',
    summary: '国家、省级与市级行政区边界专题图',
    center: [104, 35],
    zoom: 4.2,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/whitesmoke',
    features: ['bg', 'point', 'road'],
  },
  'guangdong-administration': {
    label: '广东省市县区划',
    summary: '广东省内地级市与区县边界专题图',
    center: [113.2665, 23.1322],
    zoom: 7,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/whitesmoke',
    features: ['bg', 'point', 'road'],
  },
  'world-administration': {
    label: '全球行政区划',
    summary: '世界国家与地区边界；详细海外底图取决于 Key 权限',
    center: [15, 24],
    zoom: 2.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/normal',
    features: ['bg', 'point', 'road'],
  },
  'city-3d': {
    label: '上海 3D 城市',
    summary: '可俯仰、旋转的城市楼块与道路场景',
    center: [121.4737, 31.2304],
    zoom: 16.3,
    pitch: 55,
    rotation: -18,
    mapStyle: 'amap://styles/normal',
    features: ['bg', 'point', 'road'],
  },
  'city-night': {
    label: '深圳 3D 夜景',
    summary: '极夜蓝官方样式与立体建筑楼块',
    center: [114.0579, 22.5431],
    zoom: 15.3,
    pitch: 50,
    rotation: 20,
    mapStyle: 'amap://styles/darkblue',
    features: ['bg', 'point', 'road'],
  },
  'indoor-beijing': {
    label: '北京室内地图',
    summary: '高缩放级别自动展示商场楼层、通道与室内地点',
    center: [116.519942, 39.924677],
    zoom: 18.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/normal',
    features: ['bg', 'point', 'road', 'building'],
  },
  'realtime-traffic': {
    label: '北京实时路况',
    summary: '标准地图叠加高德实时交通图层',
    center: [116.3974, 39.9093],
    zoom: 12,
    pitch: 25,
    rotation: 0,
    mapStyle: 'amap://styles/normal',
    features: ['bg', 'point', 'road', 'building'],
  },
  'theme-dark': {
    label: '幻影黑主题',
    summary: '高德官方深色主题，适合暗色数据展示场景',
    center: [126.6424, 45.7569],
    zoom: 11.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/dark',
    features: ['bg', 'point', 'road', 'building'],
  },
  'theme-light': {
    label: '月光银主题',
    summary: '高德官方浅灰主题，突出道路与地点层级',
    center: [120.1551, 30.2741],
    zoom: 11.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/light',
    features: ['bg', 'point', 'road', 'building'],
  },
  'theme-fresh': {
    label: '草色青主题',
    summary: '高德官方清新绿色主题，强化公园与自然区域',
    center: [104.0665, 30.5723],
    zoom: 11.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/fresh',
    features: ['bg', 'point', 'road', 'building'],
  },
  'theme-grey': {
    label: '雅士灰主题',
    summary: '高德官方中性灰主题，适合作为专题数据底图',
    center: [106.5516, 29.563],
    zoom: 11.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/grey',
    features: ['bg', 'point', 'road', 'building'],
  },
  'theme-graffiti': {
    label: '涂鸦主题',
    summary: '高德官方高对比涂鸦风格城市地图',
    center: [113.2644, 23.1291],
    zoom: 11.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/graffiti',
    features: ['bg', 'point', 'road', 'building'],
  },
  'theme-macaron': {
    label: '马卡龙主题',
    summary: '高德官方柔和彩色主题，呈现轻量城市底图',
    center: [118.0894, 24.4798],
    zoom: 11.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/macaron',
    features: ['bg', 'point', 'road', 'building'],
  },
  'theme-blue': {
    label: '靛青蓝主题',
    summary: '高德官方蓝色主题，适合海滨和科技类场景',
    center: [120.3826, 36.0671],
    zoom: 11.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/blue',
    features: ['bg', 'point', 'road', 'building'],
  },
  'theme-wine': {
    label: '酱籽主题',
    summary: '高德官方暖色主题，突出城市道路与建筑层次',
    center: [118.7969, 32.0603],
    zoom: 11.5,
    pitch: 0,
    rotation: 0,
    mapStyle: 'amap://styles/wine',
    features: ['bg', 'point', 'road', 'building'],
  },
};

const CHINA_DISTRICT_COLORS = [
  'rgba(14, 165, 233, 0.16)',
  'rgba(59, 130, 246, 0.16)',
  'rgba(99, 102, 241, 0.16)',
  'rgba(168, 85, 247, 0.14)',
  'rgba(6, 182, 212, 0.16)',
];
const WORLD_DISTRICT_COLORS = [
  'rgba(56, 189, 248, 0.22)',
  'rgba(45, 212, 191, 0.2)',
  'rgba(129, 140, 248, 0.22)',
  'rgba(192, 132, 252, 0.2)',
  'rgba(251, 191, 36, 0.18)',
];
const WORLD_DISTRICT_DEFINITION_URL =
  'https://a.amap.com/jsapi_demos/static/demo-center/js/soc-list.json';
const WORLD_LABEL_POSITION_OVERRIDES: Record<string, AMapCenter> = {
  CAN: [-106, 57],
  CHL: [-71, -30],
  FRA: [2.2, 46.2],
  RUS: [90, 61],
  USA: [-100, 38],
};
const TOOL_BUTTON_CLASS =
  'grid h-42px w-42px shrink-0 cursor-pointer place-items-center rounded-12px border border-[rgba(255,255,255,0.16)] bg-[rgba(2,8,23,0.8)] p-0 text-16px text-[#f8fafc] shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-[14px] transition-colors hover:border-[rgba(56,189,248,0.72)] hover:bg-[rgba(15,23,42,0.94)] focus-visible:border-[rgba(56,189,248,0.72)] focus-visible:outline-none';

const getChinaDistrictColor = (properties: DistrictProperties) => {
  const provinceCode = String(properties.adcode_pro ?? properties.adcode ?? '0');
  const colorIndex = Number(provinceCode.slice(0, 2)) % CHINA_DISTRICT_COLORS.length;
  return CHINA_DISTRICT_COLORS[colorIndex];
};

const getWorldDistrictColor = (properties: DistrictProperties) => {
  const identity = properties.SOC ?? properties.NAME_ENG ?? '';
  const colorSeed = [...identity].reduce(
    (sum, character) => sum + (character.codePointAt(0) ?? 0),
    0,
  );
  return WORLD_DISTRICT_COLORS[colorSeed % WORLD_DISTRICT_COLORS.length];
};

const normalizeLongitude = (longitude: number) => ((((longitude + 180) % 360) + 360) % 360) - 180;

const getWorldLabelPosition = (
  identity: string,
  [west, south, east, north]: WorldDistrictDefinition['bounds'],
): AMapCenter =>
  WORLD_LABEL_POSITION_OVERRIDES[identity] ?? [
    normalizeLongitude((west + east) / 2),
    (south + north) / 2,
  ];

const loadWorldDistrictLabels = async (
  AMap: AMapNamespace,
  labelsLayer: AMapLayer,
  signal: AbortSignal,
) => {
  const response = await fetch(WORLD_DISTRICT_DEFINITION_URL, { signal });
  if (!response.ok) throw new Error(`国家与地区名称数据请求失败：${response.status}`);

  const districts = (await response.json()) as Record<string, WorldDistrictDefinition>;
  if (signal.aborted) return;

  const labels = Object.entries(districts).flatMap(([identity, district]) => {
    const name = district.NAME_CHN?.trim() || district.NAME_ENG?.trim();
    if (!name || district.bounds.length !== 4) return [];
    const [west, south, east, north] = district.bounds;
    const coverage = Math.abs(east - west) * Math.abs(north - south);

    return [
      new AMap.LabelMarker({
        name: identity,
        position: getWorldLabelPosition(identity, district.bounds),
        rank: Math.max(1, Math.round(Math.log2(coverage + 1))),
        text: {
          content: name,
          direction: 'center',
          style: {
            fillColor: '#f0f9ff',
            fontSize: 11,
            strokeColor: 'rgba(2, 8, 23, 0.96)',
            strokeWidth: 2,
          },
        },
        zIndex: 20,
      }),
    ];
  });
  if (!signal.aborted && labels.length > 0) labelsLayer.add?.(labels);
};

const createModeResources = (AMap: AMapNamespace, mode: MapMode): ModeResources => {
  const defaultLayer = () => AMap.createDefaultLayer({ zooms: [2, 20] });

  switch (mode) {
    case 'china-satellite': {
      return {
        layers: [new AMap.TileLayer.Satellite({ zooms: [2, 20] })],
        overlays: [],
      };
    }
    case 'satellite-roadnet': {
      return {
        layers: [
          new AMap.TileLayer.Satellite({ zooms: [2, 20] }),
          new AMap.TileLayer.RoadNet({ zooms: [2, 20] }),
        ],
        overlays: [],
      };
    }
    case 'china-administration': {
      const districtLayer = new AMap.DistrictLayer.Country({
        SOC: 'CHN',
        depth: 2,
        zIndex: 12,
        zooms: [2, 15],
      });
      districtLayer.setStyles?.({
        'city-stroke': 'rgba(71, 85, 105, 0.48)',
        'coastline-stroke': '#0ea5e9',
        'nation-stroke': '#0284c7',
        'province-stroke': '#334155',
        'stroke-width': 1,
        fill: getChinaDistrictColor,
      });
      return { layers: [defaultLayer()], overlays: [districtLayer] };
    }
    case 'guangdong-administration': {
      const districtLayer = new AMap.DistrictLayer.Province({
        adcode: '440000',
        depth: 2,
        zIndex: 12,
        zooms: [5, 15],
      });
      districtLayer.setStyles?.({
        'city-stroke': 'rgba(51, 65, 85, 0.72)',
        'county-stroke': 'rgba(71, 85, 105, 0.42)',
        'province-stroke': '#0284c7',
        'stroke-width': 1,
        fill: getChinaDistrictColor,
      });
      return { layers: [defaultLayer()], overlays: [districtLayer] };
    }
    case 'world-administration': {
      const abortController = new AbortController();
      const labelsLayer = new AMap.LabelsLayer({
        allowCollision: true,
        collision: true,
        opacity: 1,
        zIndex: 20,
        zooms: [2, 15],
      });
      const districtLayer = new AMap.DistrictLayer.World({
        zIndex: 12,
        zooms: [2, 15],
      });
      districtLayer.setStyles?.({
        'nation-stroke': 'rgba(186, 230, 253, 0.88)',
        'stroke-width': 1,
        fill: getWorldDistrictColor,
      });
      loadWorldDistrictLabels(AMap, labelsLayer, abortController.signal).catch(() => {});
      return {
        abortController,
        layers: [defaultLayer()],
        overlays: [districtLayer, labelsLayer],
      };
    }
    case 'city-3d':
    case 'city-night': {
      return {
        layers: [
          defaultLayer(),
          new AMap.Buildings({
            heightFactor: 1,
            zIndex: 10,
            zooms: [14, 20],
          }),
        ],
        overlays: [],
      };
    }
    case 'realtime-traffic': {
      return {
        layers: [
          defaultLayer(),
          new AMap.TileLayer.Traffic({
            autoRefresh: true,
            interval: 180,
            zIndex: 8,
            zooms: [7, 20],
          }),
        ],
        overlays: [],
      };
    }
    default: {
      return { layers: [defaultLayer()], overlays: [] };
    }
  }
};

const releaseModeResources = (map: AMapMap, resources: ModeResources | null) => {
  if (!resources) return;
  resources.abortController?.abort();
  if (resources.overlays.length > 0) map.remove(resources.overlays);
  [...resources.layers, ...resources.overlays].forEach((layer) => layer.destroy?.());
};

const AMapShowcase: FC = () => {
  const shellRef = useRef<HTMLElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<AMapMap | null>(null);
  const amapRef = useRef<AMapNamespace | null>(null);
  const modeResourcesRef = useRef<ModeResources | null>(null);
  const modeLoadingTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [mapReady, setMapReady] = useState(false);
  const [mapMode, setMapMode] = useState<MapMode>('china-standard');
  const [retryVersion, setRetryVersion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [errorState, setErrorState] = useState<ErrorState | null>(null);
  const activeDefinition = useMemo(() => MAP_MODE_DEFINITIONS[mapMode], [mapMode]);

  const clearModeLoadingTimer = useCallback(() => {
    globalThis.clearTimeout(modeLoadingTimerRef.current);
    modeLoadingTimerRef.current = undefined;
  }, []);

  const resetView = useCallback(
    (duration = 600) => {
      const map = mapRef.current;
      if (!map) return;
      const definition = MAP_MODE_DEFINITIONS[mapMode];
      map.setZoomAndCenter(definition.zoom, definition.center, false, duration);
      map.setPitch(definition.pitch);
      map.setRotation(definition.rotation);
    },
    [mapMode],
  );

  const toggleFullscreen = useCallback(async () => {
    try {
      await (document.fullscreenElement
        ? document.exitFullscreen()
        : shellRef.current?.requestFullscreen());
    } catch {
      setErrorState({ message: '浏览器未允许进入全屏模式，请检查权限后重试。' });
    }
  }, []);

  const retryLoad = useCallback(() => {
    setMapReady(false);
    setErrorState(null);
    setIsLoading(true);
    setRetryVersion((currentVersion) => currentVersion + 1);
  }, []);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    let isDisposed = false;
    let map: AMapMap | null = null;
    const handleComplete = () => {
      if (isDisposed) return;
      setIsLoading(false);
    };

    const initializeMap = async () => {
      try {
        const AMap = await loadAMapJsApi();
        if (isDisposed) return;
        amapRef.current = AMap;

        map = new AMap.Map(container, {
          animateEnable: true,
          center: MAP_MODE_DEFINITIONS['china-standard'].center,
          dragEnable: true,
          features: MAP_MODE_DEFINITIONS['china-standard'].features,
          keyboardEnable: true,
          layers: [],
          mapStyle: MAP_MODE_DEFINITIONS['china-standard'].mapStyle,
          pitch: 0,
          pitchEnable: true,
          resizeEnable: true,
          rotateEnable: true,
          rotation: 0,
          showIndoorMap: true,
          showOversea: true,
          viewMode: '3D',
          zoom: MAP_MODE_DEFINITIONS['china-standard'].zoom,
          zoomEnable: true,
          zooms: [2, 20],
        });
        mapRef.current = map;

        map.addControl(
          new AMap.ControlBar({
            position: { right: '14px', top: '82px' },
            showControlButton: true,
          }),
        );
        map.addControl(new AMap.ToolBar({ position: { bottom: '86px', right: '14px' } }));
        map.addControl(new AMap.Scale({ position: 'LB' }));

        map.on('complete', handleComplete);
        setMapReady(true);
      } catch (error) {
        if (isDisposed) return;
        setErrorState({
          message:
            error instanceof Error
              ? error.message
              : '高德地图加载失败。请检查网络、Web Key 与安全密钥，并确认当前域名已加入高德开放平台白名单。',
        });
        setIsLoading(false);
      }
    };

    initializeMap();

    return () => {
      isDisposed = true;
      clearModeLoadingTimer();
      if (map) {
        map.off('complete', handleComplete);
        releaseModeResources(map, modeResourcesRef.current);
        modeResourcesRef.current = null;
        map.destroy();
      }
      mapRef.current = null;
      amapRef.current = null;
    };
  }, [clearModeLoadingTimer, retryVersion]);

  useEffect(() => {
    const map = mapRef.current;
    const AMap = amapRef.current;
    if (!mapReady || !map || !AMap) return;

    clearModeLoadingTimer();
    setErrorState(null);
    setIsLoading(true);

    try {
      const definition = MAP_MODE_DEFINITIONS[mapMode];
      const previousResources = modeResourcesRef.current;
      const nextResources = createModeResources(AMap, mapMode);

      map.setMapStyle(definition.mapStyle);
      map.setFeatures(definition.features);
      map.setLayers(nextResources.layers);
      if (nextResources.overlays.length > 0) map.add(nextResources.overlays);
      modeResourcesRef.current = nextResources;
      releaseModeResources(map, previousResources);
      resetView(0);
      map.resize();

      modeLoadingTimerRef.current = globalThis.setTimeout(() => {
        setIsLoading(false);
      }, 1_200);
    } catch {
      globalThis.queueMicrotask(() => {
        setErrorState({ message: '当前地图图层初始化失败，请重新加载高德地图。' });
        setIsLoading(false);
      });
    }

    return clearModeLoadingTimer;
  }, [clearModeLoadingTimer, mapMode, mapReady, resetView]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === shellRef.current);
      globalThis.setTimeout(() => mapRef.current?.resize(), 0);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <section
      ref={shellRef}
      className={classNames(
        'relative isolate w-full overflow-hidden rounded-18px border border-[rgba(148,163,184,0.22)] bg-[#07111f] text-[#f8fafc] shadow-[0_24px_70px_rgba(2,8,23,0.28)] [&_.amap-logo]:opacity-85 [&_.amap-mcode]:opacity-75',
        {
          'h-screen w-screen rounded-none border-0': isFullscreen,
        },
      )}
      aria-label='高德多地图展示'
    >
      <div
        ref={mapContainerRef}
        className={classNames(
          'h-[min(72vh,720px)] min-h-560px w-full max-md:h-[68vh] max-md:min-h-500px',
          {
            '[height:100vh!important] min-h-0': isFullscreen,
          },
        )}
      />

      <div className='pointer-events-none absolute left-18px top-18px z-2 flex max-w-360px flex-col gap-7px rounded-12px border border-[rgba(255,255,255,0.16)] bg-[rgba(2,8,23,0.8)] px-13px py-12px shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-[14px] max-md:left-12px max-md:right-12px max-md:top-68px max-md:max-w-none'>
        <strong className='block text-13px text-[#f8fafc] leading-19px'>
          {activeDefinition.label}
        </strong>
        <span className='block text-11px text-[#a5b4c7] leading-17px'>
          {activeDefinition.summary}
        </span>
      </div>

      <div className='absolute right-18px top-18px z-3 flex items-center gap-8px max-md:left-12px max-md:right-12px max-md:top-12px'>
        <label className='flex h-42px min-w-250px items-center gap-8px rounded-12px border border-[rgba(255,255,255,0.16)] bg-[rgba(2,8,23,0.8)] px-10px pl-12px shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-[14px] focus-within:border-[rgba(56,189,248,0.72)] max-md:min-w-0 max-md:flex-1'>
          <span className='text-12px text-[#94a3b8] max-md:hidden'>地图</span>
          <select
            className='min-w-0 flex-1 cursor-pointer border-0 bg-transparent text-12px text-[#f8fafc] outline-none [&_option]:bg-[#0f172a] [&_option]:text-[#f8fafc]'
            value={mapMode}
            onChange={(event) => setMapMode(event.target.value as MapMode)}
            aria-label='选择高德地图展示模式'
          >
            {MAP_MODE_GROUPS.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.modes.map((mode) => (
                  <option key={mode} value={mode}>
                    {MAP_MODE_DEFINITIONS[mode].label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <button
          className={TOOL_BUTTON_CLASS}
          type='button'
          onClick={() => resetView()}
          aria-label='复位地图视角'
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
          className='pointer-events-none absolute left-1/2 top-1/2 z-4 flex max-w-[calc(100%-32px)] -translate-x-1/2 -translate-y-1/2 items-center gap-10px rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(2,8,23,0.84)] px-15px py-11px text-center text-13px text-[#e2e8f0] shadow-[0_12px_36px_rgba(0,0,0,0.24)] backdrop-blur-[14px]'
          role='status'
        >
          <span
            className='h-14px w-14px shrink-0 animate-spin rounded-full border-2 border-[rgba(148,163,184,0.34)] border-t-[#38bdf8] motion-reduce:animate-[spin_1.8s_linear_infinite]'
            aria-hidden='true'
          />
          正在加载{activeDefinition.label}…
        </div>
      )}

      {errorState && (
        <div
          className='absolute left-1/2 top-1/2 z-5 flex max-w-460px -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-11px rounded-12px border border-[rgba(248,113,113,0.38)] bg-[rgba(2,8,23,0.9)] px-18px py-15px text-center text-13px text-[#fecaca] shadow-[0_12px_36px_rgba(0,0,0,0.26)] backdrop-blur-[14px] max-md:w-[calc(100%-32px)]'
          role='alert'
        >
          <span>{errorState.message}</span>
          <button
            className='flex cursor-pointer items-center gap-6px rounded-8px border border-[rgba(248,113,113,0.42)] bg-[rgba(127,29,29,0.42)] px-12px py-7px text-12px text-[#fee2e2] transition-colors hover:bg-[rgba(153,27,27,0.58)] focus-visible:outline-2 focus-visible:outline-[#fca5a5]'
            type='button'
            onClick={retryLoad}
          >
            <ReloadOutlined />
            重新加载地图
          </button>
        </div>
      )}

      <div className='pointer-events-none absolute bottom-28px left-1/2 z-2 -translate-x-1/2 whitespace-nowrap rounded-9px border border-[rgba(255,255,255,0.12)] bg-[rgba(2,8,23,0.76)] px-10px py-7px text-11px text-[#cbd5e1] backdrop-blur-[12px] max-md:bottom-34px max-md:max-w-[calc(100%-24px)] max-md:whitespace-normal max-md:text-center'>
        拖拽移动 · 滚轮或双指缩放 · 3D 模式支持旋转与俯仰
      </div>
    </section>
  );
};

export default AMapShowcase;
