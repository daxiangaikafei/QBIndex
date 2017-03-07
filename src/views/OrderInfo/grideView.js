import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";

import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";



class GrideView extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let {} = this.props;
        
        return (
            <div className={"area-info "}>
            </div> 
        )
    }
}
GrideView.defaultProps = {
    title:""
}

export default GrideView;
