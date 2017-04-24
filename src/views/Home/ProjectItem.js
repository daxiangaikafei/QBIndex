import React,{ Component } from 'react'
import { connect } from 'dva'
import CSSModules from 'react-css-modules'
import styles from './page.less'
import classNames from 'classnames'
import { PieChart, Pie, Cell } from 'recharts'
import { tagStrFormat } from 'libs/util'


class ProjectItem extends Component {
  projectStatus = [
    '进行中',
    '已下架',
    '未开始',
    '已结束'
  ]
  //0-进行中,1-已下架,2-项目未开始,3-项目已结束
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  togglePieShowHandler = () => {
    this.setState({
    });
  }
  render() {
    return (
      <div styleName="item" onClick={()=>QBFK.Business.go('/InfoTpl/'+this.props.projInfo.pageId||"")}>
        <div styleName="banner">
          <span styleName="corner"><i>{this.projectStatus[this.props.projInfo.runStatus]}</i></span>
          <img src={this.props.projInfo.picCover} alt="" onError={(e)=>{e.target.style.display='none'}} onLoad={(e)=>{e.target.style.display='block'}}/>
        </div>
        <div styleName="title">
          {this.props.projInfo.name}
          <small>
            <i styleName="icon icon-item"></i>
            <span>{this.props.projInfo.tag}</span>
          </small>
          <span styleName="user-tag"></span>
        </div>
      </div>
    )
  }
  checkProjStatus(proj) {
    let serverTime = (new Date(this.props.serverTime)).getTime()
    let startTime = (new Date(proj.prostarttime)).getTime()
    let endTime = (new Date(proj.proendtime)).getTime()
    return serverTime < startTime ? 0 : serverTime > startTime && serverTime < endTime ? 1 : serverTime > endTime ? 2 : 1
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
