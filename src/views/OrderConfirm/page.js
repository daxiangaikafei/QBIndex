import React, { Component, PropTypes } from 'react';
import ReactDom from "react-dom";
import "./page.less";

import {fetchPosts} from "components/common/fetch";
import {withRouter} from "react-router";

import isNumber from "lodash/isNumber";
import each from "lodash/each";
import size from "lodash/size";

import { Dialog } from 'ui';

import Input from "./input.js";

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
            errorShow:false,
            values:{},
            errorMsgs:{},
            minPrice:10,
            maxPrice:100
        }
        this.moneyCalculate = this.moneyCalculate.bind(this);
        this.handOk = this.handOk.bind(this);
        this.operate = this.operate.bind(this);
        this.handChange = this.handChange.bind(this);
        this.handBlur = this.handBlur.bind(this);

        this.hangInChange = this.hangInChange.bind(this);
    }

    componentWillMount(){
        //if() minPrice
        //debugger
        let {minPrice,maxPrice} = this.props.location&&this.props.location.state;
        if(!minPrice){
           this.context.router.push({pathname:"/"})
        }
        //let maxPrice = 1000;
        let {showData} = this.state;
        showData.investmentNum = minPrice;
        this.setState({
            minPrice,
            maxPrice,
            showData:Object.assign({},showData,this.moneyCalculate(showData))
        });
    }

    handBlur(){
        //&&value>=this.state.minPrice
        //debugger;
        //ReactDom.findDOMNode(this.refs.temp).focus();
        if(this.state.showData.investmentNum< this.state.minPrice){
            this.setState({
                disabled:true
            })
            alert("起投金额不能小于"+this.state.minPrice+"万");
            //return ;
        }else if(this.state.showData.investmentNum>this.state.maxPrice){
            alert("起投金额不能大于"+this.state.maxPrice+"万");
           // return ;
        }else{
            this.setState({
                disabled:false,
                showData:Object.assign({},this.state.showData,this.moneyCalculate(this.state.showData))
            });
        }
        
    }

    moneyCalculate(data){
        var newState = {};
        let {investmentNum,estimatePer,bankPer,cycleYear} = data;
        newState.estimateMoney = this.calculate(investmentNum,estimatePer,cycleYear);
        newState.bankMoney = this.calculate(investmentNum,bankPer,cycleYear);
        newState.totalNum = investmentNum;
        return newState;
    }
    calculate(money,per,cycle){
        return (money*per*cycle/365).toFixed(2);
    }   
    handOk(){
        //0debugger;
        let vaResult = true;
        let {values,errorMsgs,showData} = this.state;
        each(errorMsgs,function(one){
            if(one!==true){
                vaResult = false;
            }
        })
        //debugger
        if(this.state.disabled===true||vaResult===false||size(errorMsgs)!=2){
            return;
        }
        
        this.setState({
            disabled:true
        })
        var self = this;
        let {projectId} = this.props.routeParams;
        values.amount = Number(showData.investmentNum)*10000;
        //debugger;
        fetchPosts("/api/project/"+projectId+"/apply",values,"POST").then((data)=>{
            //debugger;
            if(data.returnCode===0){
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
            }else{
                alert(data.message);
                self.setState({
                    disabled:false
                })
               
                // self.props.router.push({pathname:"/orderinfo/"+projectId});

                //self.props.router.push({pathname:"/"});

            }
            
            //consoel.log("niya . sha b ",data);
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
        if(isNumber(value)&&value<=10000){
            this.setState({
                showData:Object.assign({},this.state.showData,{investmentNum:value})
            });
            console.log(Object.assign({},this.state.showData,{investmentNum:value}))
        }
        
    }
    operate(data){
        let {projectId} = this.props.routeParams;
        //this.props.router.push({pathname:"/orderinfo/"+projectId});
        this.props.history.push({pathname:"/"});
    }

    hangInChange(name,value){
        //ReactDom.findDOMNode(this.refs.temp).focus();

        let errorMsg = true,newState={};
        if(!value){
            errorMsg = (name==='name'?"姓名":"联系电话")+"不能为空";
            //ReactDom.findDOMNode(this.refs.temp).focus();
        }else if(name ==="phone" && !/^1(3|4|5|7|8)\d{9}$/.test(value)){
            errorMsg = "手机号码错误";
        }

         let newValue = {},newMsg = {};
         newValue[name] = value;
         newMsg[name] = errorMsg;


        if(errorMsg===true){
            newState.values = Object.assign({},this.state.values,newValue);
            newState.errorMsgs = Object.assign({},this.state.errorMsgs,newMsg);
        }else{
            newState.errorMsgs = Object.assign({},this.state.errorMsgs,newMsg);
            alert(errorMsg);
            //ReactDom.findDOMNode(this.refs.temp).focus();
            return ;
        }
        
        this.setState(newState);
    }


    render() {
        let {inputProps} = this.props;
        let {investmentNum,estimateMoney,bankMoney,totalNum} = this.state.showData;
        return (
            <div className="order-confirm" >
            <input type="hidden" ref="temp"/>
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

                <div className="order-clause">
                    <Input {...inputProps.name} onChange={this.hangInChange}  />
                    <Input {...inputProps.phone} onChange={this.hangInChange} />
                    
                </div>
                {/*<ul className="order-clause">
                    <li><Input title={"姓名"}  /></li>
                    <li><Input title={"联系电话"}  /></li>
                    <li><span>姓名</span><i></i><input type="text" /></li>
                    <li><span>联系电话</span><i></i><input type="text" /></li>
                </ul>*/}

                <div className="order-sure">
                    <p>合计:<span>¥{totalNum}万</span></p>
                    <button onClick={this.handOk}>确认</button>
                </div>
                <Dialog errorShow={this.state.errorShow} buttonConfirm={(data)=>this.operate(data)} show={this.state.show}  data={this.state.modelData}></Dialog>
            </div>
        )
    }
}
OrderConfirm.defaultProps = {
    inputProps:{
        name:{
            title:"姓名",
            name:"name",
            maxLength:10
        },
        phone:{
            title:"联系电话",
            name:"phone",
            maxLength:11,
            type:"text"
        }
        
    }
}

OrderConfirm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default OrderConfirm;

/**
 * 
 * 
 * type: 'success',
    buttonConfirm: function () {
    },
    errorShow: false,
 */
//<div className="theme-img"></div>