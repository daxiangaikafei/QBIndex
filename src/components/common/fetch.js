'use strict'
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax
import size from "lodash/size";
import each from "lodash/each";
import assignIn from "lodash/assignIn";

export function fetchPosts( url, param, type = "POST", headers = {}, repType = "json",fetchNum = 1) {

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
    // headers = assignIn({}, headers, {token: "0579171e05cb5e3d221aeefd8b470106"});
    headers = assignIn({}, headers);
    url = url.replace(/\/api(?!\/qbii)/ig,"/api/qbii");    

    return fetch(url, {
            method: type.toLocaleUpperCase(),
            headers: headers,
            credentials: 'same-origin',
            //credentials: 'same-origin',
            body: type.toLocaleUpperCase() === "GET" ? undefined : (repType == "json" ? JSON.stringify(param) : param)
        })
        .then((res) => {
            var result;
            try{
                result = res.json();
            }catch(errorMsg){
                return fetchError(errorMsg);
            }
            return result;
        })
        .then((data) => {

            if (data && data.code === 200 && fetchNum<30) {
                QBFK.Business.login();
                return fetchSetTimeout().then(()=>{
                    return fetchPosts(url,param,type,headers,repType,fetchNum+1);
                })
            }
            return data;
        })

}

//可配的
var fetchSetTimeout = function(){
    var fetchSetTimeout = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            //console.log('执行完成');
            resolve('随便什么数据');
        }, 500);
    });
    return fetchSetTimeout;
}

var fetchError = function(error){
    var fetchSetTimeout = new Promise(function(resolve, reject){
            //console.log('执行完成');
            reject(error);
    });
    return fetchSetTimeout;
}






var toExcString = function(array,type={":":"=",",":"&"}){

    let result ="";
    for(var temp in array){
        result+= temp+'='+array[temp]+"&"
    }
    return result.substring(-1,result.length-1);
}
