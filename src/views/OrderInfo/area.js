import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";

import { VelocityComponent }  from "velocity-react";



class Area extends Component {
    constructor(props) {
        super(props);
        this.state={
            shrink:false,
            "anBefore":{
                duration:500,
                animation:{
                    rotateZ:0
                },
            },
            "anAfter":{
                duration:500,
                animation:{
                    rotateZ:120
                },
            }
        }
        this.handClick = this.handClick.bind(this);
    }
    handClick(){
        console.log("hehe");
        if(this.props.hasIcon===false){
            return false;
        }
        this.setState({
            shrink:!this.state.shrink
        })
    }
    render() {
       let anProps = this.state.shrink===false?this.state.anBefore:this.state.anAfter;
        let {title,className,hasIcon,hasLine} = this.props;
        return (
            <div className={"area-info "+className}>
                <div onClick={this.handClick} className={"area-info-title"+(hasLine?" bottom-line":"")}>
                    <span>{title}</span><i  className={hasIcon?"":"hide"}></i>
                </div>
                <VelocityComponent  {...anProps}>
                {this.props.children}
                </VelocityComponent>
            </div> 
        )
    }
}
Area.defaultProps = {
    title:"",
    className:"area-margin",
    hasIcon:true,
    hasLine:false
}

export default Area;
