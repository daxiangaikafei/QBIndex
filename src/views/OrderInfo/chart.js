import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";





class Chart extends Component {
    constructor(props) {
        super(props);
        this.state={
            showFirst:props.showFirst,
            firstCss:"chart-select",
            secondCss:""
        }
        this.handClick = this.handClick.bind(this);
        this.handClickSecond = this.handClickSecond.bind(this);
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
    render() {
        let {firstCss,secondCss} = this.state;
        return (
             <div className="party-chart ">
                    <div className="chart-top">
                        <span onClick={this.handClick} className={firstCss} >盈利走势</span>
                        <span onClick={this.handClickSecond} className={secondCss} > 实时估值</span></div>
                    <div className="chart-info">
                        <div className="part-chart-top">
                            <span className="chart-low-line"></span>
                            <span className="chart-title">估算涨跌幅</span>
                            <span className="chart-num">-0.98%</span>
                            <span className="chart-low-line"></span>
                        </div>
                        <div className="chart-main"></div>
                        <div className="part-chart-bottom hide">
                            <p className="chart-remark">
                                <i>i</i>估算值仅供参考，实际涨幅以最新净值为准
                            </p>
                        </div>
                        <div className="part-chart-bottom">
                            <div className="bottom-title">
                                <span className="chart-low-line"></span>
                                <span className="chart-title">本产品</span>
                                <span className="chart-low-line select"></span>
                                <span className="chart-title select-ex">同类目</span>
                            </div>
                            <div className="chart-todo">
                                <span className="select">3月</span>
                                <span>6月</span>
                                <span>1年</span>
                                <span>至今</span>
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
