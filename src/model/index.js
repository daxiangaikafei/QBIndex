export default {
  namespace: 'demo',
  state: {
    loading: false,
    count: 0
  },
  effects: {
    *'fetch' (action, {put, call}) {
      yield put({type: 'request', loading: true})

      let count = yield call((count) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(count + 1)
          }, 1000)
        })
      }, action.count)

      yield put({
        type: 'response',
        loading: false,
        count
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
