/**
 * Created by xiaolin on 17/1/4.
 */
import React, { PropTypes } from 'react'
import './index.less'

class Dialog extends React.Component {
    constructor(props, context) {
        super(props, context)
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

                    <fieldset>
                        <input type='text' tabIndex='3' placeholder='请输入你的姓名' value={this.props.data.name}/>
                        <div className='sa-input-error'></div>
                    </fieldset>
                    <fieldset>
                        <input type='text' tabIndex='3' placeholder='请输入你的电话' value={this.props.data.phone}/>
                        <div className='sa-input-error'></div>
                    </fieldset>

                    <div className={this.props.errorShow?'sa-error-container':'sa-error-container hide'}>
                        <div className='icon'>!</div>
                        <p>Not valid!</p>
                    </div>
                    <div className='sa-button-container'>
                        <button className='confirm' tabIndex='1' onClick={this.props.buttonConfirm}>好的</button>
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