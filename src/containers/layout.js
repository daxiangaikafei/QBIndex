import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../static/style/main.mobile.less'
import '../static/style/animate.less'
import { NavBar } from 'ui'
var cx = require('classnames');

function CoreLayout ({ children, location }) {
    let isQBC = QBFK.Business.isQBClient()
    let top = isQBC ? 44 : 0
    var viewHeight = window.innerHeight - top ;
    var styles = Object.assign({}, {opacity:0}) // child.props.style contains an int (e.g 34)
    location.action == 'PUSH' && (document.querySelector('.page-container-finally').scrollTop = 0 );
  return (
    <div>
        {
        isQBC && <NavBar {...arguments[0]}/>
        }
        <main style={{height:viewHeight,position: 'fixed',top: top+'px',width: '100%',overflow: 'hidden'}}>
        <ReactCSSTransitionGroup component='div'
         transitionName={{
            enter: 'default-enter',
            enterActive: location.action == 'PUSH'?'fadeInRight':'fadeInLeft',
            leave: 'default-leave',
            leaveActive: location.action == 'PUSH'?'':''
          }}
         style={{overflowY: 'scroll',height: '100%',position: 'absolute',top: 0,width:'100%' }}
         className = {"page-container-finally"}
         transitionEnterTimeout={500}
         transitionLeaveTimeout={500}
        >
        {React.cloneElement(children, {
            style:{position: 'absolute',top: 0,left: 0,width: '100%'},
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
