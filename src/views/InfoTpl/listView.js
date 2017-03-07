import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";

import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";

import Area from "./area.js";


/*class ListView extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <Area className="area-margin" title="产品明细" hasIcon={true} hasLine={true}>
                <Items items={this.props.items}/>
            </Area> 
        )
    }
}
ListView.defaultProps = {
    title:"",
    items:[]
}*/


class ListView extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {items} = this.props;
        let i=0,length = items.length,$lis=[];
        while(i<length){
            let item = items[i];
            i+=1;
            $lis.push(<li key={i}><span>{item.title}</span><span>{item.data}</span></li>);
        }
        return (
            <ul className="area-rows">
                {$lis}
            </ul>
        )
    }
}
/*
<li><span>目标规模</span><span></span><span>{data.target/10000+"万"}</span></li>
                    <li><span>管理机构</span><span>{data.organization}</span></li>
                    <li><span>投资方向</span><span>{data.direction}</span></li>
                    <li><span>资本类型</span><span>{data.assetsType}</span></li>
                    <li><span>组织形式</span><span>{data.organizationType}</span></li>
                    <li><span>结构化</span><span>{data.structured}</span></li>
                    <li><span>犹豫期</span><span>7天</span></li>
                    <li><span>退出方式</span>{this.renderArrayInfo(data.exitWay)}</li>*/

ListView.defaultProps = {
    items:[]
}

export default ListView;
