import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";

import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";

import Area from "./area.js";

class TextView extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let {title,items} = this.props;
        
        return (
            
                <div  className="area-p area-duan">
                    {items&&items[0].data}
                </div>
        )
    }
}
TextView.defaultProps = {
    title:"",
    item:[],
}

export default TextView;