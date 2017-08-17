
/*const routes: Routes = [
 { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 { path: 'dashboard',  component: DashboardComponent },
 { path: 'detail/:id', component: HeroDetailComponent },
 { path: 'heroes',     component: HeroesComponent }
 ];*/
export default {
    config: [
        /* {
         path: '',
         redirectTo: '',
         pathMatch: 'full'
         }*/
        //{path: 'topic', component: TopicPageContent},
        /*  {
         path: 'topic',name:"topic", component: TopicPageContent,
         children: [{path: '',component: TopicPageContent},
         ]
         },*/



        // {path: 'topic:topicNo',component: TopicPageDetail},
        //  { path: "topic/:topicNo", loadChildren: () => require('es6-promise!./client/pages/topic/topic-detail/TopicPageDetail.module.ts')('TopicPageDetailModule')},
        /*   {
         path: "topic/:topicNo", loadChildren: () => new Promise(function (resolve) {

         resolve(require('./path/to/module')['ClassName']);


         })
         },*/
        //  {path: 'topic/:topicNo',loadChildren:'client/pages/topic/topic-detail/TopicPageDetail.module#TopicPageDetailModule'},

    ]
}
