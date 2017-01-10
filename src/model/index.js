import {fetchPosts} from "components/common/fetch"
import { setCookie } from 'libs/util'

export default {
  namespace: 'home',
  state: {
    loading: false,
    levelInfo: {
      "level" : "暂无"
    },
    userInfo: {
      "level": "暂无",
      "assets": 0,
      "profit": 0
    },
    projInfo: {
      "assetsId": 1,
      "id": 1,
      "name": "--",
      "pics": "",
      "tag": "--",
      projectAssets: {},
      projectInfo: {
        assetsRatio: [
            {
                name: "--",
                value: 1
            },
            {
                name: "--",
                value: 1
            },
            {
                name: "--",
                value: 1
            }
        ],
        "id": 2,
        "projectId": 1,
        "tag1": "+0%",
        "tag2": "0款",
        "tag3": "0个",
      }
    },
    progressInfo: {
      "amount": 0,
      "target": 0,
      "user_count": 0
    }
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
      yield put({type: 'levelReq', loading: true})

      yield call(() => {
        return fetchPosts("/api/user/userId",{},"GET")
          .then(data => data.data)
          .then(data => {

            let levelInfo =  call(() => {
              return fetchPosts("/api/user/level",{},"GET")
                .then(data => data.data)
                .catch(err => ({
              		"userId" : 111111,
              		"level" : "暂无"
                 }))
            }, action.levelInfo)

            let userInfo =  call(() => {
              return fetchPosts("/api/user/userInfo",{},"GET")
                .then(data => data.data.user)
                .catch(err => ({
                  "id": 111111,
            			"level": "暂无",
            			"assets": 0,
            			"profit": 0
                }))
            }, action.userInfo)

            let projInfo =  call(() => {
              return fetchPosts("/api/project/1",{},"GET")
                .then(data => data.data.project)
                .catch(err => ({
                  "assetsId": 1,
                  "id": 1,
                  "name": "--",
                  "pics": "",
                  "tag": "--",
                  "watched": 0,
                  "projectAssets": {},
                  "projectInfo": {
                      "assetsRatio": [
                          {
                              "name": "--",
                              "value": 1
                          },
                          {
                              "name": "--",
                              "value": 1
                          },
                          {
                              "name": "--",
                              "value": 1
                          }
                      ],
                      "id": 2,
                      "projectId": 1,
                      "tag1": "+0%",
                      "tag2": "0款",
                      "tag3": "0个",
                  },
              }))
            }, action.projInfo)

            let progressInfo =  call(() => {
              return fetchPosts("/api/project/1/progress",{},"GET")
                .then(data => data.data)
                .catch(err => ({
                  "amount": 0,
                  "target": 0,
                  "user_count": 0
                }))
            }, action.progressInfo)

          })
          .catch(err => {
            console.log(err);
          })
      })


      yield call(() => {
        setCookie("level",levelInfo.level,"storage");
      })
      yield put({
        type: 'levelRes',
        loading: false,
        levelInfo,
        userInfo,
        projInfo,
        progressInfo
      })
    },
    *getUserInfo (action, {put, call}) {
      yield put({type: 'userInfoReq', loading: true})

      let userInfo = yield call(() => {
        return fetchPosts("/api/user/userInfo",{},"GET")
          .then(res => res.json())
          .then(data => data.data.user)
          .catch(err => ({
            "id": 111111,
      			"level": "暂无",
      			"assets": 0,
      			"profit": 0
          }))
      }, action.userInfo)

      yield put({
        type: 'userInfoRes',
        loading: false,
        userInfo
      })
    },
    *getProjInfo (action, {put, call}) {
      yield put({type: 'projInfoReq', loading: true})

      let projInfo = yield call(() => {
        return fetchPosts("/api/project/1",{},"GET")
          .then(res => res.json())
          .then(data => data.data.project)
          .catch(err => ({
            "assetsId": 1,
            "id": 1,
            "name": "--",
            "pics": "",
            "tag": "--",
            "watched": 0,
            "projectAssets": {},
            "projectInfo": {
                "assetsRatio": [
                    {
                        "name": "--",
                        "value": 1
                    },
                    {
                        "name": "--",
                        "value": 1
                    },
                    {
                        "name": "--",
                        "value": 1
                    }
                ],
                "id": 2,
                "projectId": 1,
                "tag1": "+0%",
                "tag2": "0款",
                "tag3": "0个",
            },

        }))
      }, action.projInfo)

      yield put({
        type: 'projInfoRes',
        loading: false,
        projInfo
      })
    },
    *getProgressInfo (action, {put, call}) {
      yield put({type: 'progressInfoReq', loading: true})

      let progressInfo = yield call(() => {
        return fetchPosts("/api/project/1/progress",{},"GET")
          .then(res => res.json())
          .then(data => data.data)
          .catch(err => ({
            "amount": 0,
            "target": 0,
            "user_count": 0
          }))
      }, action.progressInfo)

      yield put({
        type: 'progressInfoRes',
        loading: false,
        progressInfo
      })
    }

  },
  reducers: {
    levelReq (state, payload) {
      return {...state, ...payload}
    },
    levelRes (state, payload) {
      return {...state, ...payload}
    },
    userInfoReq (state, payload) {
      return {...state, ...payload}
    },
    userInfoRes (state, payload) {
      return {...state, ...payload}
    },
    projInfoReq (state, payload) {
      return {...state, ...payload}
    },
    projInfoRes (state, payload) {
      return {...state, ...payload}
    },
    progressInfoReq (state, payload) {
      return {...state, ...payload}
    },
    progressInfoRes (state, payload) {
      return {...state, ...payload}
    }
  }
}
