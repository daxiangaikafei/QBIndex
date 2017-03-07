//recharts


import React, { Component, PropTypes } from 'react';
import ReactDom from "react-dom";
import random from "lodash/random";

import { LineChart,XAxis,YAxis,CartesianGrid, Tooltip,Legend,Line}  from "recharts";



class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.createData = this.createData.bind(this);

        this.state={
            data:false,
            xTicks:[]
        }
    }
    componentWillMount(){
        this.createData();
    }
    createData(){
        let data = [];
        for(let i = 0,j = random(30,365);i<j;i++){
            let newDate = this.formateYMD(i); //formateYMD .formateDate
            data.push({pv:random(-1.9,3),uv:random(-1.9,3),data:newDate});
        }

        // let newDate = [];
        // for(let k=0,l=data.length;k<l;k++){
        //     newDate.push(Object.assign({},data[k],{
        //         data:this.toDateYMD(data[k].data)
        //     }));
        //      console.error("data",newDate[k].data);
        // }
        let xTicks = this.jisuanDate(1);
       
        this.setState({
            data,
            xTicks
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
        now.setMonth(now.getMonth()+3);

        let re = [];
        re.push(this.jisuanMonth(now,-space));
        re.push(this.jisuanMonth(now));
        re.push(this.jisuanMonth(now,space));

        console.log("jisuan",re);
        return re;
    }
    //月份相加
    jisuanMonth(date,num=0){
        let newDate = new Date(date) ;
        newDate.setMonth(newDate.getMonth()+num);
        let month = Number(newDate.getMonth()+1);
        let day = newDate.getDate();
        return newDate.getFullYear()+"-"+(month<10?("0"+month):month)+"-"+(day<10?("0"+day):day);
        //return date;
    }
   
    render() {
        let {data,xTicks} = this.state;

        //console.log("时间为 。",this.formateMD(xTicks[0])); //ticks={xTicks} tickFormatter={this.formateMD} 
        return (
                <LineChart width={300} height={200} data={data} margin={{ top: 5, right: -10, left: 5, bottom: 5 }}>
                    <XAxis dataKey="data" ticks={xTicks} tickFormatter={(data)=>{return data.substr(4)}} />
                    <YAxis axisLine={false} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line labeel={true} type="monotone" dataKey="pv" stroke="#a88872" dot={false} />
                    <Line  type="monotone" dataKey="uv" stroke="#808291" dot={false}/>
                </LineChart>
        )
    }
}
CharInfo.defaultProps = {
    width:false,
    height:false,
}

export default CharInfo;
