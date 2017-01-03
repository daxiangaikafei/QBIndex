import React,{ Component } from 'react'
import { connect } from 'dva'
import './page.less'
import { Link } from 'react-router'
import classNames from 'classnames'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowCover: true,
    };
  }

  showCoverHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      isShowCover: true,
    });
  };

  hideCoverHandler = () => {
    this.setState({
      isShowCover: false,
    });
  };

  componentDidMount() {
    var renderGauge = this.renderGauge;
    setTimeout(function(){
      renderGauge(70);
    },0);
  }
  handleCoverShow() {

  }
  render() {
    return (
      <div>
        <div className="top-container">
          <div className="top-bg"></div>
          <canvas id="dash" width='240' height='210'></canvas>
          <div className="content">
            <h5>QBII</h5>
            <h3>认证等级</h3>
            <h1>A</h1>
            <p className="datetime">评估时间：<span>2016-12-12</span></p>
            <div className="btn-group">
              <span className="btn">晒身份</span>
              <span className="btn" onClick={this.showCoverHandler}>了解QBII</span>
            </div>
          </div>
        </div>
        <div className="asset-container">
          <div className="item">
            <span>投入资产(元)</span>
            <h3>1,395,345.29</h3>
          </div>
          <div className="item">
            <span>累计收益(元)</span>
            <h3>948,395.57</h3>
          </div>
        </div>
        <div className={classNames("cover-container animated zoomIn",{"active":this.state.isShowCover})}>
          <p>钱宝 5.0 <br/>开启你的资本之路</p>
          <div className="img animated fadeIn"></div>
          <p className="txt">当前认证等级</p>
          <h1>Pro</h1>
          <span className="btn-join" onClick={this.hideCoverHandler}>即刻加入</span>
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
  	img.src = require("static/imgs/pointer.png");
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
        fetch(count){
            dispatch({type: 'home/fetch', count});
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
