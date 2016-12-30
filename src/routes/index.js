import React from 'react'
import { Route, IndexRoute, Router } from 'dva/router'
import CoreLayout from '../containers/layout'
import Home from 'views/Home/page'
import HomeDo from 'views/HomeDo/page'

import AnDemo from "views/AnDemo/page"

export default function (ref) {
  return (
    <Router history={ref.history}>
      <Route path='/' component={CoreLayout} name="QBII">
        <IndexRoute component={Home} name="QBII设置页面"/>
        <Route path='/Home' component={Home} name="QBII设置"/>
        <Route path='/HomeDo' component={HomeDo} name="QBII测试Title"/>
        <Route path='/AnDemo' component={AnDemo} name="QBII动画效果"/>
      </Route>
    </Router>
  )
}

