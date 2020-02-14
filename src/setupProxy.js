const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/recruitment/**",
    proxy({
      target: "https://api.gigacover.com",
      changeOrigin: true
    })
  );
};
