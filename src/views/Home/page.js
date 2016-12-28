import React from 'react'
import { connect } from 'dva'
import './page.less'
import { Link } from 'react-router'

const App = (model) => {
  return (
    <div className='Home'>
      {model.loading ? <div>loading...</div> : <div>{model.count}</div>}
      <button onClick={() => model.fetch(model.count)}>add</button>
      <Link to='/HomeDo'>跳转</Link>
    </div>
  )
}

function mapStateToProps (state) {
  return state.demo
}

function mapDispatchToProps (dispatch) {
  return {
    fetch (count) {
      dispatch({type: 'demo/fetch', count})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
