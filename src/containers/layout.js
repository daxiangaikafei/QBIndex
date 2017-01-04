import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../static/style/main.mobile.less'
import '../static/style/animate.less'
import { NavBar } from 'ui'

function CoreLayout ({ children, location }) {
  return (
    <div>
      <NavBar {...arguments[0]}/>
      <ReactCSSTransitionGroup component='main'
      transitionName={{
        enter: 'default-enter',
        enterActive: location.action == 'PUSH'?'fadeInLeft':'fadeInRight',
        leave: 'default-leave',
        leaveActive: location.action == 'PUSH'?'fadeOutRight':'fadeOutLeft'
      }}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      >
      {React.cloneElement(children, {
        key: location.pathname
      })
      }
    </ReactCSSTransitionGroup>
  </div>
  )
}

CoreLayout.propTypes = {
    children: PropTypes.element,
    location: PropTypes.object
}

export default CoreLayout
