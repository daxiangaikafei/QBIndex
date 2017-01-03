import React, { Component, PropTypes } from 'react';
import "./page.less";


class Theme extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='theme'>
                <div className="header">
                    <div className="theme-img"></div>
                    <div className="ring">
                        <div className="container-ring">
                            <span className="outer-ring"></span>
                            <span className="inner-ring"></span>
                            <div className="content-ring">
                                <span>QBII</span>
                                <span>认证等级</span>
                                <span>Pro</span>
                            </div>
                            
                        </div>
                        <div className="container-ring-hide">
                            <span className="outer-ring"></span>
                            <span className="inner-ring"></span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="menu">
                        <h2>请选择您分享的主题</h2>
                        <div className="menu-box">
                            <ul className="">
                                <li><span>梦想家</span><span className="layer"></span></li>
                                <li><span>实力派</span></li>
                                <li><span>潜行者</span></li>
                                <li><span>勇敢者</span></li>
                                <li><span>领路人</span></li>
                                <li><span>乐天派</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer">保存主题</div>
            </div>
        )
    }
}
Theme.PropTypes = {
    enterAnimation: {
        duration: 2000,
        animation: "slideDown"
    },
    leaveAnimation:{
        duration: 2000,
        animation:"slideUp"
    }
}

export default Theme;