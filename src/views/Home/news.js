import React, { Component, PropTypes } from 'react';
import ReactDom from "react-dom";
import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";


import {withRouter} from "react-router";
import classNames from 'classnames'
import CSSModules from 'react-css-modules'

import {fetchPosts} from "components/common/fetch";


import styles from './page.less'


class News extends Component {
    constructor(props) {
        super(props);
        this.state={
            lists:[]
        }
    }
    componentWillMount(){
        let self = this;
        fetchPosts("/api/news/getNewsList.html",{},"POST").then((data)=>{
            console.log('返回结果为:',data);
            //debugger;
            if(data.returnCode==0){
                self.setState({
                    lists:data.data.newsList
                })
            }
        })
    }
    toDetail(id){
        QBFK.Business.go('/NewsDetail/'+id)
    }
    
    render() {

        let {lists} = this.state;
        let length = lists.length;
        let items = [];
        //onClick={()=>QBFK.Business.go('/NewsDetail/'+{item.id})}
        while (length>0) {
            length -= 1;
            let item  =  lists[length];
            items.push(
                <div styleName="item" key={length} onClick={this.toDetail.bind(this,item.id)}>
                    <div styleName="img">
                      <img src={item.image} alt=""/>
                    </div>
                    <div styleName="item-title">
                      {item.title}
                      <small>{item.des}</small>
                    </div>
                </div>
            );
            // statement
        }
        

        return (
            <div className="">
                {items}
            </div>
        )
    }
}
News.defaultProps = {
    title:""
}
export default withRouter(CSSModules(News,styles,{allowMultiple:true}));
