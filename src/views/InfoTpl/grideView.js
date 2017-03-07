import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";

import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";


import "./grideView.less";

class GrideView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {items} = this.props;
        let i=0,length = items.length,$lis=[];
        while(i<length){
            let item = items[i];
            i+=1;
            $lis.push(<li key={i}><span>{item.title}</span><span>{item.data}</span></li>)
        }
        return (
            <ul className="party-plan">
                {$lis}
            </ul>
        )
    }
}
GrideView.defaultProps = {
    title:"",
    items:[]
}

export default GrideView;
