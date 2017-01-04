import React from 'react'
import './page.less'
import { Link } from 'react-router'
import { Dialog } from 'ui'

const AppS = (model) => {

  return (
    <div className='HomeDo'>
      {model.loading ? <div>loading...</div> : <div>{model.count}</div>}
      <button onClick={() => model.fetch(model.count)}>add</button>
      <Link to='/Home'>跳转</Link>
        <Dialog></Dialog>
    </div>
  )
}

export default AppS
