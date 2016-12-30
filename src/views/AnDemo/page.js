import React, { Component, PropTypes } from 'react';
import "./page.less";

class AnDemo extends Component {
	constructor (props) {
      super(props)
      this.state = {
        am: props.current.getHours() < 12
      }
  }
  render(){
      
  }
}

export default AnDemo;