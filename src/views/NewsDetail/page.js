import React, { Component }from 'react'
import './page.less'
import { Link } from 'react-router'

class NewsDetail extends Component {
  constructor(props, context) {
    const urls = {
      1: "https://m.baidu.com/from=1099a/bd_page_type=1/ssid=0/uid=0/baiduid=05E14A2CF53D36E682BB12F595A32AAD/w=0_10_/t=zbios/l=3/tc?ref=www_zbios&pu=sz%401320_480%2Ccuid%40FFE2F51EB16D98E7264192CF64CF18171594E2BB3FCQNQIOKJF%2Ccua%401242_2208_iphone_8.2.0.7_0%2Ccut%40iPhone9%252C2_10.2%2Cosname%40baiduboxapp%2Cctv%401%2Ccfrom%401099a%2Ccsrc%40browserf_box_txt%2Cta%40zbios_1_10.2_6_8.2%2Cusm%400%2Cvmgdb%400020100228y&lid=9840665084296513639&order=2&fm=alop&tj=www_normal_2_0_10_title&vit=osres&m=8&srd=1&cltj=cloud_title&asres=1&nt=wnor&title=%E9%92%B1%E5%AE%9DCEO%E5%BC%A0%E5%B0%8F%E9%9B%B7%E5%85%88%E7%94%9F%E5%AF%B9QBII%E7%9A%84%E6%A6%82%E5%BF%B5%E6%8F%90%E5%87%BA%E6%B7%B1%E5%88%BB%E8%A7%A3%E8%AF%BB-%E5%8D%97%E6%96%B9...&dict=30&w_qd=IlPT2AEptyoA_yioHkaoWqn_0oANnq&sec=18137&di=a32624b24f01a04e&bdenc=1&tch=124.0.360.198.0.0&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEQGG_ztV0DT5nk_qxP4lZQRAUSeqAp8IU-SfgTCcsBsYwk_b_XEobxFArKhhsnN8nyC-&eqid=889110c18f15480010000002587a5ed4&wd=&clk_info=%7B%22srcid%22%3A%221599%22%2C%22tplname%22%3A%22www_normal%22%2C%22t%22%3A1484414679970%2C%22xpath%22%3A%22div-a-h3%22%7D&from=groupmessage&isappinstalled=1",
      2: "https://m.baidu.com/l=3/tc?order=9&fm=alop&srd=1&asres=1&dict=20&sec=18137&di=096a78ed875382c2&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEQGG_y6QLDm7pE37hPXsExhdXTqqAp7MJl0agTCcsx5ExmGdWWUn7RNOrxpns75g773av0iprq&ct=42&cst=0&clk_from=transcoder_sf"
    }
    let { projectId } = props.routeParams;

    super(props, context)

    this.state = {
      url : urls[projectId]
    }
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="frame-wrap">
        <iframe id="fm" src={this.state.url} frameBorder="0"></iframe>
      </div>
    )
  }
}

export default NewsDetail
