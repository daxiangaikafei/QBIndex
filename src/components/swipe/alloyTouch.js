/* AlloyTouch
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/AlloyTouch
 * MIT Licensed.
 */
/*; (function () {*/

//import * as _ from './../util/underscore';
//import {$}  from 'zepto';
import Transform from './transform';


(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

function bind(element, type, callback) {
    element.addEventListener(type, callback, false);
}
function removeBind(element, type, callback){
    //element.removeEventListener()
    //debugger;
    element.removeEventListener(type, callback, false);
}

function iosEase(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
}

function preventDefaultTest (el, exceptions) {
    for (var i in exceptions) {
        if (exceptions[i].test(el[i])) {
            return true;
        }
    }
    return false;
}

var AlloyTouch = function (option) {
    /*tp  改写  2016年9月1日start*/
    this.findScroller = option.findScroller?option.findScroller:false;
    //this.findScroller = option.findScroller || function () { };
    this.iosEase = iosEase;
    //this.transform = transform;
    /*tp  改写  2016年9月1日 end*/

    /*tp 2016年10月18日 改写 start*/
    this.reverse = option.reverse===false?option.reverse:true;
    /*tp 2016年10月18日 改写 end*/

    this.scroller = option.target;
    this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
    this.vertical = option.vertical;
    this.vertical === undefined && (this.vertical = true);
    this.property = option.property;
    this.tickID = 0;
    this.preX;
    this.preY;
    this.sensitivity = option.sensitivity === undefined ? 1 : option.sensitivity;
    this.factor = option.factor === undefined ? 1 : option.factor;
    this.sMf = this.sensitivity * this.factor;
    //拖动时候的摩擦因子
    this.factor1 = 1;
    this.min = option.min;
    this.max = option.max;
    this.startTime;
    this.start;
    this.deceleration = 0.0006;
    this.change = option.change || function () { };
    this.touchEnd = option.touchEnd || function () { };
    this.touchStart = option.touchStart || function () { };
    this.touchMove = option.touchMove || function () { };
    this.reboundEnd = option.reboundEnd || function () { };
    this.animationEnd = option.animationEnd || function () { };
    this.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ };
    this.hasMin = !(this.min === undefined);
    this.hasMax = !(this.max === undefined);
    this.isTouchStart = false;
    this.step = option.step;
    this.spring = option.spring;
    this.spring === undefined && (this.spring = true);
    this.inertia = option.inertia;
    this.inertia === undefined && (this.inertia = true);
    this.correctionEnd = option.correctionEnd || function () { };
    this.intelligentCorrection = option.intelligentCorrection;
    if (this.hasMax && this.hasMin) {
        this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
    }

    this.move = this._move.bind(this);
    this.end = this._end.bind(this);
    bind(this.element, "touchstart", this._start.bind(this));
    bind(window, "touchmove", this.move);
    bind(window, "touchend", this.end);

    this.destory = this.destory.bind(this);

    if(!this.findScroller){
       // //console.log("this.element",this.scroller)
        Transform(this.scroller);
    }
}

AlloyTouch.prototype = {
    destory:function(){
        //removeBind(this.element, "touchstart", this._start);
        removeBind(window, "touchmove", this.move);
        removeBind(window, "touchend", this.end);
    },
    _start: function (evt) {
       // setTimeout(function(){
            this.isTouchStart = true;
            this._firstTouchMove = true;
            this._preventMoveDefault = true;

            console.log("触发 。----------------------------start")

            if(evt.touches.length>1){
                return false
            }
            /*
             tp  改写  2016年9月1日
             */
            //找到 对应的 子的target 并加对应的transform事件
            //__translateX
            if(this.findScroller){
                
                this.scroller = this.findScroller(evt);

                //this.scroller = $(evt.target).parents(this.findScroller).get(0);
                if(this.scroller ){
                    //console.info("进入  自定义方法",this.scroller[this.property])
                    this.scroller[this.property]===undefined&&Transform(this.scroller);
                    this.touchStart(this.scroller[this.property],this.scroller);
                    cancelAnimationFrame(this.tickID);
                    this.correctionEnd(this.scroller[this.property],this.scroller);
                    if (this.hasMax && this.hasMin) {
                        this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
                    }
                    this.startTime = new Date().getTime();
                    this._startX = this.preX = evt.touches[0].pageX;
                    this._startY = this.preY = evt.touches[0].pageY;
                    this.start = this.vertical ? this.preY : this.preX;
                }
              /*  else{
                     this.touchStart(this.scroller[this.property],false);
                     return;
                }*/
                // this.scroller = $(evt.target).children(this.findScroller).get(0);

            }else{
                    this.touchStart(this.scroller[this.property],this.scroller);
                    cancelAnimationFrame(this.tickID);
                    this.correctionEnd(this.scroller[this.property],this.scroller);
                    if (this.hasMax && this.hasMin) {
                        this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
                    }
                    this.startTime = new Date().getTime();
                    this._startX = this.preX = evt.touches[0].pageX;
                    this._startY = this.preY = evt.touches[0].pageY;
                    this.start = this.vertical ? this.preY : this.preX;
            };
            /* 改写  end */


       // }.bind(this),0)
    },
    _move: function (evt) {
        //setTimeout(function(){
            if (this.isTouchStart) {
                if (this._firstTouchMove) {
                    var dDis=Math.abs(evt.touches[0].pageX - this._startX) - Math.abs(evt.touches[0].pageY - this._startY);
                    if (dDis > 0 && this.vertical) {
                        this._preventMoveDefault = false;
                    } else if (dDis < 0 && !this.vertical) {
                        this._preventMoveDefault = false;
                    }
                    this._firstTouchMove = false;
                }
                if (this._preventMoveDefault&&this.scroller) {


                    if(evt.touches.length>1){
                        return false
                    }
                   
                    var d = (this.vertical ? evt.touches[0].pageY - this.preY : evt.touches[0].pageX - this.preX) * this.sMf;
                    if (this.hasMax && this.scroller[this.property] > this.max && d > 0) {
                        this.factor1 = 0.3;
                    } else if (this.hasMin && this.scroller[this.property] < this.min && d < 0) {
                        this.factor1 = 0.3;
                    } else {
                        this.factor1 = 1;
                    }
                    d *= this.factor1;
                    
                    /*tp  2016年10月18日  改写  start*/
                    if(this.reverse===false&&(d<0)){
                            //console.log("222")
                            return false;
                    }
                    /*tp  2016年10月18日  改写  end*/

                    this.preX = evt.touches[0].pageX;
                    this.preY = evt.touches[0].pageY;
                    this.scroller[this.property] += d;
                    this.change(this.scroller[this.property]);
                    var timestamp = new Date().getTime();
                    if (timestamp - this.startTime > 300) {
                        this.startTime = timestamp;
                        this.start = this.vertical ? this.preY : this.preX;
                    }
                    this.touchMove(this.scroller[this.property]);

                    evt.preventDefault();
                }
            }
            console.info("触发 。----------------------------move--------------")
       // }.bind(this),0)

    },
    _end: function (evt) {

        console.info("触发 。----------------------------end--------------")
       /* //console.log("zuihou ",this.scroller[this.property]);
        if(this.reverse===false&&this.scroller[this.property]===0){
            return false;
        }*/
        if(evt.touches.length>1){
                        return false
                    }
        if (this.isTouchStart && this._preventMoveDefault&&this.scroller) {
            var self = this;
            this.touchEnd(this.scroller[this.property]);
            if (this.hasMax && this.scroller[this.property] > this.max) {
                this.to(this.scroller, this.property, this.max, 200, iosEase, this.change,function(value){
                    this.reboundEnd(value);
                    this.animationEnd(value);
                }.bind(this));
            } else if (this.hasMin && this.scroller[this.property] < this.min) {
                this.to(this.scroller, this.property, this.min, 200, iosEase, this.change,function(value){
                    this.reboundEnd(value);
                    this.animationEnd(value);
                }.bind(this));
            } else if (this.inertia) {
                //var y = evt.changedTouches[0].pageY;
                var duration = new Date().getTime() - this.startTime;
                if (duration < 300) {
                    var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
                        speed = Math.abs(distance) / duration,
                        speed2 = this.factor * speed,
                        destination = this.scroller[this.property] + (speed2 * speed2) / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

                    self.to(this.scroller, this.property, Math.round(destination), Math.round(speed / self.deceleration), iosEase, function (value) {

                        if (self.spring) {
                            if (self.hasMax && self.scroller[self.property] > self.max) {
                                setTimeout(function () {
                                    cancelAnimationFrame(self.tickID);
                                    self.to(self.scroller, self.property, self.max, 200, iosEase, self.change, self.animationEnd);
                                }, 50);
                            } else if (self.hasMin && self.scroller[self.property] < self.min) {
                                setTimeout(function () {
                                    cancelAnimationFrame(self.tickID);
                                    self.to(self.scroller, self.property, self.min, 200, iosEase, self.change, self.animationEnd);
                                }, 50);
                            }
                        } else {

                            if (self.hasMax && self.scroller[self.property] > self.max) {
                                cancelAnimationFrame(self.tickID);
                                self.scroller[self.property] = self.max;
                                self.animationEnd(self.max);

                            } else if (self.hasMin && self.scroller[self.property] < self.min) {
                                cancelAnimationFrame(self.tickID);
                                self.scroller[self.property] = self.min;
                                self.animationEnd(self.min);

                            }
                        }
                        self.change(self.scroller[self.property]);
                    }, function () {
                        if (self.step) {
                            self.correction(self.scroller, self.property);
                        } else {
                            self.animationEnd(self.scroller[self.property]);
                        }
                    });
                } else {
                    if (self.step) {
                        self.correction(self.scroller, self.property);
                    }
                }
            } else {
                if (self.step) {
                    self.correction(self.scroller, self.property);
                }
            }
            if (!preventDefaultTest(evt.target, this.preventDefaultException)) {
                evt.preventDefault();
            }
            this.isTouchStart = false;
        }
    },
    to: function (el, property, value, time, ease, onChange, onEnd) {
        //setTimeout(function(){
            var current = el[property];
            var dv = value - current;
            var beginTime = new Date();
            var self = this;
            var toTick = function () {

                var dt = new Date() - beginTime;
                if (dt >= time) {
                    el[property] = value;
                    onChange && onChange(value);
                    onEnd && onEnd(value);
                    return;
                }
                el[property] = dv * ease(dt / time) + current;
                self.tickID = requestAnimationFrame(toTick);
                //cancelAnimationFrame必须在 tickID = requestAnimationFrame(toTick);的后面
                onChange && onChange(el[property]);
            }
            toTick();
        //}.bind(this),0)

    },
    correction: function (el, property) {


        var value = el[property];
        ////console.error("你要干啥",value)
        if (this.intelligentCorrection&&this.hasMax && this.hasMin) {
            var prevPage = this.currentPage;
            var d = this.scroller[this.property] - (this.max - prevPage * this.step);
            if (Math.abs(d) > this.step / 20) {
                if (d > 0) {
                    this.to(el, property, (value < 0 ? -1 : 1) * (prevPage - 1) * this.step, 400, iosEase, this.change, function (value) {
                        this.correctionEnd(value,this.scroller);
                        this.currentPage = prevPage - 1;
                        this.animationEnd(value);
                    }.bind(this));
                } else {
                    this.to(el, property, (value < 0 ? -1 : 1) * (prevPage + 1) * this.step, 400, iosEase, this.change, function (value) {
                        this.correctionEnd(value,this.scroller);
                        this.currentPage = prevPage + 1;
                        this.animationEnd(value);
                    }.bind(this));
                }
            } else {
                this.to(el, property, (value < 0 ? -1 : 1) * prevPage * this.step, 400, iosEase, this.change, function (value) {
                    this.correctionEnd(value,this.scroller);
                    this.animationEnd(value);
                }.bind(this));
            }
        } else {
            var rpt = Math.floor(Math.abs(value / this.step));
            var dy = value % this.step;
            if (Math.abs(dy) > this.step / 2) {
                this.to(el, property, (value < 0 ? -1 : 1) * (rpt + 1) * this.step, 400, iosEase, this.change,  function (value) {
                    this.correctionEnd(value);
                    this.animationEnd(value,this.scroller);
                }.bind(this));
            } else {
                this.to(el, property, (value < 0 ? -1 : 1) * rpt * this.step, 400, iosEase, this.change, function (value) {
                    this.correctionEnd(value,this.scroller);
                    this.animationEnd(value);
                }.bind(this));
            }
        }
    }
}


module.exports = AlloyTouch;
//export default AlloyTouch;

/* window.AlloyTouch = AlloyTouch;

 })();
 */
