
import React, {Component, PropTypes} from 'react';
import * as ReactDOM from 'react-dom';
import {_} from "./help.js";

class Swipe extends Component {
     constructor(props) {
        super(props);
        this.state = {
          value: props.value,
          isShowLoad:true
        };

        this.scrollInit = this.scrollInit.bind(this);
        //this.scrollEnd = this.scrollEnd.bind(this);
        //this.upFn = this.upFn.bind(this);
        //this.handleBlur = this.handleBlur.bind(this);
    }
    componentWillMount(){
        let _this = this;
        _this.AlloyTouch = false;
        require.ensure([], () => {
           _this.AlloyTouch = require("./alloyTouch.js");
        })
    }
    componentWillReceiveProps(nextProps){

        if(nextProps.isShowLoad!==undefined&&nextProps.isShowLoad!==this.state.isShowLoad){
            this.setState({
                isShowLoad:nextProps.isShowLoad
            })
        }
    }
    componentDidUpdate(prevProps,prevState){
       /* if(this.AlloyTouch&&prevState.isShowLoad!==this.state.isShowLoad){
            //console.log("掉用这里？")
            this.scrollInit();
        }*/

        let {stopPro,property,width,min,max,step,findScroller,vertical,findDis,touchMove} = this.props;
        if(min==="auto"&&this.alloyTouch&&vertical===true&&property==="translateY"){
            // debugger;
              let target = ReactDOM.findDOMNode(this.refs.swipe);
            let dom = ReactDOM.findDOMNode(this.refs.touch); //offsetTop
            let length = -(target.clientHeight-dom.clientHeight);
            this.alloyTouch.min = length>0?0:length;
         }

    }
    componentDidMount(){
        let _this = this;
        if(_this.AlloyTouch){
            _this.scrollInit()
        }else{
            require.ensure([], () => {
               _this.AlloyTouch = require("./alloyTouch.js");
               _this.scrollInit();
            })
        }
    }
    componentWillUnmount(){
        //debugger
        this.alloyTouch&&this.alloyTouch.destory();
    }
    scrollInit(){
        let dom = ReactDOM.findDOMNode(this.refs.touch); //offsetTop
         let target = ReactDOM.findDOMNode(this.refs.swipe);
        let {intervals,stopPro,property,width,min,max,step,findScroller,vertical,findDis,touchMove} = this.props;
        let prevTarget = false;
        //let $ = this.$;

        // if(findDis!==false){
        //     let dis = $(findDis,$(dom)).eq(0).width();
        //     min = -dis;
        //     step = dis;
        // }

        //console.log("dom",dom);
        if(min==="auto"){
            min = -1000;
            min = -((vertical===false?target.offsetWidth:target.offsetHeight)-(vertical===false?dom.offsetWidth:dom.offsetHeight));
            console.log(min);
            min = min>0?0:min;
        }
        this.alloyTouch = new this.AlloyTouch({
            touch: dom,//反馈触摸的dom
            target:target,
            vertical: vertical,//不必需，默认是true代表监听竖直方向touch
            target: target, //运动的对象
            property: property,  //被运动的属性
            sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
            factor: 1,//不必需,表示触摸位移与被运动属性映射关系，默认值是1
            min: min, //不必需,运动属性的最小值
            max: max, //不必需,滚动属性的最大值
            step: step,
            spring: true, //不必需,是否有回弹效果。默认是true
            inertia: false, //不必需,是否有惯性。默认是true
            intelligentCorrection: true,
            stopPro:stopPro,
            touchStart: function (value,target) {
                console.log("heheda ",value)
            },
            touchMove:_.throttle(function(){
                touchMove(this,arguments);
            },intervals),

        });

    }
    render() {
        let {onClick} = this.props;
        return (
            <div className={this.props.className} ref="touch"  style={this.props.style} onClick={onClick}>
                <div ref="swipe">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Swipe.defaultProps={
    property:"translateX",
    width:false,
    min:0,
    max:0,
    step:0,
    vertical:false,
    findScroller:false,
    target:"",
    className:"",
    findDis:false,
    stopPro:true,
    intervals:300,//间隔时间
    touchMove:function(x){
        //console.error("sssssss",this,x)
    },
    onClick:function(){

    }

}

module.exports = Swipe;
