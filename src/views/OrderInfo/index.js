import React, { Component, PropTypes } from 'react';

import "./index.less";



import Vedio from "./vedio";
import Area from "./area.js";
import Chart from "./chart.js";

class OrderConfirm extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="party-info">

                <div className="party-head">
                    <div className="party-logo"></div>
                </div>
                <Area className="" title="冰穹互娱股权投资一期资管计划" hasIcon={false}>
                    <ul className="party-plan">
                        <li><span>钱旺</span><span>投资方向</span></li>
                        <li><span>五年</span><span>存续期限</span></li>
                        <li><span>100万</span><span>认购起点</span></li>
                    </ul>
                </Area>
                <Area className="area-margin area-bottom" title="项目解析" hasIcon={false}>
                    <Vedio/>
                </Area>

               

                <Area className="area-margin" title="特色亮点" hasIcon={true} hasLine={true}>
                    <ul className="area-rows">
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                        <li><span>目标规模</span><span>3000万</span></li>
                    </ul>
                </Area>
                <Chart/>

                <Area className="area-margin" title="募集说明" hasIcon={false}>
                    <div className="party-step">
                        <div className="step-row">
                            <span>申购</span>
                            <span>确认份额</span>
                        </div>
                         <div className="step-row step-arrow">
                        </div>
                        <div className="step-row">
                            <span>12-21</span>
                            <span>12-31</span>
                            <span>持有中</span>
                        </div>
                    </div>
                </Area>

                <div className="step-end" >
                    <button><span className="step-heart"></span></button>
                    <button><span className="step-download"></span></button>
                    <button className="step-btn-end">我有意向</button>
                </div>


                
            </div>
        )
    }
}
OrderConfirm.defaultProps = {
}

export default OrderConfirm;

//<div className="theme-img"></div>