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
    /*    "http://www.niuwan.net/"*/
    target: "http://www.niuwan.net/",
    changeOrigin: true,
    // ws: true,                         // proxy websockets

    /*  router: {
     // when request.headers.host == 'dev.localhost:3000',
     // override target 'http://www.example.org' to 'http://localhost:8000'
     'http://localhost:8080/topic' : 'http://localhost:8000'
     }*/
}
/*  console.log(__dirname + pathname);
  console.log(path.resolve(__dirname + pathname));
  console.log(path.extname(path.resolve(__dirname + pathname)))
  console.log(!path.extname(path.resolve(__dirname + pathname)))*/
var filter = function (pathname, req) {
    if(path.extname(path.resolve(__dirname + pathname))){
        return false;
    }else{
        return true;
    }
};

/*if (path.extname(path.resolve(__dirname + pathname)).length > 0) {
    return false;
} else {
    var local = path.extname(path.resolve(__dirname + pathname))
    console.log("a"+local)
    if (local == ".js" || local == ".html" || local == ".css") {
        return false;
    }
    return true;
}

return pathname.match('^/account')|| pathname.match('^/wangEditor')|| pathname.match('^/image')||
 pathname.match('^/community')|| pathname.match('^/article');*/
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
        // redirect all html requests to `index.html`
        res.sendFile(path.resolve(__dirname + '/../'+loc+'/index.html'));
    }
});

// Render your site
/*app.get('/index.htm', function (req, res) {
 res.sendFile(path.resolve(__dirname + '/../app_detail/index.html'));
 });*/


app.listen(app.get('port'), function () {
   // console.log('localhost:' + app.get('port'));
});

/*openBrowser.exec("start http://localhost:"+app.get('port'));*/


