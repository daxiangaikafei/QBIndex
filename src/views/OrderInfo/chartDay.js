//recharts


import React, { Component, PropTypes } from 'react';
import ReactDom from "react-dom";
import random from "lodash/random";
import isEqual from "lodash/isEqual";

import { LineChart,XAxis,YAxis,CartesianGrid, Tooltip,Legend,Line}  from "recharts";



class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.createData = this.createData.bind(this);

        this.state={
            data:[],
            xTicks:[]
        }
    }
    componentWillMount(){
       // this.createData();
    }
    componentWillUpdate(nextProps,nextState){
        if(!isEqual(nextProps,this.props)){
            this.createData(nextProps);
        }
    }
    
    
    createData(props){

        // let data = [];
        // for(let i = 0,j = random(30,365);i<j;i++){
        //     let newDate = this.formateYMD(i); //formateYMD .formateDate
        //     data.push({self:random(-1.9,3),other:random(-1.9,3),date:newDate});
        // }
        let {xTicks,showTick} = this.jisuanDate(props.space);
        let data = [];
        for(let i=0,j=props.data.length;i<j;i++){
            let temp = props.data[i];
            if(temp.date>=xTicks[0]&&temp.date<=xTicks[2]){
                data.push(temp);
                console.log(temp.date);
            }
        }
        this.setState({
            data,
            xTicks:showTick
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
    //日期增加一天
    formateDate(num){
        var today = new Date();
        if(num){
            today.setDate(today.getDate()+num);
        }
        return Number(today.getMonth()+1)+"-"+today.getDate();
    }
    //格式化日期为 MD
    formateMD(data){
        console.log("aha . niangzi ",data);
        //debugger;
        if(data===""){
            return false;
        }
        return Number(data.getMonth()+1)+"-"+data.getDate();
    }
    //YMD转换为 Date对象
    toDateYMD(ymd,space="-"){
        let dataArray = ymd.split(space);
        let date = new Date();
        date.setMonth(dataArray[0]);
        date.setDate(dataArray[1]);
        //console.log("时间为：",date);
        //debugger;
        return date;
    }
    //计算日期的 月间隔
    jisuanDate(space=1){
        let now  = new Date();
        //now.setMonth(now.getMonth()+3);
        space = Number(space);
        let xTicks = [],showTick=[];
        // re.push(this.jisuanMonth(now,-space));
        // re.push(this.jisuanMonth(now));
        // re.push(this.jisuanMonth(now,space));
        xTicks.push(this.jisuanMonth(now,-space*3));
        xTicks.push(this.jisuanMonth(now,-space));
        xTicks.push(this.jisuanMonth(now));

        let num = parseInt(30*3*space/4);
        showTick.push(this.jisuanMonth(now,-space*3,num));
        showTick.push(this.jisuanMonth(now,-space*3,num*2));
        showTick.push(this.jisuanMonth(now,-space*3,num*3));

        console.log("num",num)
        console.log("jisuan",xTicks);
        console.log("jisuan",showTick);
        return {
            xTicks,
            showTick
        };
    }
    jisuanXdate(){

    }
    //月份相加
    jisuanMonth(date,num=0,dayNum=false){
        let newDate = new Date(date) ;
        //debugger;
        newDate.setMonth(Number(newDate.getMonth())+num);
        
        if(dayNum!==false){
            //debugger;
            newDate.setDate(Number(newDate.getDate())+dayNum)
        }
        let month = Number(newDate.getMonth())+1;
        //newDate.setDate(Number(newDate.getDate())-10)
        let day = newDate.getDate();
        
        console.log("jisuan",num,month,day);
        
        
        return newDate.getFullYear()+"-"+(month<10?("0"+month):month)+"-"+(day<10?("0"+day):day);
        //return date;
    }
   
    render() {
        let {data,xTicks} = this.state;

        let {className,width,height} = this.props;
        //console.log("时间为 。",this.formateMD(xTicks[0])); //ticks={xTicks} tickFormatter={this.formateMD}  margin={{ top: 5, right: -10, left: 5, bottom: 5 }}
        return (
            <div className={"chart-main "+className}>
                <LineChart width={width} height={height} data={data} >
                    <XAxis dataKey="date" ticks={xTicks} tickFormatter={(data)=>{return data.substr(4)}} />
                    <YAxis axisLine={false} tickCount={3} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line labeel={true} type="monotone" dataKey="self" stroke="#a88872" dot={false} />
                    <Line  type="monotone" dataKey="other" stroke="#808291" dot={false}/>
                </LineChart>
            </div>
        )
    }
}
CharInfo.defaultProps = {
    width:false,
    height:false,
    className:"",
    space:1
}

export default CharInfo;
