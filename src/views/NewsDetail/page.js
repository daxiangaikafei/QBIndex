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
    //console.log(projectId)
    ///qbii-app/
    let time = Date.now();
    fetchPosts("/api/news/getNewsDetail",{id:Number(projectId)},"GET").then((data)=>{
        //console.log('返回结果为:',data.result.newsDetail);
        //debugger;
        let lTime = Date.now();
        let timeout = (lTime-time<1000)?(1000-(lTime-time)):0;
        //setTimeout(function(){
            if(data.code==0){
                self.setState({
                    detail:data.result.newsDetail
                })

            }
        //},timeout)
        
    })
    
  }

  render() {
    let {detail} = this.state;
    let className =" newsDetail-loading-hide",info=detail;
    let newProps = {};

    if(detail===false){
        className = "";//mask-loading mask-loading-vi
        newProps.dangerouslySetInnerHTML = {__html:viHtml}
        info = {};
        //return this.laoding(className);
    }else{
        newProps.dangerouslySetInnerHTML={__html:decodeURIComponent(info.content)};
        //console.log(info.content)
        
    }

    

    // let className = detail===false?" mask-loading mask-loading-vi":" ";
    // let info = detail===false?{}:detail;
    return (
      <div className={"newsDetail-container"} >
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
  laoding(className){
      return (
        <div className={"newsDetail-container newsDetail-loading "+className}>
                <div className="newsDetail-head ">
                    <h2></h2>
                    <div className="newsDetail-auth-info">
                        <em></em>
                        <em></em>
                        <em></em>
                    </div>
                </div>
                <div className="newsDetail-body">
                    <div><p></p><p></p><p></p><p></p><p></p></div>
                </div>
                <div className="newsDetail-footer">
                    <em></em>
                    <em></em>  
                </div>
          </div>
      )
  }
}

export default NewsDetail
