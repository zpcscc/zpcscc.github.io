import { AMAP_SECURITY_JS_CODE, AMAP_SERVICE_PROXY_PATH, AMAP_WEB_KEY } from '@site/config/amap';

declare const process: {
  env: {
    NODE_ENV?: string;
  };
};

export type AMapCenter = [number, number];

export type AMapLayer = {
  add?: (layers: AMapLayer | AMapLayer[]) => void;
  destroy?: () => void;
  setStyles?: (styles: Record<string, unknown>) => void;
};

export type AMapMap = {
  add: (layers: AMapLayer | AMapLayer[]) => void;
  addControl: (control: unknown) => void;
  destroy: () => void;
  off: (eventName: string, listener: () => void) => void;
  on: (eventName: string, listener: () => void) => void;
  remove: (layers: AMapLayer | AMapLayer[]) => void;
  resize: () => void;
  setFeatures: (features: string[]) => void;
  setLayers: (layers: AMapLayer[]) => void;
  setMapStyle: (mapStyle: string) => void;
  setPitch: (pitch: number) => void;
  setRotation: (rotation: number) => void;
  setZoomAndCenter: (
    zoom: number,
    center: AMapCenter,
    immediately?: boolean,
    duration?: number,
  ) => void;
};

type AMapLayerConstructor = new (options?: Record<string, unknown>) => AMapLayer;

type AMapTileLayerConstructor = AMapLayerConstructor & {
  RoadNet: AMapLayerConstructor;
  Satellite: AMapLayerConstructor;
  Traffic: AMapLayerConstructor;
};

export type AMapNamespace = {
  Buildings: AMapLayerConstructor;
  ControlBar: new (options?: Record<string, unknown>) => unknown;
  DistrictLayer: {
    Country: AMapLayerConstructor;
    Province: AMapLayerConstructor;
    World: AMapLayerConstructor;
  };
  LabelMarker: AMapLayerConstructor;
  LabelsLayer: AMapLayerConstructor;
  Map: new (container: HTMLElement, options: Record<string, unknown>) => AMapMap;
  Scale: new (options?: Record<string, unknown>) => unknown;
  TileLayer: AMapTileLayerConstructor;
  ToolBar: new (options?: Record<string, unknown>) => unknown;
  createDefaultLayer: (options?: Record<string, unknown>) => AMapLayer;
  plugin: (plugins: string[], callback: () => void) => void;
};

type AMapRuntimeWindow = Window & {
  AMap?: AMapNamespace;
  _AMapSecurityConfig?:
    | {
        securityJsCode: string;
      }
    | {
        serviceHost: string;
      };
};

const AMAP_SCRIPT_ID = 'zpcscc-amap-jsapi-v2';
const AMAP_CALLBACK_NAME = '__zpcsccAMapJsApiReady';
const AMAP_LOAD_TIMEOUT = 20_000;
const AMAP_PLUGINS = ['AMap.ControlBar', 'AMap.DistrictLayer', 'AMap.Scale', 'AMap.ToolBar'];
const UNAUTHORIZED_LOCAL_HOSTS = new Set(['localhost', '[::1]']);

let amapLoadPromise: Promise<AMapNamespace> | null = null;

const loadAMapPlugins = (AMap: AMapNamespace) =>
  new Promise<AMapNamespace>((resolve) => {
    AMap.plugin(AMAP_PLUGINS, () => resolve(AMap));
  });

export const loadAMapJsApi = () => {
  const runtimeWindow = globalThis as unknown as AMapRuntimeWindow & Record<string, unknown>;
  const { hostname, port, protocol } = globalThis.location;
  if (UNAUTHORIZED_LOCAL_HOSTS.has(hostname)) {
    const authorizedUrl = `${protocol}//127.0.0.1${port ? `:${port}` : ''}${globalThis.location.pathname}${globalThis.location.search}${globalThis.location.hash}`;
    return Promise.reject(new Error(`当前本地地址未加入高德白名单，请改用 ${authorizedUrl}`));
  }

  const isLocalDevelopment = process.env.NODE_ENV === 'development' && hostname === '127.0.0.1';
  if (runtimeWindow.AMap) return loadAMapPlugins(runtimeWindow.AMap);
  if (amapLoadPromise) return amapLoadPromise;

  amapLoadPromise = new Promise<AMapNamespace>((resolve, reject) => {
    document.querySelector(`#${AMAP_SCRIPT_ID}`)?.remove();
    runtimeWindow._AMapSecurityConfig = isLocalDevelopment
      ? { serviceHost: `${globalThis.location.origin}${AMAP_SERVICE_PROXY_PATH}` }
      : { securityJsCode: AMAP_SECURITY_JS_CODE };

    const script = document.createElement('script');
    let isSettled = false;

    const handleScriptError = () => rejectLoad('高德 JSAPI 网络请求失败。');

    const cleanUp = () => {
      globalThis.clearTimeout(timeoutID);
      delete runtimeWindow[AMAP_CALLBACK_NAME];
      script.removeEventListener('error', handleScriptError);
    };

    const rejectLoad = (message: string) => {
      if (isSettled) return;
      isSettled = true;
      cleanUp();
      script.remove();
      reject(new Error(message));
    };

    runtimeWindow[AMAP_CALLBACK_NAME] = () => {
      if (isSettled) return;
      const AMap = runtimeWindow.AMap;
      if (!AMap) {
        rejectLoad('高德 JSAPI 已响应，但未找到 AMap 全局对象。');
        return;
      }

      loadAMapPlugins(AMap)
        .then((loadedAMap) => {
          if (isSettled) return;
          isSettled = true;
          cleanUp();
          resolve(loadedAMap);
        })
        .catch(() => rejectLoad('高德地图扩展插件加载失败。'));
    };

    const timeoutID = globalThis.setTimeout(() => {
      rejectLoad('高德 JSAPI 加载超时。');
    }, AMAP_LOAD_TIMEOUT);

    script.id = AMAP_SCRIPT_ID;
    script.async = true;
    script.charset = 'utf8';
    const query = new URLSearchParams({
      callback: AMAP_CALLBACK_NAME,
      key: AMAP_WEB_KEY,
      plugin: AMAP_PLUGINS.join(','),
      v: '2.0',
    });
    script.src = `https://webapi.amap.com/maps?${query}`;
    script.addEventListener('error', handleScriptError);
    document.head.append(script);
  }).catch((error) => {
    amapLoadPromise = null;
    throw error;
  });

  return amapLoadPromise;
};
