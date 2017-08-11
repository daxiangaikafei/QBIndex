import React, {PropTypes} from 'react'
import {Router} from 'dva/router';
import {connect} from 'dva'

class RollIn extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  handleRollIn = () => {
    this.props.setAgreement(true)
  }
  render() {
    return this.props.userInfo.isQbii ? <div className="btn-roll-in" onClick={this.handleRollIn} >转入资产</div>:<div></div>
  }
}
function mapStateToProps(state) {
  return state.home;
}

function mapDispatchToProps(dispatch) {
return {
  setHelpStatus(helpStatus) {
    dispatch({type: 'home/setHelpStatus', helpStatus});
  },
  setAgreement(isShow) {
    dispatch({type: 'home/setAgreement', isShow});
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(RollIn)
