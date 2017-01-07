import React,{ Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './page.less'
import SwipeableViews from 'react-swipeable-views'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex : 0
    }

  }
  slideUpHandler = () => {
    console.log(this.state.activeIndex)
    this.setState({
      activeIndex:++this.state.activeIndex
    })
  }
  slideChangeHandler = (index,next) => {
    this.setState({
      activeIndex:index
    })
  }
  render() {
    const slide = {
      height: '100%',
      position: 'relative'
    }
    return (
      <SwipeableViews styleName="about-container" axis="y" index={this.state.activeIndex} onChangeIndex={this.slideChangeHandler} >
        <div style={slide}>
          <div styleName="about-title"></div>
          <div styleName="about-content">
            <p>QBII(Qualified Qbao Institutional Investors) <br/>合格的钱宝投资者</p>
            <p>QBII的权益：<br/>以投资人的身份参与钱宝主营业务；参与孵化业务获得被孵化公司利润粉红和参股股权增值收益；进入钱宝投资人核心社交圈；具备所有业务标的运营权和决策投票权。</p>
            <p>成为QBII后的收入将额外获得很大一部分的投资收益，除了拿到投资标的额外的分红收益，更将有机会成为PE与钱宝一起投资已有利润和未来有大量利润从而获得高估值的企业。</p>
          </div>
          <div styleName="bottom-wrap">
            <span styleName="page">1/4</span>
            <i styleName="arrow" className="extend" onClick={this.slideUpHandler}></i>
          </div>
        </div>
        <div style={slide}>
          <div styleName="about-title"></div>
          <div styleName="about-content">
            <p>QBII背景：<br/>基于钱旺信控强大的资本现金流，依托钱宝网1.6亿注册用户的巨大流量，以“互联网＋”武装思维，深度发觉覆盖各个领域的新兴业务，通过生态圈内互联网的容和，迅速孵化出同时具备商业和社会价值的投资标的。</p>
            <p>创新为王，实业兴国，固本安邦；“痛于民生之窘也，则曰讲求实业”；没有实业，就没有钱旺。</p>
          </div>
          <div styleName="bottom-wrap">
            <span styleName="page">2/4</span>
            <i styleName="arrow" className="extend" onClick={this.slideUpHandler}></i>
          </div>
        </div>
        <div style={slide}>
          <div styleName="about-title"></div>
          <div styleName="about-content">
            <p>QBII主要标准：</p>
            <div styleName="level-info">
              <p> <span>级别</span> <span>活跃值</span> </p>
              <p> <span>QBII-PRO</span> <span>80万</span> </p>
              <p> <span>QBII-A</span> <span>29万</span> </p>
              <p> <span>QBII-B</span> <span>15万</span> </p>
              <p> <span>QBII-C</span> <span>8万</span> </p>
            </div>
            <p>QBII必备要素：<br/>有投资能力并具有契约精神、有坚定的信仰、有健全的人格、有完整科学的知识体系和对这个知识体系学习和知识更新能力或者是有意愿成为这样的投资人的钱宝用户。</p>
          </div>
          <div styleName="bottom-wrap">
            <span styleName="page">3/4</span>
            <i styleName="arrow" className="extend" onClick={this.slideUpHandler}></i>
          </div>
        </div>
        <div style={slide}>
          <div styleName="about-title"></div>
          <div styleName="about-content">
            <p>孵化对象：<br/>1.钱旺信息产业控股集团旗下所有被孵化公司 <br/>（如上海商肃网络科技有限公司、上海定菱网络科技有限公司、上海雷悦文化发展有限公司、上海酷雅智能科技有限公司、四川雷神空天科技有限公司、上海友繁智能科技有限公司等等）</p>
            <p>2.具备实干能力和创新精神的创业者、企业和企业家。</p>
          </div>
          <div styleName="bottom-wrap">
            <span styleName="page">4/4</span>
          </div>
        </div>
      </SwipeableViews>
    )
  }

}
export default CSSModules(About,styles,{allowMultiple:true})
