//import React, { PropTypes } from 'react'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import * as homeActions from '../../redux/actions/home'
//import './page.less'

import React from 'react'
import { connect } from 'dva'
import './page.less'
import { Link } from 'react-router'

const App = () => {
  return (
    <main>
      <div className="top-bg-container">
        <div className="top-bg"></div>
      </div>
    </main>
  )
};


function mapStateToProps(state) {
    return state.demo;
}

function mapDispatchToProps(dispatch) {
    return {
        fetch(count){
            dispatch({type: 'demo/fetch', count});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
