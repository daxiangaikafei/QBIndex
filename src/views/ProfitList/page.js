
import React, { Component, PropTypes } from 'react';


import Scroll from "components/swipe/scroll"
import "./page.scss";

function toThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
};
class ProfitList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
       
    }
    renderItem(item,i){
        //debugger;
        return(<div key={i} className="profit-list-item" >
            <p>{item.profitTime}</p>
            <div className="profit-list-item-main">
                <div className="profit-list-item-info">
                    <i>{item.projectName.substr(0,1)}</i>
                    <div>
                        <span>{toThousands(item.totalAmount/100)+"元"}</span>
                        <em>{item.projectName}</em>
                    </div>
                    
                </div>
                <span className="item-icon-right"><i></i></span>               
                <span className="item-tab">{toThousands(item.profitAmount/100)}<em>利润分红(元)</em></span>
                <span className="item-tab">{toThousands(item.assetAmount/100)}<em>股本增值(元)</em></span>
            </div>
        </div>)
    }
    analysis_data(data){
        if(data.returnCode===0){
            return data.data.profitList;
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
            <div className="container-profit-list">
                    <Scroll {...props}/>
                
            </div>
        )
    }
    
}

ProfitList.defaultProps = {
    scrollOptions:{
        url:"/api/user/userProfitList.html",
          pageName:"pageNo",
    }
}

export default ProfitList;