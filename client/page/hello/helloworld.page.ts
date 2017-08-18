import {Component, OnInit} from "@angular/core";

@Component({
    selector: "helloword",
    template: require("./helloword.html"),
    styles: [require("./helloword.css")],
})

export class HelloworldPage implements OnInit {
    mHelloWold: string;

    constructor() {
        this.mHelloWold = "HelloWorld";
    }

    ngOnInit(): void {

    }
}