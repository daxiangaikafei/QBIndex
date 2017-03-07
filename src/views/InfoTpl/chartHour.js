//recharts


import React, { Component, PropTypes } from 'react';
import ReactDom from "react-dom";
import random from "lodash/random";
import isEqual from "lodash/isEqual";

import { LineChart,XAxis,YAxis,CartesianGrid, Tooltip,Legend,Line}  from "recharts";



class CharHour extends Component {
    constructor(props) {
        super(props);
        this.createData = this.createData.bind(this);
        this.state={
            data:[],
            xTicks:["04","08","12","16","20"]
        }
    }
    componentWillMount(){
        this.createData(this.props);
    }
    componentWillUpdate(nextProps,nextState){
        if(!isEqual(nextProps,this.props)){
            this.createData(nextProps);
        }
    }
    createData(props){
        let data = [],xTicks=[];
        // for(let i = 0,j = 5;i<j;i++){
        //     let newDate = this.formateYMD(i); //formateYMD .formateDate
        //     data.push({pv:random(-1.9,3),uv:random(-1.9,3),data:newDate});
        //     xTicks.push(newDate);
        // }
        // let length = props.data.length;
        // for(let i=(length>5?5:(length-1)),j=0;i>=j;i--){
            
        //     if(!props.data[i]){
        //         continue;
        //     }
        //     data.push(props.data[i]);
        //     xTicks.push(props.data[i].hour);
        // }
        //debugger
        this.setState({
            data:props.data===false?[]:props.data,
            //xTicks:xTicks
        })
    }
    //r日期增加一天 。并格式化为ymd
    formateYMD(num){
        var today = new Date();
        if(num){
            today.setHours(today.getHours()+num);
        }
        let hour = Number(today.getHours());
        let date = today.getDate();
        return "00"+(date<10?("0"+date):date)+" "+(hour<10?("0"+hour):hour)+":00";
    }
   
 
    
   
    render() {
        let {data,xTicks} = this.state;
        let {className,width,height} = this.props;
        return (
            <div className={"chart-main "+className}>
                <LineChart width={width} height={height} data={data} >
                    <XAxis padding={{left:10,right:10}} tickCount={3}  dataKey="hour" tickFormatter={(data)=>{return data+":00"}} />
                    <YAxis axisLine={false} tickCount={5} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line label={true} type="monotone" dataKey="fudongbaifenbi" stroke="#a88872" dot={false} />
                   
                </LineChart>
            </div>
        )
    }
}
// <Line  type="monotone" dataKey="other" stroke="#808291" dot={false}/>
CharHour.defaultProps = {
    width:false,
    height:false,
    className:"",
    data:[]
}
//return data.substr(4)}

export default CharHour;
