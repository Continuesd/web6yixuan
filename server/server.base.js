var express = require('express');//后台服务器框架
var morgan = require('morgan');
var bodyParser = require('body-parser');

var path = require("path");//node路径类

var proxy = require("http-proxy-middleware");//服务器代理中间件

var openBrowser = require('child_process');//调用node平台,用来自动打开浏览器
var app = express();//获取express对象


app.set('port', (process.env.PORT || 8080));
//代理服务器进行配置



var options = {
    target: "http://www.6yixuan.com/",
    changeOrigin: true,
}

var filter = function (pathname, req) {
    if (path.extname(path.resolve(__dirname + pathname))) {
        return false;
    } else {
        return true;
    }
};

const disProxy = proxy(filter, options);

//后端代理设置
/*app.use(disProxy);*/

app.use('/scripts', express.static(__dirname + '/../node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));


app.listen(app.get('port'), function () {

});

module.exports = {
    app:app,
    express:express

}

//openBrowser.exec("start http://localhost:"+app.get('port'));


