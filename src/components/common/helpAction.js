'use strict'
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax
import size from "lodash/size";
import each from "lodash/each";
import assignIn from "lodash/assignIn";

export const DATA_SAVE = 'DATA_SAVE';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_POSTS = 'FETCH_POST';
export const FETCH_CLEAN = 'FETCH_CLEAN';


export const COOKIE_GET = 'COOKIE_GET';

export const ERROR_SAVE = 'ERROR_SAVE';
export const ERROR_CLEAR = 'ERROR_CLEAR';


export function errorSave(key,data){
    return {
        type:ERROR_SAVE,
        key,
        data
    }
}

export function errorClear(key,data){
    return {
        type:ERROR_CLEAR,
        key,
        data
    }
}

export function save(key,data){
    return {
        type:DATA_SAVE,
        key,
        data
    }
}


//获取 cookie
export function cookieGet(){
    return{
        type:"COOKIE_GET"
    }
}


/* 请求 开始 */
export function fetchRequest(key) {
  return {
    type: FETCH_REQUEST,
    key
  }
}



/*请求接受成功*/
export function fetchSuccess(key, json) {
  return {
    type: FETCH_SUCCESS,
    key,
    result:json,
    receivedAt: Date.now()
  }
}

export function fetchClean(key) {
  return {
    type: FETCH_CLEAN,
    key
  }
}


//body: type.toLocaleUpperCase()==="GET"?"":JSON.stringify(param)
/*对外公布请求参数*/
export function fetchPosts(key, url, param, type = "POST",headers={},repType="json") {
    return (dispatch,getState) => {
        if(type.toLocaleUpperCase()==="GET"&&size(param)>0){
           url +="?"+toExcString(param)
        }
        headers = assignIn({},{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
                }); 
        //console.log("------------- end ------------------",headers);
        dispatch(fetchRequest(key));
        return fetch(url, {
                method: type.toLocaleUpperCase(),
                headers: headers,
                //credentials: 'same-origin',
                body: type.toLocaleUpperCase()==="GET"?undefined:(repType=="json"?JSON.stringify(param):param)
            })
            .then((res) => {
                //console.log(res.status);
                return res.json();
            })
            .then((data) => {
                console.log('收到data', data);
                dispatch(fetchSuccess(key, data));
                if(data&&(data.code===0||data.resultCode==="0"||data.resultCode===0||data.code==="0")){
                    dispatch(errorClear("common,login"));
                }else{
                    console.info("你的请求 内部出错了",data);
                    dispatch(errorSave("common",data));
                    if(data&&(data.code==="200"||data.code===200||data.resultCode=="200"||data.resultCode==200)){
                        dispatch(errorSave("login",data));
                    }
                }
                return data;
            })
           /* .catch((e) => {
                //console.error(e.message);
                console.info("你的请求报错了，详情=>",e);
                dispatch(errorSave("common",e));
                return e;
            })*/
    }
}




var toExcString = function(array,type={":":"=",",":"&"}){

    let result ="";
    for(var temp in array){
        result+= temp+'='+array[temp]+"&"
    }
    return result.substring(-1,result.length-1);
}