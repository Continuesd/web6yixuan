var serverBase = require("./server.base.js");
var app = serverBase.app;
var express = serverBase.express;
var path = require("path");//node路径类
var Config = require("../config.js");
//调试变量
var target = Config.dev.webpackTarget;
app.use('/', express.static(__dirname + '/../' + target));
app.use(function (req, res, next) {
    if (path.extname(req.path).length > 0) {
        next();
    }
    else {
        res.sendFile(path.resolve(__dirname + '/../' + target + '/index.html'));
    }
});
