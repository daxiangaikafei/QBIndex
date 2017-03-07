import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";

import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";



class TextView extends Component {
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
TextView.defaultProps = {
    title:""
}

export default TextView;
