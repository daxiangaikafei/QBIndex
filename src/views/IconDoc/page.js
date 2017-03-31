import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './page.less'
import { Icon } from 'ui'
class IconDoc extends Component {

  constructor(props) {
    super(props)
    this.state = {
      txt: ''
    }
    let url = require('components/ui/icon/symbol-defs.svg')
    getText(url).then( data => {
      this.setState({
        txt: data
      })
    }, function (error) {
      console.error('Error:', error)
    })
  }

  render() {
    let { txt } = this.state
    if (txt === '') return ''
    let icons = txt.match(/icon-[A-Za-z0-9-]+(?=")/gm)
    console.log('Icons count:'+icons.length)
    return (
      <div styleName="home-container">
        <ul styleName="icons">
          <li><Icon name="spinner" color="#427cf3" size="32" styleName="loading" /><span styleName="title">spinner</span></li>
          <li><Icon name="home3" color="#427cf3" size="32" style={{ opacity: 0.4 }} /><span styleName="title">home3</span></li>
        {
          icons.map((item, index) => {
            item = item.replace(/icon-/ig, '')
            return <li key={index}>
              <Icon name={item} color="#427cf3" size="32"  />
              <span styleName="title">{item}</span>
            </li>})
        }
        </ul>
      </div>
    )
  }
}
function getText(url) {
  var promise = new Promise(function (resolve, reject) {
    var client = new XMLHttpRequest()
    client.open("GET", url)
    client.onreadystatechange = handler
    client.responseType = "text"
    client.setRequestHeader("Accept", "text/plan")
    client.send()

    function handler() {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
  })

  return promise;
};

export default CSSModules(IconDoc, styles, { allowMultiple: true });