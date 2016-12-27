import React from 'react'
import { connect } from 'dva'
import './page.less'

const App = ({fetch, count, loading}) => {
    return (
        <div  className="HomeDo">
            {loading ? <div>loading...</div> : <div>{count}</div>}
            <button onClick={() => fetch(count)}>no</button>
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
