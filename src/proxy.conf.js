// {
//     "/api": {
//         "target": "https://localhost:5001/api",
//         "secure": false,
//         "logLevel": "debug",
//         "changeOrgin": true,
//         "pathRewrite": {"^/api" : ""}
//     }
// }

const PROXY_CONFIG = {
    context: ['/api'],
    target: '',
    secure: false,
    loglevel: 'debug',
    pathRewrite: {'^/api': ''}
}

module.exports = PROXY_CONFIG;