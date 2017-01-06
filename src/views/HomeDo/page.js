import React from 'react'
import './page.less'
import { Link } from 'react-router'
import { Dialog } from 'ui'

class AppS extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            errorShow: true,
            show: false,
            data: {
                name: 'xiaolin',
                phone: 13391257557
            }
        }
    }

    operate() {
        if (this.state.show) {
            this.setState({
                show:false
            });
        }
        else if (!this.state.show) {
            this.setState({
                show:true
            });
        }
    }

    render() {
        return (<div className='HomeDo'>
            <button onClick={()=>this.operate()}>弹窗</button>
            <Dialog buttonConfirm={()=>this.operate()} show={this.state.show}  data={this.state.data}></Dialog>
        </div>)
    }
}

export default AppS
