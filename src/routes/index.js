import React from 'react'
import { Route, IndexRoute, Router } from 'dva/router'
import CoreLayout from '../containers/layout'
import Home from 'views/Home/page'
// import HomeDo from 'views/HomeDo/page'
import About from 'views/About/page'

// import AnDemo from "views/AnDemo/page";
// import DemoSwipe from "views/DemoSwipe/page";

import Theme from "views/Theme/page";

// import OrderConfirm from "views/OrderConfirm/page";
// import OrderInfo from "views/OrderInfo/page";

import NewsDetail from "views/NewsDetail/page";

export default function (ref) {
  return (
    <Router history={ref.history}>
      <Route path='/' component={CoreLayout} name="QBII">
        <IndexRoute component={Home} name="QBII设置页面"/>
        <Route path='/Home' component={Home} name="QBII设置"/>
        {/* <Route path='/HomeDo' component={HomeDo} name="QBII测试Title"/> */}
        {/* <Route path='/AnDemo' component={AnDemo} name="QBII动画效果"/> */}
        {/* <Route path='/swipe' component={DemoSwipe} name="QBII动画效果"/> */}
        <Route path='/Theme' component={Theme} name="晒身份"/>
        <Route path='/About' component={About} name="了解QBII"/>

        {/* <Route path='/OrderConfirm/:projectId' component={OrderConfirm} name="订单确认"/> */}
        {/* <Route path='/OrderInfo/:projectId' component={OrderInfo} name="项目详情"/> */}

        <Route path='/NewsDetail/:projectId' component={NewsDetail} name="最新资讯"/>
      </Route>
    </Router>
  )
}
