/**
 * Created by xiaolin on 16/12/26.
 */

// ------------------------------------
// Android 4.4 Version Below
// ------------------------------------
require('es6-promise').polyfill();

// ------------------------------------
// Resource Import
// ------------------------------------
require.ensure([],
    function(require) {

        var dva = require('dva').default
        //var { browserHistory } =  require('dva/router')
        var FastClick  = require('fastclick')
        var router  = require('./routes')
        var business  = require('./model/business')
        var model  = require('./model')

        //import { browserHistory } from 'dva/router';
        //import FastClick from 'fastclick'
        //import router from './routes'
        //import business from './model/business'
        //import model from './model'

        // ------------------------------------
        // App Starting
        // ------------------------------------
        const html5ForStartApp = dva()
        function html5ForLogin(_app) {
            if (_app) {

                _app.model(business)
                _app.model(model)

                // 3. Router
                _app.router(router)

                //if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                //    var _t =
                //        window.setTimeout(function () {
                //            _app.start('.page-container')
                //            window.clearTimeout(_t);
                //        }, 500);
                //}
                //else
                _app.start('.page-container')
                //var _t =
                //    window.setTimeout(function(){
                //        _app.start('.page-container')
                //        window.clearTimeout(_t);
                //    },500);

            }
            else {
                html5ForStartApp.model(business)
                html5ForStartApp.model(model)

                // 3. Router
                html5ForStartApp.router(router)

                //if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
                //    var _t =
                //        window.setTimeout(function () {
                //            html5ForStartApp.start('.page-container')
                //            window.clearTimeout(_t);
                //        }, 500);
                //}
                //else
                html5ForStartApp.start('.page-container')

                //var _t =
                //    window.setTimeout(function () {
                //        html5ForStartApp.start('.page-container')
                //        window.clearTimeout(_t);
                //    }, 500);

            }

        }

        // ------------------------------------
        // Debug Here
        // ------------------------------------
        html5ForLogin(html5ForStartApp);

        // ------------------------------------
        // Client Login
        // ------------------------------------
        if(navigator.userAgent.match(/Android/i)) {
            if (typeof QBaoJSBridge != 'undefined') {
                QBaoJSBridge.login("mqbii.qbao.com", String(html5ForLogin(html5ForStartApp)));
            }
        }
        else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            if (typeof ioswebview != 'undefined') {
                ioswebview.showLoginViewAnd("mqbii.qbao.com", String(html5ForLogin(html5ForStartApp)));
            }
        }
        else {
            html5ForLogin(html5ForStartApp);
        }

        // ------------------------------------
        // Fast Click Adding For System
        // ------------------------------------
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function () {
                FastClick.attach(document.body);
            }, false);
        }

    }
)
//import dva from 'dva'
//import { browserHistory } from 'dva/router';
//import FastClick from 'fastclick'
//import router from './routes'
//import business from './model/business'
//import model from './model'

//// ------------------------------------
//// App Starting
//// ------------------------------------
//const html5ForStartApp = dva()
//function html5ForLogin(_app) {
//    if (_app) {
//
//        _app.model(business)
//        _app.model(model)
//
//        // 3. Router
//        _app.router(router)
//
//        var _t =
//        window.setTimeout(function(){
//            _app.start('.page-container')
//            window.clearTimeout(_t);
//        },500);
//
//    }
//    else {
//        html5ForStartApp.model(business)
//        html5ForStartApp.model(model)
//
//        // 3. Router
//        html5ForStartApp.router(router)
//
//        var _t =
//            window.setTimeout(function () {
//                html5ForStartApp.start('.page-container')
//                window.clearTimeout(_t);
//            }, 500);
//
//    }
//
//}

// ------------------------------------
// Debug Here
// ------------------------------------
//html5ForLogin(html5ForStartApp);

//// ------------------------------------
//// Client Login
//// ------------------------------------
//if(navigator.userAgent.match(/Android/i)) {
//   if (typeof QBaoJSBridge != 'undefined') {
//       QBaoJSBridge.login("mqbii.qbao.com", String(html5ForLogin(html5ForStartApp)));
//   }
//}
//else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
//   if (typeof ioswebview != 'undefined') {
//       ioswebview.showLoginViewAnd("mqbii.qbao.com", String(html5ForLogin(html5ForStartApp)));
//   }
//}
//else {
//   html5ForLogin(html5ForStartApp);
//}

//// ------------------------------------
//// Fast Click Adding For System
//// ------------------------------------
//if ('addEventListener' in document) {
//    document.addEventListener('DOMContentLoaded', function () {
//        FastClick.attach(document.body);
//    }, false);
//}
