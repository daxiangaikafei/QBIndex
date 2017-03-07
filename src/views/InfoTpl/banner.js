import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";

import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";

import "./banner.less";
import Vedio from "./vedio";

import Swipe from "components/swipe/swipe";

class Banner extends Component {
    constructor(props) {
        super(props);
        
    }
    componentWillMount(){

    }

    typeShow(type,item,i){
        switch (type){
            case "image":{
                return (
                    <div key={i} className="order-banner-item">
                        <img src={item.url}/>
                    </div>
                );
            }
            case "video":{
                return (
                    <div key={i} className="order-banner-item">
                        <Vedio bgUrl={item.url} src={item.data}/>
                    </div>
                );
            }
            default:{
                return (JSON.stringify(type));
            }
        }
    }
    render() {
        let {className,step} = this.props;

        let {items} = this.props;
        let i=0,length = items.length,$lis=[],self = this;
        while(i<length){
            let item = items[i];
            i+=1;
            $lis.push(self.typeShow(item.category,item,i))
        }
        
        return (
            <div className={"order-banner "+className}>
                {length>=2?(<Swipe min={-(length-1)*step} step={step} className="order-banner-items">
                    {$lis}
                </Swipe>):$lis}
            </div> 
        )
    }
    isSwipe(length){
        if(length<1){
            return
        }
    }
}


class Item extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let {} = this.props;
        
        return (
            <div className={"order-banner"}>
                <div className="order-banner-items">
                    <div className="order-banner-item">

                    </div>
                </div>

            </div> 
        )
    }
}


Banner.defaultProps = {
    title:"",
    items:[],
    className:"",
    step:window.innerWidth
}


export default Banner;
