import {Component, OnInit} from "@angular/core";

@Component({
    selector: "index",
    template: require("./index.html"),
    styles: [require("./index.css")],
})

export class IndexPage implements OnInit {
    mHelloWold: string;

    constructor() {
        this.mHelloWold = "HelloWorld";
    }

    ngOnInit(): void {

    }
}