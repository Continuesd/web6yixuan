import {OnInit, Component, OnChanges, SimpleChanges, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "demo-b",
    template: require("./b.html"),
    styles: [require("./b.css")],
    inputs: ["Aarg"]
})

export class BPage implements OnInit,OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.Aarg);
    }

    private Aarg;

    //给父类传递一个数据
    private showBStr = "O(∩_∩)O哈哈~B传递给A的数据";

    @Output() BtoAEvent = new EventEmitter<string>();
    ngOnInit(): void {
        this.BtoAEvent.emit(this.showBStr);
    }
}