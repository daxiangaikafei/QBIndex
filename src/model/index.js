import {fetchPosts} from "components/common/fetch"

export default {
  namespace: 'home',
  state: {
    loading: false,
    isShowCover: false,
    isRenderGauge: false,
    levelInfo: {},
    userInfo: {}
  },
  effects: {
    // *'fetch' (action, {put, call}) {
    //   yield put({type: 'request', loading: true})
    //
    //   let count = yield call((count) => {
    //     return new Promise(resolve => {
    //       setTimeout(() => {
    //         resolve(count + 1)
    //       }, 1000)
    //     })
    //   }, action.count)
    //
    //   yield put({
    //     type: 'response',
    //     loading: false,
    //     count
    //   })
    // },
    *getLevel (action, {put, call}) {
      yield put({type: 'request', loading: true})

      let levelInfo = yield call(() => {
        // return fetch("/api/user/level",{},"GET")
        //   .then(res => res.json())
        //   .then(data => data.data)
        //   .catch(err => ({ err }))
        return {
      		"userId" : 11231,
      		"level" : "Pro"
        }
      }, action.levelInfo)

      yield put({
        type: 'response',
        loading: false,
        levelInfo
      })
    },
    *getUserInfo (action, {put, call}) {
      yield put({type: 'request', loading: true})

      let userInfo = yield call(() => {
        // return fetch("/api/user/userInfo",{},"GET")
        //   .then(res => res.json())
        //   .then(data => data.data.user)
        //   .catch(err => ({ err }))
        return  {
    			"id": 11231,
    			"level": "Pro",
    			"assets": 139534529,
    			"profit": 94839557
    		}
      }, action.userInfo)

      yield put({
        type: 'response',
        loading: false,
        isRenderGauge:true,
        userInfo
      })
    }

  },
  reducers: {
    request (state, payload) {
      return {...state, ...payload}
    },
    response (state, payload) {
      return {...state, ...payload}
    }
  }
}
