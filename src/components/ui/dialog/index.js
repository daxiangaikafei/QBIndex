/**
 * Created by xiaolin on 17/1/4.
 */
import React, { PropTypes } from 'react'
import ReactDom from "react-dom";

import './index.less'

class Dialog extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._buttonConfirm = this._buttonConfirm.bind(this)
    }

    _buttonConfirm(){
        //
        //var _name = ReactDom.findDOMNode(this.refs.nameInput);
        //var _phone = ReactDom.findDOMNode(this.refs.phoneInput);

        this.props.buttonConfirm();
    }


    render() {
        if(!this.props.show)return(<div></div>)

        return (
            <div className='sweet-mask'>
                <div className='sweet-alert showSweetAlert visible block'
                     data-has-cancel-button='false'
                     data-has-confirm-button='true'
                     data-animation='pop'>

                    <Header type={this.props.type}/>

                    <div className='sa-button-container'>
                        <button className='confirm' tabIndex='1' onClick={()=>this._buttonConfirm()}>好的</button>
                    </div>
                </div>
            </div>)
    }
}


const Header = ({type}) => {
    return (
        <div>
            {
                [type].map(function (name) {
                    if (name == 'error') {
                        return (<div className={type == 'success'?'sa-icon sa-'+type+' animate block':'sa-icon sa-'+type+' block'}>
                                <span class="sa-x-mark" key={name}> 
                                    <span className="sa-line sa-left"></span> 
                                    <span className="sa-line sa-right"></span> 
                                </span></div>)
                    }
                    else if (name == 'info') {
                        return (<div className={type == 'success'?'sa-icon sa-'+type+' animate block':'sa-icon sa-'+type+' block'}>
                                    <span className='sa-body' key={name}></span>
                                    <span className='sa-dot'></span>
                                </div>)
                    }
                    else if (name == 'success')
                        var domT = []
                        domT.push(<div className="sa-title">预约成功</div>)
                        domT.push(<div className={type == 'success'?'sa-icon sa-'+type+' animate block':'sa-icon sa-'+type+' block'}>
                                        <div className='sa-icon sa-success animate block' key={name}>
                                        <span className='sa-line sa-tip animateSuccessTip'></span>
                                        <span className='sa-line sa-long animateSuccessLong'></span>
                                        <div className='sa-placeholder'></div>
                                        <div className='sa-fix'></div>
                                    </div></div>)
                        domT.push(<p className="sa-fileds">我们将在10分钟内给您回电</p>)
                        domT.push(<p style={{display: 'block'}} ></p>)
                        return (domT)
                })
            }
        </div>)
}

Dialog.defaultProps = {
    type: 'success',
    buttonConfirm: function () {
    },
    errorShow: false,
    data: {
        name: '',
        phone: 0
    }
}


export default Dialog