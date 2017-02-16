import React,{ Component } from 'react'
import { connect } from 'dva'
import CSSModules from 'react-css-modules'
import styles from './page.less'
import { Link } from 'react-router'
import classNames from 'classnames'
import { getCookie, setCookie, priceFormat } from 'libs/util'
import { fetchPosts } from "components/common/fetch"

// import ProjectItem from "./ProjectItem.js"


import News from "./news";

class Home extends Component {
  levelOption = {"暂无":0,"C":25,"B":50,"A":75,"PRO":100,"":0}

  constructor(props) {
    super(props)
    fetchPosts("/api/user/userId",{},"GET")
      .then(data => {
        props.getLevel()
        props.getUserInfo()
        // props.getProjList()
      })

    this.state = {
      isShowCover: !getCookie("isShowCover","storage"),
      isGaugeRendered: false,
    }
  }

  showCoverHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      isShowCover: true
    });
  }

  hideCoverHandler = () => {
    setCookie("isShowCover","1","storage")
    this.setState({
      isShowCover: false
    });
  }



  componentDidMount() {

  }

  componentDidUpdate() {
    if( !!this.props.userInfo.level && !this.state.isGaugeRendered) {
      this.renderGauge(this.levelOption[this.props.userInfo.level.toUpperCase()])
      // this.renderGauge(this.levelOption[this.props.userInfo.level]);
      this.setState({
        isGaugeRendered: true
      });
    }
  }



  render() {
    // let projItems = this.props.projList.length>0 ? this.props.projList.map((item,index) => <ProjectItem projInfo={item} key={index} />) : ""
    return (
      <div styleName="home-container" style={this.props.style}>
        <div styleName="top-container">
          <div styleName="top-bg"></div>
          <div styleName="dash-container">
            <canvas id="dash" styleName="dash" width='240' height='210'></canvas>
          </div>
          <div styleName="content">
            <h5>QBII</h5>
            <h3>认证等级</h3>
            <h1 styleName={classNames({"nothing":this.props.userInfo.level&&this.props.userInfo.level=='暂无'})}>
              {this.props.userInfo.level}
            </h1>
            <p>等级越高，可投项目越多</p>
            <div styleName="btn-group">
              <span styleName="btn" onClick={()=>QBFK.Business.go('/Theme')}>晒身份</span>
              <span styleName="btn" onClick={()=>QBFK.Business.go('/About')}>了解QBII</span>
            </div>
          </div>
        </div>
        <div styleName="asset-container">
          <div styleName="item">
            <span>投入资产(元)</span>
            <h3>{priceFormat(this.props.userInfo.assets/100)||0.00} </h3>
          </div>
          <div styleName="item">
            <span>累计收益(元)</span>
            <h3>{priceFormat(this.props.userInfo.profit/100)||0.00}</h3>
          </div>
        </div>
        <div styleName="list-container" className={classNames({"hide":this.props.projList.length==0})}>
          {/* {projItems} */}
        </div>
        <div styleName="news-container">
          <div styleName="title">
            <div styleName="name">最新资讯</div>
            <div styleName="more">
              {/* 查看更多
              <i styleName="icon icon-arrow"></i> */}
            </div>
          </div>
          <News/>

        </div>
        <div styleName="bottom-container">
          <span>更多项目，敬请期待</span>
        </div>
        <div className="animated zoomIn" styleName={classNames("cover-container",{"active":this.state.isShowCover})}>
          <p>钱宝 5.0 <br/>开启你的资本之路</p>
          <div className="animated fadeIn" styleName="img"></div>
          <p styleName="txt">当前认证等级</p>
          <h1>{this.props.levelInfo.level}</h1>
          <span styleName="btn-join" onClick={this.hideCoverHandler}>即刻加入</span>
        </div>
      </div>
    )
  }



  renderGauge(displayValue) {
  	var angle = 0.14, innerAngle = angle;
  	var displayAngle = getAngle(displayValue), innerDisplayAngle = displayAngle;
  	var radius = 100, innerRadius = radius - 8, iconRadius = radius - 16;
  	var canvas = document.getElementById("dash");
  	var ctx = canvas.getContext("2d");
  	var w = 240 / 2;
    var h = 210 / 2;

  	ctx.strokeStyle = "rgba(173, 141, 114, 0.3)";
    ctx.beginPath();
    ctx.arc(w, h, radius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.stroke();

  	ctx.beginPath();
  	ctx.arc(w, h, innerRadius, (1 - angle) * Math.PI, (2 + angle) * Math.PI, false);
    ctx.setLineDash([1,4])
    ctx.stroke();
    ctx.restore();

  	ctx.strokeStyle = "#ae8e72";
    ctx.beginPath();
  	ctx.setLineDash([]);
    ctx.arc(w, h, radius, (1 - angle) * Math.PI, displayAngle, false);
    ctx.stroke();

  	ctx.beginPath();
  	ctx.setLineDash([1,3]);
    ctx.arc(w, h, innerRadius, (1 - innerAngle) * Math.PI, innerDisplayAngle, false);
    ctx.stroke();

  	ctx.strokeStyle = "#F6E284";
    ctx.beginPath();
  	ctx.lineWidth = 4;
  	ctx.setLineDash([2,1000]);
    ctx.arc(w, h, radius,  displayAngle,(2 + angle) * Math.PI, false);
  	ctx.shadowColor = '#fff';
  	ctx.shadowOffsetX = ctx.shadowOffsetY = 0;
  	ctx.shadowBlur = 5;
    ctx.stroke();

  	var startX, startY, x, y, length = 88;
  	var img = document.createElement("img");
  	img.src = require("static/imgs/home/pointer.png");
  	img.addEventListener("load",function(){
  		startX = Math.round(w + 5 * Math.cos(displayAngle - Math.PI / 2))
  		startY = Math.round(h + 7.25 * Math.sin(displayAngle - Math.PI / 2));
  			ctx.save();
  			ctx.shadowBlur = 0;
  			ctx.translate(startX,startY);
  			ctx.rotate(displayAngle + Math.PI / 2);
  			ctx.drawImage(img, 0, -length, 10, 14.5);
  			ctx.restore();
        canvas.style.zIndex="2";
    },false);

  	function getAngle(value) {
  		var min=2.72,max=6.65;
  		return (max - min) / 100 * value + min;
  	}
  }


};

/* 

   <div styleName="item" onClick={()=>QBFK.Business.go('/NewsDetail/4')}>
            <div styleName="img">
              <img src={require("static/imgs/home/theme4.png")} alt=""/>
            </div>
            <div styleName="item-title">
              QBII钱宝5.0全国巡回落幕
              <small>一路相伴，一路前行</small>
            </div>
          </div>
          <div styleName="item" onClick={()=>QBFK.Business.go('/NewsDetail/1')}>
            <div styleName="img">
              <img src={require("static/imgs/home/theme2.png")} alt=""/>
            </div>
            <div styleName="item-title">
              全新身份QBII
              <small>钱宝5.0时代身具跨时代新标识</small>
            </div>
          </div>
          <div styleName="item" onClick={()=>QBFK.Business.go('/NewsDetail/3')}>
            <div styleName="img">
              <img src={require("static/imgs/home/theme1.png")} alt=""/>
            </div>
            <div styleName="item-title">
              QBII的深刻解读
              <small>让商业回归本质，守住初心</small>
            </div>
          </div>
           */
function mapStateToProps(state) {
    return state.home;
}

function mapDispatchToProps(dispatch) {
    return {
      getLevel(levelInfo){
          dispatch({type: 'home/getLevel', levelInfo});
      },
      getUserInfo(userInfo){
          dispatch({type: 'home/getUserInfo', userInfo});
      },
      getProjList(projList){
          dispatch({type: 'home/getProjList', projList});
      },
      getProgressInfo(progressInfo){
          dispatch({type: 'home/getProgressInfo', progressInfo});
      }
    }
}
Home.PropTypes = {
    enterAnimation: {
        duration: 2000,
        animation: "slideDown"
    },
    leaveAnimation:{
        duration: 2000,
        animation:"slideUp"
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Home,styles,{allowMultiple:true}));
