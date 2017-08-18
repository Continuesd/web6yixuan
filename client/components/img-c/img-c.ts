/**
 *我这里说一下,我理解的components内容,应该都是可以被其他页面进行复用的,但是page里面的页面是独立页面.
 * 所以componetns数据交互要小心,高内聚低耦合
 *
 */

import {OnInit, Component} from "@angular/core";

@Component({
    selector:"img-c",
    template:require("./img.html"),
    styles:[require("./img.css")]
})

export class ImgC implements OnInit {
    ngOnInit(): void {

    }
}