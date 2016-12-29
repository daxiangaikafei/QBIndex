import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../static/style/animate.less'

function CoreLayout ({ children, location }) {
  // let transitionName = (location.action === 'POP') ? 'view-transition-rfr' : 'view-transition-sfr'
  return (
    <ReactCSSTransitionGroup component='div'
      transitionName={{
        enter: 'default-enter',
        enterActive: 'fadeInLeft',
        leave: 'default-leave',
        leaveActive: 'fadeOutRight'
      }}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
      >
      {React.cloneElement(children, {
        key: location.pathname
      })
      }
    </ReactCSSTransitionGroup>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
}

export default CoreLayout
