/**
 * Created by xiaolin on 16/12/26.
 */
import dva from 'dva'
import { browserHistory } from 'dva/router';

import FastClick from 'fastclick'

import router from './routes'
import utilss from './libs/util'

import business from './model/business'
import model from './model'


const app = dva()

app.model(business)
app.model(model)


// 3. Router
app.router(router)

app.start('.page-container')

//login
if(navigator.userAgent.match(/Android/i)) {
    if (typeof QBaoJSBridge != 'undefined') {
        QBaoJSBridge.login("mqbii.qbao.com", String());
    }
}
else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    if (typeof ioswebview != 'undefined') {
        ioswebview.showLoginViewAnd("mqbii.qbao.com", "");
    }
}
//fast click
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}
