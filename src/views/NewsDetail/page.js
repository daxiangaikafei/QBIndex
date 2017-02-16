import React, { Component }from 'react'
import './page.less'
import { Link } from 'react-router'

import {fetchPosts} from "components/common/fetch";
// import { createCORSRequest } from 'libs/util'
// 

let viHtml = '<div><p></p><p></p><p></p><p></p><p></p></div>';

class NewsDetail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      detail:false
    }
  }

  componentWillMount() {
    let { projectId } = this.props.routeParams;
    let self = this;
    console.log(projectId)
    ///qbii-app/
    fetchPosts("/api/news/getNewsDetail.html",{id:Number(projectId)},"GET").then((data)=>{
        //console.log('返回结果为:',data.data.newsDetail);
        // //debugger;
        if(data.returnCode==0){
            self.setState({
                detail:data.data.newsDetail
            })

        }
    })
    
  }

  render() {
    let {detail} = this.state;
    let className ="",info=detail;
    let newProps = {};

    if(detail===false){
        className = " mask-loading mask-loading-vi";
        newProps.dangerouslySetInnerHTML = {__html:viHtml}
        info = {};
    }else{
        newProps.dangerouslySetInnerHTML={__html:decodeURIComponent(info.content)};
        //console.log(info.content)
    }

    

    // let className = detail===false?" mask-loading mask-loading-vi":" ";
    // let info = detail===false?{}:detail;
    return (
      <div className={"newsDetail-container"+className} >
          <div className="newsDetail-head ">
              <h2>{info.title}</h2>
              <div className="newsDetail-auth-info">
                  <em>{info.createTime&&info.createTime.substring(0,10)}</em>
                  <em>{info.author}</em>
                  <em></em>
              </div>
          </div>
          <div className="newsDetail-body"  {...newProps} >
          </div>
          <div className="newsDetail-footer">
            <em>阅读</em>
            <em>{info.watched}</em>  
          </div>
      </div>
    )
  }
}

export default NewsDetail
