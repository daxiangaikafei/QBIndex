'use strict'
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax
import size from "lodash/size";
import each from "lodash/each";
import assignIn from "lodash/assignIn";

export function fetchPosts(key, url, param, type = "POST", headers = {}, repType = "json") {

    if (type.toLocaleUpperCase() === "GET" && size(param) > 0) {
        url += "?" + toExcString(param)
    }
    headers = assignIn({}, {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
    });

    return fetch(url, {
            method: type.toLocaleUpperCase(),
            headers: headers,
            //credentials: 'same-origin',
            body: type.toLocaleUpperCase() === "GET" ? undefined : (repType == "json" ? JSON.stringify(param) : param)
        })
        .then((res) => {
            //console.log(res.status);
            return res.json();
        })
        .then((data) => {
            //console.log('收到data', data);
            dispatch(fetchSuccess(key, data));
            if (data && (data.code === 0 || data.resultCode === "0" || data.resultCode === 0 || data.code === "0")) {
                dispatch(errorClear("common,login"));
            } else {
                //console.info("你的请求 内部出错了", data);
                dispatch(errorSave("common", data));
                if (data && (data.code === "200" || data.code === 200 || data.resultCode == "200" || data.resultCode == 200)) {
                    dispatch(errorSave("login", data));
                }
            }
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