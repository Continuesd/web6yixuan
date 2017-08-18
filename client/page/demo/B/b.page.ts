import {OnInit, Component} from "@angular/core";

@Component({
    selector: "b",
    template: require("./b.html"),
    styles: [require("./b.css")],
})

export class BPage implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}