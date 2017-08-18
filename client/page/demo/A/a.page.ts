import {OnInit, Component} from "@angular/core";

@Component({
    selector: "a",
    template: require("./a.html"),
    styles: [require("./a.css")],
})

export class APage implements OnInit {
    ngOnInit(): void {

    }
}