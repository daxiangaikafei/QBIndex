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
          question: '想了解下紫隆山葡萄酒的公司情况？',
          answer : '紫隆山葡萄酒厂坐落于吉林通化，创建于1997年。张总也曾邀约多位宝粉共同参观过酒厂，跟这所葡萄庄园结缘颇深。紫隆山品牌依托互联网平台的优势，打造出一个响当当的山葡萄酒品牌，带动了整个地区的山葡萄产业。'
        },
        {
          question: '项目回报率有多高？',
          answer : 'QBII项目本身就是作为对钱宝合格投资人的回馈，年化均比当前领取任务要高，而且可以省去天天做任务的繁琐过程。投资股权后，当您想了解当前收益时，随时可打开APP点击QBII板块，就可看到您当前的利润分红、股本收益等等，与钱宝一起投资风险共担。'
        },
        {
          question: '签署合同后，资金如何操作？',
          answer : '资金将直接从您的钱宝账户中扣款，打入QBII。您可在APP的QBII板块中看到。'
        },
        {
          question: '有意向投资，但现在大部分资金仍在任务中，没有结算怎么办？',
          answer : '如果您在投资生效后，当前钱宝账号中可提现资金少于投资资金，您可选择终止当前尚未结束任务，提前进行结算。按照任务的日收益计算，结算已完成的任务天数发放收益。如果您账号中有多笔任务，可由您选择结算哪一项任务，或委托钱宝自行结束。总之不会让您有任何损失，您可放心。'
        },
        {
          question: '必须要钱宝认证人签约合同吗？ 老人年纪大，可以代签吗？',
          answer : '必须要本人亲自签署，目前签署地点待定。但如果实在不方便出门，可先由工作人员这边记录，上门签署。'
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
