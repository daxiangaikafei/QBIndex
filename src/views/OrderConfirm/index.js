import React, { Component, PropTypes } from 'react';

import "./index.less";

import {fetchPosts} from "components/common/fetch";
import {withRouter} from "react-router";

import isNumber from "lodash/isNumber";

import { Dialog } from 'ui'

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
            },
            modelData:{
                name: '',
                phone: '',
                orderId:false
            },
            disabled:false,
            show:false,
            errorShow:false
        }
        this.moneyCalculate = this.moneyCalculate.bind(this);
        this.handOk = this.handOk.bind(this);
        this.operate = this.operate.bind(this);
        this.handChange = this.handChange.bind(this);
        this.handBlur = this.handBlur.bind(this);
    }

    componentWillMount(){
        this.setState({
            showData:Object.assign({},this.state.showData,this.moneyCalculate(this.state.showData))
        });
    }

    handBlur(){
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
        if(this.state.disabled===true){
            return;
        }
        this.setState({
            disabled:true
        })
        var self = this;
        let {projectId} = this.props.routeParams;
        let amount = this.state.showData.investmentNum;
        //debugger;
        fetchPosts("/api/project/"+projectId+"/apply",{amount},"POST").then((data)=>{
            //debugger;
            data = data.data;
            self.setState({
                modelData:{
                    name:data.user.realName,
                    phone:data.user.phoneNo,
                    orderId:data.orderId
                },
                disabled:false,
                show:true
            })
            consoel.log("niya . sha b ",data);
            //modelData
        }).catch(()=>{
            self.setState({
                disabled:false
            })
            //alert("系统繁忙，请稍后再试！");
            // let data = {user:{name:"呵呵",phone:"11111111111"}}
            // self.setState({
            //     modelData:{
            //         name:data.user.name,
            //         phone:data.user.phone,
            //         orderId:data.orderId
            //     },
            //     disabled:false,
            //     show:true
            // })
        })
        //this.props.router.push({pathname:"/home"})
        //
    }

    handChange(event){
        let value = event.target.value.substr(0, 140);
        value = Number(value);
        //debugger
        if(isNumber(value)&&value<10000){
            this.setState({
                showData:Object.assign({},this.state.showData,{investmentNum:value})
            });
            console.log(Object.assign({},this.state.showData,{investmentNum:value}))
        }
        
    }
    operate(data){
        console.log("data",data);
        var self = this;
        
        //debugger
        if(!/^1(3|4|5|7|8)\d{9}$/.test(data.phone)){
            this.setState({
                errorShow:true
            })
            return false;
        }
        this.setState({
            show:false,
            errorShow:false
        });
        //api/order/{orderId}/update
        fetchPosts("/api/order/"+this.state.modelData.orderId+"/update",data,"POST").then((data)=>{
            self.setState({
                show:false
            });
            self.props.router.push({pathname:"/home"})
        })
    }


    render() {
        let {investmentNum,estimateMoney,bankMoney,totalNum} = this.state.showData;
        return (
            <div className="order-confirm">
                <div className="order-join">
                    <div className="join-top">
                        <span>我要投(万元)</span>
                        <input type="input" value={investmentNum} onChange={this.handChange} onBlur={this.handBlur} />
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
                <Dialog errorShow={this.state.errorShow} buttonConfirm={(data)=>this.operate(data)} show={this.state.show}  data={this.state.modelData}></Dialog>
            </div>
        )
    }
}
OrderConfirm.defaultProps = {
}

export default withRouter(OrderConfirm);

/**
 * 
 * 
 * type: 'success',
    buttonConfirm: function () {
    },
    errorShow: false,
 */
//<div className="theme-img"></div>