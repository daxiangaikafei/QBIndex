import React,{ Component } from 'react'
import { connect } from 'dva'
import CSSModules from 'react-css-modules'
import styles from './page.less'
import { Link } from 'react-router'
import classNames from 'classnames'

class Help extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questions : [
        {
          question: '如何退款？',
          answer : '审批成功后可拨打客服电话退款'
        },
        {
          question: '如何退款？',
          answer : '审批成功后可拨打客服电话退款审批成功后可拨打客服电话退款审批成功后可拨打客服电话退款审批成功后可拨打客服电话退款'
        },
        {
          question: '如何退款？',
          answer : '审批成功后可拨打客服电话退款'
        }
      ]
    }
  }

  render() {
    return <div styleName="home-container">
        {
          this.state.questions.map((item, index) => 
            <div className="item" key={index}>
              <div className="question">{item.question}</div>
              <div className="answer">{item.answer}</div>
            </div>
          )
        }
      </div>
  }
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {

  }
}
Help.PropTypes = {
  enterAnimation: {
    duration: 2000,
    animation: "slideDown"
  },
  leaveAnimation:{
    duration: 2000,
    animation:"slideUp"
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Help,styles,{allowMultiple:true}));
