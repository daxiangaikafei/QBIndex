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
            data:[]
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
        // let data = [],xTicks=[];
        // for(let i = 0,j = 5;i<j;i++){
        //     let newDate = this.formateYMD(i); //formateYMD .formateDate
        //     data.push({pv:random(-1.9,3),uv:random(-1.9,3),data:newDate});
        //     xTicks.push(newDate);
        // }
        this.setState({
            data:props.data,
            xTicks:props.xTicks
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
                    <XAxis tickCount={5} dataKey="date" tickFormatter={(data)=>{return data.substr(4)}} />
                    <YAxis axisLine={false} tickCount={5} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line labeel={true} type="monotone" dataKey="self" stroke="#a88872" dot={false} />
                   
                </LineChart>
            </div>
        )
    }
}
// <Line  type="monotone" dataKey="other" stroke="#808291" dot={false}/>
CharInfo.defaultProps = {
    width:false,
    height:false,
    className:"",
    data:[],
    xTicks:[]
}

export default CharInfo;
