import React, { Component, PropTypes } from 'react';
import { VelocityComponent }  from "velocity-react";


class Ring extends Component {
    constructor(props) {
        super(props);

        let anAfter = this.getAn(props);
        this.state = {
            "doAn":false,
            "anBefore":{
                duration:500,
                animation:{
                    height:"70px",
                    rotateZ:0
                },
            },
            "anAfter":{
                duration:500,
                animation:anAfter
            }
        }

        this.handClick = this.handClick.bind(this);

    }
    getAn(props){
        let {level,totalLevel} = props;
        //level = level-1;
        let sunLevel = Number(totalLevel);
        let rz = (180/sunLevel)*level||0;
        //let endHeight = rz>135?50:70;
        let endHeight = (70-50)/sunLevel*level;
        endHeight = 70 -endHeight;

        console.log("动画 ",{
            height:endHeight,
            rotateZ:rz
        });
        return {
            height:endHeight,
            rotateZ:rz
        }
    }
    
    componentDidMount(){
        var self = this;
        self.setState({
            doAn:true
        });
        
    }
    handClick(){
        var self = this;
            console.log("ppppppppp")
            self.setState({
                doAn:!self.state.doAn
            })
    }
    render() {
        let {levelName} = this.props;
        let anProps = this.state.doAn===false?this.state.anBefore:this.state.anAfter;
        return (
            <div className="ring" onClick={this.handClick}>
                <div className="container-ring">
                    <span className="outer-ring"></span>
                    <span className="inner-ring"></span>
                    <div className="content-ring">
                        <span>QBII</span>
                        <span>认证等级</span>
                        <span>{levelName}</span>
                    </div>

                </div>
                <VelocityComponent  {...anProps}>
                    <div className="container-ring-hide">
                        <span className="outer-ring"></span>
                        <span className="inner-ring"></span>
                    </div>
                </VelocityComponent>
            </div>

        )
    }
}
Ring.defaultProps = {
    level: 5,
    levelName:"Pro",
    totalLevel:5
}

export default Ring;