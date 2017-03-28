'use strict'
import * as React from 'react';

//import * as _ from "lodash";

import Swipe from "./swipe";


import {fetchPosts} from "components/common/fetch";



class Scroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            page:1,
            isLoading:true,
            oneHeight:false,
            isEnd:false,
        }

        this.getData = this.getData.bind(this);
        this.touchMove = this.touchMove.bind(this);
        //this.handClick = this.handClick.bind(this);

    }
    componentWillMount() {
        this.getData(1);
    }
    getData(num){
        let {pageSize,url,searchParam,analysis_data,pageName,pageSizeName} = this.props;
        let {page,items,isLoading,isEnd} = this.state;
        if((page!==1&&isLoading===true)||(isEnd)){
            return;
        }
        this.setState({
            isLoading:true
        })
        let _this = this,param = Object.assign({},searchParam);
        param[pageName] = page;
        param[pageSizeName] = pageSize;
        page += num;
        return fetchPosts(url,param,"POST").then((data)=>{
                console.log(data);
                let result = analysis_data(data);
                //debugger;
                if(result!==false){
                    _this.setState({
                        isLoading:false,
                        page,
                        isEnd:result.length<pageSize?true:false,
                        items:items.concat(result)
                    });
                }else{
                    _this.setState({
                        isLoading:false,});
                }

         }).catch(function(){
                    _this.setState({
                        isLoading:false,});
         });
    }

    touchMove(that,args){
        console.log(that,args);
        //let {items} = this.state;
        if(that.min-args[0]>-300){
            this.getData(1);
        }
    }


    render() {

        let {items,isLoading,page,isEnd} = this.state;
        let {renderItem,totalProps,nullRender} = this.props;
        let i =0,j=items.length,$lis = [],totalPrice=0,totalSb=0;
        while(i<j){
            console.log("----");
            let item = items[i];
            i+=1;
            $lis.push(renderItem(item,i))
        }

        let props = {
            property:"translateY",
            className:totalProps.className,
            tag:"ul",
            min:"auto",
            stopPro:false,
            vertical:true,
            touchMove:this.touchMove
        }
        if(j===0&&isLoading===false){
            return(<div className={totalProps.className}>{nullRender()}</div>)
        }else if(j===0&&page===0){
            return (<div></div>)
        }
        //return ({})
        return (
                <Swipe {...props} onClick={totalProps.onClick}>
                    {$lis}
                    {isLoading===true&&(<div className="no-up">Loading</div>)}
                    {page>1&&isEnd===true&&(<div className="no-up">-- 已经到底了 --</div>)}
                </Swipe>
        )
    }
};

Scroll.defaultProps = {
    pageSize:20,
    pageName:"page",
    pageSizeName:"pageSize",
    url:"/stuff/order/list.do",
    type:"POST",
    //根据每个 item渲染
    renderItem:function(item){
        console.log(item);
    },
    //加载在最外层触摸div props
    totalProps:{
        className:"",
        onClick:function(){}
    },
    //解析从 后台接收到数据  data
    analysis_data:function(data){
        return data;//如果请求错误  请返回false  正确 请返回 数组数据
    },
    //固定的查询参数  
    searchParam:{},
    nullRender:function(){
        return (<div style={{textAlign:'center',paddingTop:'10px'}}>暂无订单</div>)
    }
    
}

module.exports = Scroll;
