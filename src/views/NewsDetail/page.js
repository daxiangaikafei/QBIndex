import React, { Component }from 'react'
import './page.less'
import { Link } from 'react-router'
// import { createCORSRequest } from 'libs/util'

class NewsDetail extends Component {
  constructor(props, context) {
    const urls = {
      1: "",
      2: "",
      3: ""
    }

    super(props, context)

    this.state = {
      content: ''
    }

    // let _this = this
    // let request = createCORSRequest("get", this.state.url);
    // if (request){
    //   request.onload = function(e) {
    //     if(this.status == 200||this.status == 304){
    //       let content = this.responseText.replace(/data-src/g, "src")
    //       content = 'data:text/html;charset=utf-8,' + content
    //       _this.setState({
    //         content
    //       })
    //     }
    //   }
    //   request.onreadystatechange = () => {}
    //   request.onerror = () => {}
    //   request.send()
    // }
  }

  componentWillMount() {
    let { projectId } = this.props.routeParams
    require.ensure([], () => {
      let newsContents = require('static/article/news.js').newsContents
      let content = 'data:text/html;charset=utf-8,' + newsContents[projectId].replace(/data-src/g, "src")
      this.setState({
        content
      })
    })
  }

  render() {

    return (
      <div className="frame-wrap">
        <iframe src={this.state.content}  frameBorder="0"></iframe>
      </div>
    )
  }
}

export default NewsDetail
