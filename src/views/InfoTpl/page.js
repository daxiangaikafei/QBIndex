
import React, { Component, PropTypes } from 'react';

import { connect } from 'dva';
import {withRouter} from "react-router";

import isObject from "lodash/isObject";
import isArray from "lodash/isArray";



//var moment = require('moment');

import {fetchPosts} from "components/common/fetch";


import {getCookie} from 'libs/util';

import Info from "./info.js";
import Banner from "./banner.js";
import GrideView from "./grideView.js";
import ListView from "./listView.js";
import TextView from "./textView.js";


import "./page.less";



import Vedio from "./vedio";
import Area from "./area.js";
//import Chart from "./chart.js";

class OrderInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            heart:false,
            data:{
                name:"",
                duration:"",//存续期限
                direction:"",//投资方向 1股权
                minPrice:"",//认购起点
                des:"",//特色亮点,
                target:"",//目标规模
                organization:"",//管理机构
                // direction //投资方向
                assetsType:"",// type//资本类型 1-本土
                organizationType:"",//组织形式  1-有限合伙制
                structured:"",//结构化 . 1-是，2-否
                exitWay:["",""],//退出形式
                trusteeFee:["",""],//认购费 .
                managementFee:["",""],//管理费
                trusteeFee:["",""],//托管费
                profit:"",//收益分配
                pics:["","",""],
                video:"",
                applyFee:["",""]
            },
            startDate:this.formate(),
            endDate:this.formate(2),
            disabled:false,
            now:false
        }

        this.getData = this.getData.bind(this);
        this.handThink = this.handThink.bind(this);
        this.handHeart = this.handHeart.bind(this);
    }
    componentWillMount(){
        let levelName = getCookie("level","storage")||"暂无";
        //debugger
        if(levelName!=="暂无"){
            this.setState({
                disabled:false
            })
        }

        // const Level={"暂无":0,"C":25,"B":50,"A":75,"PRO":100,"暂无":0};
        this.getData();
    }
    formate(num){
        // var today = new Date();
        // if(num){
        //     today.setDate(today.getDate()+1);
        // }
        // //debugger
        // return Number(today.getMonth()+1)+"-"+today.getDate();

        var today = new Date();
        if(num){
            today.setDate(today.getDate()+num);
        }
        let month = Number(today.getMonth()+1);
        let date = today.getDate();
        return (month<10?("0"+month):month)+"-"+(date<10?("0"+date):date);
    }
    getData(){
        var self = this;
        let {projectId} = this.props.routeParams;
         fetchPosts("/api/page/"+projectId,{},"GET").then((data)=>{

            self.setState({
                data:data.data.page
            });
        });

    }
    formateData(data,oldData){
        let newState = {};
        for(var key in data){
            let temp = {};

            if(isObject(data[key])&&!isArray(data[key])){
                temp = this.formateData(data[key],oldData);
            }else if(oldData[key]!==undefined){
                newState[key] = data[key];
            }
            newState = Object.assign(newState,temp);

        }
        return newState;
    }

    handThink(){
        if(this.state.disabled===true){
            return false;
        }
        let {projectId} = this.props.routeParams;
        //this.props.router.push({pathname:"/orderconfirm/"+projectId,state:{minPrice:this.state.data.minPrice},query: { modal: true }});
        this.context.router.push({pathname:"/orderconfirm/"+projectId,state:{minPrice:this.state.data.minPrice/10000,maxPrice:this.state.data.target/10000}});
        //query: { modal: true },state: { fromDashboard: true }
    }
    handHeart(){
        this.setState({
            heart:!this.state.heart
        });
    }
    typeShow(type,items,i){

        switch(type){
            case "banner":{
                return (<Banner key={i} className="party-head" items={items} />);
            }
            case "grideView":{
                return (<GrideView key={i} items={items}/>);
            }
            // case "tap":{
            //     return (<GrideView items={items}/>);
            // }
            case "textView":{
                return (<TextView key={i} items={items}/>);
            }
            case "listView":{
                return (<ListView key={i} items={items}/>);
            }
            default:{
                //return (JSON.stringify(type));
                return undefined
            }
        }
    }
    render() {
        var {data,heart,startDate,endDate} = this.state;
        let modules = data.modules||[];
        let i = 0,length = modules.length,$lis=[],self = this;
        while(i<length){

            let modular  = modules[i];
             i+=1;
             console.info(modular);

            if(!modular||!modular.items){
                continue;
            }
            let {items,category,title} = modular;

            if(title&&title.text){
                //debugger
                let hadIcon = "textView,listView".indexOf(category)>=0?true:false;
                let className = "grideView".indexOf(category)>=0?"":"area-margin ";
                $lis.push(
                    <Area key={i} className={className} title={title.text} hasIcon={hadIcon} hasLine={hadIcon} >
                        {self.typeShow(category,items,i)}
                    </Area>
                )
            }else{
                $lis.push(self.typeShow(category,items,i));
            }

        }
        return (
            <div className="party-info">
                <div className="party-temp">
                    {$lis}
                </div>
                {/*<div className="step-end" >
                    <button disabled={this.state.disabled}  className="step-btn-end" onClick={this.handThink} >我有意向</button>
                </div>*/}
            </div>
        )
    }
    renderArrayInfo(param){
        if(!param){
            retunr (<div className="area-p"></div>)
        }
        let re = [];
        for(let i =0;i<param.length;i++){
            re.push(<p key={i}>{param[i]}</p>)
        }
        return (
            <div className="area-p">

                {re}
            </div>
        );
    }
}

OrderInfo.defaultProps = {
}

OrderInfo.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default OrderInfo;

{/*<Banner className="party-head"/>
                    <Area className="" title={"系双方的时间开放"} hasIcon={false}>
                        <GrideView items={tempGrideViewData}/>
                    </Area>
                    <Area className="area-margin area-bottom" title="项目解析" hasIcon={false}>
                        <Vedio bgUrl={data.pics[2]} src={data.video}/>
                    </Area>

                    <Area className="area-margin" title={"特色亮点"} hasIcon={true} hasLine={true} isClose={true}>
                        <TextView content={"ddsskdskdkdksdiiiiiiiiiiiiiiiiiiiiiiiikks"} />
                    </Area>

                    <Area className="area-margin" title="募集说明" hasIcon={false}>
                        <div className="party-step">
                            <div className="step-row">
                                <span>申购</span>
                                <span>确认份额</span>
                            </div>
                            <div className="step-row step-arrow">
                            </div>
                            <div className="step-row">
                                <span>{startDate}</span>
                                <span>{endDate}</span>
                                <span>持有中</span>
                            </div>
                            <p>现在申购，<span className="date">{endDate.replace("-","月")+"日"}</span>确认份额后产生收益</p>
                        </div>
                    </Area>

                    <ListView title="产品明细" items={tempListViewData}/>*/}
