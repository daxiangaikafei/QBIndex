import {fetchPosts} from "components/common/fetch"
import assignIn from "lodash/assignIn";
import each from "lodash/each";
import 'whatwg-fetch'  // 可以引入fetch来进行Ajax

export default {
  namespace: 'orderInfo',
  state: {
    isFetching:false,
    result:false
  },
  effects: {
    *fetchRequest(key,{put, call}) {
        yield put({
            type: 'fetch/query/request',
            key
        });
        
    },
    *fetchSuccess(key, {put, call}) {
        yield put({
            type: 'fetch/query/success',
            key,
            result:key.json,
            receivedAt: Date.now()
        });
    },
    *fetchPosts (key, {put, call}) {
        return (dispatch,getState) => {
                let url, param, type = "POST",headers={},repType="json";
                url = "/api/project/1";

                debugger;

                if(type.toLocaleUpperCase()==="GET"&&size(param)>0){
                    url +="?"+toExcString(param)
                }
                headers = assignIn({},{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
                });
                dispatch({type:"orderInfo/fetchRequest"});
                
                return fetch(url, {
                    method: type.toLocaleUpperCase(),
                    headers: headers,
                    body: type.toLocaleUpperCase()==="GET"?undefined:(repType=="json"?JSON.stringify(param):param)
                })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    dispatch(fetchSuccess({type:"orderInfo/fetchSuccess",json:json}));
                    return data;
                });
        }
       
        
    }

  },
  reducers: {
    ['fetch/orderInfo/request'](state={isFetching:false}) {
      return { ...state, isFetching: true };
    },
    ['products/orderInfo/success'](state, { result,receivedAt }) {
      return { ...state, isFetching: false, result,lastUpdated:receivedAt};
    },
  }
}
