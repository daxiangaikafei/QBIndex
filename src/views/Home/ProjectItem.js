import React,{ Component } from 'react'
import { connect } from 'dva'
import CSSModules from 'react-css-modules'
import styles from './page.less'
import classNames from 'classnames'
import { PieChart, Pie, Cell } from 'recharts'
import { tagStrFormat } from 'libs/util'


class ProjectItem extends Component {
  pieColors = ['#aa8a72','#cccccc','#e4cfa2','#cccccc','#aa8a72','#e4cfa2','#aa8a72','#cccccc','#e4cfa2']

  constructor(props) {
    super(props)

    props.getProgressInfo(props.projInfo.projectInfo.projectId)

    this.state = {
      isShowPie: true,
    }
  }
  togglePieShowHandler = () => {
    this.setState({
      isShowPie: !this.state.isShowPie
    });
  }
  render() {
    return (
      <div styleName="item">
        <div styleName="banner">
          <img src={this.props.projInfo.pics[0]} alt="" onError={(e)=>{e.target.style.display='none'}} onLoad={(e)=>{e.target.style.display='block'}}/>
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
            <div styleName="tag-name">{this.props.projInfo.projectInfo.tag1.name}</div>
            <div styleName="tag-value"><span styleName="increase">{this.props.projInfo.projectInfo.tag1.value}</span></div>
            {/* <span styleName={classNames("pointer",{"active":this.state.isShowPie})}></span> */}
          </div>
          <div styleName="tag-item">
            <div styleName="tag-name">{this.props.projInfo.projectInfo.tag2.name}</div>
            <div styleName="tag-value"><span styleName="count">{tagStrFormat(this.props.projInfo.projectInfo.tag2.value||"0-",1)}</span>{tagStrFormat(this.props.projInfo.projectInfo.tag2.value||"0-",2)}</div>
          </div>
          <div styleName="tag-item">
            <div styleName="tag-name">{this.props.projInfo.projectInfo.tag3.name}</div>
            <div styleName="tag-value"><span styleName="count">{tagStrFormat(this.props.projInfo.projectInfo.tag3.value||"0-",1)}</span>{tagStrFormat(this.props.projInfo.projectInfo.tag3.value||"0-",2)}</div>
          </div>
        </div>
        <div styleName={classNames("info",{"active":this.state.isShowPie})}>
          <div styleName="info-title">收益配置如下：</div>
          <PieChart width={window.innerWidth} height={210}>
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
              预约人数 <span>{this.props.progressInfo[this.props.projInfo.projectInfo.projectId]?this.props.progressInfo[this.props.projInfo.projectInfo.projectId].user_count:0}</span>人
            </div>
            <div styleName="progress-container">
              <svg className="progressBar" width="180" height="10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient" >
                    <stop offset="0%" style={{stopColor: '#aa8a72'}} />
                    <stop offset="100%" style={{stopColor: '#e4cfa2'}}/>
                  </linearGradient>
                </defs>
                <path strokeWidth="6" stroke="#cccccc" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M10 5 h 0 160"></path>
                <path strokeWidth="6" stroke="#aa8a72" strokeLinejoin="round" strokeLinecap="round" style={{fill:'url(#gradient)'}} d={`M10 5 h 0 ${(((this.props.progressInfo[this.props.projInfo.projectInfo.projectId]?this.props.progressInfo[this.props.projInfo.projectInfo.projectId].amount:0) / (this.props.progressInfo[this.props.projInfo.projectInfo.projectId]?this.props.progressInfo[this.props.projInfo.projectInfo.projectId].target:0) )*160) || 0}`}></path>
              </svg>
            </div>
          </div>
        </div>
        <div styleName="more" onClick={()=>QBFK.Business.go('/OrderInfo/'+this.props.projInfo.projectInfo.projectId)}>查看详情</div>
      </div>
    )
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
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 10} y={ey} textAnchor={textAnchor} fill="#acacac" style={{fontSize:'10px',fontWeight:200}}>{payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 10} y={ey} dy={10} textAnchor={textAnchor} fill="#aa8a72" style={{fontSize:'10px',fontWeight:200}}>
          {`${(percent * 100).toFixed(2)}%`}
        </text>
      </g>
    )
  }

}

function mapStateToProps(state) {
    return state.home;
}

function mapDispatchToProps(dispatch) {
    return {
      getProgressInfo(progressInfo){
          dispatch({type: 'home/getProgressInfo', progressInfo});
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(ProjectItem,styles,{allowMultiple:true}));
