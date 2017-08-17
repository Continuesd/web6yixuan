import {Http, RequestMethod, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import {Injectable} from "@angular/core";

/**
 *
 */
@Injectable()
export class HttpHelper {
    //已经发起网络请求的时候,暂停请求网络flag
    pauseRequestFlag: string = null;
    resBaseCore: ResBaseCore;


    constructor(public http: Http) {

    }

    public  post(url: string, params: object = {}, callback: any = null, errorCallback: any = null, forbid: boolean = true) {
        console.log(params);
       //$.cookie('JSESSIONID', '315A9ECE1C39D546D76F4DCF96669660');
        if (this.pauseRequestFlag == url) {
            return;
        }
        this.start();
        this.pauseRequestFlag = url;
        this.http.post(url, this.getUrlSearchParams(params), this.getRequestOptions()).subscribe((res) => {

            this.resBaseCore = res.json();
            console.log(this.resBaseCore)
            res["_body"] = JSON.stringify(this.resBaseCore.values);
            if (parseInt(this.resBaseCore.status) == 10000) {
                console.log("获取到的最终数据<" + res);
                if (callback) {
                    if (callback(res)) {
                        //layer.msg(this.resBaseCore.message);
                    }
                    ;
                }
            } /*else if (parseInt(this.resBaseCore.status) == 11004) {
             //TODO页面失效,跳转到登入页面中,请先登入再进行操作

             if (forbid) {
             console.log("跳转到登入页面中");
             layer.msg(this.resBaseCore.message);
             }

             } */ else {
                let r = true;
                if (errorCallback) {
                    r = errorCallback(this.resBaseCore.message);
                }
                //错误的弹窗
                if (r) {

                }
                console.log(this.resBaseCore.message + " " + this.resBaseCore.status)
            }
            this.end();
            this.pauseRequestFlag = null;
        }, (error) => {
            this.end()
            this.pauseRequestFlag = null;
            console.log(error)
        });
    }

    public  get(url: string, params: object = {}, callback: any = null) {
        console.log(url + "?" + this.getUrlSearchParams(params));
        /*res.json*/
        if (this.pauseRequestFlag === url) {
            return;
        }
        this.start();
        this.http.get(url + "?" + this.getUrlSearchParams(params), this.getRequestOptions()).subscribe(res => {
            if (callback) {
                callback(res);
            }
            this.end()
            this.pauseRequestFlag = null;

        }, error => {
            this.end()
            this.pauseRequestFlag = null;
        });
    }


    start() {

    }

    end() {

    }

    getRequestOptions() {
        var headers = new Headers();
        //设置该头参数保存在RequestPayload
        /* headers.append('Content-Type', 'application/json');*/
        //设置该头参数保存在Form Data。
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
       //headers.append('JSESSIONID', '315A9ECE1C39D546D76F4DCF96669660');
        var requestoptions = new RequestOptions({
            headers: headers,
            //withCredentials: true // optional when using windows auth
        })
        return requestoptions;
    }

    getUrlSearchParams(params: any) {
        let urlSearchParams = new URLSearchParams();
        for (let key in params) {
            urlSearchParams.append(key, params[key])
        }
        return urlSearchParams.toString();
    }
}

class ResBaseCore {
    /*  "status": 10000,
     "message": "SUCCESS",
     "values":{}    */
    status: string;
    message: string;
    values: string
}