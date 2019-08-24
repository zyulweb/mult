module.exports = {
    publicPath : './',
    devServer: {   //开发服务器
        open: true,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//设置代理 配置跨域
            '/doubanapi': {
                target: 'http://api.douban.com/v2/',
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/doubanapi': ''//请求的时候使用这个api就可以
                }
            },
            '/baiduapi': {
                target: 'http://tingapi.ting.baidu.com/v1/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/baiduapi': ''
                }
            },
            
        }
    }
}
