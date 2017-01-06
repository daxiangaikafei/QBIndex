import React from 'react'
import { Route, IndexRoute, Router } from 'dva/router'
import CoreLayout from '../containers/layout'
import Home from 'views/Home/page'
import HomeDo from 'views/HomeDo/page'

import AnDemo from "views/AnDemo/page";
import Theme from "views/Theme/page";

import OrderConfirm from "views/OrderConfirm/index";
import OrderInfo from "views/OrderInfo/index";

export default function (ref) {
  return (
    <Router history={ref.history}>
      <Route path='/' component={CoreLayout} name="QBII">
        <IndexRoute component={Home} name="QBII设置页面"/>
        <Route path='/Home' component={Home} name="QBII设置"/>
        <Route path='/HomeDo' component={HomeDo} name="QBII测试Title"/>
        <Route path='/AnDemo' component={AnDemo} name="QBII动画效果"/>
        <Route path='/Theme' component={Theme} name="晒身份"/>
        <Route path='/OrderConfirm' component={OrderConfirm} name="订单确认"/>
        <Route path='/OrderInfo' component={OrderInfo} name="XXX详情"/>
      </Route>
    </Router>
  )
}

