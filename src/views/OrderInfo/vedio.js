import React, { Component, PropTypes } from 'react';

import ReactDom from "react-dom";





class Video extends Component {
    constructor(props) {
        super(props);
        this.state={
            play:false
        }
        this.handPlay = this.handPlay.bind(this);
        this.handPause = this.handPause.bind(this);
    }
    handPlay(){
        var domVedio = ReactDom.findDOMNode(this.refs.vedio);
        domVedio.play();
        this.setState({
            play:!this.state.play
        })
    }
    handPause(){
        var domVedio = ReactDom.findDOMNode(this.refs.vedio);
        if(this.state.play===true){
            domVedio.pause();
            this.setState({
                play:!this.state.play
            })
        }
        
    }
    render() {
        let markCss = this.state.play?"vedio-mark-hide":"vedio-mark";
        return (
            <div className="party-video">
                <div className={markCss} onClick={this.handPause}>
                    <div onClick={this.handPlay} className="vedio-mark-play">
                        <span></span>
                    </div>
                </div>
                <video ref="vedio" className="" src="http://7qn8hl.com1.z0.glb.clouddn.com/xuancp480.mp4"></video>
            </div> 
        )
    }
}
Video.defaultProps = {
}

export default Video;
