import React, { Component, PropTypes } from 'react';
import { VelocityComponent }  from "velocity-react";
import ReactDom from "react-dom";

import isArray from "lodash/isArray";



let isFirstLoad = false; 

class Ring extends Component {
    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
        this.state = {
            images:false
        }
    }

    componentWillMount(){
        var self = this;
        
    }

    componentWillUpdate(nextProps,nextState){
        var self =this;
        if(nextState.images&&isArray(nextState.images)&&(nextProps.showNum!==this.props.showNum)||this.state.images == false){
            console.error("--------------");
            let img = new Image();
            //debugger
            img.src = nextState.images[nextProps.showNum];
            // img.addEventListener("load",function(){
            //     //debugger;
            //     self.draw(70,nextState.images[nextProps.showNum],nextProps.levelName);
            // })
            //window.onload = function(){
                
            //}
            
        }
        setTimeout(function(){
            self.draw(70,nextState.images[nextProps.showNum],nextProps.levelName);
        },500)
    }
    
    componentDidMount(){
        var self = this;
        console.error("-------777777777777-------");
        require.ensure([],function(a,b,c,d){
            let arr = [];
            for(let i=0;i<6;i++){
                arr.push(require("static/imgs/theme/sun-header"+i+".jpg"))
            }
            console.error("-----111---");
            self.setState({
                images:arr
            })
        });
        // var self = this;
        
        // setTimeout(function(){
        //     self.draw(70,"static/imgs/theme/sun-header0.jpg","Pro");
        // },1000)

    }
    getAngle(value) {
  		var min=2.72,max=6.65;
  		return (max - min) / 100 * value + min;
  	}
    draw(displayValue,url,level){
            var self = this;
        	var angle = 0.14, innerAngle = angle;
            var displayAngle = this.getAngle(displayValue), innerDisplayAngle = displayAngle;
            var radius = 60, innerRadius = radius - 8, iconRadius = radius - 16;
            
            var startX, startY, x, y, length = 88;
            var img = document.createElement("img");
            img.src = url;
            console.error(url);
            img.crossOrigin = "anonymous";
            img.addEventListener("load",function(){
                    //let ring = document.getElementById("ring");
                    //var canvas = document.getElementById("canvas");
                    var canvas = ReactDom.findDOMNode(self.refs.canvas);
                    let width = canvas.offsetWidth;
                    let height = canvas.offsetHeight;
                    
                    let wi = img.width,hi = img.height;
                    let per = (height)/hi;

                    canvas.width = wi*per;
                    canvas.height = canvas.offsetHeight;

                    var w = canvas.width/2;
                    var h = 100;
                    //debugger;
                    canvas.style.width = wi*per+"px";


                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img,0,0, wi*per, hi*per);
                    ctx.restore();

                    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
                    ctx.beginPath();
                    ctx.arc(w, h, radius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
                    ctx.lineWidth = 1;
                    ctx.lineCap = "round";
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(w, h, innerRadius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
                    ctx.setLineDash([1,4])
                    ctx.stroke();

                    ctx.strokeStyle = "rgb(255, 255, 255)";
                    ctx.beginPath();
                    ctx.setLineDash([0]);
                    ctx.arc(w, h, radius, (1 - angle) * Math.PI, displayAngle, false);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.setLineDash([1,3]);
                    ctx.arc(w, h, innerRadius, (1 - innerAngle) * Math.PI, innerDisplayAngle, false);
                    ctx.stroke();

                    ctx.font="12px Helvetica";
                    ctx.textAlign = "center";
                    ctx.fillStyle = "white";
                    ctx.fillText("QBII",116,70);
                    ctx.fillText("认证等级",116,84);

                    ctx.font="40px Helvetica";
                    ctx.fillText(level,116,126);
                    
                    var strDataURI = canvas.toDataURL("image/jpeg");
                    
                    self.props.buildImage(strDataURI);
                    // this.setState({
                    //     dataUrl:strDataURI
                    // })
                    //console.log(strDataURI)

            },false);       

           
    }
    render() {
        let {levelName} = this.props;
        return (
                <canvas id="canvas" ref="canvas" className="ring"></canvas>
           
        )
    }
}
Ring.defaultProps = {
    level: 0,
    showNum:false,
    levelName:"Pro",
    totalLevel:5,
    buildImage:()=>{}
}

export default Ring;
