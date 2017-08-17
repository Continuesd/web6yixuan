var express = require('express');//后台服务器框架
var morgan = require('morgan');
var bodyParser = require('body-parser');

var path = require("path");//node路径类

var proxy = require("http-proxy-middleware");//服务器代理中间件

var openBrowser = require('child_process');//调用node平台,用来自动打开浏览器
var app = express();//获取express对象
app.set('port', (process.env.PORT || 8080));
//代理服务器进行配置

//调试变量
var loc = "app_detail";

var options = {
    target: "http://www.niuwan.net/",
    changeOrigin: true,
}

var filter = function (pathname, req) {
    if(path.extname(path.resolve(__dirname + pathname))){
        return false;
    }else{
        return true;
    }
};

const disProxy = proxy(filter,options);

app.use('/', express.static(__dirname + '/../'+loc));
app.use('/scripts', express.static(__dirname + '/../node_modules'));
app.use(disProxy);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(function (req, res, next) {
    if (path.extname(req.path).length > 0) {
       next();
    }
    else {

        res.sendFile(path.resolve(__dirname + '/../'+loc+'/index.html'));
    }
});


app.listen(app.get('port'), function () {

});

/*openBrowser.exec("start http://localhost:"+app.get('port'));*/


