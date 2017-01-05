import React, { Component, PropTypes } from 'react';
import "./page.less";

import { VelocityComponent, VelocityTransitionGroup } from "velocity-react";
import {withRouter} from "react-router";


class AnDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false,
            expanded:false
        }
        this.handClick = this.handClick.bind(this);
        this.handCheck = this.handCheck.bind(this);
    }
    handClick() {
        this.setState({ hovering: !this.state.hovering });
    }
    componentDidMount() {
        //this.setState({ hovering: !this.state.hovering });
    }
    handCheck(){
        this.setState({ expanded: !this.state.expanded });
    }
    render() {
        let {enterAnimation,leaveAnimation} = this.props;
        var animationProps;
        if (this.state.hovering) {
            animationProps = {
                duration: 200,
                animation: {
                    rotateX: 160
                }
            };
        }
        else {
            animationProps = {
                duration: 1100, // longer due to swinging
                animation: {
                    rotateX: [0, 'spring']
                }
            };
        }
        return (
            <div className="an-demo" >
                <VelocityComponent {...animationProps} >
                    <div onClick={this.handClick}  className="an-demo-1">sdfsd</div>
                </VelocityComponent>
                <button onClick={this.handCheck} >切换状态</button>
                 <VelocityTransitionGroup component="div" className="flex-1"  enter={enterAnimation} leave={leaveAnimation}>
                     {this.state.expanded ? this.renderLocations() : null}
                </VelocityTransitionGroup>
            </div>
        )
    }
    renderLocations(){
        return (
            <div style={{height:"5rem",width:"5rem"}}>heh呵呵呵呵呵呵</div>
        )
    }
}
AnDemo.defaultProps = {
    enterAnimation: {
        duration: 2000,
        animation: "slideDown"
    },
    leaveAnimation:{
        duration: 2000,
        animation:"slideUp"
    }
}

export default withRouter(AnDemo);