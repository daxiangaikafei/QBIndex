//import React, { PropTypes } from 'react'
//import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
//import * as homeActions from '../../redux/actions/home'
//import './page.less'

import React from 'react'
import { connect } from 'dva'
import './page.less'
import { Link } from 'react-router'

const App = ({fetch, count, loading}) => {
    return (
        <div className="Home">
            {loading ? <div>loading...</div> : <div>{count}</div>}
            <button onClick={() => fetch(count)}>add</button>
            <Link to="/HomeDo">跳转</Link>
        </div>
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
