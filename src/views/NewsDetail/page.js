import React, { Component }from 'react'
import './page.less'
import { Link } from 'react-router'

class NewsDetail extends Component {
  constructor(props, context) {
    const urls = {
      1: "https://mp.qbao.com/s/7fa843bdbf7e45faadcc0d2b708a20b7?idx=0&sn=cef966d5cda94cfaa38e665e75b5360b",
      2: "https://m.baidu.com/l=3/tc?order=9&fm=alop&srd=1&asres=1&dict=20&sec=18137&di=096a78ed875382c2&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEQGG_y6QLDm7pE37hPXsExhdXTqqAp7MJl0agTCcsx5ExmGdWWUn7RNOrxpns75g773av0iprq&ct=42&cst=0&clk_from=transcoder_sf"
    }
    let { projectId } = props.routeParams;

    super(props, context)

    this.state = {
      url : urls[projectId]
    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="frame-wrap">
        <iframe id="fm" src={this.state.url} frameBorder="0"></iframe>
      </div>
    )
  }
}

export default NewsDetail
