import { Buffer } from 'node:buffer';
import https from 'node:https';
import { AMAP_SECURITY_JS_CODE, AMAP_SERVICE_PROXY_PATH } from '../config/amap';

const proxyAMapRequest = (req: any, res: any, next: any) => {
  const requestUrl = req.url as string | undefined;
  const isServiceRequest = requestUrl?.startsWith(`${AMAP_SERVICE_PROXY_PATH}/`);
  if (!isServiceRequest) return next();

  const targetUrl = new URL(requestUrl || '/', 'http://localhost');
  const targetPath = targetUrl.pathname.replace(AMAP_SERVICE_PROXY_PATH, '');

  targetUrl.searchParams.set('jscode', AMAP_SECURITY_JS_CODE);

  const isMapStyleRequest = targetPath.startsWith('/v4/map/styles');
  const hostname = isMapStyleRequest ? 'webapi.amap.com' : 'restapi.amap.com';
  const options: https.RequestOptions = {
    hostname,
    port: 443,
    path: `${targetPath}${targetUrl.search}`,
    method: req.method,
    headers: {
      accept: req.headers.accept || '*/*',
      'accept-language': req.headers['accept-language'] || 'zh-CN,zh;q=0.9',
      'user-agent': req.headers['user-agent'] || 'Mozilla/5.0',
    },
  };

  const proxyReq = https.request(options, (proxyRes) => {
    const headers = {
      ...Object.fromEntries(
        Object.entries(proxyRes.headers).filter(([name]) => name !== 'content-length'),
      ),
      'access-control-allow-origin': '*',
    };
    res.writeHead(proxyRes.statusCode || 502, headers);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', (error) => {
    console.error('[amap-proxy] Error:', error.message);
    if (!res.headersSent) {
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: `AMap proxy error: ${error.message}` }));
    }
  });
  req.pipe(proxyReq);
};

/**
 * 开发服务器代理插件
 * 通过 setupMiddlewares 添加自定义代理中间件，确保 SSE 流式响应不被缓冲
 */
export default function proxyPlugin(): any {
  return {
    name: 'mimo-proxy-plugin',
    configureWebpack(): any {
      return {
        devServer: {
          setupMiddlewares(middlewares: any[]) {
            // 在最前面插入代理中间件
            middlewares.unshift((req: any, res: any, next: any) => {
              if (req.url?.startsWith(`${AMAP_SERVICE_PROXY_PATH}/`)) {
                return proxyAMapRequest(req, res, next);
              }

              if (!req.url?.startsWith('/api/mimo/')) {
                return next();
              }

              const targetPath = req.url.replace('/api/mimo', '');
              const chunks: Buffer[] = [];

              req.on('data', (chunk: Buffer) => chunks.push(chunk));
              req.on('end', () => {
                const body = Buffer.concat(chunks);

                const options: https.RequestOptions = {
                  hostname: 'token-plan-cn.xiaomimimo.com',
                  port: 443,
                  path: targetPath,
                  method: req.method,
                  headers: {
                    'content-type': req.headers['content-type'] || 'application/json',
                    authorization: req.headers['authorization'] || '',
                  },
                };

                const proxyReq = https.request(options, (proxyRes) => {
                  const headers = {
                    ...Object.fromEntries(
                      Object.entries(proxyRes.headers).filter(
                        ([name]) => name !== 'content-length',
                      ),
                    ),
                    'access-control-allow-origin': '*',
                  };

                  res.writeHead(proxyRes.statusCode || 502, headers);
                  proxyRes.pipe(res);
                });

                proxyReq.on('error', (err) => {
                  console.error('[mimo-proxy] Error:', err.message);
                  if (!res.headersSent) {
                    res.writeHead(502, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: `Proxy error: ${err.message}` }));
                  }
                });

                if (body.length > 0) proxyReq.write(body);
                proxyReq.end();
              });
            });

            return middlewares;
          },
        },
      };
    },
  };
}
