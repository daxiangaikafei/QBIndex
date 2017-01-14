import React, { Component }from 'react'
import './page.less'
import { Link } from 'react-router'

class NewsDetail extends Component {
  constructor(props, context) {
    const urls = {
      1: "https://mp.weixin.qq.com/s?__biz=MzA4MDIyOTAyMQ==&mid=2658629410&idx=1&sn=7b4ac28802619c3867ab8694e6f3393f&chksm=8424b0d0b35339c65771effb1f5779c797bc1de0155c2651960454766f3ceaa406a08fca7031&mpshare=1&scene=1&srcid=0114ZZv5lKCVEcKBKUCkWh8b#rd",
      2: "https://mp.weixin.qq.com/s?__biz=MzA4MDIyOTAyMQ==&mid=2658629422&idx=2&sn=b4b87846ff77b0827fc5eb89619600a5&chksm=8424b0dcb35339cad6d46268d653a4bb27f38302849c421f4692df4c1a9c8d6ef11c85702cef&mpshare=1&scene=1&srcid=0114NcETJ6o9o3C4xQlKW5z6#rd"
    }
    let { projectId } = props.routeParams;

    super(props, context)

    this.state = {
      url : urls[projectId]
    }
  }



render() {

  return (
    <div className="frame-warp">
      <iframe src={this.state.url} frameborder="0"></iframe>
    </div>
    )
  }
}

export default NewsDetail
