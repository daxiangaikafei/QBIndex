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
import {connect} from 'dva'
import classNames from 'classnames'


class NavBar extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      title: '',
      pathName: ''
    }
  }

  _filter (pathname, route) {
    let _result = route.childRoutes.filter(item => item.path.toLowerCase() == pathname.toLowerCase() || pathname.toLowerCase().match(item.path.toLowerCase().replace(':projectid', '\\\d+')))
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

    this.state.pathName = pathname
  }

  componentDidMount(){
    var self = this
    QBFK.Business.clientGoBack = () => self._handleClick()
    QBFK.Business.go = (url) => self.context.router.push(url)
  }


  _handleClick () {

    this.state.pathName != '/' &&
    this.context.router.goBack()

    this.state.pathName == '/' &&
    typeof  QBaoJSBridge != 'undefined' &&
    QBaoJSBridge.QBIIClose()
  }

  render () {
    this._getTitle()
    return (
      <div className="qbii-navbar-container">
        <div className='qbii-navbar qbii-navbar-light'>
          <div className='qbii-navbar-left' onClick={() => this._handleClick()}>
            <span className='left'></span>
            <span className='left-icon'></span>
          </div>
          <div className='qbii-navbar-title'>{this.state.title}</div>
          <div className='qbii-navbar-right'>
            <span className={classNames({'right-icon':1,'hide':!this.props.helpShow})} onClick={()=>QBFK.Business.go('/Help')}></span>
            <span className='right hide'></span>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state.home;
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
NavBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};
// NavBar.defaultProps = {
//   helpShow: false
// }
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
