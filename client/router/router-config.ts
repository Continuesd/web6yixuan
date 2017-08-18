/*const routes: Routes = [
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'dashboard',  component: DashboardComponent },
 { path: 'detail/:id', component: HeroDetailComponent },
 { path: 'heroes',     component: HeroesComponent }
 ];*/

import {APage} from "../page/demo/A/a.page";
import {IndexPage} from "../page/index/index.page";
import {Error404Page} from "../page/error/404/error_404";
import {BPage} from "../page/demo/B/b.page";
import {HelloworldPage} from "../page/hello/helloworld.page";

export default {
    config: [
        // empty path匹配各级路由的默认路径。 它还支持在不扩展URL路径的前提下添加路由。
        {path: "", component: HelloworldPage},
        {path: "b", component: BPage},
        {
            path: 'a', component: APage,
            children: [{path: "b", component: BPage}]
        },
        // **代表该路由是一个通配符路径。如果当前URL无法匹配上我们配置过的任何一个路由中的路径，路由器就会匹配上这一个。
        {path: '**', component: Error404Page, useAsDefault: true}]
}
