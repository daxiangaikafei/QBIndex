
import React, { Component, PropTypes } from 'react';

import "./page.less";


class Info extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
       
    }
    
    render() {
        var {data,heart,startDate,endDate} = this.state;
        return (
            <div className="area-p">
                
             

            </div>
        )
    }
    
}
/*
<Chart projectId={this.props.routeParams.projectId}/>
 */
Info.defaultProps = {
}

export default Info;

//export default withRouter(OrderInfo);

//<div className="theme-img"></div>  <button><span className="step-download"></span></button>