/**
 * (NavBar组件)
 *
 * @export
 * @class NavBar
 * @extends {react}
 * @author sean on 16/12/29.
 */

import React, { PropTypes } from 'react'
import './index.less'
import {Router} from 'dva/router';

class NavBar extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      title: '',
      pathName: ''
    }

  }

  _filter (pathname, route) {
    let _result = route.childRoutes.filter(item => item.path == pathname)
    return _result.length ? _result[0].name : route.indexRoute.name
  }

  _getTitle () {
    let { pathname } = this.props.location
    let { route } = this.props

    switch (route.path == pathname) {
      case true :
        this.state.title = route.name
        break
      default :
        this.state.title = this._filter(pathname, route)
        break
    }

    this.state.pathName = pathname;
  }


  _handleClick () {
    this.state.pathName != '/' &&
    this.context.router.goBack()

    this.state.pathName == '/' &&
    QBaoJSBridge &&
    QBaoJSBridge.QBIIClose()
  }

  render () {
    this._getTitle()
    return (
      <div className="qbii-navbar-container">
        <div className='qbii-navbar-top'></div>
        <div className='qbii-navbar qbii-navbar-light'>
          <div className='qbii-navbar-left' onClick={() => this._handleClick()}>
            <span className='left-icon'>
            </span>
          </div>
          <div className='qbii-navbar-title'>{this.state.title}</div>
          <div className='qbii-navbar-right'>
            <span className='right-icon'></span>
          </div>
        </div>
        <div className='qbii-navbar-bottom'>
        </div>
      </div>
    )
  }
}
NavBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default NavBar
