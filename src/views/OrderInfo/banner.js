import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";

import { VelocityComponent,VelocityTransitionGroup }  from "velocity-react";

import "./banner.less";

class Banner extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let {} = this.props;
        
        return (
            <div className="order-banner">
                <div className="order-banner-items">
                    <div className="order-banner-item">
                        <a href="www.baidu.com">
                        <img src='http://ohhkwhqxa.qnssl.com/20161216/bbe637d2c5d036c0dff6ef59833710b5c0c5e62b.JPG?imageMogr2/interlace/1/thumbnail/450x300'/>
                        </a>
                    </div>
                    <div className="order-banner-item">
                        <a href="www.baidu.com">
                        <img src='http://ohhkwhqxa.qnssl.com/20161216/0162d2e7741ce293c66da7f1dd2c7f45627c4f19.JPG?imageMogr2/interlace/1/thumbnail/450x300'/>
                        </a>
                    </div>
                    <div className="order-banner-item">
                        <a href="www.baidu.com">
                        <img src='http://ohhkwhqxa.qnssl.com/20161216/650b1aaa3b1f8a5b7496d3af3ce9e51089733453.JPG?imageMogr2/interlace/1/thumbnail/450x300'/>
                        </a>
                    </div>
                </div>
            </div> 
        )
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
    title:""
}


export default Banner;
