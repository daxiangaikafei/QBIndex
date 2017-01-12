import React, { Component, PropTypes } from 'react';
import ReactDom from "react-dom";
import "./page.less";
import Swipe from "components/swipe/swipe";

class DemoSwipe extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
    }
    componentDidMount(){
       
    }

    render() {
        let props = {
            min: -60,
            max: 0,
            step: 60,
            findScroller: ".div1",
            vertical:true
        }
        
        return (
                <Swipe className="demo-swipe" property="translateY" {...props}>
                    <div className="div1">1</div>
                    <div className="div1">2</div>
                    <div className="div1">3</div>
                    <div className="div1">4</div>
                </Swipe>
        )
    }
}
DemoSwipe.defaultProps = {
}

export default DemoSwipe;
