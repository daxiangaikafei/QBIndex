/**
 * Created by xiaolin on 16/12/26.
 */
import dva from 'dva'
import { browserHistory } from 'dva/router';

import FastClick from 'fastclick'
import model from './model'
import router from './routes'

const app = dva({
    history:browserHistory
})

app.model(model)

// 3. Router
app.router(router)

app.start('.page-container')

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
