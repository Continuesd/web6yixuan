import {OnInit, Component, Input} from "@angular/core";

@Component({
    selector: "demo-a",
    template: require("./a.html"),
    styles: [require("./a.css")],
})

export class APage implements OnInit {
    //1.创建变量str  字符串类型.string.该字符串可以直接在html中直接显示.
    showStr: string = '我是Apage的字符串变量';
    //2.双向绑定字符串变量.
    showEnterStr: string = "我是Apage的input双向绑定的字符串变量";

    //3.使用(click)=""调用该方法
    confirm(): void {
        alert("点击了btn")
    }

    //4.当chunkFlag为true的时候,背景颜色为黄色,为flase的时候为红色. [ngClass]通过变量选择不同的类型进行加载.
    chunkFlag: boolean = true;


    //初始一个对象,用来给ngfor循环进行遍历
    people: Array<Object> = [{name: '小明', age: '34', parents: {father: "小明他爸", mother: "小明他妈"}}, {
        name: '小红',
        age: '12',
        parents: {father: "小红他爸", mother: "小红他妈"}
    }]

    ngOnInit(): void {

    }

    private btoAstr: string;

    BtoA(value) {
        this.btoAstr = value;
    }
}