import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by cl on 2017/7/5.
 */
@Pipe({name: "time"})
export class TimeRebuild implements PipeTransform {
    //2017-07-04 20:46:41
    transform(value: any, ...args: any[]) {
        if (!value) {
            return value
        }
        let start = new Date(value+"".replace(/-/g, '/')).getTime();
        let current = new Date().getTime();
        let diff = current - start;
        //小于60毫秒显示刚刚
        if (diff < 60 * 1000) {
            return "刚刚"
        } else if (diff < 90 * 1000) {
            return "1分钟前"
        } else if (diff < 3600 * 1000) {
            return Math.floor(diff / (60 * 1000)) + "分钟前";
        } else if (diff < (3600 + 1800) * 1000) {
            return "1小时前"
        } else if (diff < (24 * 3600 * 1000)) {
            return Math.floor(diff / (3600 * 1000)) + "小时前"
        } else if (diff < (24 * 2 * 3600 * 1000)) {
            return "昨天"
        } else if (diff < (24 * 3 * 3600 * 1000)) {
            return Math.floor(diff / (24 * 3600 * 1000)) + "天前"
        } else {
            var t = value.split(" ")[1].split(":")[0] + ":" + value.split(" ")[1].split(":")[1]
            return value.split(" ")[0] + " " + t;
        }
    }

}