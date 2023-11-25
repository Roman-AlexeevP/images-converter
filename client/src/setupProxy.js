// const proxy = require("http-proxy-middleware");
// module.exports = function (app) {
//   app.use(proxy("/", { // https://github.com/chimurai/http-proxy-middleware
//     target: "http://localhost:3000/",
//     secure: false
//   }));
// };
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:3000/',
      changeOrigin: true,
    })
  );
};