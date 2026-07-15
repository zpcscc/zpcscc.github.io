import https from 'https';

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
                    'authorization': req.headers['authorization'] || '',
                  },
                };

                const proxyReq = https.request(options, (proxyRes) => {
                  const headers = { ...proxyRes.headers };
                  headers['access-control-allow-origin'] = '*';
                  delete headers['content-length'];

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
