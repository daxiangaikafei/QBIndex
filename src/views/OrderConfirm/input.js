import React, { Component, PropTypes } from 'react';
import ReactDom from "react-dom";

import "./input.less";



class Input extends Component {
    constructor(props) {
        super(props);
       this.handFocus = this.handFocus.bind(this);
       this.handBlur = this.handBlur.bind(this);
       this.handChange = this.handChange.bind(this);
       this.state = {
           value:""
       }
    }

    componentWillMount(){
        
    }
    handFocus(){
        var $in = ReactDom.findDOMNode(this.refs.input);
        $in.focus();
    }
    handChange(e){
        let {maxLength} = this.props;
        this.setState({
            value:e.target.value.substr(0, maxLength)
        })
    }
    handBlur(){
        let {onChange,name} = this.props;
        onChange && onChange(name, this.state.value);
    }
    render() {
       let {className,title,maxLength,placeholder,type} = this.props;
       let {value} = this.state;

       let inProps = {
           placeholder:title,
           value,
           maxLength,
           type,
           ref:"input",
           onChange:this.handChange,
           onBlur:this.handBlur
       }
        return (
            <div className={"virtual-input "+className} >
               <input {...inProps} />
            </div>
        )
    }
}
//onClick={this.handFocus}
Input.defaultProps = {
    maxLength:20,
    title:"请传入一个title",
    className:"",
    placeholder:"",
    name:"必须要有一个name",
    type:"text"
}

//  <label>{title}</label>
//                <i></i>


export default Input;

/**
 * 
 * 
 * type: 'success',
    buttonConfirm: function () {
    },
    errorShow: false,
 */
//<div className="theme-img"></div>