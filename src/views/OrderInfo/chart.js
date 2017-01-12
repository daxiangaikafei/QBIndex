import React, { Component, PropTypes } from 'react';
import ReactDom from "react-dom";
import {fetchPosts} from "components/common/fetch";

import CharInfo from "./chartInfo";

import ChartHour from "./chartHour";
import ChartDay from "./chartDay";
import random from "lodash/random";


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state={
            showFirst:props.showFirst,
            firstCss:"chart-select",
            secondCss:"",
            trend:"",
            dataFirst:[],
            dataSecond:[],
            xTicksSecond:[],
            showSpace:"threeMonth",
            style:{
                width:false,
                height:false
            },
            rose:0,//较昨日涨跌幅
            roseSecond:0,
            roseJing:0,//估算净值
            roseAbout:0,//估算收益
        }
        this.handClick = this.handClick.bind(this);
        this.handClickSecond = this.handClickSecond.bind(this);
        this.setStyle = this.setStyle.bind(this);

        this.handChangeSpace = this.handChangeSpace.bind(this);

        this.getFirst = this.getFirst.bind(this);
        this.getSecond = this.getSecond.bind(this);

        this.creatFDate = this.creatFDate.bind(this);
        this.creatHDate = this.creatHDate.bind(this);
    }
    componentWillMount(){
        this.setStyle();
    }
    componentDidMount(){
        var self = this;
        self.getFirst();
        self.getSecond();
        // setTimeout(function(){
            
        //     //self.creatFDate();
        //     //self.creatHDate();

            
        // },1500);
    }
    creatFDate(data = []){
        //let data = [];
        // for(let i = 0,j = 400;i<=j;i++){
        //     let newDate = this.formateYMD(i-400); //formateYMD .formateDate
        //     data.push({self:random(-1.9,3),other:random(-1.9,3),date:newDate});
        // }


        let nowDate = this.formateYMD(-1);
        let yesterday = this.formateYMD(-2);
        let nowData,yesterdayData;

        for(let i=0,j=data.length;i<j;i++){
            let temp = data[i];
            if(nowDate===temp.date){
                nowData = Number(temp.self);
            }else if(yesterday===temp.date){
                yesterdayData = Number(temp.self);
            }
        }
        //debugger
        let rose = "没有前后两天的数据";
        if(nowData&&yesterdayData){
            rose = (nowData-yesterdayData).toFixed(2);
        }
        
        this.setState({
            dataFirst:data,
            rose:(rose||"暂无")
        })
    }
    
    creatHDate(data=[],rose){
        // let xTicks=[];
        // for(let i = 0,j = 5;i<j;i++){
        //     let newDate = this.formateYMD(i); //formateYMD .formateDate
        //     data.push({self:random(-1.9,3),other:random(-1.9,3),date:newDate});
        //     xTicks.push(newDate);
        // }
        //debugger;
        this.setState({
            //xTicksSecond:xTicks,
            dataSecond:data,
            roseSecond:rose,
            roseJing:data[data.length-1].shishijingzhi,
            roseAbout:data[data.length-1].shishishouyi,
        })
    }
     //r日期增加一天 。并格式化为ymd
    formateYMD(num){
        var today = new Date();
        if(num){
            today.setDate(today.getDate()+num);
        }
        let month = Number(today.getMonth()+1);
        let date = today.getDate();
        return today.getFullYear()+"-"+(month<10?("0"+month):month)+"-"+(date<10?("0"+date):date);
    }
    getFirst(){
        var self = this;
        // debugger
        let {projectId} = this.props;
       
        self.setState({dataFirst:false});
        fetchPosts("/api/project/"+projectId+"/profitability",{},"GET").then((data)=>{
            try{
                self.creatHDate(data.data.value,data.data.zuorizhangfu);
            }catch(errorMsg){

            }
            self.creatFDate(data.data);
            // self.setState({
            //     dataFirst:data
            // });
        })
    }
    getSecond(){
        var self = this;
        let {projectId} = this.props;
        self.setState({dataSecond:false});
        fetchPosts("/api/project/"+projectId+"/evaluate",{},"GET").then((data)=>{
            
            try{
                self.creatHDate(data.data.value,data.data.zuorizhangfu);
            }catch(errorMsg){

            }
            
            // self.setState({
            //     dataSecond:data
            // });
        })
    }
    handClick(){
        if(this.state.showFirst===false){
            this.setState({
                firstCss:"chart-select",
                secondCss:"",
                showFirst:true
            })
        }
    }
    handClickSecond(){
        if(this.state.showFirst===true){
            this.setState({
                firstCss:"",
                secondCss:"chart-select",
                showFirst:false
            })
        }
    }
    setStyle(){
        let width = window.innerWidth;
        let height = width*(4/5);
        this.setState({
            style:{
                width,
                height
            }
        })
    }
    handChangeSpace(e){

        console.log("1111",e.target.dataset.space);
        this.setState({
            space:e.target.dataset.space,
            showSpace:e.target.dataset.key
        })
    }
    render() {
        let {firstCss,secondCss,showFirst,dataFirst,dataSecond,xTicksSecond,style,space,showSpace,rose,roseSecond,roseJing,roseAbout} = this.state;
        return (
             <div className="party-chart ">
                    <div className="chart-top">
                        <span onClick={this.handClick} className={firstCss} >盈利走势</span>
                        <span onClick={this.handClickSecond} className={secondCss} > 实时估值</span></div>
                    <div className="chart-info">
                        <div className="part-chart-top">
                            <span className="chart-low-line"></span>
                            <span className="chart-title">{showFirst?"较昨日涨跌幅":"较昨日涨跌幅"}</span>
                            <span className={"chart-num"+(rose>=0?" chart-rose":"")}>{showFirst?rose:roseSecond}%</span>
                            <span className="chart-low-line"></span>
                        </div>
                        <div className="chart-main">
                            <ChartDay space={space} width={style.width} height={style.height} className={showFirst?"":"hide"} data={dataFirst}/>
                            <ChartHour width={style.width} height={style.height} className={showFirst?"hide":""} data={dataSecond} />
                        </div>
                        <div  className={showFirst?"hide":"part-chart-bottom"}>
                            <div className="bottom-title">
                                <span className="chart-title ">估算净值:</span>
                                <span className={"chart-num"+(rose>=0?" chart-rose":"")}>{roseJing}</span>
                                <span className="chart-title ">估算收益:</span>
                                <span className={"chart-num"+(rose>=0?" chart-rose":"")}>{roseAbout}%</span>
                            </div>
                            <p className="chart-remark">
                                <i>i</i>估算值仅供参考，实际涨幅以最新净值为准
                            </p>
                        </div>
                        <div className={showFirst?"part-chart-bottom":"hide"} >
                            <div className="bottom-title">
                                <span className="chart-low-line select"></span>
                                <span className="chart-title select-ex">本产品</span>
                                <span className="chart-low-line "></span>
                                <span className="chart-title ">同类目</span>
                            </div>
                            <div className="chart-todo" onClick={this.handChangeSpace}>
                                <span data-space={1} data-key={"threeMonth"} className={showSpace==="threeMonth"?"select":""}>3月</span>
                                <span data-space={2} data-key={"sixMonth"} className={showSpace==="sixMonth"?"select":""}>6月</span>
                                <span data-space={4} data-key={"year"} className={showSpace==="year"?"select":""}>1年</span>
                                <span data-space={4} data-key={"now"} className={showSpace==="now"?"select":""}>至今</span>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
Chart.defaultProps = {
    showFirst:true
}

export default Chart;
