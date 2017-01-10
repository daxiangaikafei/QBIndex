import React,{ Component } from 'react'
import { connect } from 'dva'
import CSSModules from 'react-css-modules'
import styles from './page.less'
import { Link } from 'react-router'
import classNames from 'classnames'
import { getCookie, setCookie, priceFormat, tagStrFormat } from 'libs/util'
import { PieChart, Pie, Cell } from 'recharts'

class Home extends Component {
  levelOption = {"无":0,"C":25,"B":50,"A":75,"PRO":100,"D":0}
  pieColors = ['#aa8a72','#cccccc','#e4cfa2']

  constructor(props) {
    super(props)
    props.getLevel()
    props.getUserInfo()
    props.getProjInfo()
    props.getProgressInfo()
    this.state = {
      isShowCover: !getCookie("isShowCover","storage"),
      isShowPie: false,
      isGaugeRendered: false,
    }
  }

  showCoverHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      isShowCover: true
    });
  };

  hideCoverHandler = () => {
    setCookie("isShowCover","1","storage")
    this.setState({
      isShowCover: false
    });
  };

  togglePieShowHandler = () => {
    this.setState({
      isShowPie: !this.state.isShowPie
    });
  };

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
              <span styleName="btn"onClick={()=>QBFK.Business.go('/Theme')}>晒身份</span>
              <span styleName="btn"onClick={()=>QBFK.Business.go('/About')}>了解QBII</span>
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
        <div styleName="list-container" className={classNames({"hide":!this.props.projInfo.projectInfo.projectId})}>
          <div styleName="item">
            <div styleName="banner">
              <img src={this.props.projInfo.pics} alt="" onError={(e)=>{e.target.style.display='none'}}/>
            </div>
            <div styleName="title">
              {this.props.projInfo.name}
              <small>
                <i styleName="icon icon-item"></i>
                <span>{this.props.projInfo.tag}</span>
              </small>
              <i className="extend" styleName={classNames("icon","icon-arrow",{"active":this.state.isShowPie})} onClick={this.togglePieShowHandler}></i>
            </div>
            <div styleName="tag">
              <div styleName="tag-item">
                <div styleName="tag-name">近一年增值</div>
                <div styleName="tag-value"><span styleName="increase">{this.props.projInfo.projectInfo.tag1}</span></div>
                <span styleName={classNames("pointer",{"active":this.state.isShowPie})}></span>
              </div>
              <div styleName="tag-item">
                <div styleName="tag-name">游戏市场</div>
                <div styleName="tag-value"><span styleName="count">{tagStrFormat(this.props.projInfo.projectInfo.tag2||"0款",1)}</span>{tagStrFormat(this.props.projInfo.projectInfo.tag2||"0款",2)}</div>
              </div>
              <div styleName="tag-item">
                <div styleName="tag-name">在线应用</div>
                <div styleName="tag-value"><span styleName="count">{tagStrFormat(this.props.projInfo.projectInfo.tag3||"0个",1)}</span>{tagStrFormat(this.props.projInfo.projectInfo.tag3||"0款",2)}</div>
              </div>
            </div>
            <div styleName={classNames("info",{"active":this.state.isShowPie})}>
              <div styleName="info-title">假如你有100万元闲钱，与同期相比</div>
              <PieChart width={320} height={200}>
                <Pie data={this.props.projInfo.projectInfo.assetsRatio} cx="50%" cy="50%"
                  innerRadius={30} outerRadius={55} fill="#82ca9d"
                  label={this.renderLabel}
                  isAnimationActive={false}>
                  {
                  	this.props.projInfo.projectInfo.assetsRatio.map((entry, index) => <Cell key={index} fill={this.pieColors[index % this.pieColors.length]}/>)
                  }
                </Pie>
              </PieChart>
              <div styleName="info-progress">
                <div styleName="count">
                  预约人数 <span>{this.props.progressInfo.user_count}</span>人
                </div>
                <div styleName="progress-container">
                  <svg className="progressBar" width="200" height="10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="gradient" >
                        <stop offset="0%" style={{stopColor: '#aa8a72'}} />
                        <stop offset="100%" style={{stopColor: '#e4cfa2'}}/>
                      </linearGradient>
                    </defs>
                    <path strokeWidth="9" stroke="#cccccc" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M10 5 h 0 180"></path>
                    <path strokeWidth="9" stroke="#aa8a72" strokeLinejoin="round" strokeLinecap="round" style={{fill:'url(#gradient)'}} d={`M10 5 h 0 ${((this.props.progressInfo.amount /this.props.progressInfo.target )*180) || 0}`}></path>
                  </svg>
                </div>
              </div>
            </div>
            <div styleName="more" onClick={()=>QBFK.Business.go('/OrderInfo/1')}>查看详情</div>
          </div>
        </div>
        <div styleName="news-container">
          <div styleName="title">
            <div styleName="name">最新资讯</div>
            <div styleName="more">
              {/* 查看更多
              <i styleName="icon icon-arrow"></i> */}
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

  renderLabel = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 5) * cos;
    const sy = cy + (outerRadius + 5) * sin;
    const mx = cx + (outerRadius + 20) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 15;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#acacac" style={{fontSize:'12px',fontWeight:200}}>{payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#aa8a72" style={{fontSize:'16px',fontWeight:200}}>
          {`${(percent * 100).toFixed(2)}%`}
        </text>
      </g>
    );
  };

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
      },
      getProjInfo(projInfo){
          dispatch({type: 'home/getProjInfo', projInfo});
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
