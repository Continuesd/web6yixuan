
#### package.json


1. 项目名称:6艺轩
2. 版本号:第一版
3. 许可协议:MIT许可证 >被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软件及软件的副本。
被授权人可根据程序的需要修改授权条款为适当的内容。
```
    "name": "6yixuan",
    "version": "1.0.0",
    "license": "MIT",
```
安装完环境,直接输入该命令 运行开发页面.
cnpm run s

在浏览器中输入localhost:8080浏览页面


```
  "scripts": {
      /** 开发环境 */
      "b": "webpack --progress --config webpack/webpack.dev.config.js",
      "s": "concurrently \"webpack --watch --colors --config webpack/webpack.dev.config.js\" \"nodemon server/server.dev.js\"",
      /** 生产环境 */
      "b:prod": "webpack -p --progress --config webpack/webpack.pro.config.js",
      "s:prod": "concurrently \"webpack --watch --colors --config webpack/webpack.pro.config.js\" \"nodemon server/server.pro.js\""
    },
```
    "dependencies": {
      "@angular/animations": "^4.3.2",
      "@angular/common": "^4.3.2",
      "@angular/compiler": "^4.3.2",
      "@angular/compiler-cli": "^4.3.2",
      "@angular/core": "^4.3.2",
      "@angular/forms": "^4.3.2",
      "@angular/http": "^4.3.2",
      "@angular/platform-browser": "^4.3.2",
      "@angular/platform-browser-dynamic": "^4.3.2",
      "@angular/platform-server": "^4.3.2",
      "@angular/router": "^4.3.2",
      "body-parser": "^1.15.2",
      "bootstrap": "^3.3.6",
      "core-js": "^2.4.1",
      "express": "^4.14.0",
      "font-awesome": "^4.6.3",
      "http-proxy-middleware": "^0.17.4",
      "morgan": "^1.7.0",
      "reflect-metadata": "^0.1.3",
      "rxjs": "^5.4.2",
      "systemjs": "0.19.27",
      "zone.js": "^0.8.16"
    },
    "devDependencies": {
         "autoprefixer": "^7.1.2",
         "babel-preset-es2015": "^6.24.1",
         "concurrently": "^2.2.0",
         "css-loader": "^0.28.4",
         "cssnano": "^3.10.0",
         "file-loader": "^0.11.2",
         "glob": "^7.1.2",
         "html-webpack-plugin": "^2.22.0",
         "html-withimg-loader": "^0.1.16", //html中src图片地址引导插件
         "nodemon": "^1.10.2",
         "postcss-cssnext": "^3.0.2",
         "postcss-import": "^10.0.0",
         "postcss-loader": "^2.0.6",
         "raw-loader": "0.5.1",
         "style-loader": "^0.18.2",
         "ts-loader": "^2.3.2",
         "typescript": "^2.4.2",
         "url-loader": "^0.5.9",
         "webpack": "^3.4.1",//预处理打包工具
         "webpack-merge": "^4.1.0" //用来合并webpack config的插件
    }

```