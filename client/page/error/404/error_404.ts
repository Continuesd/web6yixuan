import {OnInit, Component} from "@angular/core";

@Component({
    selector:"error_404",
    template:require("./error_404.html"),
    styles:[require("./error_404.css")]
})

export class Error404Page implements OnInit {
    ngOnInit(): void {

    }
}