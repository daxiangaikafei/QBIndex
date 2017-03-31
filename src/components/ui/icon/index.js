import React, { Component } from 'react'
import classNames from 'classnames'
import './index.less'

class Icon extends Component {
  url = require(`./symbol-defs.svg`)
  constructor(props) {
    super(props)
  }
  render() {
    let { name, size, color, style, className } = this.props
    color = color || '#000'
    size = size || 16
    name = `icon-${this.props.name}`
    return (
      <svg
        style={{
          width: size + 'px',
          height: size + 'px',
          fill: color,
          ...style
        }} 
        className={classNames({icon:1,[className]:1})}>
        {<use xlinkHref={`${this.url}#${name}`}></use>}
      </svg>
    )
  }
}

export default Icon