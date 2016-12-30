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

class NavBar extends React.Component {
  PropTypes = {
    title: PropTypes.string
  }
  constructor (props, context) {
    super(props, context)
      debugger;
    this.state = { title: '' }
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
  }

  _handleClick () {
    this.props.history.goBack()
  }

  render () {
    this._getTitle()
    return (
      <div>
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
export default NavBar

