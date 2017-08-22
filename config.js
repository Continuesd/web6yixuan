//该文件会对server 和webpack进行开发环境和生成环境进行全局配置.
var  Config = {
    pro:{
        env: {
            //生成环境
            NODE_ENV: "production"
        },
        webpackTarget:"dist_pro"
    },
    dev:{
        env: {
            //开发环境
            NODE_ENV: "development"
        },
        webpackTarget:"dist_dev"
    }
};

module.exports = Config;