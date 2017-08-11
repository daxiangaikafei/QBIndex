import React,{ Component } from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import ReactMixin from 'react-mixin';
import { connect } from 'dva'
import CSSModules from 'react-css-modules'
import styles from './page.less'
import { Link } from 'react-router'
import classNames from 'classnames'
import { fetchPosts } from "components/common/fetch"
import { priceFormat } from 'libs/util'
import {Icon} from 'ui'

class RollIn extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      canCommit: false,
      canGetCode: true,
      isPopShow: false,
      msg: '转入失败，请稍后重试',
      codeBtnMsg: '获取验证码',
      blance: 0,
      amount: '',
      pwd: '',
      code: '',
      loading: false
    }
    this.getBlance()
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }
  getBlance = () => {
    fetchPosts('/api/specialUser/qbiiUsableBalance',{},'GET').then(data=>{
      if(data.code==0) {
        this.setState({
          blance: data.result.blance
        })
      }
    })
  }

  handleCommit = () => {
    let {amount,pwd,code} = this.state
    let msg = !amount ? '请输入您要转入的金额' : 
      !pwd ? '请输入交易密码' : 
      !code ? '请输入验证码' : 
      this.setState({canCommit:true}, ()=>{
        if (this.state.canCommit) {
          this.setState({loading:true})
          fetchPosts('/api/specialUser/changeQbii',{
            traderPwd: pwd,
            verifyCode: code,
            money: amount
          },'GET').then(data=>{
            if(data.code==0) {
              setTimeout(()=>{
                QBFK.Business.go('/Home')
              }, 1000);
            }
            this.setState({loading:false})
            this._pop(data.message)
          })
        } 
      })
    !this.state.canCommit && this._pop(msg)
  }

  handleGetCode = () => {
    if (!this.state.canGetCode) {return}
    fetchPosts('/api/specialUser/sendSmsCode', {}, 'GET').then(data => {
      if(data.code==0) {
        let count = 60
        const timer = () => {
          if (count == 0) {
            this.setState({
              codeBtnMsg: '获取验证码',
              canGetCode: true
            })
          } else {
            this.setState({codeBtnMsg: `${count--}s 后重新获取`})
            setTimeout(timer, 1000);
          }
        }
        timer()
        this.setState({
          canGetCode: false
        })
      }
      this._pop(data.message)
    })
  }

  onAmountChange(e){
    let reg = /^([0-9]\d*|0)?(\.)?(\d{1,2})?$/, value = e.target.value;
    if(value === "" || reg.test(value)){
      this.setState({amount: value})
    }
  }

  render() {
    let { form, amount } = this.state
    return (
      <div styleName="roll-in-container">
        <div styleName="top">
          <h4>可转余额（元）</h4>
          <h1>{priceFormat(this.state.blance)}</h1>
          <p>转入QBII资产，需要将您可提余额账户资产转入QBII账户，立即到账。</p>
        </div>
        <div styleName="form">
          <div styleName="field">
            <span styleName="label">输入金额（元）：</span>
            <input type="text" placeholder="请输入您要转入的金额" value={amount} onChange={(e)=>this.onAmountChange(e)}/>
          </div>
          <div styleName="field">
            <span styleName="label" >交易密码：</span>
            <input type="password" placeholder="请输入交易密码" valueLink={this.linkState('pwd')}/>
          </div>
          <div styleName="field">
            <span styleName="label">手机验证：</span>
            <input type="text" placeholder="请输入验证码" valueLink={this.linkState('code')}/>
            <span styleName={classNames('get-code', {'disable':!this.state.canGetCode})} onClick={this.handleGetCode}>{this.state.codeBtnMsg}</span>
          </div>
        </div>
        <div styleName="btn-commit" onClick={this.handleCommit} >确定</div>
        <div styleName={classNames("pop-container",{active:this.state.isPopShow})}>
          <div styleName="pop">
            {this.state.msg}
          </div>
        </div>
        {
          this.state.loading ? (<div className="loading-bg">
            <div className="loading-item">
              <Icon name="spinner" color="#fff" size="32" styleName="loading" />
            </div>
          </div>) : ''
        }
      </div>
    )
  }

  _pop = msg => {
    this.setState({
      msg,
      isPopShow: true
    },() => {
      setTimeout(() => {
        this.setState({
          msg: '',
          isPopShow: false
        })
      }, 2000);
    })
  }
};


function mapStateToProps(state) {
    return state.home;
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
RollIn.PropTypes = {
    enterAnimation: {
        duration: 2000,
        animation: "slideDown"
    },
    leaveAnimation:{
        duration: 2000,
        animation:"slideUp"
    }
}
ReactMixin(RollIn.prototype, LinkedStateMixin)
export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(RollIn, styles, {allowMultiple: true}));
