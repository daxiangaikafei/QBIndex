import React from 'react'
import { Route, IndexRoute, Router } from 'dva/router'
import CoreLayout from '../containers/layout'
import Home from 'views/Home/page'
import HomeDo from 'views/HomeDo/page'

export default function (ref) {
  return (
    <Router history={ref.history}>
      <Route path='/' component={CoreLayout}>
        <IndexRoute component={Home} />
        <Route path='/Home' component={Home} />
        <Route path='/HomeDo' component={HomeDo} />
      </Route>
    </Router>
  )
}

