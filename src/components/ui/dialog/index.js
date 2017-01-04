/**
 * Created by xiaolin on 17/1/4.
 */
import React, { PropTypes } from 'react'
import './index.less'

class Dialog extends React.Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            show: true,
            type: 'error'
        }
    }
    render () {
        return (
            <div className='sweet-alert showSweetAlert visible block'
                 data-has-cancel-button='false'
                 data-has-confirm-button='true'
                 data-animation='pop'>

                <Header type='success'/>

                <div className='sa-icon sa-custom'></div>
                <p style={{display: 'block','paddingBottom': '20px'}}>您已成功开通会员</p>
                <p style={{display: 'block'}} ></p>
                <fieldset>
                    <input type='text' tabIndex='3' placeholder=''/>
                    <div className='sa-input-error'></div>
                </fieldset>
                <div className='sa-error-container'>
                    <div className='icon'>!</div>
                    <p>Not valid!</p>
                </div>
                <div className='sa-button-container'>
                    <button className='confirm' tabIndex='1' style={{display: 'inline-block', 'boxShadow': 'rgba(174, 222, 244, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset','backgroundColor':'#427CF3'}}>确认</button>
                </div>
            </div>)
    }
}


const Header = ({type}) => {
    return (
        <div className={type == 'success'?'sa-icon sa-'+type+' animate block':'sa-icon sa-'+type+' block'}>
            {
                [type].map(function (name) {
                    if (name == 'error') {
                        return (<span class="sa-x-mark" key={name}> 
                                    <span className="sa-line sa-left"></span> 
                                    <span className="sa-line sa-right"></span> 
                                </span>)
                    }
                    else if (name == 'info') {
                        var doms = [];
                        doms.push(<span className='sa-body' key={name}></span>)
                        doms.push(<span className='sa-dot'></span>)
                        return (doms)
                    }
                    else if (name == 'success')
                        return (
                            <div className='sa-icon sa-success animate block' key={name}>
                                <span className='sa-line sa-tip animateSuccessTip'></span>
                                <span className='sa-line sa-long animateSuccessLong'></span>
                                <div className='sa-placeholder'></div>
                                <div className='sa-fix'></div>
                            </div>)
                })
            }
        </div>)
}


export default Dialog