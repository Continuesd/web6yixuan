import './polyfills';
import {enableProdMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
enableProdMode();
import {HttpModule} from '@angular/http';
import {FormsModule,} from '@angular/forms';
//路由的核心模块
import {RouterModule} from '@angular/router';
import routerConfig from './router/router-config';
import {HttpHelper} from "./common/net/HttpHelper";
import {HttpUrls} from "./common/net/HttpUrls";


const routing = RouterModule.forRoot(routerConfig.config);

@NgModule({
    //模块组件需要其他依赖模块的类
    imports: [BrowserModule, HttpModule, FormsModule,routing],
    //声明类,pipe也需要声明
    declarations: [],
    //提供导入的类,并不渲染页面.
    providers: [HttpHelper, HttpUrls],
    //外部可见的内容,相当于java public的作用 可以直接作用在html中如pipe.
    exports: [],
    /*	providers: [{provide: APP_BASE_HREF, useValue : '/' }],*/
    //标识出的主视图(被称为根组件)
    bootstrap: []
})

export class AppModule {
}