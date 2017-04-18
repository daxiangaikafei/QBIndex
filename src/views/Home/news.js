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
        ///qbii-app/
        fetchPosts("/api/news/getNewsList",{},"POST").then((data)=>{
            console.log('返回结果为:',data);
            //debugger;
            if(data.code==0){
                self.setState({
                    lists:data.result.newsList
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

        let items = [],i=0;
        //onClick={()=>QBFK.Business.go('/NewsDetail/'+{item.id})}
        while (i<length) {
            let item  =  lists[i];
            i += 1;
            items.push(
                <div styleName="item" key={i} onClick={this.toDetail.bind(this,item.id)}>
                    <div styleName="img">
                      <img src={item.image} alt=""/>
                    </div>
                    <div styleName="item-title">
                      <p>{item.title}</p>
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
