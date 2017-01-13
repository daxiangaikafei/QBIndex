
import React, { Component, PropTypes } from 'react';

import { connect } from 'dva';
import {withRouter} from "react-router";

import isObject from "lodash/isObject";
import isArray from "lodash/isArray";

//var moment = require('moment');

import {fetchPosts} from "components/common/fetch";


import {getCookie} from 'libs/util';

import Info from "./info.js";


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
            disabled:true,
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
        fetchPosts("/api/project/"+projectId,{},"GET").then((data)=>{
            
            try{
                let newData = this.formateData(data,this.state.data);
                newData.assetsType = newData.assetsType===1?"本土":"";
                newData.organizationType = newData.organizationType===1?"有限合伙制":"";
                newData.structured = newData.structured===1?"是":"否";//
                newData.direction = newData.direction===1?"股权":"";//direction
                
                console.log("data",newData);
                self.setState({
                    data:newData
                });
            }catch(errorMsg){
                console.log(errorMsg);
            }
        });

        // fetchPosts("/api/serverTime",{},"GET").then((data)=>{
        //     self.setState({
        //         now:new Date()
        //     })
        // })
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
    render() {
        var {data,heart,startDate,endDate} = this.state;
        return (
            <div className="party-info">

                <div className="party-head" style={{backgroundImage:("url("+data.pics[0]+")")}}>
                    <div className="party-logo" style={{backgroundImage:("url("+data.pics[1]+")")}} ></div>
                </div>
                <Area className="" title="冰穹互娱股权投资一期资管计划" hasIcon={false}>
                    <ul className="party-plan">
                        <li><span>{data.direction}</span><span>投资方向</span></li>
                        <li><span>{data.duration}</span><span>存续期限</span></li>
                        <li><span>{data.minPrice/10000}万</span><span>认购起点</span></li>
                    </ul>
                </Area>
                <Area className="area-margin area-bottom" title="项目解析" hasIcon={false}>
                    <Vedio bgUrl={data.pics[2]} src={data.video}/>
                </Area>
                
                <Area className="area-margin" title="项目优势" hasIcon={true} hasLine={true} isClose={true}>
                   <div  className="area-p area-duan" dangerouslySetInnerHTML={{__html:data.des}}>
                   </div>
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
               

                <Area className="area-margin" title="产品明细" hasIcon={true} hasLine={true}>
                    <ul className="area-rows">
                        <li><span>目标规模</span><span></span><span>{data.target/10000+"万"}</span></li>
                        <li><span>管理机构</span><span>{data.organization}</span></li>
                        <li><span>投资方向</span><span>{data.direction}</span></li>
                        <li><span>资本类型</span><span>{data.assetsType}</span></li>
                        <li><span>组织形式</span><span>{data.organizationType}</span></li>
                        <li><span>结构化</span><span>{data.structured}</span></li>
                        <li><span>退出方式</span>{this.renderArrayInfo(data.exitWay)}</li>
                    </ul>
                </Area>
                 <Area className="area-margin" title="交易须知" hasIcon={true} hasLine={true}>
                    <ul className="area-rows">
                        <li><span>认购费</span><span>{(data.applyFee&&data.applyFee[1]+"%")||""}</span></li>
                        <li><span>管理费</span><span>{(data.managementFee[1]+"%/年")||""}</span></li>
                        <li><span>托管费</span><span>{(data.trusteeFee[1]+"%/年")||""}</span></li>
                        <li><span>收益分配</span>
                            <div className="area-p">
                                {data.profit||""}
                            </div>
                        </li>
                    </ul>
                </Area>

                <div className="step-end" >
                    <button onClick={this.handHeart}><span className={"step-heart"+(heart===false?" heart-line":"")} ></span></button>
                    <button disabled={this.state.disabled} className="step-btn-end" onClick={this.handThink} >我有意向</button>
                </div>
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
/*
<Chart projectId={this.props.routeParams.projectId}/>
 */
OrderInfo.defaultProps = {
}

OrderInfo.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default OrderInfo;

//export default withRouter(OrderInfo);

//<div className="theme-img"></div>  <button><span className="step-download"></span></button>