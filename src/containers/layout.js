import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../static/style/main.mobile.less'
import '../static/style/animate.less'
import { NavBar } from 'ui'

function CoreLayout ({ children, location }) {
  var viewHeight = window.innerHeight - 44 ;
  return (
    <div>
        <NavBar {...arguments[0]}/>
        <main style={{height:viewHeight,overflow: 'hidden'}}>
        <ReactCSSTransitionGroup component='div'
         transitionName={{
            enter: 'default-enter',
            enterActive: location.action == 'PUSH'?'fadeInLeft':'fadeInRight',
            leave: 'default-leave',
            leaveActive: location.action == 'PUSH'?'fadeOutRight':'fadeOutLeft'
          }}
         style={{overflowY: 'scroll',height: '100%'}}
         transitionEnterTimeout={300}
         transitionLeaveTimeout={300}
        >
        {React.cloneElement(children, {
            key: location.pathname
        })
        }
        </ReactCSSTransitionGroup>
        </main>
  </div>
  )
}

CoreLayout.propTypes = {
    children: PropTypes.element,
    location: PropTypes.object
}

export default CoreLayout
