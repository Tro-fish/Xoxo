const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        createProxyMiddleware('/pay_result', {
            target: process.env.REACT_APP_REMOTE_HOSTNAME + '/pay_result',
            changeOrigin: true,
        })
    );
};