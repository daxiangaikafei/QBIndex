import React, { Component, PropTypes } from 'react';
import ReactDom from "react-dom";
import {fetchPosts} from "components/common/fetch";

import CharInfo from "./chartInfo";

import ChartHour from "./chartHour";
import ChartDay from "./chartDay";


class Chart extends Component {
    constructor(props) {
        super(props);
        this.state={
            showFirst:props.showFirst,
            firstCss:"chart-select",
            secondCss:"",
            trend:"",
            dataFirst:false,
            dataSecond:false,
            style:{
                width:false,
                height:false
            }
        }
        this.handClick = this.handClick.bind(this);
        this.handClickSecond = this.handClickSecond.bind(this);
        this.setStyle = this.setStyle.bind(this);

        this.handChangeSpace = this.handChangeSpace.bind(this);
    }
    componentWillMount(){
        this.setStyle();
    }
    componentDidMount(){
        var self = this;
        setTimeout(function(){
            self.getFirst();
        },1500);
    }
    getFirst(){
        var self = this;
        let {projectId} = this.props.routeParams;
        self.setState({dataFirst:false});
        fetchPosts("/api/project/"+projectId+"evaluate",{},"GET").then((data)=>{
            self.setState({
                dataFirst:data
            });
        })
    }
    getSecond(){
        var self = this;
        let {projectId} = this.props.routeParams;
        self.setState({dataSecond:false});
        fetchPosts("/api/project/"+projectId+"profitability",{},"GET").then((data)=>{
            self.setState({
                dataSecond:data
            });
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
            space:e.target.dataset.space
        })
    }
    render() {
        let {firstCss,secondCss,showFirst,dataFirst,dataSecond,style,space} = this.state;
        return (
             <div className="party-chart ">
                    <div className="chart-top">
                        <span onClick={this.handClick} className={firstCss} >盈利走势</span>
                        <span onClick={this.handClickSecond} className={secondCss} > 实时估值</span></div>
                    <div className="chart-info">
                        <div className="part-chart-top">
                            <span className="chart-low-line"></span>
                            <span className="chart-title">{showFirst?"近一月涨跌幅":"较昨日涨跌幅"}</span>
                            <span className="chart-num">-0.98%</span>
                            <span className="chart-low-line"></span>
                        </div>
                        <div className="chart-main">
                            <ChartDay space={space} width={style.width} height={style.height} className={showFirst?"":"hide"} data={dataFirst}/>
                            <ChartHour width={style.width} height={style.height} className={showFirst?"hide":""} data={dataSecond}/>
                        </div>
                        <div className="part-chart-bottom hide">
                            <p className="chart-remark">
                                <i>i</i>估算值仅供参考，实际涨幅以最新净值为准
                            </p>
                        </div>
                        <div className="part-chart-bottom">
                            <div className="bottom-title">
                                <span className="chart-low-line select"></span>
                                <span className="chart-title select-ex">本产品</span>
                                <span className="chart-low-line "></span>
                                <span className="chart-title ">同类目</span>
                            </div>
                            <div className="chart-todo" onClick={this.handChangeSpace}>
                                <span data-space={1} className="select">3月</span>
                                <span data-space={2} >6月</span>
                                <span data-space={6}>1年</span>
                                <span data-space={6}>至今</span>
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
