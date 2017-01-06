/**
 * Created by xiaolin on 17/1/6.
 */

export default {
    namespace: 'business',
    state: {
        loading: false
    },
    subscriptions: {
        setup({ dispatch, history }) {
            //dispatch({
            //    type: 'business/go',
            //});
            //history.listen(({ pathname }) => {
            //    if (pathname === '/') {
            //        //dispatch({
            //        //    type: 'business/go',
            //        //});
            //    }
            //});
        },
    },
    effects: {
        *go (action, {put, call}) {
            debugger
        }

    }
}
