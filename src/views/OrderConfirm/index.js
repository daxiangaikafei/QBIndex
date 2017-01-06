import React, { Component, PropTypes } from 'react';

import "./index.less";

import {fetchPosts} from "components/common/fetch";
import {withRouter} from "react-router";



class OrderConfirm extends Component {
    constructor(props) {
        super(props);
        this.state={
            showData:{
                investmentNum:10,//投资金额
                estimateMoney:"",//钱宝可赚
                estimatePer:140,//预计百分比
                bankMoney:"",//银行可赚
                bankPer:17,//
                totalNum:"",//合计
                cycleYear:5//周期 年
            }
        }
        this.moneyCalculate = this.moneyCalculate.bind(this);
        this.handOk = this.handOk.bind(this);
    }

    componentWillMount(){
        this.setState({
            showData:Object.assign({},this.state.showData,this.moneyCalculate(this.state.showData))
        });
    }

    moneyCalculate(data){
        var newState = {};
        let {investmentNum,estimatePer,bankPer,cycleYear} = data;
        newState.estimateMoney = this.calculate(investmentNum,estimatePer,cycleYear);
        newState.bankMoney = this.calculate(investmentNum,bankPer,cycleYear);
        newState.totalNum = investmentNum*10000;
        return newState;
    }
    calculate(money,per,cycle){
        return (money*per*cycle/365).toFixed(2);
    }   
    handOk(){
        //0debugger;
        let {projectId} = this.props.routeParams;
        let amount = this.state.showData.investmentNum;
        fetchPosts("/api/project/"+projectId+"/apply",{amount},"POST").then((data)=>{
            
            consoel.log("niya . sha b ",data);
            
        })
        this.props.router.push({pathname:"/home"})
        //
    }


    render() {
        let {investmentNum,estimateMoney,bankMoney,totalNum} = this.state.showData;
        return (
            <div className="order-confirm">
                <div className="order-join">
                    <div className="join-top">
                        <span>我要投(万元)</span>
                        <span>{investmentNum}</span>
                    </div>
                    <div className="join-slide hide"></div>
                </div>

                <ul className="order-estimate">
                    <li className="order-estimate-one">
                        <i></i>
                        <span>预计到期可赚(万元)</span>
                        <span className="estimate-money">{estimateMoney}</span>
                    </li>
                    <li className="order-estimate-one estimate-bank">
                        <i></i>
                        <span>银行同期可赚(万元)</span>
                        <span className="estimate-money">{bankMoney}</span>
                    </li>
                </ul>


                <ul className="order-clause">
                    <li><span>历史报告</span><i></i></li>
                    <li><span>产品合同</span><i></i></li>
                </ul>

                <div className="order-sure">
                    <p>合计:<span>¥{totalNum}</span></p>
                    <button onClick={this.handOk}>确认</button>
                </div>
            </div>
        )
    }
}
OrderConfirm.defaultProps = {
}

export default withRouter(OrderConfirm);

//<div className="theme-img"></div>