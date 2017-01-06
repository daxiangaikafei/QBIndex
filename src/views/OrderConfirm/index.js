import React, { Component, PropTypes } from 'react';
import "./index.less";





class OrderConfirm extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="order-confirm">
                <div className="order-join">
                    <div className="join-top">
                        <span>我要投(万元)</span>
                        <span>10</span>
                    </div>
                    <div className="join-slide hide"></div>
                </div>

                <ul className="order-estimate">
                    <li className="order-estimate-one">
                        <i></i>
                        <span>预计到期可赚(万元)</span>
                        <span className="estimate-money">64.98</span>
                    </li>
                    <li className="order-estimate-one estimate-bank">
                        <i></i>
                        <span>银行同期可赚(万元)</span>
                        <span className="estimate-money">33.6</span>
                    </li>
                </ul>


                <ul className="order-clause">
                    <li><span>历史报告</span><i></i></li>
                    <li><span>产品合同</span><i></i></li>
                </ul>

                <div className="order-sure">
                    <p>合计:<span>¥21312312</span></p>
                    <button>确认</button>
                </div>
            </div>
        )
    }
}
OrderConfirm.defaultProps = {
}

export default OrderConfirm;

//<div className="theme-img"></div>