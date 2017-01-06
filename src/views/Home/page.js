import React,{ Component } from 'react'
import { connect } from 'dva'
import CSSModules from 'react-css-modules'
import styles from './page.less'
import { Link } from 'react-router'
import classNames from 'classnames'
import { getCookie, setCookie, priceFormat } from 'libs/util'

class Home extends Component {
  levelOption = {"无":0,"C":25,"B":50,"A":75,"PRO":100}
  levelShow = ["无","C","B","A","Pro"]
  constructor(props) {
    super(props);
    props.getLevel();
    props.getUserInfo();
    this.state = {
      isShowCover: !getCookie("isShowCover","storage"),
    };
  }

  showCoverHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      isShowCover: true,
    });
  };

  hideCoverHandler = () => {
    setCookie("isShowCover","1","storage")
    this.setState({
      isShowCover: false,
    });
  };

  componentDidMount() {

  }
  componentDidUpdate() {
    if(this.props.isRenderGauge) {
      this.renderGauge(this.levelOption[this.props.userInfo.level.toUpperCase()]);
      // this.renderGauge(this.levelOption[this.props.userInfo.level]);
      this.props.isRenderGauge = false;
    }
  }

  render() {
    return (
      <div>
        <div styleName="top-container">
          <div styleName="top-bg"></div>
          <canvas id="dash" styleName="dash" width='240' height='210'></canvas>
          <div styleName="content">
            <h5>QBII</h5>
            <h3>认证等级</h3>
            <h1>{this.props.userInfo.level}</h1>
            <p>等级越高，可投项目越多</p>
            <div styleName="btn-group">
              <span styleName="btn"><Link to='/Theme'>晒身份</Link></span>
              <span styleName="btn"><Link to='/HomeDo'>了解QBII</Link></span>
            </div>
          </div>
        </div>
        <div styleName="asset-container">
          <div styleName="item">
            <span>投入资产(元)</span>
            <h3>{priceFormat(this.props.userInfo.assets/100)}</h3>
          </div>
          <div styleName="item">
            <span>累计收益(元)</span>
            <h3>{priceFormat(this.props.userInfo.profit/100)}</h3>
          </div>
        </div>
        <div styleName="list-container" onClick={()=>QBFK.Business.go('/OrderInfo')}>
          <div styleName="item">
            <div styleName="banner">
              <img src={require("static/imgs/home/banner.png")} alt=""/>
            </div>
            <div styleName="title">
              冰穹互娱股权出让
              <small>
                <i styleName="icon icon-item"></i>
                <span>游戏 / 应用市场</span>
              </small>
              <i styleName="icon icon-arrow active"></i>
            </div>
            <div styleName="tag">
              <div styleName="tag-item">
                <div styleName="tag-name">近一年增值</div>
                <div styleName="tag-value"><span styleName="increase">+14.67%</span></div>
              </div>
              <div styleName="tag-item">
                <div styleName="tag-name">游戏市场</div>
                <div styleName="tag-value"><span styleName="count">529</span>款</div>
              </div>
              <div styleName="tag-item">
                <div styleName="tag-name">在线应用</div>
                <div styleName="tag-value"><span styleName="count">74</span>个</div>
              </div>
            </div>
            <div className="animated slideDown" styleName="info">
              <span styleName="pointer"></span>
            </div>
            <div styleName="more">查看详情</div>
          </div>
        </div>
        <div styleName="news-container">
          <div styleName="title">
            <div styleName="name">最新资讯</div>
            <div styleName="more">
              查看更多
              <i styleName="icon icon-arrow"></i>
            </div>
          </div>
          <div styleName="item">
            <div styleName="img">
              <img src={require("static/imgs/home/theme1.png")} alt=""/>
            </div>
            <div styleName="item-title">
              公布QBII入围标准与权利
              <small>6年蜕变，4年变局，帷幕徐启</small>
            </div>
          </div>
          <div styleName="item">
            <div styleName="img">
              <img src={require("static/imgs/home/theme2.png")} alt=""/>
            </div>
            <div styleName="item-title">
              成为一名钱宝5.0时代的QBII
              <small>6年蜕变，4年变局，帷幕徐启</small>
            </div>
          </div>
        </div>
        <div styleName="bottom-container">
          更多项目，敬请期待
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

  	ctx.strokeStyle = "#ae8e72";
    ctx.beginPath();
  	ctx.setLineDash([0]);
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
    },false);

  	function getAngle(value) {
  		var min=2.72,max=6.65;
  		return (max - min) / 100 * value + min;
  	}
  }
};

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
