
import React, { Component, PropTypes } from 'react';


import Scroll from "components/swipe/scroll";
import "./page.scss";

const Status = {
    "待审核":"step1",
    "已生效":"step2",
    "已取消":"step3",
    "已结算":"step4",
}

class OrderList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    renderItem(item,i){
        //debugger;
        var step = Status[item.statusDes]||"step1";

        return(<div key={i} className={"order-list-item "+step}>
            <p>{item.projectName}</p><div className="exc">{item.statusDes}</div>
            <div>
                <span>{item.createTime.substr(0,10)}<em>下单时间</em></span>
                <span>{item.amountDes+"万"}<em>订单金额</em></span>
                <span>{item.proportionDes}<em>投资额占比</em></span>
            </div>

        </div>)
    }
    analysis_data(data){
        if(data.returnCode===0){
            return data.data.orderList;
        }
        return false;
    }

    render() {
        let {scrollOptions} = this.props;
        let props = Object.assign({},scrollOptions,{
                analysis_data:this.analysis_data,
                renderItem:this.renderItem
        })
        return (
            <div className="container-order-list">
                    <Scroll {...props}/>
            </div>
        )
    }

}
/*
<Chart projectId={this.props.routeParams.projectId}/>
 */
OrderList.defaultProps = {
    type:1,
    scrollOptions:{
        url:"/api/user/userOrderList.html",
        pageName:"pageNo",
        totalProps:{className:'order-list'}

    }
}

export default OrderList;

//export default withRouter(OrderInfo);

//<div className="theme-img"></div>  <button><span className="step-download"></span></button>
