'use strict'
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax
import size from "lodash/size";
import each from "lodash/each";
import assignIn from "lodash/assignIn";

export function fetchPosts( url, param, type = "POST", headers = {}, repType = "json") {

    //debugger;
    //param.userId = 30000654;
    if (type.toLocaleUpperCase() === "GET" && size(param) > 0 && url.indexOf("?")<0) {
        url += "?" + toExcString(param)
    }
    headers = assignIn({}, {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        "Response-Content-Type":'application/json'
    });
   // debugger;

    return fetch(url, {
            method: type.toLocaleUpperCase(),
            headers: headers,
            credentials: 'same-origin',
            //credentials: 'same-origin',
            body: type.toLocaleUpperCase() === "GET" ? undefined : (repType == "json" ? JSON.stringify(param) : param)
        })
        .then((res) => {
            //debugger;
            //console.log(res.status);
            return res.json();
        })
        .then((data) => {
            //console.log('收到data', data);
            //dispatch(fetchSuccess(key, data));
            //debugger;
            if (data && (data.returnCode === -100 || data.returnCode === "-100")) {
                QBFK.Business.login()
                return fetchPosts(url,param,type,headers,repType);
                //dispatch(errorClear("common,login"));
            } 
            // else {
            //     //console.info("你的请求 内部出错了", data);
            //     //dispatch(errorSave("common", data));
            //     if (data && (data.code === "200" || data.code === 200 || data.resultCode == "200" || data.resultCode == 200)) {
            //         //dispatch(errorSave("login", data));
            //     }
            // }
            return data;
        })

}



var toExcString = function(array,type={":":"=",",":"&"}){

    let result ="";
    for(var temp in array){
        result+= temp+'='+array[temp]+"&"
    }
    return result.substring(-1,result.length-1);
}