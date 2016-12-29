import {FETCH_REQUEST,FETCH_SUCCESS,FETCH_POST,COOKIE_GET,FETCH_CLEAN,DATA_SAVE,ERROR_SAVE,ERROR_CLEAR} from "./helpAction";

import assignIn from "lodash/assignIn";
import each from "lodash/each";

export function posts(state = {isFetching:false} , action) {
    switch (action.type) {
        case FETCH_REQUEST:
            //console.info("公共的  isFetching",action.key)
            return assignIn({}, state, {
                isFetching: true
              });
        case FETCH_SUCCESS:
             return assignIn({}, state, {
                isFetching: false,
                result: action.result,
                lastUpdated: action.receivedAt
              })
        default:
            return state
    }
}


export function fetch(state = {}, action) {
  switch (action.type) {
    case FETCH_CLEAN:
            var newState = assignIn({}, state);
            if(action.key){
               delete newState[action.key];
            }
            return newState;
    case FETCH_REQUEST:
    case FETCH_SUCCESS:
      return assignIn({}, state, {
        [action.key]: posts(state[action.key], action)
      })
    default:
      return state
  }
}



export function cookie(state={"X_FREEY_SERVICE":""},action){
  switch(action.type){
    case COOKIE_GET:
        var strcookie = document.cookie;//获取cookie字符串
        let cookie={};
        var arr = strcookie.split(";"); //分割cookie
        for(var i = 0;i<arr.length;i++){
                if(arr.indexOf("=")<0){
                  continue;
                }
                var arrStr = arr.split("="); //对各个cookie进行分割
                cookie[arrStr[0]]=arrStr[1];
        }
        console.log("获取所有 cooki",cookie);
        return assignIn({},state,cookie);
    default:
      return state
  }
}


export function save(state = {}, action) {
  //console.log("啊哈  ",action)
  switch (action.type) {
    case DATA_SAVE:
      //console.log("啊哈  ",action)
        var newState = assignIn({}, state);
        newState[action.key] = action.data;
        return newState;
    default:
      return state
  }
}

export function errorMsg(state = {}, action) {
  //console.log("啊哈  ",action)
  switch (action.type) {
    case ERROR_SAVE:
        //console.log("啊哈  ",action);
        var newState = assignIn({}, state);
        newState[action.key] = action.data;
        return newState;
    case ERROR_CLEAR:
        //console.log("啊哈  ",action)
        var newState = assignIn({}, state);
        if(action.key){
            let keys = action.key.split(",");
            each(keys,function(one,index){
                newState[one] = action.data;
            });
        }else{
            newState = {};
        }
        return newState;
    default:
      return state
  }
}