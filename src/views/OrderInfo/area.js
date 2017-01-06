import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";

import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";



class Area extends Component {
    constructor(props) {
        super(props);
        this.state={
            shrink:false,
            "anBefore":{
                duration:300,
                animation:{
                    rotateZ:0
                },
            },
            "anAfter":{
                duration:300,
                animation:{
                    rotateZ:90
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
        let {enterAnimation,leaveAnimation} = this.props;
        let anProps = this.state.shrink===false?this.state.anBefore:this.state.anAfter;
        let {title,className,hasIcon,hasLine} = this.props;
        return (
            <div className={"area-info "+className}>
                <div onClick={this.handClick} className={"area-info-title"+(hasLine?" bottom-line":"")}>
                    <span>{title}</span>
                    <VelocityComponent {...anProps}>
                        <i  className={hasIcon?"":"hide"}></i>
                    </VelocityComponent>
                </div>
                <VelocityTransitionGroup enter={enterAnimation} leave={leaveAnimation}>
                { this.state.shrink===false?this.props.children:null}
                </VelocityTransitionGroup>
            </div> 
        )
    }
}
Area.defaultProps = {
    title:"",
    className:"area-margin",
    hasIcon:true,
    hasLine:false,
    enterAnimation: {
        duration: 300,
        animation: "slideDown"
    },
    leaveAnimation:{
        duration: 300,
        animation:"slideUp"
    }
}

export default Area;
