const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://fandom-k-api.vercel.app',
      changeOrigin: true,
      pathRewrite: {'^/api': ''},
    }),
  );
};
