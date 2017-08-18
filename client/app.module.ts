import './polyfills';
import {enableProdMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
enableProdMode();
import {HttpModule} from '@angular/http';
import {FormsModule,} from '@angular/forms';
//路由的核心模块
import {RouterModule} from '@angular/router';
import routerConfig from './router/router-config';
import {APP_BASE_HREF} from '@angular/common';
//网络请求对象
import {HttpHelper} from "./common/net/HttpHelper";
import {HttpUrls} from "./common/net/HttpUrls";
//自定义渲染页面
import {IndexPage} from "./page/index/index.page";
import {BPage} from "./page/demo/B/b.page";
import {APage} from "./page/demo/A/a.page";
import {Error404Page} from "./page/error/404/error_404";
import {HelloworldPage} from "./page/hello/helloworld.page";
import {ImgC} from "./components/img-c/img-c";


const RoutingModule = RouterModule.forRoot(routerConfig.config);

@NgModule({
    //模块组件需要其他依赖模块的类
    imports: [BrowserModule, HttpModule, FormsModule,RoutingModule],
    //声明类,pipe也需要声明
    declarations: [IndexPage,APage,BPage,Error404Page,HelloworldPage,ImgC],
    //提供导入的类,并不渲染页面.,{provide: APP_BASE_HREF, useValue : '/' }
    providers: [HttpHelper, HttpUrls],
    //外部可见的内容,相当于java public的作用 可以直接作用在html中如pipe.
    exports: [],
    //标识出的主视图(被称为根组件)
    bootstrap: [IndexPage]
})

export class AppModule {
}