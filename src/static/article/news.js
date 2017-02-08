export const newsContents = {
  1: `<!DOCTYPE html>
<!--headTrap<body></body><head></head><html></html>--><html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">

<script nonce="457328045" type="text/javascript">
window.__nonce_str = "457328045"
if (location.href.indexOf("safe=0") == -1 && window.__nonce_str) {
	window.__moonsafe_csp_offset || (window.__moonsafe_csp_offset = 18);
	document.write('<meta http-equiv="Content-Security-Policy" content="script-src https: \'unsafe-inline\' \'unsafe-eval\' *.qq.com *.weishi.com'+(window.__nonce_str ? ' \'nonce-' + window.__nonce_str + "\'":"")+ '">');

}
</script>

        <script nonce="457328045" type="text/javascript">
            window.logs = {
                pagetime: {}
            };
            window.logs.pagetime['html_begin'] = (+new Date());
        </script>

<script nonce="457328045" type="text/javascript">
    var biz = "MzI1MzQxNTgwOA=="||"";
    var sn = "006660037e09efe790126fab4d6c8d71" || ""|| "";
    var mid = "2247483804" || ""|| "";
    var idx = "1" || "" || "";
    window.__allowLoadResFromMp = true;

</script>
<script nonce="457328045" type="text/javascript">
var page_begintime=+new Date,is_rumor="",norumor="";
1*is_rumor&&!(1*norumor)&&biz&&mid&&(document.referrer&&-1!=document.referrer.indexOf("mp.weixin.qq.com/mp/rumor")||(location.href="http://mp.weixin.qq.com/mp/rumor?action=info&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"#wechat_redirect")),
document.domain="qq.com";
</script>
<script nonce="457328045" type="text/javascript">
var MutationObserver=window.WebKitMutationObserver||window.MutationObserver||window.MozMutationObserver,isDangerSrc=function(t){
if(t){
var e=t.match(/http(?:s)?:\/\/([^\/]+?)(\/|$)/);
if(e&&!/qq\.com(\:8080)?$/.test(e[1])&&!/weishi\.com$/.test(e[1]))return!0;
}
return!1;
},ishttp=0==location.href.indexOf("http://");
-1==location.href.indexOf("safe=0")&&ishttp&&"function"==typeof MutationObserver&&"mp.weixin.qq.com"==location.host&&(window.__observer_data={
count:0,
exec_time:0,
list:[]
},window.__observer=new MutationObserver(function(t){
window.__observer_data.count++;
var e=new Date,r=[];
t.forEach(function(t){
for(var e=t.addedNodes,o=0;o<e.length;o++){
var n=e[o];
if("SCRIPT"===n.tagName){
var i=n.src;
isDangerSrc(i)&&(window.__observer_data.list.push(i),r.push(n)),!i&&window.__nonce_str&&n.getAttribute("nonce")!=window.__nonce_str&&(window.__observer_data.list.push("inlinescript_without_nonce"),
r.push(n));
}
}
});
for(var o=0;o<r.length;o++){
var n=r[o];
n.parentNode&&n.parentNode.removeChild(n);
}
window.__observer_data.exec_time+=new Date-e;
}),window.__observer.observe(document,{
subtree:!0,
childList:!0
})),function(){
if(-1==location.href.indexOf("safe=0")&&Math.random()<.01&&ishttp&&HTMLScriptElement.prototype.__lookupSetter__&&"undefined"!=typeof Object.defineProperty){
window.__danger_src={
xmlhttprequest:[],
script_src:[],
script_setAttribute:[]
};
var t="$"+Math.random();
HTMLScriptElement.prototype.__old_method_script_src=HTMLScriptElement.prototype.__lookupSetter__("src"),
HTMLScriptElement.prototype.__defineSetter__("src",function(t){
t&&isDangerSrc(t)&&window.__danger_src.script_src.push(t),this.__old_method_script_src(t);
});
var e="element_setAttribute"+t;
Object.defineProperty(Element.prototype,e,{
value:Element.prototype.setAttribute,
enumerable:!1
}),Element.prototype.setAttribute=function(t,r){
"SCRIPT"==this.tagName&&"src"==t&&isDangerSrc(r)&&window.__danger_src.script_setAttribute.push(r),
this[e](t,r);
};
}
}();
</script>

        <link rel="dns-prefetch" href="//res.wx.qq.com">
<link rel="dns-prefetch" href="//mmbiz.qpic.cn">
<link rel="shortcut icon" type="image/x-icon" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/favicon22c41b.ico">
<script nonce="457328045" type="text/javascript">
    String.prototype.html = function(encode) {
        var replace =["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];
        if (encode) {
            replace.reverse();
        }
        for (var i=0,str=this;i< replace.length;i+= 2) {
             str=str.replace(new RegExp(replace[i],'g'),replace[i+1]);
        }
        return str;
    };

    window.isInWeixinApp = function() {
        return /MicroMessenger/.test(navigator.userAgent);
    };

    window.getQueryFromURL = function(url) {
        url = url || 'http://qq.com/s?a=b#rd';
        var tmp = url.split('?'),
            query = (tmp[1] || "").split('#')[0].split('&'),
            params = {};
        for (var i=0; i<query.length; i++) {
            var arg = query[i].split('=');
            params[arg[0]] = arg[1];
        }
        if (params['pass_ticket']) {
        	params['pass_ticket'] = encodeURIComponent(params['pass_ticket'].html(false).html(false).replace(/\s/g,"+"));
        }
        return params;
    };

    (function() {
	    var params = getQueryFromURL(location.href);
        window.uin = params['uin'] || "" || '';
        window.key = params['key'] || "" || '';
        window.wxtoken = params['wxtoken'] || '';
        window.pass_ticket = params['pass_ticket'] || '';
    })();

    function wx_loaderror() {
        if (location.pathname === '/bizmall/reward') {
            new Image().src = '/mp/jsreport?key=96&content=reward_res_load_err&r=' + Math.random();
        }
    }

</script>

        <title>全新身份QBII，钱宝5.0时代身具跨时代新标识</title>

<style>html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.6}body{-webkit-touch-callout:none;font-family:-apple-system-font,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;background-color:#f3f3f3;line-height:inherit}body.rich_media_empty_extra{background-color:#fff}body.rich_media_empty_extra .rich_media_area_primary:before{display:none}h1,h2,h3,h4,h5,h6{font-weight:400;font-size:16px}*{margin:0;padding:0}a{color:#607fa6;text-decoration:none}.rich_media_inner{font-size:16px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.rich_media_area_primary{position:relative;padding:20px 15px 15px;background-color:#fff}.rich_media_area_primary:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);top:auto;bottom:-2px}.rich_media_area_primary .original_img_wrp{display:inline-block;font-size:0}.rich_media_area_primary .original_img_wrp .tips_global{display:block;margin-top:.5em;font-size:14px;text-align:right;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.rich_media_area_extra{padding:0 15px 0}.rich_media_title{margin-bottom:10px;line-height:1.4;font-weight:400;font-size:24px}.rich_media_meta_list{margin-bottom:18px;line-height:20px;font-size:0}.rich_media_meta_list em{font-style:normal}.rich_media_meta{display:inline-block;vertical-align:middle;margin-right:8px;margin-bottom:10px;font-size:16px}.meta_original_tag{display:inline-block;vertical-align:middle;padding:1px .5em;border:1px solid #9e9e9e;color:#8c8c8c;border-top-left-radius:20% 50%;-moz-border-radius-topleft:20% 50%;-webkit-border-top-left-radius:20% 50%;border-top-right-radius:20% 50%;-moz-border-radius-topright:20% 50%;-webkit-border-top-right-radius:20% 50%;border-bottom-left-radius:20% 50%;-moz-border-radius-bottomleft:20% 50%;-webkit-border-bottom-left-radius:20% 50%;border-bottom-right-radius:20% 50%;-moz-border-radius-bottomright:20% 50%;-webkit-border-bottom-right-radius:20% 50%;font-size:15px;line-height:1.1}.meta_enterprise_tag img{width:30px;height:30px!important;display:block;position:relative;margin-top:-3px;border:0}.rich_media_meta_text{color:#8c8c8c}span.rich_media_meta_nickname{display:none}.rich_media_thumb_wrp{margin-bottom:6px}.rich_media_thumb_wrp .original_img_wrp{display:block}.rich_media_thumb{display:block;width:100%}.rich_media_content{overflow:hidden;color:#3e3e3e}.rich_media_content *{max-width:100%!important;box-sizing:border-box!important;-webkit-box-sizing:border-box!important;word-wrap:break-word!important}.rich_media_content p{clear:both;min-height:1em}.rich_media_content em{font-style:italic}.rich_media_content fieldset{min-width:0}.rich_media_content .list-paddingleft-2{padding-left:30px}.rich_media_content blockquote{margin:0;padding-left:10px;border-left:3px solid #dbdbdb}img{height:auto!important}@media(min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.mm_appmsg .rich_media_inner,.mm_appmsg .rich_media_meta,.mm_appmsg .discuss_list,.mm_appmsg .rich_media_extra,.mm_appmsg .title_tips .tips{font-size:17px}.mm_appmsg .meta_original_tag{font-size:15px}}@media(min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.mm_appmsg .rich_media_title{font-size:25px}}@media screen and (min-width:1024px){.rich_media{width:740px;margin-left:auto;margin-right:auto}.rich_media_inner{padding:20px}body{background-color:#fff}}@media screen and (min-width:1025px){body{font-family:"Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif}.rich_media{position:relative}.rich_media_inner{background-color:#fff;padding-bottom:100px}}.radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.cell{padding:.8em 0;display:block;position:relative}.cell_hd,.cell_bd,.cell_ft{display:table-cell;vertical-align:middle;word-wrap:break-word;word-break:break-all;white-space:nowrap}.cell_primary{width:2000px;white-space:normal}.flex_cell{padding:10px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex_cell_primary{width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;box-flex:1;flex:1}.original_tool_area{display:block;padding:.75em 1em 0;-webkit-tap-highlight-color:rgba(0,0,0,0);color:#3e3e3e;border:1px solid #eaeaea;margin:20px 0}.original_tool_area .tips_global{position:relative;padding-bottom:.5em;font-size:15px}.original_tool_area .tips_global:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #dbdbdb;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.original_tool_area .radius_avatar{width:27px;height:27px;padding:0;margin-right:.5em}.original_tool_area .radius_avatar img{height:100%!important}.original_tool_area .flex_cell_bd{width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.original_tool_area .flex_cell_ft{font-size:14px;color:#8c8c8c;padding-left:1em;white-space:nowrap}.original_tool_area .icon_access:after{content:" ";display:inline-block;height:8px;width:8px;border-width:1px 1px 0 0;border-color:#cbcad0;border-style:solid;transform:matrix(0.71,0.71,-0.71,0.71,0,0);-ms-transform:matrix(0.71,0.71,-0.71,0.71,0,0);-webkit-transform:matrix(0.71,0.71,-0.71,0.71,0,0);position:relative;top:-2px;top:-1px}.weui_loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12,end) infinite;animation:weuiLoading 1s steps(12,end) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=) no-repeat;-webkit-background-size:100%;background-size:100%}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}@keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}.gif_img_wrp{display:inline-block;font-size:0;position:relative;font-weight:400;font-style:normal;text-indent:0;text-shadow:none 1px 1px rgba(0,0,0,0.5)}.gif_img_wrp img{vertical-align:top}.gif_img_tips{background:rgba(0,0,0,0.6)!important;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#99000000',endcolorstr = '#99000000');border-top-left-radius:1.2em 50%;-moz-border-radius-topleft:1.2em 50%;-webkit-border-top-left-radius:1.2em 50%;border-top-right-radius:1.2em 50%;-moz-border-radius-topright:1.2em 50%;-webkit-border-top-right-radius:1.2em 50%;border-bottom-left-radius:1.2em 50%;-moz-border-radius-bottomleft:1.2em 50%;-webkit-border-bottom-left-radius:1.2em 50%;border-bottom-right-radius:1.2em 50%;-moz-border-radius-bottomright:1.2em 50%;-webkit-border-bottom-right-radius:1.2em 50%;line-height:2.3;font-size:11px;color:#fff;text-align:center;position:absolute;bottom:10px;left:10px;min-width:65px}.gif_img_tips.loading{min-width:75px}.gif_img_tips i{vertical-align:middle;margin:-0.2em .73em 0 -2px}.gif_img_play_arrow{display:inline-block;width:0;height:0;border-width:8px;border-style:dashed;border-color:transparent;border-right-width:0;border-left-color:#fff;border-left-style:solid;border-width:5px 0 5px 8px}.gif_img_loading{width:14px;height:14px}i.gif_img_loading{margin-left:-4px}.gif_bg_tips_wrp{position:relative;height:0;line-height:0;margin:0;padding:0}.gif_bg_tips_wrp .gif_img_tips_group{position:absolute;top:0;left:0;z-index:9999}.gif_bg_tips_wrp .gif_img_tips_group .gif_img_tips{top:0;left:0;bottom:auto}.rich_media_global_msg{position:fixed;top:0;left:0;right:0;padding:1em 35px 1em 15px;z-index:1;background-color:#c6e0f8;color:#8c8c8c;font-size:13px}.rich_media_global_msg .icon_closed{position:absolute;right:15px;top:50%;margin-top:-5px;line-height:300px;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);background:transparent url(/mmbizwap/zh_CN/htmledition/images/icon/appmsg/icon_appmsg_msg_closed_sprite.2x.png) no-repeat 0 0;width:11px;height:11px;vertical-align:middle;display:inline-block;-webkit-background-size:100% auto;background-size:100% auto}.rich_media_global_msg .icon_closed:active{background-position:0 -17px}.preview_appmsg .rich_media_title{margin-top:1.9em}@media screen and (min-width:1024px){.rich_media_global_msg{position:relative;margin:0 20px}.preview_appmsg .rich_media_title{margin-top:0}}</style>
<style>

    </style>
<!--[if lt IE 9]>
<link rel="stylesheet" type="text/css" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_pc2c9cd6.css">
<![endif]-->

    </head>
    <body id="activity-detail" class="zh_CN mm_appmsg">

    <script nonce="457328045" type="text/javascript">
        var write_sceen_time = (+new Date());
    </script>

    <div id="js_article" class="rich_media">

        <div id="js_top_ad_area" class="top_banner">

        </div>


        <div class="rich_media_inner">
                        <div id="page-content">
                <div id="img-content" class="rich_media_area_primary">
                    <h2 class="rich_media_title" id="activity-name">
                        全新身份QBII，钱宝5.0时代身具跨时代新标识
                    </h2>
                    <div class="rich_media_meta_list">
                        						                        <em id="post-date" class="rich_media_meta rich_media_meta_text">2017-01-17</em>

                                                <em class="rich_media_meta rich_media_meta_text">QBII</em>
                                                <a class="rich_media_meta rich_media_meta_link rich_media_meta_nickname" href="##" id="post-user">藤榕数据平台</a>
                        <span class="rich_media_meta rich_media_meta_text rich_media_meta_nickname">藤榕数据平台</span>

                        <div id="js_profile_qrcode" class="profile_container" style="display:none;">
                            <div class="profile_inner">
                                <strong class="profile_nickname">藤榕数据平台</strong>
                                <img class="profile_avatar" id="js_profile_qrcode_img" src="" alt="">

                                <p class="profile_meta">
                                <label class="profile_meta_label">微信号</label>
                                <span class="profile_meta_value">tengrongdt</span>
                                </p>

                                <p class="profile_meta">
                                <label class="profile_meta_label">功能介绍</label>
                                <span class="profile_meta_value">藤榕公司出品</span>
                                </p>

                            </div>
                            <span class="profile_arrow_wrp" id="js_profile_arrow_wrp">
                                <i class="profile_arrow arrow_out"></i>
                                <i class="profile_arrow arrow_in"></i>
                            </span>
                        </div>
                    </div>







                    <div class="rich_media_content " id="js_content">




                        <p style="color: rgb(102, 102, 102); text-overflow: clip; clear: none; opacity: 1;">（<span style="color: rgb(0, 122, 170);">钱宝网</span>）昨天的《<span style="color: rgb(0, 122, 170);">雷声</span>》留下的神秘感</p><p style="color: rgb(102, 102, 102); text-overflow: clip; clear: none; opacity: 1;">在今天播出的《<span style="color: rgb(0, 122, 170);">雷声</span>》中为大家一一揭晓。</p><p style="color: rgb(102, 102, 102); text-overflow: clip; clear: none; opacity: 1;">而且，还有一枚重磅<span style="color: rgb(0, 122, 170);">核弹</span>级的消息要透露给大家!</p><p style="color: rgb(102, 102, 102); text-overflow: clip; clear: none; opacity: 1;">用老张的话说就是</p><p style="color: rgb(102, 102, 102); text-overflow: clip; clear: none; opacity: 1;">这期《<span style="color: rgb(0, 122, 170);">雷声</span>》播出后，好多<span style="color: rgb(0, 122, 170);">投资人</span>心里就更踏实了……</p><p style="color: rgb(102, 102, 102); text-overflow: clip; clear: none; opacity: 1;">嘘~看完视频，再说话!</p><p style="color: rgb(102, 102, 102); text-overflow: clip; clear: none; opacity: 1;"><br  /></p><p style="text-align: center;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRNHI49jOaMkKdpnoRRPREVfFLNNwJ5icrXyu0V0MV4tmxiczzKB7DSe3w/0?wx_fmt=jpeg" data-ratio="0.7490909090909091" data-w="550"  /><br  /></p><p style="text-align: center;"><br  /></p><p style="color: rgb(102, 102, 102); text-overflow: clip; clear: none; opacity: 1;">伴随着签到机制的成功改革，钱宝成功进行了一次蜕变和升级，如果说这次升级是钱宝的4.9时代，那么接下来具有跨时代意义的QBII的推出，将正式意味着我们成功跨入钱宝5.0时代，那时候没有万一和万十五的概念，只有你投资钱旺无人机或万物生，它们帮你挣收入的概念。本期《雷声》带着重磅消息和宝粉们见面，和你们一起畅谈未来的钱宝新时代。</p><p style="color: rgb(102, 102, 102); text-overflow: clip; clear: none; opacity: 1;"><br  /></p><p style="text-align: center;"><mip-img data-carousel="carousel" class="mib-img mip-element" src="https://ss0.baidu.com/6LVYsjip0QIZ8Aqbn9fN2DC/timg?pa&amp;quality=100&amp;size=w4096&amp;sec=1484611875&amp;di=fe88206335f1954ff4411785f3b131ba&amp;ref=http%3A%2F%2Fwww%2Eah%2Echinanews%2Ecom%2Fnews%2F2016%2F1107%2F30430%2Eshtml&amp;src=http%3A%2F%2Fwww%2Eah%2Echinanews%2Ecom%2F2016%2F1107%2FU478P946DT20161107135929%2Ejpg" style="box-sizing: border-box;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRS7VJf86dBZAkGS78bKuENrZPN5uKC5IpvImv4DdeYvZgzhErOjbJdg/0?wx_fmt=jpeg" data-ratio="0.5527272727272727" data-w="550"  /><br  /></mip-img></p><p style="text-align: center;"><mip-img data-carousel="carousel" class="mib-img mip-element" src="https://ss0.baidu.com/6LVYsjip0QIZ8Aqbn9fN2DC/timg?pa&amp;quality=100&amp;size=w4096&amp;sec=1484611875&amp;di=fe88206335f1954ff4411785f3b131ba&amp;ref=http%3A%2F%2Fwww%2Eah%2Echinanews%2Ecom%2Fnews%2F2016%2F1107%2F30430%2Eshtml&amp;src=http%3A%2F%2Fwww%2Eah%2Echinanews%2Ecom%2F2016%2F1107%2FU478P946DT20161107135929%2Ejpg" style="box-sizing: border-box;"><br  /></mip-img></p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;"><span style="color: rgb(102, 102, 102); line-height: 25.6px; text-align: center;">世界第七大航展的</span><span style="color: rgb(0, 122, 170);">珠海</span><span style="color: rgb(102, 102, 102); line-height: 25.6px; text-align: center;">国际航展</span></p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">老张为什么会亲临现场?</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">雷声不了<span style="color: rgb(0, 122, 170);">无人机</span>，我们在聊什么?</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">通过<span style="color: rgb(0, 122, 170);">无人机</span>这个产品</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">引申出了钱宝下一个新时代</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">在这个时代里</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">宝粉将会有一个全新的身份</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">QBII</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">如果是签到改革是钱宝的4.9时代</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">那么接下来具有跨时代意义的QBII的推出</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">将正式意味着我们成功跨入钱宝5.0时代</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">看完视频的你们一定有很多想对老张说的话</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">想对钱旺说的 想对钱宝说的</p><p style="color: rgb(102, 102, 102); text-align: center; text-overflow: clip; clear: none; opacity: 1;">来吧，点击留言说出你们的心声</p><p><br  /></p>
                    </div>
                    <script nonce="457328045" type="text/javascript">
                        var first_sceen__time = (+new Date());

                        if ("" == 1 && document.getElementById('js_content'))
                            document.getElementById('js_content').addEventListener("selectstart",function(e){ e.preventDefault(); });

                                        (function(){
                            if (navigator.userAgent.indexOf("WindowsWechat") != -1){
                                var link = document.createElement('link');
                                var head = document.getElementsByTagName('head')[0];
                                link.rel = 'stylesheet';
                                link.type = 'text/css';
                                link.href = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx31619e.css";
                                head.appendChild(link);
                            }
                        })();
                    </script>



                    <div class="ct_mpda_wrp" id="js_sponsor_ad_area" style="display:none;">

                    </div>



                                        <div class="rich_media_tool" id="js_toobar3">
                                                                    <div id="js_read_area3" class="media_tool_meta tips_global meta_primary" style="display:none;">阅读 <span id="readNum3"></span></div>

                        <span style="display:none;" class="media_tool_meta meta_primary tips_global meta_praise" id="like3">
                            <i class="icon_praise_gray"></i><span class="praise_num" id="likeNum3"></span>
                        </span>

                        <a id="js_report_article3" style="display:none;" class="media_tool_meta tips_global meta_extra" href="##">投诉</a>

                    </div>



                                    </div>

                <div class="rich_media_area_primary sougou" id="sg_tj" style="display:none">

                </div>

                <div class="rich_media_area_extra">


                                        <div class="mpda_bottom_container" id="js_bottom_ad_area">

                    </div>

                    <div id="js_iframetest" style="display:none;"></div>

                                    </div>

            </div>
            <div id="js_pc_qr_code" class="qr_code_pc_outer" style="display:none;">
                <div class="qr_code_pc_inner">
                    <div class="qr_code_pc">
                        <img id="js_pc_qr_code_img" class="qr_code_pc_img">
                        <p>微信扫一扫<br>关注该公众号</p>
                    </div>
                </div>
            </div>

        </div>
    </div>



        <script nonce="457328045">
    var __DEBUGINFO = {
        debug_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/debug/console2ca724.js",
        safe_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/moonsafe2f3e84.js",
        res_list: []
    };
</script>


<script nonce="457328045" type="text/javascript">

    if (!window.console) window.console = { log: function() {} };

    if (typeof getComputedStyle == 'undefined') {
        if (document.body.currentStyle) {
            window.getComputedStyle = function(el) {
                return el.currentStyle;
            }
        } else {
            window.getComputedStyle = {};
        }
    }
    var occupyImg = function() {
        var images = document.getElementsByTagName('img');
        var length = images.length;
        var container = document.getElementById('img-content');
        var max_width = container.offsetWidth;
        var container_padding = 0;
        var container_style = getComputedStyle(container);
        container_padding = parseFloat(container_style.paddingLeft) + parseFloat(container_style.paddingRight);
        max_width -= container_padding;
        var ua = navigator.userAgent.toLowerCase();
        var re = new RegExp("msie ([0-9]+[\.0-9]*)");
        var version;
        if (re.exec(ua) != null) {
            version = parseInt(RegExp.$1);
        }
        var isIE = false;
        if (typeof version != 'undefined' && version >= 6 && version <= 9) {
            isIE = true;
        }
        if (!max_width) {
            max_width = window.innerWidth - 30;
        }
        for (var i = 0; i < length; ++i) {
            var src_ = images[i].getAttribute('data-src');
            var realSrc = images[i].getAttribute('src');
            if (!src_ || realSrc) continue;
            var width_ = 1 * images[i].getAttribute('data-w') || max_width;
            var ratio_ = 1 * images[i].getAttribute('data-ratio');
            var height = 100;
            if (ratio_ && ratio_ > 0) {
                var img_style = getComputedStyle(images[i]);
                var init_width = images[i].style.width;

                if (init_width) {
                    images[i].setAttribute('_width', init_width);
                    if (init_width != 'auto') width_ = parseFloat(img_style.width);
                }
                var parent_width = 0;
                var parent = images[i].parentNode;
                var outerWidth = 0;
                while (true) {
                    var parent_style = getComputedStyle(parent);
                    if (!parent || !parent_style) break;
                    parent_width = parent.clientWidth - parseFloat(parent_style.paddingLeft) - parseFloat(parent_style.paddingRight) - outerWidth;
                    if (parent_width > 0) break;
                    outerWidth += parseFloat(parent_style.paddingLeft) + parseFloat(parent_style.paddingRight) + parseFloat(parent_style.marginLeft) + parseFloat(parent_style.marginRight) + parseFloat(parent_style.borderLeftWidth) + parseFloat(parent_style.borderRightWidth);
                    parent = parent.parentNode;
                }
                parent_width = parent_width || max_width;
                var width = width_ > parent_width ? parent_width : width_;
                var img_padding_border = parseFloat(img_style.paddingLeft) + parseFloat(img_style.paddingRight) + parseFloat(img_style.borderLeftWidth) + parseFloat(img_style.borderRightWidth);
                var img_padding_border_top_bottom = parseFloat(img_style.paddingTop) + parseFloat(img_style.paddingBottom) + parseFloat(img_style.borderTopWidth) + parseFloat(img_style.borderBottomWidth);
                img_padding_border = img_padding_border || 0;
                img_padding_border_top_bottom = img_padding_border_top_bottom || 0;
                height = (width - img_padding_border) * ratio_ + img_padding_border_top_bottom;
                images[i].style.cssText += ";width: " + width + "px !important;";
                if (isIE) {
                    var url = images[i].getAttribute('data-src');
                    images[i].src = url;
                } else {
                    images[i].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
                }
            } else {
                images[i].style.cssText += ";visibility: hidden !important;";
            }
            images[i].style.cssText += ";height: " + height + "px !important;";
        }
    }
    occupyImg();
</script>
<script nonce="457328045" type="text/javascript">

    var not_in_mm_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm322696.css";
    var windowwx_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx31619e.css";
    var article_improve_combo_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo322696.css";
    var tid = "";
    var aid = "";
    var clientversion = "0";
    var appuin = "MzI1MzQxNTgwOA=="||"";

    var source = "1";
    var abtest_cookie = "";

    var scene = 75;

    var itemidx = "";

    var _copyright_stat = "0";
    var _ori_article_type = "";

    var nickname = "藤榕数据平台";
    var appmsg_type = "9";
    var ct = "1484664922";
    var publish_time = "2017-01-17" || "";
    var user_name = "gh_1c763484ec17";
    var user_name_new = "";
    var fakeid   = "";
    var version   = "";
    var is_limit_user   = "0";
    var round_head_img = "http://mmbiz.qpic.cn/mmbiz_png/GiaZbmmYN8lajYkGicMatSsXNfGE01OmurM4v9m6nZibvUIc5eM7Au0TFy27XQ1dp6eTFPciae22ujXGGficC1Ypp1A/0?wx_fmt=png";
    var ori_head_img_url = "http://wx.qlogo.cn/mmhead/Q3auHgzwzM7iasFtsklyFgwjhtkicSKttCIMqP3Fsib0BtqBtYmWWXatw/132";
    var msg_title = "全新身份QBII，钱宝5.0时代身具跨时代新标识";
    var msg_desc = "（钱宝网）昨天的《雷声》留下的神秘感\x0a在今天播出的《雷声》中为大家一一揭晓。\x0a而且，还有一枚重磅核弹级的消息要透露给大家!";
    var msg_cdn_url = "http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRNHI49jOaMkKdpnoRRPREVfFLNNwJ5icrXyu0V0MV4tmxiczzKB7DSe3w/0?wx_fmt=jpeg";
    var msg_link = "http://mp.weixin.qq.com/s?__biz=MzI1MzQxNTgwOA==\x26amp;mid=2247483804\x26amp;idx=1\x26amp;sn=006660037e09efe790126fab4d6c8d71\x26amp;chksm=e9d59973dea2106590e38b8bac8e1689bae77c3ce0b6a76ddf08e6d12a486cf211d6d3853148#rd";
    var user_uin = "0"*1;
    var msg_source_url = '';
    var img_format = 'jpeg';
    var srcid = '0118kwEVFZmIM1TvxfFCFLEK';
    var req_id = '18112jbUDXrFN7LDfp7jjFC6';
    var networkType;
    var appmsgid = '' || '2247483804'|| "";
    var comment_id = "0" * 1;
    var comment_enabled = "" * 1;
    var is_need_reward = "0" * 1;
    var is_https_res = ("" * 1) && (location.protocol == "https:");
    var msg_daily_idx = "1" || "";

    var devicetype = "";
    var source_encode_biz = "";


    var reprint_ticket = "";
    var source_mid = "";
    var source_idx = "";

    var show_comment = "";
    var __appmsgCgiData = {
        can_use_page : "0"*1,
        is_wxg_stuff_uin : "0"*1,
        card_pos : "",
        copyright_stat : "0",
        source_biz : "",
        hd_head_img : "http://wx.qlogo.cn/mmhead/Q3auHgzwzM7iasFtsklyFgwjhtkicSKttCIMqP3Fsib0BtqBtYmWWXatw/0"||(window.location.protocol+"//"+window.location.host + "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/appmsg/pic_rumor_link.2x264e76.jpg")
    };
    var _empty_v = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/pages/voice/empty26f1f1.mp3";

    var copyright_stat = "0" * 1;

    var pay_fee = "" * 1;
    var pay_timestamp = "";
    var need_pay = "" * 1;

    var need_report_cost = "0" * 1;
    var use_tx_video_player = "0" * 1;
    var appmsg_fe_filter = "contenteditable";

    var friend_read_source = "" || "";
    var friend_read_version = "" || "";
    var friend_read_class_id = "" || "";

    var is_only_read = "1" * 1;
    var read_num = "" * 1;
    var like_num = "" * 1;
    var liked = "" == 'true' ? true : false;
    var is_temp_url = "" ? 1 : 0;
    var send_time = "";
      var icon_emotion_switch = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch.2x2f1273.png";
      var icon_emotion_switch_active = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch_active.2x2f1273.png";
      var icon_loading_white = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/icon_loading_white2805ea.gif";
      var icon_audio_unread = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/audio/icon_audio_unread26f1f1.png";
      var icon_qqmusic_default = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_default.2x26f1f1.png";
      var icon_qqmusic_source = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_source263724.png";

    var topic_default_img = '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/topic/pic_book_thumb.2x2e4987.png';







    var ban_scene = "0" * 1;

    var svr_time = "1484709448" * 1;

        window.wxtoken = "";
        window.__moon_initcallback = function(){
        if(!!window.__initCatch){
            window.__initCatch({
                idkey : 27613,
                startKey : 0,
                limit : 128,
                badjsId: 43,
                reportOpt : {
                    uin : uin,
                    biz : biz,
                    mid : mid,
                    idx : idx,
                    sn  : sn
                },
                extInfo : {
                    network_rate : 0.01,
                    badjs_rate: 0.1
                }
            });
        }
    }


</script>

        <script nonce="457328045">window.__moon_host = 'res.wx.qq.com';window.__moon_mainjs = 'appmsg/index.js';window.moon_map = {"appmsg/emotion/caret.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/caret278965.js","biz_wap/jsapi/cardticket.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/cardticket275627.js","appmsg/emotion/map.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/map278965.js","appmsg/emotion/textarea.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/textarea27cdc5.js","appmsg/emotion/nav.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/nav278965.js","appmsg/emotion/common.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/common278965.js","appmsg/emotion/slide.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/slide2a9cd9.js","pages/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/report322696.js","pages/music_player.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/music_player325336.js","pages/loadscript.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/loadscript30203e.js","appmsg/emotion/dom.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/dom31ff31.js","biz_wap/utils/hashrouter.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/hashrouter2805ea.js","biz_common/utils/wxgspeedsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/wxgspeedsdk30bcdd.js","a/sponsor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor3189b5.js","a/app_card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/app_card313f11.js","a/ios.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/ios275627.js","a/android.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/android2c5484.js","a/profile.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/profile31ff31.js","a/sponsor_a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor_a_tpl.html32c414.js","a/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_tpl.html32c414.js","a/mpshop.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/mpshop311179.js","a/card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/card311179.js","biz_wap/utils/position.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/position2f1750.js","a/a_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_report32e586.js","biz_common/utils/respTypes.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/respTypes2c57d0.js","appmsg/my_comment_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/my_comment_tpl.html325336.js","appmsg/cmt_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cmt_tpl.html32e586.js","sougou/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/a_tpl.html2c6e7c.js","appmsg/emotion/emotion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/emotion2f3ac3.js","biz_wap/utils/wapsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/wapsdk315b3f.js","biz_common/utils/monitor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/monitor304edd.js","biz_common/utils/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/report275627.js","appmsg/open_url_with_webview.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/open_url_with_webview3145f0.js","biz_common/utils/http.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/http30b871.js","biz_common/utils/cookie.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/cookie275627.js","appmsg/topic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/topic_tpl.html31ff31.js","pages/voice_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_tpl.html2f2e72.js","pages/voice_component.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_component310e30.js","pages/qqmusic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/qqmusic_tpl.html32c414.js","new_video/ctl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/new_video/ctl2d441f.js","a/testdata.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/testdata31a4be.js","appmsg/reward_entry.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/reward_entry3004a4.js","appmsg/comment.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/comment32a651.js","appmsg/like.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/like2eb52b.js","pages/version4video.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/version4video31d634.js","a/a.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a32e586.js","rt/appmsg/getappmsgext.rt.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/rt/appmsg/getappmsgext.rt2c21f6.js","biz_wap/utils/storage.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/storage2a74ac.js","biz_common/tmpl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/tmpl2b3578.js","appmsg/img_copyright_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/img_copyright_tpl.html2a2c13.js","biz_common/ui/imgonepx.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/ui/imgonepx275627.js","biz_wap/utils/ajax.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/ajax3274c9.js","biz_wap/utils/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/log2fcb7c.js","sougou/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/index31aefe.js","biz_wap/safe/mutation_observer_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/mutation_observer_report2fafd1.js","appmsg/fereport.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/fereport32e586.js","appmsg/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report304cae.js","appmsg/report_and_source.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report_and_source318ea2.js","appmsg/page_pos.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/page_pos30c907.js","appmsg/cdn_speed_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_speed_report3097b2.js","appmsg/wxtopic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/wxtopic31a3be.js","appmsg/voice.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/voice310e30.js","appmsg/qqmusic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/qqmusic31623d.js","appmsg/iframe.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/iframe32707f.js","appmsg/review_image.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/review_image309c11.js","appmsg/outer_link.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/outer_link275627.js","biz_wap/jsapi/core.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/core2ffa93.js","appmsg/copyright_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/copyright_report2ec4b2.js","appmsg/async.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/async330cc4.js","biz_wap/ui/lazyload_img.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/lazyload_img32a62b.js","biz_common/log/jserr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/log/jserr2805ea.js","appmsg/share.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/share322696.js","appmsg/cdn_img_lib.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_img_lib30b785.js","biz_common/utils/url/parse.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/url/parse2fb01a.js","page/appmsg/not_in_mm.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm.css32c99a.js","page/appmsg/page_mp_article_improve_combo.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo.css32c99a.js","biz_common/dom/event.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/event32e586.js","appmsg/test.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/test314065.js","biz_wap/utils/mmversion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/mmversion2f1d97.js","appmsg/max_age.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/max_age2fdd28.js","biz_common/dom/attr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/attr275627.js","appmsg/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/log300330.js","biz_common/dom/class.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/class275627.js","biz_wap/utils/device.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/device2b3aae.js","biz_wap/jsapi/a8key.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/a8key2a30ee.js","biz_common/utils/string/html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/string/html29f4e9.js","appmsg/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/index332f3f.js"};</script><script nonce="457328045" type="text/javascript">(function(){function d(a){window.__wxgspeeds.moonls_loadjs_begin=+new Date;var c=document.createElement("script");document.getElementsByTagName("body")[0].appendChild(c);c.type="text/javascript";c.async="async";;c.onload=function(){a&&f()};c.src=b;window.__wxgspeeds.moonls_loadjs_end=+new Date}function f(){window.__wxgspeeds.moonls_save_begin=+new Date;localStorage.setItem("__WXLS__moon",String(__moonf__));localStorage.setItem("__WXLS__moonarg",JSON.stringify({version:b,method:""}));window.__wxgspeeds.moonls_save_end=+new Date}var a=!!top&&!!top.window&&top.window.user_uin||0,e=0!==a&&1>Math.floor(a/100)%100;if(2876363900==a||1506075==a||942807682==a)e=!0;var b="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/moon32ebc4.js";window.__loadAllResFromMp&&(b=b.replace("res.wx.qq.com","mp.weixin.qq.com"),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=27613_12_1");window.__wxgspeeds||(window.__wxgspeeds={});if("function"==typeof __moonf__)__moonf__(),e&&localStorage&&f();else if(window.__wxgspeeds.moonloadtime=+new Date,e&&localStorage)try{var g=JSON.parse(localStorage.getItem("__WXLS__moonarg"))||{};if(g&&g.version==b){var h=localStorage.getItem("__WXLS__moon");localStorage.setItem("__WXLS__moonarg",JSON.stringify({version:b,method:"fromls"}));window.__moonls_fromls=!0;window.__wxgspeeds.moonls_loadls_end=+new Date;eval(h);__moonf__()}else d(!0)}catch(k){window.__moonls_fail=!0,d(!0)}else d(!1)})();</script>
  <script nonce="457328045" type="text/javascript">
    var real_show_page_time = +new Date();
    if (!!window.addEventListener){
        window.addEventListener("load", function(){
            window.onload_endtime = +new Date();
        });
    }

  </script>

    </body>
    <script nonce="457328045" type="text/javascript">document.addEventListener("touchstart", function() {},false);</script>
</html>
<!--tailTrap<body></body><head></head><html></html>-->

`,
  2: `<!DOCTYPE html>
<!--headTrap<body></body><head></head><html></html>--><html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">

<script nonce="335990561" type="text/javascript">
window.__nonce_str = "335990561"
if (location.href.indexOf("safe=0") == -1 && window.__nonce_str) {
	window.__moonsafe_csp_offset || (window.__moonsafe_csp_offset = 18);
	document.write('<meta http-equiv="Content-Security-Policy" content="script-src https: \'unsafe-inline\' \'unsafe-eval\' *.qq.com *.weishi.com'+(window.__nonce_str ? ' \'nonce-' + window.__nonce_str + "\'":"")+ '">');

}
</script>

        <script nonce="335990561" type="text/javascript">
            window.logs = {
                pagetime: {}
            };
            window.logs.pagetime['html_begin'] = (+new Date());
        </script>

<script nonce="335990561" type="text/javascript">
    var biz = "MzI1MzQxNTgwOA=="||"";
    var sn = "888362e738e0d4e8af6483932bcd17bb" || ""|| "";
    var mid = "2247483803" || ""|| "";
    var idx = "1" || "" || "";
    window.__allowLoadResFromMp = true;

</script>
<script nonce="335990561" type="text/javascript">
var page_begintime=+new Date,is_rumor="",norumor="";
1*is_rumor&&!(1*norumor)&&biz&&mid&&(document.referrer&&-1!=document.referrer.indexOf("mp.weixin.qq.com/mp/rumor")||(location.href="http://mp.weixin.qq.com/mp/rumor?action=info&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"#wechat_redirect")),
document.domain="qq.com";
</script>
<script nonce="335990561" type="text/javascript">
var MutationObserver=window.WebKitMutationObserver||window.MutationObserver||window.MozMutationObserver,isDangerSrc=function(t){
if(t){
var e=t.match(/http(?:s)?:\/\/([^\/]+?)(\/|$)/);
if(e&&!/qq\.com(\:8080)?$/.test(e[1])&&!/weishi\.com$/.test(e[1]))return!0;
}
return!1;
},ishttp=0==location.href.indexOf("http://");
-1==location.href.indexOf("safe=0")&&ishttp&&"function"==typeof MutationObserver&&"mp.weixin.qq.com"==location.host&&(window.__observer_data={
count:0,
exec_time:0,
list:[]
},window.__observer=new MutationObserver(function(t){
window.__observer_data.count++;
var e=new Date,r=[];
t.forEach(function(t){
for(var e=t.addedNodes,o=0;o<e.length;o++){
var n=e[o];
if("SCRIPT"===n.tagName){
var i=n.src;
isDangerSrc(i)&&(window.__observer_data.list.push(i),r.push(n)),!i&&window.__nonce_str&&n.getAttribute("nonce")!=window.__nonce_str&&(window.__observer_data.list.push("inlinescript_without_nonce"),
r.push(n));
}
}
});
for(var o=0;o<r.length;o++){
var n=r[o];
n.parentNode&&n.parentNode.removeChild(n);
}
window.__observer_data.exec_time+=new Date-e;
}),window.__observer.observe(document,{
subtree:!0,
childList:!0
})),function(){
if(-1==location.href.indexOf("safe=0")&&Math.random()<.01&&ishttp&&HTMLScriptElement.prototype.__lookupSetter__&&"undefined"!=typeof Object.defineProperty){
window.__danger_src={
xmlhttprequest:[],
script_src:[],
script_setAttribute:[]
};
var t="$"+Math.random();
HTMLScriptElement.prototype.__old_method_script_src=HTMLScriptElement.prototype.__lookupSetter__("src"),
HTMLScriptElement.prototype.__defineSetter__("src",function(t){
t&&isDangerSrc(t)&&window.__danger_src.script_src.push(t),this.__old_method_script_src(t);
});
var e="element_setAttribute"+t;
Object.defineProperty(Element.prototype,e,{
value:Element.prototype.setAttribute,
enumerable:!1
}),Element.prototype.setAttribute=function(t,r){
"SCRIPT"==this.tagName&&"src"==t&&isDangerSrc(r)&&window.__danger_src.script_setAttribute.push(r),
this[e](t,r);
};
}
}();
</script>

        <link rel="dns-prefetch" href="//res.wx.qq.com">
<link rel="dns-prefetch" href="//mmbiz.qpic.cn">
<link rel="shortcut icon" type="image/x-icon" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/favicon22c41b.ico">
<script nonce="335990561" type="text/javascript">
    String.prototype.html = function(encode) {
        var replace =["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];
        if (encode) {
            replace.reverse();
        }
        for (var i=0,str=this;i< replace.length;i+= 2) {
             str=str.replace(new RegExp(replace[i],'g'),replace[i+1]);
        }
        return str;
    };

    window.isInWeixinApp = function() {
        return /MicroMessenger/.test(navigator.userAgent);
    };

    window.getQueryFromURL = function(url) {
        url = url || 'http://qq.com/s?a=b#rd';
        var tmp = url.split('?'),
            query = (tmp[1] || "").split('#')[0].split('&'),
            params = {};
        for (var i=0; i<query.length; i++) {
            var arg = query[i].split('=');
            params[arg[0]] = arg[1];
        }
        if (params['pass_ticket']) {
        	params['pass_ticket'] = encodeURIComponent(params['pass_ticket'].html(false).html(false).replace(/\s/g,"+"));
        }
        return params;
    };

    (function() {
	    var params = getQueryFromURL(location.href);
        window.uin = params['uin'] || "" || '';
        window.key = params['key'] || "" || '';
        window.wxtoken = params['wxtoken'] || '';
        window.pass_ticket = params['pass_ticket'] || '';
    })();

    function wx_loaderror() {
        if (location.pathname === '/bizmall/reward') {
            new Image().src = '/mp/jsreport?key=96&content=reward_res_load_err&r=' + Math.random();
        }
    }

</script>

        <title>To Be QBII PRO：钱宝5.0新时代QBII PRO首批签约仪式</title>

<style>html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.6}body{-webkit-touch-callout:none;font-family:-apple-system-font,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;background-color:#f3f3f3;line-height:inherit}body.rich_media_empty_extra{background-color:#fff}body.rich_media_empty_extra .rich_media_area_primary:before{display:none}h1,h2,h3,h4,h5,h6{font-weight:400;font-size:16px}*{margin:0;padding:0}a{color:#607fa6;text-decoration:none}.rich_media_inner{font-size:16px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.rich_media_area_primary{position:relative;padding:20px 15px 15px;background-color:#fff}.rich_media_area_primary:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);top:auto;bottom:-2px}.rich_media_area_primary .original_img_wrp{display:inline-block;font-size:0}.rich_media_area_primary .original_img_wrp .tips_global{display:block;margin-top:.5em;font-size:14px;text-align:right;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.rich_media_area_extra{padding:0 15px 0}.rich_media_title{margin-bottom:10px;line-height:1.4;font-weight:400;font-size:24px}.rich_media_meta_list{margin-bottom:18px;line-height:20px;font-size:0}.rich_media_meta_list em{font-style:normal}.rich_media_meta{display:inline-block;vertical-align:middle;margin-right:8px;margin-bottom:10px;font-size:16px}.meta_original_tag{display:inline-block;vertical-align:middle;padding:1px .5em;border:1px solid #9e9e9e;color:#8c8c8c;border-top-left-radius:20% 50%;-moz-border-radius-topleft:20% 50%;-webkit-border-top-left-radius:20% 50%;border-top-right-radius:20% 50%;-moz-border-radius-topright:20% 50%;-webkit-border-top-right-radius:20% 50%;border-bottom-left-radius:20% 50%;-moz-border-radius-bottomleft:20% 50%;-webkit-border-bottom-left-radius:20% 50%;border-bottom-right-radius:20% 50%;-moz-border-radius-bottomright:20% 50%;-webkit-border-bottom-right-radius:20% 50%;font-size:15px;line-height:1.1}.meta_enterprise_tag img{width:30px;height:30px!important;display:block;position:relative;margin-top:-3px;border:0}.rich_media_meta_text{color:#8c8c8c}span.rich_media_meta_nickname{display:none}.rich_media_thumb_wrp{margin-bottom:6px}.rich_media_thumb_wrp .original_img_wrp{display:block}.rich_media_thumb{display:block;width:100%}.rich_media_content{overflow:hidden;color:#3e3e3e}.rich_media_content *{max-width:100%!important;box-sizing:border-box!important;-webkit-box-sizing:border-box!important;word-wrap:break-word!important}.rich_media_content p{clear:both;min-height:1em}.rich_media_content em{font-style:italic}.rich_media_content fieldset{min-width:0}.rich_media_content .list-paddingleft-2{padding-left:30px}.rich_media_content blockquote{margin:0;padding-left:10px;border-left:3px solid #dbdbdb}img{height:auto!important}@media(min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.mm_appmsg .rich_media_inner,.mm_appmsg .rich_media_meta,.mm_appmsg .discuss_list,.mm_appmsg .rich_media_extra,.mm_appmsg .title_tips .tips{font-size:17px}.mm_appmsg .meta_original_tag{font-size:15px}}@media(min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.mm_appmsg .rich_media_title{font-size:25px}}@media screen and (min-width:1024px){.rich_media{width:740px;margin-left:auto;margin-right:auto}.rich_media_inner{padding:20px}body{background-color:#fff}}@media screen and (min-width:1025px){body{font-family:"Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif}.rich_media{position:relative}.rich_media_inner{background-color:#fff;padding-bottom:100px}}.radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.cell{padding:.8em 0;display:block;position:relative}.cell_hd,.cell_bd,.cell_ft{display:table-cell;vertical-align:middle;word-wrap:break-word;word-break:break-all;white-space:nowrap}.cell_primary{width:2000px;white-space:normal}.flex_cell{padding:10px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex_cell_primary{width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;box-flex:1;flex:1}.original_tool_area{display:block;padding:.75em 1em 0;-webkit-tap-highlight-color:rgba(0,0,0,0);color:#3e3e3e;border:1px solid #eaeaea;margin:20px 0}.original_tool_area .tips_global{position:relative;padding-bottom:.5em;font-size:15px}.original_tool_area .tips_global:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #dbdbdb;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.original_tool_area .radius_avatar{width:27px;height:27px;padding:0;margin-right:.5em}.original_tool_area .radius_avatar img{height:100%!important}.original_tool_area .flex_cell_bd{width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.original_tool_area .flex_cell_ft{font-size:14px;color:#8c8c8c;padding-left:1em;white-space:nowrap}.original_tool_area .icon_access:after{content:" ";display:inline-block;height:8px;width:8px;border-width:1px 1px 0 0;border-color:#cbcad0;border-style:solid;transform:matrix(0.71,0.71,-0.71,0.71,0,0);-ms-transform:matrix(0.71,0.71,-0.71,0.71,0,0);-webkit-transform:matrix(0.71,0.71,-0.71,0.71,0,0);position:relative;top:-2px;top:-1px}.weui_loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12,end) infinite;animation:weuiLoading 1s steps(12,end) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=) no-repeat;-webkit-background-size:100%;background-size:100%}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}@keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}.gif_img_wrp{display:inline-block;font-size:0;position:relative;font-weight:400;font-style:normal;text-indent:0;text-shadow:none 1px 1px rgba(0,0,0,0.5)}.gif_img_wrp img{vertical-align:top}.gif_img_tips{background:rgba(0,0,0,0.6)!important;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#99000000',endcolorstr = '#99000000');border-top-left-radius:1.2em 50%;-moz-border-radius-topleft:1.2em 50%;-webkit-border-top-left-radius:1.2em 50%;border-top-right-radius:1.2em 50%;-moz-border-radius-topright:1.2em 50%;-webkit-border-top-right-radius:1.2em 50%;border-bottom-left-radius:1.2em 50%;-moz-border-radius-bottomleft:1.2em 50%;-webkit-border-bottom-left-radius:1.2em 50%;border-bottom-right-radius:1.2em 50%;-moz-border-radius-bottomright:1.2em 50%;-webkit-border-bottom-right-radius:1.2em 50%;line-height:2.3;font-size:11px;color:#fff;text-align:center;position:absolute;bottom:10px;left:10px;min-width:65px}.gif_img_tips.loading{min-width:75px}.gif_img_tips i{vertical-align:middle;margin:-0.2em .73em 0 -2px}.gif_img_play_arrow{display:inline-block;width:0;height:0;border-width:8px;border-style:dashed;border-color:transparent;border-right-width:0;border-left-color:#fff;border-left-style:solid;border-width:5px 0 5px 8px}.gif_img_loading{width:14px;height:14px}i.gif_img_loading{margin-left:-4px}.gif_bg_tips_wrp{position:relative;height:0;line-height:0;margin:0;padding:0}.gif_bg_tips_wrp .gif_img_tips_group{position:absolute;top:0;left:0;z-index:9999}.gif_bg_tips_wrp .gif_img_tips_group .gif_img_tips{top:0;left:0;bottom:auto}.rich_media_global_msg{position:fixed;top:0;left:0;right:0;padding:1em 35px 1em 15px;z-index:1;background-color:#c6e0f8;color:#8c8c8c;font-size:13px}.rich_media_global_msg .icon_closed{position:absolute;right:15px;top:50%;margin-top:-5px;line-height:300px;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);background:transparent url(/mmbizwap/zh_CN/htmledition/images/icon/appmsg/icon_appmsg_msg_closed_sprite.2x.png) no-repeat 0 0;width:11px;height:11px;vertical-align:middle;display:inline-block;-webkit-background-size:100% auto;background-size:100% auto}.rich_media_global_msg .icon_closed:active{background-position:0 -17px}.preview_appmsg .rich_media_title{margin-top:1.9em}@media screen and (min-width:1024px){.rich_media_global_msg{position:relative;margin:0 20px}.preview_appmsg .rich_media_title{margin-top:0}}</style>
<style>

    </style>
<!--[if lt IE 9]>
<link rel="stylesheet" type="text/css" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_pc2c9cd6.css">
<![endif]-->

    </head>
    <body id="activity-detail" class="zh_CN mm_appmsg">

    <script nonce="335990561" type="text/javascript">
        var write_sceen_time = (+new Date());
    </script>

    <div id="js_article" class="rich_media">

        <div id="js_top_ad_area" class="top_banner">

        </div>


        <div class="rich_media_inner">
                        <div id="page-content">
                <div id="img-content" class="rich_media_area_primary">
                    <h2 class="rich_media_title" id="activity-name">
                        To Be QBII PRO：钱宝5.0新时代QBII PRO首批签约仪式
                    </h2>
                    <div class="rich_media_meta_list">
                        						                        <em id="post-date" class="rich_media_meta rich_media_meta_text">2017-01-17</em>

                                                <em class="rich_media_meta rich_media_meta_text">QBII</em>
                                                <a class="rich_media_meta rich_media_meta_link rich_media_meta_nickname" href="##" id="post-user">藤榕数据平台</a>
                        <span class="rich_media_meta rich_media_meta_text rich_media_meta_nickname">藤榕数据平台</span>

                        <div id="js_profile_qrcode" class="profile_container" style="display:none;">
                            <div class="profile_inner">
                                <strong class="profile_nickname">藤榕数据平台</strong>
                                <img class="profile_avatar" id="js_profile_qrcode_img" src="" alt="">

                                <p class="profile_meta">
                                <label class="profile_meta_label">微信号</label>
                                <span class="profile_meta_value">tengrongdt</span>
                                </p>

                                <p class="profile_meta">
                                <label class="profile_meta_label">功能介绍</label>
                                <span class="profile_meta_value">藤榕公司出品</span>
                                </p>

                            </div>
                            <span class="profile_arrow_wrp" id="js_profile_arrow_wrp">
                                <i class="profile_arrow arrow_out"></i>
                                <i class="profile_arrow arrow_in"></i>
                            </span>
                        </div>
                    </div>







                    <div class="rich_media_content " id="js_content">




                        <section class="_135editor" data-id="87890" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; border: 0px none; box-sizing: border-box; background-color: rgb(255, 255, 255);"><section class="layout" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-right: auto; margin-left: auto;"><section style=" -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 36.8px;  box-sizing: border-box; transform: translate3d(0px, 0px, 0px); -webkit-transform: translate3d(0px, 0px, 0px); "><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; vertical-align: top; height: 1.7em; overflow: hidden; line-height: 0.78; box-sizing: border-box;"><section><span style="font-size: 14px;">东方欲晓，莫道君行早。踏遍青山人未老，风景这边独好。</span><br  /></section></section></section><section><section data-width="100%"><section><p>会昌城外高峰，颠连直接东溟。战士指看南粤，更加郁郁葱葱。</p><p style="text-align: right;">——题记</p></section></section></section></section></section><p><br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  /></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; background-color: rgb(255, 255, 255);"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichR7BOU8gHtRhfBCblW5Wgq4R4ANy6P1lQMlCDnwJqZhm2AWkbWnEFrlw/0?wx_fmt=jpeg" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: none; display: block; margin-top: 1rem; margin-bottom: 1rem; width: 670px; -webkit-user-select: none;" class="" data-type="jpeg" data-ratio="0.6671875" data-w="640"  /></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; background-color: rgb(255, 255, 255);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(192, 0, 0);">老子山下，峥嵘再启</span></p><p><br  /></p><section class="_135editor" data-id="88529" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; border: 0px none; box-sizing: border-box; background-color: rgb(255, 255, 255);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); overflow: hidden; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; vertical-align: middle; width: 6px; height: 6px; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box; transform: rotate(0.1deg); -webkit-transform: rotate(0.1deg);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 6px; height: 6px; border-radius: 100%; box-sizing: border-box; background-color: rgb(37, 102, 0);"></section></section></section><section data-width="100%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; vertical-align: middle; width: 670px; margin-right: -6px; margin-left: -7px; border-bottom-width: 2px; border-bottom-style: solid; border-bottom-color: rgb(37, 102, 0); box-sizing: border-box;"></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; vertical-align: middle; width: 6px; height: 6px; border-radius: 100%; box-sizing: border-box; background-color: rgb(37, 102, 0);"></section></section></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: -12px; box-sizing: border-box;"><section data-width="15%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; vertical-align: top; width: 100.5px; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: center; font-size: 14.4px; box-sizing: border-box; transform: translate3d(0px, 0px, 0px);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; vertical-align: top; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 2em; padding: 0.3em 0.5em; color: rgb(255, 255, 255); box-sizing: border-box; background-color: rgb(154, 205, 50);"><p class="135brush" data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box;"><br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  /></p><p class="135brush" data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box;"><br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  /></p><p class="135brush" data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box;"><br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  /></p><p class="135brush" data-brushtype="text" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box;"><br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  /></p></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 0.5em; width: 2em; border-left-width: 1em; border-left-style: solid; border-left-color: rgb(154, 205, 50); border-right-width: 1em; border-right-style: solid; border-right-color: rgb(154, 205, 50); box-sizing: border-box; border-bottom-width: 1em !important; border-bottom-style: solid !important; border-bottom-color: transparent !important;"></section></section></section></section></section><section data-width="85%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; vertical-align: top; width: 569.5px; padding-right: 13px; padding-left: 5px; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: 5px; box-sizing: border-box;"><section class="135brush" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-align: justify; font-size: 15px; line-height: 1.8; box-sizing: border-box;"><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box;">　　<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-size: 14px;">壮志豪迈，想那岁月峥嵘，雄关漫道真如铁。风尘天外风沙，日月窗前过马，俯仰间又一年。而今，迈步从头越，万木霜天红烂漫，天高海长。年年革故，岁岁鼎新；老子山下，黄花苍遒。一年一度冬风劲，人生易老天难老。不似春光，胜似春光，寥廓海天万里长。</span></p></section></section></section></section></section></section></section><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; background-color: rgb(255, 255, 255);"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichR3RubcpdC7jkVHBd4AZiazDXpwJJiayUh3xY6FmVkShxPnjnfzdMGbdjw/0?wx_fmt=jpeg" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: none; display: block; margin-top: 1rem; margin-bottom: 1rem; width: 670px; -webkit-user-select: none;" class="" data-type="jpeg" data-ratio="0.6671875" data-w="640"  /></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; white-space: normal; line-height: 2em; background-color: rgb(255, 255, 255);">　　<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">伴随着QBII钱宝5.0的渐明渐亮，QBII PRO也横空出世。QBII（Qualified Qbao Institutional Investors），合格的钱宝投资者。QBII PRO，最高级QBII ，QBII等级制度分类（PRO、A、B、C四个等级）里最高级别的。要成为我们的QBII PRO还有四个必备的要素：坚定的信仰、健全的人格、完整科学的知识体系和对这个知识体系学习和更新能力。”</span></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: 15px; margin-bottom: 15px; color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; white-space: normal; line-height: 2em; text-indent: 28px; background-color: rgb(255, 255, 255);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">这次签约仪式受邀的首批QBII，而且也都是最高等级的QBII PRO。如此的隆重其事和庄而重之，钱宝的目的是如何？钱宝下一步到底要做什么？走向什么方向？</span></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; background-color: rgb(255, 255, 255);"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRbLghoVe2YpZvDjjwIPG5V5Giasb2xKgkLCeZzVGHBIeAD6flFV9cN5Q/0?wx_fmt=jpeg" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: none; display: block; margin-top: 1rem; margin-bottom: 1rem; width: 670px; -webkit-user-select: none;" class="" data-type="jpeg" data-ratio="0.6671875" data-w="640"  /></p><p><br  /></p><section class="_135editor" data-id="86595" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; border: 0px none; box-sizing: border-box; background-color: rgb(255, 255, 255);"><section data-width="100%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; vertical-align: top; width: 670px;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 2.5em; height: 2.5em; margin-bottom: -2.5em; border-left-width: 2px; border-left-style: dotted; border-left-color: rgb(193, 193, 193); border-top-width: 2px; border-top-style: dotted; border-top-color: rgb(193, 193, 193); box-sizing: border-box;"></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 8px; box-sizing: border-box;"><section class="135brush" data-width="100%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 654px; color: rgb(204, 63, 10); padding: 10px 15px; box-sizing: border-box; background-color: rgb(253, 226, 216);"><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 25.6px; text-indent: 32px; white-space: pre-wrap;">　　<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 25.6px;">钱宝要做万千企业的孵化</span>平台，基于钱旺信控强大的资本、平台以及依托钱宝网1.6亿注册用户的流量池，以互联网+武装思维，以钱宝微商平台为流量入口，发掘具备深度消费需求的业务，通过生态圈内互联网化的融合，迅速孵化器商业和社会价值。同时，为创业者提供良好的环境和条件，帮助创业者把发明和成果尽快形成商品进入市场，提供综合服务帮助新兴的小企业成熟长大形成规模，为社会培养成功的企业和企业家。</span></p></section></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 2.5em; height: 2.5em; float: right; margin-top: -2.5em; box-sizing: border-box; border-right-width: 2px; border-right-style: dotted; border-right-color: rgb(193, 193, 193); border-bottom-width: 2px; border-bottom-style: dotted; border-bottom-color: rgb(193, 193, 193);"></section></section></section><p><br  /></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; white-space: normal; line-height: 2em; background-color: rgb(255, 255, 255);">　　<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">创新为王，实业兴国，固本安邦。《辛亥革命前十年间时论选集·与同志书》：“愤于国力之弱也，则曰讲求武备；痛于民生之窘也，则曰讲求实业。“实业救国”同样的，没有实业，就没有钱旺；&nbsp;没有实业，就没有钱旺的</span>今天。</p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; white-space: normal; line-height: 2em; background-color: rgb(255, 255, 255);"><br  /></p><section class="_135editor" data-id="86002" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-size: 14px; line-height: 25.2px; white-space: normal; font-family: 微软雅黑; border: 0px none; box-sizing: border-box; background-color: rgb(255, 255, 255);"><section class="layout" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto;"><section data-width="100%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; width: 509px; line-height: 0; color: rgb(255, 255, 255); background-color: rgb(136, 191, 177);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 8px; margin-top: -8px; margin-bottom: -8px;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: 4px; margin-right: -4px; margin-left: -4px; border-radius: 100%; line-height: 1; box-sizing: border-box; text-decoration: inherit; border-color: rgb(136, 191, 177); display: inline-block; height: 10px; width: 10px; float: right; background-color: rgb(254, 254, 254);"></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 2px; line-height: 2em; border: 1px solid rgb(254, 254, 254); margin-top: 14px; margin-right: 10px; margin-left: 10px; box-sizing: border-box;"><section class="135brush" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 6px; line-height: 2em; border: 1px solid rgb(254, 254, 254); box-sizing: border-box;"><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">　　回顾历史，西学东渐下的中国的近代化，就是一部不断寻求实业救国之路，求强求富的道路。转眼当下，第十二届全国人大三次会议，国务院李克强总理在政府工作报告中提出，要在960万平方公里土地上掀起"大众创业""草根创业"的新浪潮，形成"万众创""人人创新"的新态势。</p></section></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-right: auto; margin-bottom: -10px; margin-left: -4px; border-radius: 100%; line-height: 1; box-sizing: border-box; text-decoration: inherit; border-color: rgb(136, 191, 177); display: inline-block; height: 10px; width: 10px; background-color: rgb(254, 254, 254);"></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 6px -4px -4px; border-radius: 100%; line-height: 1; border-color: rgb(136, 191, 177); display: inline-block; height: 10px; width: 10px; float: right; box-sizing: border-box; background-color: rgb(254, 254, 254);"></section></section></section></section></section><section class="_135editor" data-id="85649" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; border: 0px none; box-sizing: border-box; background-color: rgb(255, 255, 255);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-bottom: 2px; margin-left: 4px; color: rgb(94, 123, 130); border-color: rgb(237, 241, 242); text-align: right; box-sizing: border-box;"><br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  /></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRdf3joQK4HVzFmlOv3bI8elU01xAFiboQLHChdKIRicQ0edRCiat36XNNQ/0?wx_fmt=jpeg" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: none; display: block; margin-top: 1rem; margin-bottom: 1rem; width: 670px; -webkit-user-select: none;" class="" data-type="jpeg" data-ratio="0.665625" data-w="640"  /></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><br  /></p></section></section><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; white-space: normal; line-height: 2em; background-color: rgb(255, 255, 255);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">　　“做投资人也是一个喜乐的事，终极传达的理念还是那句话，‘投资是一种修行’，QBII的时候这种修行就到了一定阶段了。你们的放心和喜乐，就是我们的初心。”张小雷语。</span></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; background-color: rgb(255, 255, 255);"><br  /></p><section class="_135editor" data-id="7294" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; border: 0px none; box-sizing: border-box; background-color: rgb(255, 255, 255);"><section data-width="80%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 407.1875px; margin: 30px auto;"><section class="_135editor" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: 0px none; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 10px 10px 20px; border: 1px solid rgb(191, 191, 191); box-shadow: rgb(170, 170, 170) 2px 2px 3px; transform: rotate(7deg); background-color: rgb(254, 254, 254);"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichR70WUuQabYjYGZbxUHNQgibh1KA5s5icbf9tM3dHk8coBwkPibaePiaZqOw/0?wx_fmt=jpeg" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: none; display: block; margin-top: 1rem; margin-bottom: 1rem; width: 385.188px; -webkit-user-select: none;" class="" data-type="jpeg" data-ratio="0.6671875" data-w="640"  /></section><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  /></p></section><section class="_135editor" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: 0px none; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: 微软雅黑; padding: 10px 10px 20px; border: 1px solid rgb(191, 191, 191); box-shadow: rgb(170, 170, 170) 2px 2px 3px; transform: rotate(-8deg); background-color: rgb(254, 254, 254);"><img border="0" class="" data-ratio="0.6671875" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichR0cLjnLk4vlXgFYdtyC6oCcRKSHEeQSAnDsgNDiatz2vIk96mX8rQDiaw/0?wx_fmt=jpeg" data-type="jpeg" data-w="640" data-width="100%" height="" opacity="" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: none; display: block; width: 385.188px; -webkit-user-select: none;" title="" width="100%"  /></section></section></section></section><section class="_135editor" data-id="86002" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-size: 14px; line-height: 25.2px; white-space: normal; font-family: 微软雅黑; border: 0px none; box-sizing: border-box; background-color: rgb(255, 255, 255);"><section class="layout" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto;"><section data-width="100%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; width: 509px; line-height: 0; color: rgb(255, 255, 255); background-color: rgb(136, 191, 177);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 8px; margin-top: -8px; margin-bottom: -8px;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-right: auto; margin-bottom: -8px; margin-left: -4px; border-radius: 100%; line-height: 1; box-sizing: border-box; text-decoration: inherit; border-color: rgb(136, 191, 177); display: inline-block; height: 10px; width: 10px; background-color: rgb(254, 254, 254);"></section></section></section></section></section><p><br  /></p><section data-role="outer" label="Powered by 135editor.com" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-size: 14px; line-height: 25.2px; white-space: normal; font-family: 微软雅黑; background-color: rgb(255, 255, 255);"><section class="_135editor" data-id="86003" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: 0px none; box-sizing: border-box;"><section class="layout" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 10px auto;"><section data-width="100%" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: inline-block; width: 670px; line-height: 0; color: rgb(255, 255, 255); background-color: rgb(248, 122, 122);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); height: 8px; margin-top: -8px; margin-bottom: -8px;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-right: auto; margin-bottom: -8px; margin-left: -4px; border-radius: 100%; line-height: 1; box-sizing: border-box; text-decoration: inherit; border-color: rgb(248, 122, 122); display: inline-block; height: 10px; width: 10px; background-color: rgb(254, 254, 254);"></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: 4px; margin-right: -4px; margin-left: -4px; border-radius: 100%; line-height: 1; box-sizing: border-box; text-decoration: inherit; border-color: rgb(248, 122, 122); display: inline-block; height: 10px; width: 10px; float: right; background-color: rgb(254, 254, 254);"></section><section class="135brush" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 2em; margin-top: 14px; margin-right: 10px; margin-left: 10px; padding: 6px; box-sizing: border-box;"><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">　　一<span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-indent: 32px; line-height: 25.6px; white-space: pre-wrap;">不同于过去收益仅来自行为，之后QBII的收益将叠加很大一部分的投资收益。QBII可以投资人的身份参与主营业务，可以享受一键签到、任务等特权，可以进入钱宝投资人核心社交圈，还可具备所投业务标的的运营权和投票权等等，更将得到PE和风投的青睐。</span><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 32px; text-indent: 32px;">&nbsp;</span></p></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-right: auto; margin-bottom: -10px; margin-left: -4px; border-radius: 100%; line-height: 1; box-sizing: border-box; text-decoration: inherit; border-color: rgb(248, 122, 122); display: inline-block; height: 10px; width: 10px; background-color: rgb(254, 254, 254);"></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin: 6px -4px -4px; border-radius: 100%; line-height: 1; border-color: rgb(248, 122, 122); display: inline-block; height: 10px; width: 10px; float: right; box-sizing: border-box; background-color: rgb(254, 254, 254);"></section></section></section></section></section></section><p><br  /></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: 15px; margin-bottom: 15px; color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; white-space: normal; text-indent: 32px; line-height: 2em; background-color: rgb(255, 255, 255);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 25.6px; white-space: pre-wrap;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); background: yellow;">老兵先行，你们陪伴钱宝走过很多风雨。</span></span><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 25.6000003814697px; white-space: pre-wrap;">“QBII PRO需要很强的风险承担能力，因为老宝粉跟我们走了很久，不管是财富的积累还是思维意识上的磨炼，都能和钱宝保持高度统一。这不是分蛋糕的发财梦，这是一个战场，老兵先行才是正确的战略方向。跟着老兵走，我们才能一起活下来，一起走向前方，一起战胜敌人。”</span></span></p><p><br  /></p><section><section><section><section><section><section><section style="text-align: center;">QBII Pro带着创新、矫健的步伐<br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  /></section><p style="text-align: center;">向我们走来</p><p><br  /></p></section></section></section><section class="_135editor" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: 0px none; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(75, 101, 98); line-height: 2;"><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; text-align: center;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(142, 201, 101);">在一代伟人周恩来的故里</span></span></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; text-align: center;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(255, 202, 0);">在壮志满怀的老子山下</span></span></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; text-align: center;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(249, 110, 87);">在汩汩涌动的凤凰泉边</span></span></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; text-align: center;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(0, 112, 192);">在敞大光明的度假中心内</span></span></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; text-align: center;"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(62, 62, 62);">共同见证钱宝的蜕变与革新</span></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><br style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"  /></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(63, 63, 63);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; white-space: pre-wrap;">让我们一起，带着期待和欢乐，走进</span><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; white-space: pre-wrap;">12</span><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; white-space: pre-wrap;">月</span><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; white-space: pre-wrap;">23</span><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; white-space: pre-wrap;">日老子山</span><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; white-space: pre-wrap;">钱宝5.0新时代QBII PRO首批签约仪式！</span></span></span></p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(63, 63, 63);"><span style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px; white-space: pre-wrap;"><br  /></span></span></span></p></section></section></section></section></section></section><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); color: rgb(38, 38, 38); font-family: 微软雅黑, arial; font-size: 14px; line-height: 25.2px; white-space: normal; background-color: rgb(255, 255, 255);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><section class="_135editor" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: 0px none; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); margin-top: 10px; margin-bottom: 10px;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 670px; padding-bottom: 5px; box-sizing: border-box; background-color: rgba(164, 122, 206, 0.8);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 10px; box-sizing: border-box; background-color: rgb(255, 201, 98);"><section class="_135editor" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); border: 0px none; box-sizing: border-box;"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><section style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 10px; color: rgb(255, 255, 255); line-height: 2; box-sizing: border-box;"><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px;">活动详情：钱宝5.0新时代QBII PRO首批签约仪式</p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px;">活动时间：2016年12月23日（周五）</p><p style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); line-height: 26px;">活动地点：老子山（江苏省淮安市洪泽区老子山镇凤凰泉国际体育旅游度假中心）</p></section></section></section></section></section></section></section></section></section><p><br  /></p><p><br  /></p>
                    </div>
                    <script nonce="335990561" type="text/javascript">
                        var first_sceen__time = (+new Date());

                        if ("" == 1 && document.getElementById('js_content'))
                            document.getElementById('js_content').addEventListener("selectstart",function(e){ e.preventDefault(); });

                                        (function(){
                            if (navigator.userAgent.indexOf("WindowsWechat") != -1){
                                var link = document.createElement('link');
                                var head = document.getElementsByTagName('head')[0];
                                link.rel = 'stylesheet';
                                link.type = 'text/css';
                                link.href = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx31619e.css";
                                head.appendChild(link);
                            }
                        })();
                    </script>



                    <div class="ct_mpda_wrp" id="js_sponsor_ad_area" style="display:none;">

                    </div>



                                        <div class="rich_media_tool" id="js_toobar3">
                                                                    <div id="js_read_area3" class="media_tool_meta tips_global meta_primary" style="display:none;">阅读 <span id="readNum3"></span></div>

                        <span style="display:none;" class="media_tool_meta meta_primary tips_global meta_praise" id="like3">
                            <i class="icon_praise_gray"></i><span class="praise_num" id="likeNum3"></span>
                        </span>

                        <a id="js_report_article3" style="display:none;" class="media_tool_meta tips_global meta_extra" href="##">投诉</a>

                    </div>



                                    </div>

                <div class="rich_media_area_primary sougou" id="sg_tj" style="display:none">

                </div>

                <div class="rich_media_area_extra">


                                        <div class="mpda_bottom_container" id="js_bottom_ad_area">

                    </div>

                    <div id="js_iframetest" style="display:none;"></div>

                                    </div>

            </div>
            <div id="js_pc_qr_code" class="qr_code_pc_outer" style="display:none;">
                <div class="qr_code_pc_inner">
                    <div class="qr_code_pc">
                        <img id="js_pc_qr_code_img" class="qr_code_pc_img">
                        <p>微信扫一扫<br>关注该公众号</p>
                    </div>
                </div>
            </div>

        </div>
    </div>



        <script nonce="335990561">
    var __DEBUGINFO = {
        debug_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/debug/console2ca724.js",
        safe_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/moonsafe2f3e84.js",
        res_list: []
    };
</script>



<script nonce="335990561" type="text/javascript">

    if (!window.console) window.console = { log: function() {} };

    if (typeof getComputedStyle == 'undefined') {
        if (document.body.currentStyle) {
            window.getComputedStyle = function(el) {
                return el.currentStyle;
            }
        } else {
            window.getComputedStyle = {};
        }
    }
    var occupyImg = function() {
        var images = document.getElementsByTagName('img');
        var length = images.length;
        var container = document.getElementById('img-content');
        var max_width = container.offsetWidth;
        var container_padding = 0;
        var container_style = getComputedStyle(container);
        container_padding = parseFloat(container_style.paddingLeft) + parseFloat(container_style.paddingRight);
        max_width -= container_padding;
        var ua = navigator.userAgent.toLowerCase();
        var re = new RegExp("msie ([0-9]+[\.0-9]*)");
        var version;
        if (re.exec(ua) != null) {
            version = parseInt(RegExp.$1);
        }
        var isIE = false;
        if (typeof version != 'undefined' && version >= 6 && version <= 9) {
            isIE = true;
        }
        if (!max_width) {
            max_width = window.innerWidth - 30;
        }
        for (var i = 0; i < length; ++i) {
            var src_ = images[i].getAttribute('data-src');
            var realSrc = images[i].getAttribute('src');
            if (!src_ || realSrc) continue;
            var width_ = 1 * images[i].getAttribute('data-w') || max_width;
            var ratio_ = 1 * images[i].getAttribute('data-ratio');
            var height = 100;
            if (ratio_ && ratio_ > 0) {
                var img_style = getComputedStyle(images[i]);
                var init_width = images[i].style.width;

                if (init_width) {
                    images[i].setAttribute('_width', init_width);
                    if (init_width != 'auto') width_ = parseFloat(img_style.width);
                }
                var parent_width = 0;
                var parent = images[i].parentNode;
                var outerWidth = 0;
                while (true) {
                    var parent_style = getComputedStyle(parent);
                    if (!parent || !parent_style) break;
                    parent_width = parent.clientWidth - parseFloat(parent_style.paddingLeft) - parseFloat(parent_style.paddingRight) - outerWidth;
                    if (parent_width > 0) break;
                    outerWidth += parseFloat(parent_style.paddingLeft) + parseFloat(parent_style.paddingRight) + parseFloat(parent_style.marginLeft) + parseFloat(parent_style.marginRight) + parseFloat(parent_style.borderLeftWidth) + parseFloat(parent_style.borderRightWidth);
                    parent = parent.parentNode;
                }
                parent_width = parent_width || max_width;
                var width = width_ > parent_width ? parent_width : width_;
                var img_padding_border = parseFloat(img_style.paddingLeft) + parseFloat(img_style.paddingRight) + parseFloat(img_style.borderLeftWidth) + parseFloat(img_style.borderRightWidth);
                var img_padding_border_top_bottom = parseFloat(img_style.paddingTop) + parseFloat(img_style.paddingBottom) + parseFloat(img_style.borderTopWidth) + parseFloat(img_style.borderBottomWidth);
                img_padding_border = img_padding_border || 0;
                img_padding_border_top_bottom = img_padding_border_top_bottom || 0;
                height = (width - img_padding_border) * ratio_ + img_padding_border_top_bottom;
                images[i].style.cssText += ";width: " + width + "px !important;";
                if (isIE) {
                    var url = images[i].getAttribute('data-src');
                    images[i].src = url;
                } else {
                    images[i].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
                }
            } else {
                images[i].style.cssText += ";visibility: hidden !important;";
            }
            images[i].style.cssText += ";height: " + height + "px !important;";
        }
    }
    occupyImg();
</script>
<script nonce="335990561" type="text/javascript">

    var not_in_mm_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm322696.css";
    var windowwx_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx31619e.css";
    var article_improve_combo_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo322696.css";
    var tid = "";
    var aid = "";
    var clientversion = "0";
    var appuin = "MzI1MzQxNTgwOA=="||"";

    var source = "1";
    var abtest_cookie = "";

    var scene = 75;

    var itemidx = "";

    var _copyright_stat = "0";
    var _ori_article_type = "";

    var nickname = "藤榕数据平台";
    var appmsg_type = "9";
    var ct = "1484664857";
    var publish_time = "2017-01-17" || "";
    var user_name = "gh_1c763484ec17";
    var user_name_new = "";
    var fakeid   = "";
    var version   = "";
    var is_limit_user   = "0";
    var round_head_img = "http://mmbiz.qpic.cn/mmbiz_png/GiaZbmmYN8lajYkGicMatSsXNfGE01OmurM4v9m6nZibvUIc5eM7Au0TFy27XQ1dp6eTFPciae22ujXGGficC1Ypp1A/0?wx_fmt=png";
    var ori_head_img_url = "http://wx.qlogo.cn/mmhead/Q3auHgzwzM7iasFtsklyFgwjhtkicSKttCIMqP3Fsib0BtqBtYmWWXatw/132";
    var msg_title = "To Be QBII PRO：钱宝5.0新时代QBII PRO首批签约仪式";
    var msg_desc = "东方欲晓，莫道君行早。踏遍青山人未老，风景这边独好。";
    var msg_cdn_url = "http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichR7BOU8gHtRhfBCblW5Wgq4R4ANy6P1lQMlCDnwJqZhm2AWkbWnEFrlw/0?wx_fmt=jpeg";
    var msg_link = "http://mp.weixin.qq.com/s?__biz=MzI1MzQxNTgwOA==\x26amp;mid=2247483803\x26amp;idx=1\x26amp;sn=888362e738e0d4e8af6483932bcd17bb\x26amp;chksm=e9d59974dea21062b8174809eb33c3dc0adf58406b97f82e153a07d8dc8ff8bf8093af7385d5#rd";
    var user_uin = "0"*1;
    var msg_source_url = '';
    var img_format = 'jpeg';
    var srcid = '0117M7YdtHp5N7rUMoPuOOw9';
    var req_id = '18092wkXZ1nlaiGwPCEbSd1w';
    var networkType;
    var appmsgid = '' || '2247483803'|| "";
    var comment_id = "0" * 1;
    var comment_enabled = "" * 1;
    var is_need_reward = "0" * 1;
    var is_https_res = ("" * 1) && (location.protocol == "https:");
    var msg_daily_idx = "1" || "";

    var devicetype = "";
    var source_encode_biz = "";


    var reprint_ticket = "";
    var source_mid = "";
    var source_idx = "";

    var show_comment = "";
    var __appmsgCgiData = {
        can_use_page : "0"*1,
        is_wxg_stuff_uin : "0"*1,
        card_pos : "",
        copyright_stat : "0",
        source_biz : "",
        hd_head_img : "http://wx.qlogo.cn/mmhead/Q3auHgzwzM7iasFtsklyFgwjhtkicSKttCIMqP3Fsib0BtqBtYmWWXatw/0"||(window.location.protocol+"//"+window.location.host + "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/appmsg/pic_rumor_link.2x264e76.jpg")
    };
    var _empty_v = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/pages/voice/empty26f1f1.mp3";

    var copyright_stat = "0" * 1;

    var pay_fee = "" * 1;
    var pay_timestamp = "";
    var need_pay = "" * 1;

    var need_report_cost = "0" * 1;
    var use_tx_video_player = "0" * 1;
    var appmsg_fe_filter = "contenteditable";

    var friend_read_source = "" || "";
    var friend_read_version = "" || "";
    var friend_read_class_id = "" || "";

    var is_only_read = "1" * 1;
    var read_num = "" * 1;
    var like_num = "" * 1;
    var liked = "" == 'true' ? true : false;
    var is_temp_url = "" ? 1 : 0;
    var send_time = "";
      var icon_emotion_switch = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch.2x2f1273.png";
      var icon_emotion_switch_active = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch_active.2x2f1273.png";
      var icon_loading_white = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/icon_loading_white2805ea.gif";
      var icon_audio_unread = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/audio/icon_audio_unread26f1f1.png";
      var icon_qqmusic_default = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_default.2x26f1f1.png";
      var icon_qqmusic_source = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_source263724.png";

    var topic_default_img = '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/topic/pic_book_thumb.2x2e4987.png';







    var ban_scene = "0" * 1;

    var svr_time = "1484703125" * 1;

        window.wxtoken = "";
        window.__moon_initcallback = function(){
        if(!!window.__initCatch){
            window.__initCatch({
                idkey : 27613,
                startKey : 0,
                limit : 128,
                badjsId: 43,
                reportOpt : {
                    uin : uin,
                    biz : biz,
                    mid : mid,
                    idx : idx,
                    sn  : sn
                },
                extInfo : {
                    network_rate : 0.01,
                    badjs_rate: 0.1
                }
            });
        }
    }


</script>

        <script nonce="335990561">window.__moon_host = 'res.wx.qq.com';window.__moon_mainjs = 'appmsg/index.js';window.moon_map = {"appmsg/emotion/caret.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/caret278965.js","biz_wap/jsapi/cardticket.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/cardticket275627.js","appmsg/emotion/map.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/map278965.js","appmsg/emotion/textarea.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/textarea27cdc5.js","appmsg/emotion/nav.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/nav278965.js","appmsg/emotion/common.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/common278965.js","appmsg/emotion/slide.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/slide2a9cd9.js","pages/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/report322696.js","pages/music_player.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/music_player325336.js","pages/loadscript.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/loadscript30203e.js","appmsg/emotion/dom.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/dom31ff31.js","biz_wap/utils/hashrouter.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/hashrouter2805ea.js","biz_common/utils/wxgspeedsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/wxgspeedsdk30bcdd.js","a/sponsor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor3189b5.js","a/app_card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/app_card313f11.js","a/ios.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/ios275627.js","a/android.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/android2c5484.js","a/profile.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/profile31ff31.js","a/sponsor_a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor_a_tpl.html32c414.js","a/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_tpl.html32c414.js","a/mpshop.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/mpshop311179.js","a/card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/card311179.js","biz_wap/utils/position.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/position2f1750.js","a/a_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_report32e586.js","biz_common/utils/respTypes.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/respTypes2c57d0.js","appmsg/my_comment_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/my_comment_tpl.html325336.js","appmsg/cmt_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cmt_tpl.html32e586.js","sougou/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/a_tpl.html2c6e7c.js","appmsg/emotion/emotion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/emotion2f3ac3.js","biz_wap/utils/wapsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/wapsdk315b3f.js","biz_common/utils/monitor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/monitor304edd.js","biz_common/utils/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/report275627.js","appmsg/open_url_with_webview.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/open_url_with_webview3145f0.js","biz_common/utils/http.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/http30b871.js","biz_common/utils/cookie.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/cookie275627.js","appmsg/topic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/topic_tpl.html31ff31.js","pages/voice_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_tpl.html2f2e72.js","pages/voice_component.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_component310e30.js","pages/qqmusic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/qqmusic_tpl.html32c414.js","new_video/ctl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/new_video/ctl2d441f.js","a/testdata.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/testdata31a4be.js","appmsg/reward_entry.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/reward_entry3004a4.js","appmsg/comment.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/comment32a651.js","appmsg/like.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/like2eb52b.js","pages/version4video.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/version4video31d634.js","a/a.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a32e586.js","rt/appmsg/getappmsgext.rt.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/rt/appmsg/getappmsgext.rt2c21f6.js","biz_wap/utils/storage.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/storage2a74ac.js","biz_common/tmpl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/tmpl2b3578.js","appmsg/img_copyright_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/img_copyright_tpl.html2a2c13.js","biz_common/ui/imgonepx.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/ui/imgonepx275627.js","biz_wap/utils/ajax.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/ajax3274c9.js","biz_wap/utils/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/log2fcb7c.js","sougou/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/index31aefe.js","biz_wap/safe/mutation_observer_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/mutation_observer_report2fafd1.js","appmsg/fereport.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/fereport32e586.js","appmsg/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report304cae.js","appmsg/report_and_source.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report_and_source318ea2.js","appmsg/page_pos.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/page_pos30c907.js","appmsg/cdn_speed_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_speed_report3097b2.js","appmsg/wxtopic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/wxtopic31a3be.js","appmsg/voice.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/voice310e30.js","appmsg/qqmusic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/qqmusic31623d.js","appmsg/iframe.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/iframe32707f.js","appmsg/review_image.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/review_image309c11.js","appmsg/outer_link.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/outer_link275627.js","biz_wap/jsapi/core.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/core2ffa93.js","appmsg/copyright_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/copyright_report2ec4b2.js","appmsg/async.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/async330cc4.js","biz_wap/ui/lazyload_img.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/lazyload_img32a62b.js","biz_common/log/jserr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/log/jserr2805ea.js","appmsg/share.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/share322696.js","appmsg/cdn_img_lib.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_img_lib30b785.js","biz_common/utils/url/parse.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/url/parse2fb01a.js","page/appmsg/not_in_mm.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm.css32c99a.js","page/appmsg/page_mp_article_improve_combo.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo.css32c99a.js","biz_common/dom/event.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/event32e586.js","appmsg/test.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/test314065.js","biz_wap/utils/mmversion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/mmversion2f1d97.js","appmsg/max_age.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/max_age2fdd28.js","biz_common/dom/attr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/attr275627.js","appmsg/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/log300330.js","biz_common/dom/class.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/class275627.js","biz_wap/utils/device.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/device2b3aae.js","biz_wap/jsapi/a8key.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/a8key2a30ee.js","biz_common/utils/string/html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/string/html29f4e9.js","appmsg/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/index332f3f.js"};</script><script nonce="335990561" type="text/javascript">(function(){function d(a){window.__wxgspeeds.moonls_loadjs_begin=+new Date;var c=document.createElement("script");document.getElementsByTagName("body")[0].appendChild(c);c.type="text/javascript";c.async="async";;c.onload=function(){a&&f()};c.src=b;window.__wxgspeeds.moonls_loadjs_end=+new Date}function f(){window.__wxgspeeds.moonls_save_begin=+new Date;localStorage.setItem("__WXLS__moon",String(__moonf__));localStorage.setItem("__WXLS__moonarg",JSON.stringify({version:b,method:""}));window.__wxgspeeds.moonls_save_end=+new Date}var a=!!top&&!!top.window&&top.window.user_uin||0,e=0!==a&&1>Math.floor(a/100)%100;if(2876363900==a||1506075==a||942807682==a)e=!0;var b="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/moon32ebc4.js";window.__loadAllResFromMp&&(b=b.replace("res.wx.qq.com","mp.weixin.qq.com"),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=27613_12_1");window.__wxgspeeds||(window.__wxgspeeds={});if("function"==typeof __moonf__)__moonf__(),e&&localStorage&&f();else if(window.__wxgspeeds.moonloadtime=+new Date,e&&localStorage)try{var g=JSON.parse(localStorage.getItem("__WXLS__moonarg"))||{};if(g&&g.version==b){var h=localStorage.getItem("__WXLS__moon");localStorage.setItem("__WXLS__moonarg",JSON.stringify({version:b,method:"fromls"}));window.__moonls_fromls=!0;window.__wxgspeeds.moonls_loadls_end=+new Date;eval(h);__moonf__()}else d(!0)}catch(k){window.__moonls_fail=!0,d(!0)}else d(!1)})();</script>
  <script nonce="335990561" type="text/javascript">
    var real_show_page_time = +new Date();
    if (!!window.addEventListener){
        window.addEventListener("load", function(){
            window.onload_endtime = +new Date();
        });
    }

  </script>

    </body>
    <script nonce="335990561" type="text/javascript">document.addEventListener("touchstart", function() {},false);</script>
</html>
<!--tailTrap<body></body><head></head><html></html>-->
`,
3: `<!DOCTYPE html>
<!--headTrap<body></body><head></head><html></html>--><html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">

<script nonce="962517487" type="text/javascript">
window.__nonce_str = "962517487"
if (location.href.indexOf("safe=0") == -1 && window.__nonce_str) {
	window.__moonsafe_csp_offset || (window.__moonsafe_csp_offset = 18);
	document.write('<meta http-equiv="Content-Security-Policy" content="script-src https: \'unsafe-inline\' \'unsafe-eval\' *.qq.com *.weishi.com'+(window.__nonce_str ? ' \'nonce-' + window.__nonce_str + "\'":"")+ '">');

}
</script>

        <script nonce="962517487" type="text/javascript">
            window.logs = {
                pagetime: {}
            };
            window.logs.pagetime['html_begin'] = (+new Date());
        </script>

<script nonce="962517487" type="text/javascript">
    var biz = "MzI1MzQxNTgwOA=="||"";
    var sn = "bcd4c747098a5672949bf58309953935" || ""|| "";
    var mid = "2247483805" || ""|| "";
    var idx = "1" || "" || "";
    window.__allowLoadResFromMp = true;

</script>
<script nonce="962517487" type="text/javascript">
var page_begintime=+new Date,is_rumor="",norumor="";
1*is_rumor&&!(1*norumor)&&biz&&mid&&(document.referrer&&-1!=document.referrer.indexOf("mp.weixin.qq.com/mp/rumor")||(location.href="http://mp.weixin.qq.com/mp/rumor?action=info&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"#wechat_redirect")),
document.domain="qq.com";
</script>
<script nonce="962517487" type="text/javascript">
var MutationObserver=window.WebKitMutationObserver||window.MutationObserver||window.MozMutationObserver,isDangerSrc=function(t){
if(t){
var e=t.match(/http(?:s)?:\/\/([^\/]+?)(\/|$)/);
if(e&&!/qq\.com(\:8080)?$/.test(e[1])&&!/weishi\.com$/.test(e[1]))return!0;
}
return!1;
},ishttp=0==location.href.indexOf("http://");
-1==location.href.indexOf("safe=0")&&ishttp&&"function"==typeof MutationObserver&&"mp.weixin.qq.com"==location.host&&(window.__observer_data={
count:0,
exec_time:0,
list:[]
},window.__observer=new MutationObserver(function(t){
window.__observer_data.count++;
var e=new Date,r=[];
t.forEach(function(t){
for(var e=t.addedNodes,o=0;o<e.length;o++){
var n=e[o];
if("SCRIPT"===n.tagName){
var i=n.src;
isDangerSrc(i)&&(window.__observer_data.list.push(i),r.push(n)),!i&&window.__nonce_str&&n.getAttribute("nonce")!=window.__nonce_str&&(window.__observer_data.list.push("inlinescript_without_nonce"),
r.push(n));
}
}
});
for(var o=0;o<r.length;o++){
var n=r[o];
n.parentNode&&n.parentNode.removeChild(n);
}
window.__observer_data.exec_time+=new Date-e;
}),window.__observer.observe(document,{
subtree:!0,
childList:!0
})),function(){
if(-1==location.href.indexOf("safe=0")&&Math.random()<.01&&ishttp&&HTMLScriptElement.prototype.__lookupSetter__&&"undefined"!=typeof Object.defineProperty){
window.__danger_src={
xmlhttprequest:[],
script_src:[],
script_setAttribute:[]
};
var t="$"+Math.random();
HTMLScriptElement.prototype.__old_method_script_src=HTMLScriptElement.prototype.__lookupSetter__("src"),
HTMLScriptElement.prototype.__defineSetter__("src",function(t){
t&&isDangerSrc(t)&&window.__danger_src.script_src.push(t),this.__old_method_script_src(t);
});
var e="element_setAttribute"+t;
Object.defineProperty(Element.prototype,e,{
value:Element.prototype.setAttribute,
enumerable:!1
}),Element.prototype.setAttribute=function(t,r){
"SCRIPT"==this.tagName&&"src"==t&&isDangerSrc(r)&&window.__danger_src.script_setAttribute.push(r),
this[e](t,r);
};
}
}();
</script>

        <link rel="dns-prefetch" href="//res.wx.qq.com">
<link rel="dns-prefetch" href="//mmbiz.qpic.cn">
<link rel="shortcut icon" type="image/x-icon" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/favicon22c41b.ico">
<script nonce="962517487" type="text/javascript">
    String.prototype.html = function(encode) {
        var replace =["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];
        if (encode) {
            replace.reverse();
        }
        for (var i=0,str=this;i< replace.length;i+= 2) {
             str=str.replace(new RegExp(replace[i],'g'),replace[i+1]);
        }
        return str;
    };

    window.isInWeixinApp = function() {
        return /MicroMessenger/.test(navigator.userAgent);
    };

    window.getQueryFromURL = function(url) {
        url = url || 'http://qq.com/s?a=b#rd';
        var tmp = url.split('?'),
            query = (tmp[1] || "").split('#')[0].split('&'),
            params = {};
        for (var i=0; i<query.length; i++) {
            var arg = query[i].split('=');
            params[arg[0]] = arg[1];
        }
        if (params['pass_ticket']) {
        	params['pass_ticket'] = encodeURIComponent(params['pass_ticket'].html(false).html(false).replace(/\s/g,"+"));
        }
        return params;
    };

    (function() {
	    var params = getQueryFromURL(location.href);
        window.uin = params['uin'] || "" || '';
        window.key = params['key'] || "" || '';
        window.wxtoken = params['wxtoken'] || '';
        window.pass_ticket = params['pass_ticket'] || '';
    })();

    function wx_loaderror() {
        if (location.pathname === '/bizmall/reward') {
            new Image().src = '/mp/jsreport?key=96&content=reward_res_load_err&r=' + Math.random();
        }
    }

</script>

        <title>钱宝CEO张小雷先生对QBII的概念提出深刻解读</title>

<style>html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.6}body{-webkit-touch-callout:none;font-family:-apple-system-font,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;background-color:#f3f3f3;line-height:inherit}body.rich_media_empty_extra{background-color:#fff}body.rich_media_empty_extra .rich_media_area_primary:before{display:none}h1,h2,h3,h4,h5,h6{font-weight:400;font-size:16px}*{margin:0;padding:0}a{color:#607fa6;text-decoration:none}.rich_media_inner{font-size:16px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.rich_media_area_primary{position:relative;padding:20px 15px 15px;background-color:#fff}.rich_media_area_primary:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);top:auto;bottom:-2px}.rich_media_area_primary .original_img_wrp{display:inline-block;font-size:0}.rich_media_area_primary .original_img_wrp .tips_global{display:block;margin-top:.5em;font-size:14px;text-align:right;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.rich_media_area_extra{padding:0 15px 0}.rich_media_title{margin-bottom:10px;line-height:1.4;font-weight:400;font-size:24px}.rich_media_meta_list{margin-bottom:18px;line-height:20px;font-size:0}.rich_media_meta_list em{font-style:normal}.rich_media_meta{display:inline-block;vertical-align:middle;margin-right:8px;margin-bottom:10px;font-size:16px}.meta_original_tag{display:inline-block;vertical-align:middle;padding:1px .5em;border:1px solid #9e9e9e;color:#8c8c8c;border-top-left-radius:20% 50%;-moz-border-radius-topleft:20% 50%;-webkit-border-top-left-radius:20% 50%;border-top-right-radius:20% 50%;-moz-border-radius-topright:20% 50%;-webkit-border-top-right-radius:20% 50%;border-bottom-left-radius:20% 50%;-moz-border-radius-bottomleft:20% 50%;-webkit-border-bottom-left-radius:20% 50%;border-bottom-right-radius:20% 50%;-moz-border-radius-bottomright:20% 50%;-webkit-border-bottom-right-radius:20% 50%;font-size:15px;line-height:1.1}.meta_enterprise_tag img{width:30px;height:30px!important;display:block;position:relative;margin-top:-3px;border:0}.rich_media_meta_text{color:#8c8c8c}span.rich_media_meta_nickname{display:none}.rich_media_thumb_wrp{margin-bottom:6px}.rich_media_thumb_wrp .original_img_wrp{display:block}.rich_media_thumb{display:block;width:100%}.rich_media_content{overflow:hidden;color:#3e3e3e}.rich_media_content *{max-width:100%!important;box-sizing:border-box!important;-webkit-box-sizing:border-box!important;word-wrap:break-word!important}.rich_media_content p{clear:both;min-height:1em}.rich_media_content em{font-style:italic}.rich_media_content fieldset{min-width:0}.rich_media_content .list-paddingleft-2{padding-left:30px}.rich_media_content blockquote{margin:0;padding-left:10px;border-left:3px solid #dbdbdb}img{height:auto!important}@media(min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.mm_appmsg .rich_media_inner,.mm_appmsg .rich_media_meta,.mm_appmsg .discuss_list,.mm_appmsg .rich_media_extra,.mm_appmsg .title_tips .tips{font-size:17px}.mm_appmsg .meta_original_tag{font-size:15px}}@media(min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.mm_appmsg .rich_media_title{font-size:25px}}@media screen and (min-width:1024px){.rich_media{width:740px;margin-left:auto;margin-right:auto}.rich_media_inner{padding:20px}body{background-color:#fff}}@media screen and (min-width:1025px){body{font-family:"Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif}.rich_media{position:relative}.rich_media_inner{background-color:#fff;padding-bottom:100px}}.radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.cell{padding:.8em 0;display:block;position:relative}.cell_hd,.cell_bd,.cell_ft{display:table-cell;vertical-align:middle;word-wrap:break-word;word-break:break-all;white-space:nowrap}.cell_primary{width:2000px;white-space:normal}.flex_cell{padding:10px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex_cell_primary{width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;box-flex:1;flex:1}.original_tool_area{display:block;padding:.75em 1em 0;-webkit-tap-highlight-color:rgba(0,0,0,0);color:#3e3e3e;border:1px solid #eaeaea;margin:20px 0}.original_tool_area .tips_global{position:relative;padding-bottom:.5em;font-size:15px}.original_tool_area .tips_global:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #dbdbdb;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.original_tool_area .radius_avatar{width:27px;height:27px;padding:0;margin-right:.5em}.original_tool_area .radius_avatar img{height:100%!important}.original_tool_area .flex_cell_bd{width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.original_tool_area .flex_cell_ft{font-size:14px;color:#8c8c8c;padding-left:1em;white-space:nowrap}.original_tool_area .icon_access:after{content:" ";display:inline-block;height:8px;width:8px;border-width:1px 1px 0 0;border-color:#cbcad0;border-style:solid;transform:matrix(0.71,0.71,-0.71,0.71,0,0);-ms-transform:matrix(0.71,0.71,-0.71,0.71,0,0);-webkit-transform:matrix(0.71,0.71,-0.71,0.71,0,0);position:relative;top:-2px;top:-1px}.weui_loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12,end) infinite;animation:weuiLoading 1s steps(12,end) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=) no-repeat;-webkit-background-size:100%;background-size:100%}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}@keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}.gif_img_wrp{display:inline-block;font-size:0;position:relative;font-weight:400;font-style:normal;text-indent:0;text-shadow:none 1px 1px rgba(0,0,0,0.5)}.gif_img_wrp img{vertical-align:top}.gif_img_tips{background:rgba(0,0,0,0.6)!important;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#99000000',endcolorstr = '#99000000');border-top-left-radius:1.2em 50%;-moz-border-radius-topleft:1.2em 50%;-webkit-border-top-left-radius:1.2em 50%;border-top-right-radius:1.2em 50%;-moz-border-radius-topright:1.2em 50%;-webkit-border-top-right-radius:1.2em 50%;border-bottom-left-radius:1.2em 50%;-moz-border-radius-bottomleft:1.2em 50%;-webkit-border-bottom-left-radius:1.2em 50%;border-bottom-right-radius:1.2em 50%;-moz-border-radius-bottomright:1.2em 50%;-webkit-border-bottom-right-radius:1.2em 50%;line-height:2.3;font-size:11px;color:#fff;text-align:center;position:absolute;bottom:10px;left:10px;min-width:65px}.gif_img_tips.loading{min-width:75px}.gif_img_tips i{vertical-align:middle;margin:-0.2em .73em 0 -2px}.gif_img_play_arrow{display:inline-block;width:0;height:0;border-width:8px;border-style:dashed;border-color:transparent;border-right-width:0;border-left-color:#fff;border-left-style:solid;border-width:5px 0 5px 8px}.gif_img_loading{width:14px;height:14px}i.gif_img_loading{margin-left:-4px}.gif_bg_tips_wrp{position:relative;height:0;line-height:0;margin:0;padding:0}.gif_bg_tips_wrp .gif_img_tips_group{position:absolute;top:0;left:0;z-index:9999}.gif_bg_tips_wrp .gif_img_tips_group .gif_img_tips{top:0;left:0;bottom:auto}.rich_media_global_msg{position:fixed;top:0;left:0;right:0;padding:1em 35px 1em 15px;z-index:1;background-color:#c6e0f8;color:#8c8c8c;font-size:13px}.rich_media_global_msg .icon_closed{position:absolute;right:15px;top:50%;margin-top:-5px;line-height:300px;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);background:transparent url(/mmbizwap/zh_CN/htmledition/images/icon/appmsg/icon_appmsg_msg_closed_sprite.2x.png) no-repeat 0 0;width:11px;height:11px;vertical-align:middle;display:inline-block;-webkit-background-size:100% auto;background-size:100% auto}.rich_media_global_msg .icon_closed:active{background-position:0 -17px}.preview_appmsg .rich_media_title{margin-top:1.9em}@media screen and (min-width:1024px){.rich_media_global_msg{position:relative;margin:0 20px}.preview_appmsg .rich_media_title{margin-top:0}}</style>
<style>

    </style>
<!--[if lt IE 9]>
<link rel="stylesheet" type="text/css" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_pc2c9cd6.css">
<![endif]-->

    </head>
    <body id="activity-detail" class="zh_CN mm_appmsg">

    <script nonce="962517487" type="text/javascript">
        var write_sceen_time = (+new Date());
    </script>

    <div id="js_article" class="rich_media">

        <div id="js_top_ad_area" class="top_banner">

        </div>


        <div class="rich_media_inner">
                        <div id="page-content">
                <div id="img-content" class="rich_media_area_primary">
                    <h2 class="rich_media_title" id="activity-name">
                        钱宝CEO张小雷先生对QBII的概念提出深刻解读
                    </h2>
                    <div class="rich_media_meta_list">
                        						                        <em id="post-date" class="rich_media_meta rich_media_meta_text">2017-01-17</em>

                                                <em class="rich_media_meta rich_media_meta_text">QBII</em>
                                                <a class="rich_media_meta rich_media_meta_link rich_media_meta_nickname" href="##" id="post-user">藤榕数据平台</a>
                        <span class="rich_media_meta rich_media_meta_text rich_media_meta_nickname">藤榕数据平台</span>

                        <div id="js_profile_qrcode" class="profile_container" style="display:none;">
                            <div class="profile_inner">
                                <strong class="profile_nickname">藤榕数据平台</strong>
                                <img class="profile_avatar" id="js_profile_qrcode_img" src="" alt="">

                                <p class="profile_meta">
                                <label class="profile_meta_label">微信号</label>
                                <span class="profile_meta_value">tengrongdt</span>
                                </p>

                                <p class="profile_meta">
                                <label class="profile_meta_label">功能介绍</label>
                                <span class="profile_meta_value">藤榕公司出品</span>
                                </p>

                            </div>
                            <span class="profile_arrow_wrp" id="js_profile_arrow_wrp">
                                <i class="profile_arrow arrow_out"></i>
                                <i class="profile_arrow arrow_in"></i>
                            </span>
                        </div>
                    </div>







                    <div class="rich_media_content " id="js_content">




                        <p style="text-align: -webkit-auto; text-overflow: clip; clear: none; opacity: 1;"><span style="margin-right: 4px; margin-left: 4px; font-weight: bold; color: rgb(183, 0, 0); text-align: -webkit-auto; text-overflow: clip; clear: none; opacity: 1;">提要：</span>互联网的大潮风起云涌，钱宝改革蜕变的脚步从未停歇，南国蓉城刚刚落幕，东方稠州重又开启。今天既是钱柳微商义乌分公司的开业典礼，同时也是钱宝即将跨入5.0新时代巡回宣讲会义乌站的启动仪式。</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">互联网的大潮风起云涌，钱宝改革蜕变的脚步从未停歇，南国蓉城刚刚落幕，东方稠州重又开启。今天既是钱柳微商义乌分公司的开业典礼，同时也是钱宝即将跨入5.0新时代巡回宣讲会义乌站的启动仪式。</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><p style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRCibV7w2YlRKN7eUnnxkht8uTjG43Xt9D8QzDGKmj4B1qxNZe6gRscxQ/0?wx_fmt=jpeg" data-ratio="0.8771929824561403" data-w="684"  /><br  /></p></center><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">继广州站宣讲会之后，钱旺信控集团董事局主席、钱宝网CEO张小雷先生对QBII的概念提出更深刻的解读， 让商业回归本质，守住初心，从义乌开始钱柳微商将大跨步前进!钱旺信控集团COO、钱柳微商执行董事姜大海先生，上海藤榕网络科技有限公司负责人熊巍先生，钱旺信控集团首席产品官苏贤先生、上海钱柳微商COO侯俊杰先生分别对各集团铁军的业务动态进行了宣讲，上海定菱负责人于德健等钱旺系主官也云聚现场。</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRRjibOKq4XJ0MNsvh10HEOCKDZzxCBaiamkaLdcUnU3thh6piaRtGDmrnQ/0?wx_fmt=jpeg" data-ratio="0.6699507389162561" data-w="609"  /><br  /></center><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">在宣讲会开始之前，钱旺信控集团COO、钱柳微商执行董事姜大海就钱柳微商过去一年的发展做了梳理与回顾：</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">“说到义乌，我们所熟悉的莫过于闻名世界的义乌小商品批发市场，而世界最大的小商品市场的发展是中国崛起的标杆，它见证了中国前进壮大的速度和力度。微商从这里出发，是因为我们已经做好了充分的准备，过去一年，从雷行万里到微商下乡再到春晖授渔，将伞兵的精神传承的同时，也建立了强大的微商市场。我们坚持自己的路线，走向了广东，走向了成都;快速部署，大幅进军，从莱慕朶打响品牌第一枪，到潘高寿新品红参姜茶的圣火点燃，证明了我们有能力去做好，所以才有胆量有信心去做潘高寿这样的百年老品牌。同时，通过几次战役我们也对微商有了本质的理解，那就是必须自己实地去干，从义乌这个庞大的微商市场出发，创造钱柳微商下一个世纪的辉煌!‘百年潘高寿、百亿红参茶’，我们言必行行必果!”</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichR2iavYjmKrvSPqiazeyNVUk9RicxvqBqtfQrjy0gk14NgakAH2VT5bf44g/0?wx_fmt=jpeg" data-ratio="0.6644844517184942" data-w="611"  /><br  /></center><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">钱柳微商在战略上迂回纵深，如今已在第三方大数据分析机构易观公布的排名中高居综合电商领域第14位，在微商类领域排名第2，仅次于微信微店。但姜大海表示，尝试的是新事物，不变的是沿着国脉行国运的宗旨。钱柳微商将坚持流量、资本、知识三驾马车不放弃，坚持做农产品上行的先行者不放弃，向着“三千万人的十年”这个宏愿继续发起冲击。</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichReqYuTwdfENckwUu8pW0iaqzTeaxxiaicyjAHImM0Zonj7UwnpbEkmibX5w/0?wx_fmt=jpeg" data-ratio="0.6688632619439868" data-w="607"  /><br  /></center><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">(张总与粉丝互动)</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">钱柳微商COO侯俊杰在宣讲会开始前也提出自己的深切感受：“我们为什么会选择在义乌这个地方?义乌的出口额在全国排第二，第一是广州，未来我们可以将义乌作为微商的一个发起地。我们做第一个项目莱慕朶的时候，创造了很不错的成绩，这个项目也让我们有了自我认知，我们有能力去开拓新的微商市场，而义乌是全国最大的小商品销售市场，首选这边的原因是便捷，仓库离物流中心很近，能给用户提供更好的服务与体验。其次，义乌是全国的新工业商品集散地，前店后厂，这意味着我们有更多的机会去发展我们的供应链，从而在这个微商之都大展身手!”</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">宣讲会正式开始前，钱旺信控集团董事局主席、钱宝网CEO张小雷举起一座耀眼璀璨的元宝，随着上海定菱负责人于德健喊出：“这一刻，我们义乌分公司正式成立!“ QBII钱宝5.0宣讲会义乌站正式拉开了序幕······</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRaZYbia8iaoyK0ytPVfGibsf4DJHfCqpRt48Ch2BWp7Dzr0lan6vAuRm9A/0?wx_fmt=jpeg" data-ratio="0.7427745664739884" data-w="692"  /><br  /></center><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">数据，无疑是了解一个企业最直观的方式。上海藤榕负责人熊巍用一系列数据标杆，对近3个月来钱旺系各子公司的盈利能力以及钱宝的用户数据进行了解读。在各项指标中，钱旺的不动产资产储备数据尤为抢眼，其中包括南京江北智慧城项目、江宁裕廊腾飞产业园、上海杨浦摩都项目等在内的储备总值接近300亿，这也为QBII的推出奠定了坚实的实业根基。</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">过去的一年，月度交易额呈上升趋势，但上升速度有所放缓，但张总借此补充说：“我们要将钱宝的盈利回归商业本质，所以在今年Q3、Q4季度，对各个子公司做了调整，追求利润也需要一定的弹性，不要把劲使完，我们更大的目标是为明年的QBII做准备。”同时，张总还为我们带来了一个兴奋的好消息，不久以后，Q堡直播将实时参与到钱旺月度汇报当中，让宝粉亲自见证钱旺的每一次战略性发展!</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRv1cFCicwlPgYwhUEmR2pckQWruy3FD9dE7st7WNOcHIhib4F7MsFCNQA/0?wx_fmt=jpeg" data-ratio="0.6677631578947368" data-w="608"  /><br  /></center><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">在各方向业务的铺垫下，QBII在千呼万唤中正式揭开面纱。QFII(Qualified Foreign Institutional Investors)的意思是合格的境外机构投资者，顾名思义，QBII就是合格的钱宝投资者。</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">一直在诗词上造诣颇深的张总，用一首诗深刻阐述了QBII发展之路的艰辛与荣辱：</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">夜深沉，梧影昏，</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">倦鸟哀啼孤月轮。</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">角声咽，马嘶难，</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">美人倚帐盼魂还。</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">云飞渡，山如关，</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">征夫今又似何年。</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">北国沙万里，</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">江南晓梦寒。</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">纵能踏尽倥偬路，</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">竟是一生未下鞍。</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">“纵能踏尽倥偬路，竟是一生未下鞍”，我们一直在路上，不敢停歇也从未停歇。</p><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">张总回顾起昨天的潘高寿新品发布会说道：“义乌是一个很值得常来的地方，义乌最大特点是勇气，这里的人有勇气有情怀，敢干敢为天下先，昨天大家都去了发布会吧?现场是个什么场景?火!不是红红火火的火，是把POS机刷爆了的火。现场应该有很多微商大学的听众吧?记住，你们将来会是催生孵化新生机的希望!”</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichRQfLZHJBKrWnnp1tlIF9cZzISA3t7wVsyD5Umo6G9ThpN6EOdIf1GpA/0?wx_fmt=jpeg" data-ratio="0.6644844517184942" data-w="611" style="line-height: 25.6px; text-align: -webkit-center; white-space: normal;"  /></center><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">说起此次钱宝5.0QBII宣讲会义乌站与广州站最大的不同，张总用一个“力量”来表达，并说道：“潘高寿在冥冥当中指了一条明路——守住初心，钱旺要做的是一个能赚钱更能推动社会发展的企业，而你们要做的是成为一个被需要、被信任、被依赖、善良正直的QBII。”</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><br  /></center><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">6年迭代，4年布局，这种快速的迭代，指向着一个商业逻辑更加清晰、宝粉价值更德以配位的钱宝新时代。在通往QBII的羊肠小道上，老张带领钱旺系的伞兵们筚路蓝缕，何其艰辛。走过了那么长的路，经过了那么复杂缜密的战略规划。5.0 时代，宝粉们将走上一条通往合格投资标的的康庄大道。</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><img data-s="300,640" data-type="jpeg" data-src="http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichR4sYLje6BRkS2AqoDLghCbL9mYYn8ICKdNAKtGyemSxNu96wIWFWang/0?wx_fmt=jpeg" data-ratio="0.6672131147540984" data-w="610"  /><br  /></center><p style="margin: 4px; float: none; text-align: -webkit-auto; text-indent: 28px; text-overflow: clip; clear: none; opacity: 1;">另外，通过Q堡直播观看本次QBII钱宝5.0宣讲会的宝粉多达10068人次，获赞数达31374个，在此，特别感谢各位宝粉的支持，Q堡直播会不断升级直播技术，优化观看体验，为之后的活动带来更高清更流畅的现场直播</p><center style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; opacity: 1;"><p style="margin-right: 4px; margin-left: 4px; float: none; text-overflow: clip; clear: none; opacity: 1;"><br  /></p></center>
                    </div>
                    <script nonce="962517487" type="text/javascript">
                        var first_sceen__time = (+new Date());

                        if ("" == 1 && document.getElementById('js_content'))
                            document.getElementById('js_content').addEventListener("selectstart",function(e){ e.preventDefault(); });

                                        (function(){
                            if (navigator.userAgent.indexOf("WindowsWechat") != -1){
                                var link = document.createElement('link');
                                var head = document.getElementsByTagName('head')[0];
                                link.rel = 'stylesheet';
                                link.type = 'text/css';
                                link.href = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx31619e.css";
                                head.appendChild(link);
                            }
                        })();
                    </script>



                    <div class="ct_mpda_wrp" id="js_sponsor_ad_area" style="display:none;">

                    </div>



                                        <div class="rich_media_tool" id="js_toobar3">
                                                                    <div id="js_read_area3" class="media_tool_meta tips_global meta_primary" style="display:none;">阅读 <span id="readNum3"></span></div>

                        <span style="display:none;" class="media_tool_meta meta_primary tips_global meta_praise" id="like3">
                            <i class="icon_praise_gray"></i><span class="praise_num" id="likeNum3"></span>
                        </span>

                        <a id="js_report_article3" style="display:none;" class="media_tool_meta tips_global meta_extra" href="##">投诉</a>

                    </div>



                                    </div>

                <div class="rich_media_area_primary sougou" id="sg_tj" style="display:none">

                </div>

                <div class="rich_media_area_extra">


                                        <div class="mpda_bottom_container" id="js_bottom_ad_area">

                    </div>

                    <div id="js_iframetest" style="display:none;"></div>

                                    </div>

            </div>
            <div id="js_pc_qr_code" class="qr_code_pc_outer" style="display:none;">
                <div class="qr_code_pc_inner">
                    <div class="qr_code_pc">
                        <img id="js_pc_qr_code_img" class="qr_code_pc_img">
                        <p>微信扫一扫<br>关注该公众号</p>
                    </div>
                </div>
            </div>

        </div>
    </div>



        <script nonce="962517487">
    var __DEBUGINFO = {
        debug_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/debug/console2ca724.js",
        safe_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/moonsafe2f3e84.js",
        res_list: []
    };
</script>



<script nonce="962517487" type="text/javascript">

    if (!window.console) window.console = { log: function() {} };

    if (typeof getComputedStyle == 'undefined') {
        if (document.body.currentStyle) {
            window.getComputedStyle = function(el) {
                return el.currentStyle;
            }
        } else {
            window.getComputedStyle = {};
        }
    }
    var occupyImg = function() {
        var images = document.getElementsByTagName('img');
        var length = images.length;
        var container = document.getElementById('img-content');
        var max_width = container.offsetWidth;
        var container_padding = 0;
        var container_style = getComputedStyle(container);
        container_padding = parseFloat(container_style.paddingLeft) + parseFloat(container_style.paddingRight);
        max_width -= container_padding;
        var ua = navigator.userAgent.toLowerCase();
        var re = new RegExp("msie ([0-9]+[\.0-9]*)");
        var version;
        if (re.exec(ua) != null) {
            version = parseInt(RegExp.$1);
        }
        var isIE = false;
        if (typeof version != 'undefined' && version >= 6 && version <= 9) {
            isIE = true;
        }
        if (!max_width) {
            max_width = window.innerWidth - 30;
        }
        for (var i = 0; i < length; ++i) {
            var src_ = images[i].getAttribute('data-src');
            var realSrc = images[i].getAttribute('src');
            if (!src_ || realSrc) continue;
            var width_ = 1 * images[i].getAttribute('data-w') || max_width;
            var ratio_ = 1 * images[i].getAttribute('data-ratio');
            var height = 100;
            if (ratio_ && ratio_ > 0) {
                var img_style = getComputedStyle(images[i]);
                var init_width = images[i].style.width;

                if (init_width) {
                    images[i].setAttribute('_width', init_width);
                    if (init_width != 'auto') width_ = parseFloat(img_style.width);
                }
                var parent_width = 0;
                var parent = images[i].parentNode;
                var outerWidth = 0;
                while (true) {
                    var parent_style = getComputedStyle(parent);
                    if (!parent || !parent_style) break;
                    parent_width = parent.clientWidth - parseFloat(parent_style.paddingLeft) - parseFloat(parent_style.paddingRight) - outerWidth;
                    if (parent_width > 0) break;
                    outerWidth += parseFloat(parent_style.paddingLeft) + parseFloat(parent_style.paddingRight) + parseFloat(parent_style.marginLeft) + parseFloat(parent_style.marginRight) + parseFloat(parent_style.borderLeftWidth) + parseFloat(parent_style.borderRightWidth);
                    parent = parent.parentNode;
                }
                parent_width = parent_width || max_width;
                var width = width_ > parent_width ? parent_width : width_;
                var img_padding_border = parseFloat(img_style.paddingLeft) + parseFloat(img_style.paddingRight) + parseFloat(img_style.borderLeftWidth) + parseFloat(img_style.borderRightWidth);
                var img_padding_border_top_bottom = parseFloat(img_style.paddingTop) + parseFloat(img_style.paddingBottom) + parseFloat(img_style.borderTopWidth) + parseFloat(img_style.borderBottomWidth);
                img_padding_border = img_padding_border || 0;
                img_padding_border_top_bottom = img_padding_border_top_bottom || 0;
                height = (width - img_padding_border) * ratio_ + img_padding_border_top_bottom;
                images[i].style.cssText += ";width: " + width + "px !important;";
                if (isIE) {
                    var url = images[i].getAttribute('data-src');
                    images[i].src = url;
                } else {
                    images[i].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
                }
            } else {
                images[i].style.cssText += ";visibility: hidden !important;";
            }
            images[i].style.cssText += ";height: " + height + "px !important;";
        }
    }
    occupyImg();
</script>
<script nonce="962517487" type="text/javascript">

    var not_in_mm_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm322696.css";
    var windowwx_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx31619e.css";
    var article_improve_combo_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo322696.css";
    var tid = "";
    var aid = "";
    var clientversion = "0";
    var appuin = "MzI1MzQxNTgwOA=="||"";

    var source = "1";
    var abtest_cookie = "";

    var scene = 75;

    var itemidx = "";

    var _copyright_stat = "0";
    var _ori_article_type = "";

    var nickname = "藤榕数据平台";
    var appmsg_type = "9";
    var ct = "1484664966";
    var publish_time = "2017-01-17" || "";
    var user_name = "gh_1c763484ec17";
    var user_name_new = "";
    var fakeid   = "";
    var version   = "";
    var is_limit_user   = "0";
    var round_head_img = "http://mmbiz.qpic.cn/mmbiz_png/GiaZbmmYN8lajYkGicMatSsXNfGE01OmurM4v9m6nZibvUIc5eM7Au0TFy27XQ1dp6eTFPciae22ujXGGficC1Ypp1A/0?wx_fmt=png";
    var ori_head_img_url = "http://wx.qlogo.cn/mmhead/Q3auHgzwzM7iasFtsklyFgwjhtkicSKttCIMqP3Fsib0BtqBtYmWWXatw/132";
    var msg_title = "钱宝CEO张小雷先生对QBII的概念提出深刻解读";
    var msg_desc = "提要：互联网的大潮风起云涌，钱宝改革蜕变的脚步从未停歇，南国蓉城刚刚落幕，东方稠州重又开启。今天既是钱柳微商";
    var msg_cdn_url = "http://mmbiz.qpic.cn/mmbiz_jpg/GiaZbmmYN8laH40CvyoNKV1y3mic431ichReqYuTwdfENckwUu8pW0iaqzTeaxxiaicyjAHImM0Zonj7UwnpbEkmibX5w/0?wx_fmt=jpeg";
    var msg_link = "http://mp.weixin.qq.com/s?__biz=MzI1MzQxNTgwOA==\x26amp;mid=2247483805\x26amp;idx=1\x26amp;sn=bcd4c747098a5672949bf58309953935\x26amp;chksm=e9d59972dea21064b2cd0b0f79a9d72713a0be1d9acf04276ec1aaf66a063de49ac74bd20fa2#rd";
    var user_uin = "0"*1;
    var msg_source_url = '';
    var img_format = 'jpeg';
    var srcid = '01189HfgfntPJRV8scvhSFKc';
    var req_id = '1811NoRVp0Bw2DE08AF3nC7x';
    var networkType;
    var appmsgid = '' || '2247483805'|| "";
    var comment_id = "0" * 1;
    var comment_enabled = "" * 1;
    var is_need_reward = "0" * 1;
    var is_https_res = ("" * 1) && (location.protocol == "https:");
    var msg_daily_idx = "1" || "";

    var devicetype = "";
    var source_encode_biz = "";


    var reprint_ticket = "";
    var source_mid = "";
    var source_idx = "";

    var show_comment = "";
    var __appmsgCgiData = {
        can_use_page : "0"*1,
        is_wxg_stuff_uin : "0"*1,
        card_pos : "",
        copyright_stat : "0",
        source_biz : "",
        hd_head_img : "http://wx.qlogo.cn/mmhead/Q3auHgzwzM7iasFtsklyFgwjhtkicSKttCIMqP3Fsib0BtqBtYmWWXatw/0"||(window.location.protocol+"//"+window.location.host + "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/appmsg/pic_rumor_link.2x264e76.jpg")
    };
    var _empty_v = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/pages/voice/empty26f1f1.mp3";

    var copyright_stat = "0" * 1;

    var pay_fee = "" * 1;
    var pay_timestamp = "";
    var need_pay = "" * 1;

    var need_report_cost = "0" * 1;
    var use_tx_video_player = "0" * 1;
    var appmsg_fe_filter = "contenteditable";

    var friend_read_source = "" || "";
    var friend_read_version = "" || "";
    var friend_read_class_id = "" || "";

    var is_only_read = "1" * 1;
    var read_num = "" * 1;
    var like_num = "" * 1;
    var liked = "" == 'true' ? true : false;
    var is_temp_url = "" ? 1 : 0;
    var send_time = "";
      var icon_emotion_switch = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch.2x2f1273.png";
      var icon_emotion_switch_active = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch_active.2x2f1273.png";
      var icon_loading_white = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/icon_loading_white2805ea.gif";
      var icon_audio_unread = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/audio/icon_audio_unread26f1f1.png";
      var icon_qqmusic_default = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_default.2x26f1f1.png";
      var icon_qqmusic_source = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_source263724.png";

    var topic_default_img = '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/topic/pic_book_thumb.2x2e4987.png';







    var ban_scene = "0" * 1;

    var svr_time = "1484709344" * 1;

        window.wxtoken = "";
        window.__moon_initcallback = function(){
        if(!!window.__initCatch){
            window.__initCatch({
                idkey : 27613,
                startKey : 0,
                limit : 128,
                badjsId: 43,
                reportOpt : {
                    uin : uin,
                    biz : biz,
                    mid : mid,
                    idx : idx,
                    sn  : sn
                },
                extInfo : {
                    network_rate : 0.01,
                    badjs_rate: 0.1
                }
            });
        }
    }


</script>

        <script nonce="962517487">window.__moon_host = 'res.wx.qq.com';window.__moon_mainjs = 'appmsg/index.js';window.moon_map = {"appmsg/emotion/caret.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/caret278965.js","biz_wap/jsapi/cardticket.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/cardticket275627.js","appmsg/emotion/map.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/map278965.js","appmsg/emotion/textarea.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/textarea27cdc5.js","appmsg/emotion/nav.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/nav278965.js","appmsg/emotion/common.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/common278965.js","appmsg/emotion/slide.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/slide2a9cd9.js","pages/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/report322696.js","pages/music_player.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/music_player325336.js","pages/loadscript.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/loadscript30203e.js","appmsg/emotion/dom.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/dom31ff31.js","biz_wap/utils/hashrouter.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/hashrouter2805ea.js","biz_common/utils/wxgspeedsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/wxgspeedsdk30bcdd.js","a/sponsor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor3189b5.js","a/app_card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/app_card313f11.js","a/ios.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/ios275627.js","a/android.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/android2c5484.js","a/profile.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/profile31ff31.js","a/sponsor_a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor_a_tpl.html32c414.js","a/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_tpl.html32c414.js","a/mpshop.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/mpshop311179.js","a/card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/card311179.js","biz_wap/utils/position.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/position2f1750.js","a/a_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_report32e586.js","biz_common/utils/respTypes.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/respTypes2c57d0.js","appmsg/my_comment_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/my_comment_tpl.html325336.js","appmsg/cmt_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cmt_tpl.html32e586.js","sougou/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/a_tpl.html2c6e7c.js","appmsg/emotion/emotion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/emotion2f3ac3.js","biz_wap/utils/wapsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/wapsdk315b3f.js","biz_common/utils/monitor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/monitor304edd.js","biz_common/utils/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/report275627.js","appmsg/open_url_with_webview.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/open_url_with_webview3145f0.js","biz_common/utils/http.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/http30b871.js","biz_common/utils/cookie.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/cookie275627.js","appmsg/topic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/topic_tpl.html31ff31.js","pages/voice_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_tpl.html2f2e72.js","pages/voice_component.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_component310e30.js","pages/qqmusic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/qqmusic_tpl.html32c414.js","new_video/ctl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/new_video/ctl2d441f.js","a/testdata.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/testdata31a4be.js","appmsg/reward_entry.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/reward_entry3004a4.js","appmsg/comment.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/comment32a651.js","appmsg/like.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/like2eb52b.js","pages/version4video.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/version4video31d634.js","a/a.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a32e586.js","rt/appmsg/getappmsgext.rt.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/rt/appmsg/getappmsgext.rt2c21f6.js","biz_wap/utils/storage.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/storage2a74ac.js","biz_common/tmpl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/tmpl2b3578.js","appmsg/img_copyright_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/img_copyright_tpl.html2a2c13.js","biz_common/ui/imgonepx.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/ui/imgonepx275627.js","biz_wap/utils/ajax.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/ajax3274c9.js","biz_wap/utils/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/log2fcb7c.js","sougou/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/index31aefe.js","biz_wap/safe/mutation_observer_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/mutation_observer_report2fafd1.js","appmsg/fereport.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/fereport32e586.js","appmsg/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report304cae.js","appmsg/report_and_source.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report_and_source318ea2.js","appmsg/page_pos.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/page_pos30c907.js","appmsg/cdn_speed_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_speed_report3097b2.js","appmsg/wxtopic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/wxtopic31a3be.js","appmsg/voice.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/voice310e30.js","appmsg/qqmusic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/qqmusic31623d.js","appmsg/iframe.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/iframe32707f.js","appmsg/review_image.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/review_image309c11.js","appmsg/outer_link.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/outer_link275627.js","biz_wap/jsapi/core.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/core2ffa93.js","appmsg/copyright_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/copyright_report2ec4b2.js","appmsg/async.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/async330cc4.js","biz_wap/ui/lazyload_img.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/lazyload_img32a62b.js","biz_common/log/jserr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/log/jserr2805ea.js","appmsg/share.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/share322696.js","appmsg/cdn_img_lib.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_img_lib30b785.js","biz_common/utils/url/parse.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/url/parse2fb01a.js","page/appmsg/not_in_mm.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm.css32c99a.js","page/appmsg/page_mp_article_improve_combo.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo.css32c99a.js","biz_common/dom/event.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/event32e586.js","appmsg/test.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/test314065.js","biz_wap/utils/mmversion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/mmversion2f1d97.js","appmsg/max_age.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/max_age2fdd28.js","biz_common/dom/attr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/attr275627.js","appmsg/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/log300330.js","biz_common/dom/class.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/class275627.js","biz_wap/utils/device.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/device2b3aae.js","biz_wap/jsapi/a8key.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/a8key2a30ee.js","biz_common/utils/string/html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/string/html29f4e9.js","appmsg/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/index332f3f.js"};</script><script nonce="962517487" type="text/javascript">(function(){function d(a){window.__wxgspeeds.moonls_loadjs_begin=+new Date;var c=document.createElement("script");document.getElementsByTagName("body")[0].appendChild(c);c.type="text/javascript";c.async="async";;c.onload=function(){a&&f()};c.src=b;window.__wxgspeeds.moonls_loadjs_end=+new Date}function f(){window.__wxgspeeds.moonls_save_begin=+new Date;localStorage.setItem("__WXLS__moon",String(__moonf__));localStorage.setItem("__WXLS__moonarg",JSON.stringify({version:b,method:""}));window.__wxgspeeds.moonls_save_end=+new Date}var a=!!top&&!!top.window&&top.window.user_uin||0,e=0!==a&&1>Math.floor(a/100)%100;if(2876363900==a||1506075==a||942807682==a)e=!0;var b="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/moon32ebc4.js";window.__loadAllResFromMp&&(b=b.replace("res.wx.qq.com","mp.weixin.qq.com"),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=27613_12_1");window.__wxgspeeds||(window.__wxgspeeds={});if("function"==typeof __moonf__)__moonf__(),e&&localStorage&&f();else if(window.__wxgspeeds.moonloadtime=+new Date,e&&localStorage)try{var g=JSON.parse(localStorage.getItem("__WXLS__moonarg"))||{};if(g&&g.version==b){var h=localStorage.getItem("__WXLS__moon");localStorage.setItem("__WXLS__moonarg",JSON.stringify({version:b,method:"fromls"}));window.__moonls_fromls=!0;window.__wxgspeeds.moonls_loadls_end=+new Date;eval(h);__moonf__()}else d(!0)}catch(k){window.__moonls_fail=!0,d(!0)}else d(!1)})();</script>
  <script nonce="962517487" type="text/javascript">
    var real_show_page_time = +new Date();
    if (!!window.addEventListener){
        window.addEventListener("load", function(){
            window.onload_endtime = +new Date();
        });
    }

  </script>

    </body>
    <script nonce="962517487" type="text/javascript">document.addEventListener("touchstart", function() {},false);</script>
</html>
<!--tailTrap<body></body><head></head><html></html>-->

`,
4: `<!DOCTYPE html>
<html style="background-color: #f1f1f6 !important">
 <head>
     <title>
     		回顾 | QBII钱宝5.0的巡回之路，一路风尘一路歌
     </title>
     <meta name="keywords" content="回顾 | QBII钱宝5.0的巡回之路，一路风尘一路歌/">
	   <meta name="description" content="回顾 | QBII钱宝5.0的巡回之路，一路风尘一路歌">
     <meta charset="utf-8">

     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
     <meta name="apple-mobile-web-app-capable" content="yes">
     <meta name="apple-mobile-web-app-status-bar-style" content="black">
     <meta name="format-detection" content="telephone=no">
     <style>
       img {
         width:100%;
       }
     </style>
 </head>
<body class="wraper indexpage indexpage1" style="transition: none;">
	<div id="js_bar_wraper" style="background:#fff">
		<div id="topic_div_wrapper">
		<!-- start 帖子详情-->
			<div class="detail-main" id="js_detail_main">
				<div class="top-content" id="js_detail_scroll_top">
					<div id="top_post_wrapper">


						<!-- start 帖子内容 -->
						<div class="post-wrapper" id="detail_top_info" style="padding:10px">
							<div class="post-title js-detail-title allow-copy" style="margin:10px 0 20px;font-size:18px">
								回顾 | QBII钱宝5.0的巡回之路，一路风尘一路歌
							</div>
							<div class="content-wrapper allow-copy">
								<div >
									<div id="topicPostBody" class="content">
                                <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; text-indent: 28px; white-space: pre-wrap; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;">　　<strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(0, 112, 192); box-sizing: border-box !important; word-wrap: break-word !important;">回顾，是为了让我们更好地走好之后的“路”，同时，也让我们回头看看之前规划的“路”。</span></strong>从2016年11月的QBII钱宝5.0彻底变革的酝酿，到起而行之付诸实践的全国巡回宣讲</span><span
                                        style="margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; text-indent: 28px; white-space: pre-wrap; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;">，从QBII钱宝5.0初撩面纱如洞开微明，到豁然开朗拨开云雾见得漫天云霞，从南国南岭之南的广州启幕，到西南巴蜀腹地的成都收官，这是巨变涌动的尖峰时刻。</span></p>
                                <p
                                    style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; text-indent: 28px; white-space: pre-wrap; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;"><br style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"/></span></p>
                    <p style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><br style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"/></span></p>
                    <p
                        style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">在大潮奔涌的互联网之海，巨变与迭代始终伴随，个体命运高低起伏。相信，且保持坚强，登上QBII钱宝5.0的方舟才不会迷航。</span></p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><br/></span></p>
                    <p style="white-space: normal; text-align: center;"><img src="https://qn-qbao-bbs.qbcdn.com/915fd7cd-4c4c-4eab-a7ac-ddf8dd448fe0" /></p>
                    <p style="white-space: normal;"><br/></p>
                    <p>
                        <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; line-height: 17.5px; white-space: pre-wrap; box-sizing: border-box !important; word-wrap: break-word !important;">下面</span><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; line-height: 17.5px; white-space: pre-wrap; box-sizing: border-box !important; word-wrap: break-word !important;">就让我们一起回首，看看那段峥嵘倥偬的光辉岁月，难忘时刻。</span></p>
                    </p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">　　2016年11月5日， 老张在《雷声》第一次提出QBII的概</span><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">念。大咖坐而论道， 畅谈钱宝5.0时代；起而行之，开启全国宣讲巡</span><span
                            style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">回，你愿意做一个QBII么？</span></p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><img src="https://qn-qbao-bbs.qbcdn.com/fa932938-46be-4d90-88e0-e3fed752ec53"/></span></p>
                    <p
                        style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: 微软雅黑; line-height: 32px; text-indent: 28px; color: rgb(255, 76, 0); box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年11月13日， QBII钱宝5.0新时代宣讲会首站花开“五羊城”广州，布道幕启，风流云聚，全新纪元第一书。</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);">经过钱旺全军在2016年的浴血拼杀，创造了可被投资并具备超强盈利能力的大量标的，宣讲会现场还公布了成为QBII的入围标准与权利。</span></span>
                    </p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><img src="https://qn-qbao-bbs.qbcdn.com/125e2fca-b001-481d-9584-d4aad5a285d4"/></span></span>
                    </p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; color: rgb(0, 128, 255); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年11月27日，潘高寿一炮头响浙中东南沿海，QBII钱宝5.0新时代宣讲会第二站于东方稠州义乌启动，薪火相传，续启时代。</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;">潘高寿品牌的力量，预见钱宝的未来。</span></span>
                        </span>
                    </p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><img src="https://qn-qbao-bbs.qbcdn.com/a6308b67-c5e1-4118-9afb-6c53a25dde5f"/></span></span>
                        </span>
                    </p>
                    <p style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(216, 79, 169); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月3日，回归于QBII5.0理念策源地上海，QBII钱宝5.0新时代宣讲会第三站华彩绽放。</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">QBII钱宝5.0新时代的转型将依托于微商孵化的华丽转身，实现钱宝会员投资人分级制度。钱旺的不动产资产储备数据尤为抢眼，这也为QBII的推出奠定了坚实的实业根基。</span></p>
                    <p
                        style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><img src="https://qn-qbao-bbs.qbcdn.com/d48f4dfa-6833-4a91-b3f0-6afd67086ed4"/></span></p>
                    <p
                        style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><br/></span></p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: 微软雅黑; line-height: 32px; text-indent: 28px; color: rgb(255, 41, 65); box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月10日，钱旺速度冲破黎明前黑暗，QBII钱宝5.0新时代宣讲会第四站在苏州开启。</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);">姑苏城内， 以初心之名树立信用，建立品牌，攒存用户，且向宝粉们阐述投资人分级制度：要将有价值的资产交给有资格和能够与我们一起前行的用户。东方欲晓，莫道君行早，踏遍青山人未老，这边风景独好！</span></span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><br/></span></span>
                    </p>
                    <p style="white-space: normal; text-align: center;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><img src="https://qn-qbao-bbs.qbcdn.com/27ccaee4-8ece-4232-87d1-363408018b6b"/></span></span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; color: rgb(2, 30, 170); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月17日，为了信仰和坚守，QBII钱宝5.0新时代宣讲会第五站一起在青岛共襄举</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; color: rgb(2, 30, 170); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">杯！</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;">QBII PRO需要很强的风险承担能力，成为QBII PRO需要有四个必备的要素，老兵先行才是正确的战略方向；未来微商商户的发展方向，将从平台销售转变为自营，相应地，微商商户只需要做好品控和生产。飞渡东方瑞士，搏击颠覆浪潮，钱旺之舟形如鲶鱼，所涉之处，或静水流深，或暗流汹涌，我们始终稳健，始终灵活，最后更具智慧与定力。</span></span>
                        </span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><br/></span></span>
                        </span>
                    </p>
                    <p style="white-space: normal; text-align: center;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><img src="https://qn-qbao-bbs.qbcdn.com/720ad7ca-132b-444f-8abc-c5762d4e1b16"/></span></span>
                        </span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><br/></span></span>
                        </span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; color: rgb(255, 169, 0); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月26日，一切都是最好的安排， QBII钱宝5.0新时代宣讲会第六站于帝都北京顺势而动。</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">忆往昔，戎马倥偬，指点江山，激扬文字，挥斥意气方遒。钱旺更名和搬迁，引出了钱旺2017年整体战略布局和战略方向的规划：各子公司的搬迁是为明年的战略重点——“涉农”做产业布局，因为钱旺沿着国脉行国运的战略方向不会变，为了将“涉农”贯彻于明年全年的布局中，钱旺将已有的微电商和无人机业务作为战略先导。除了涉农方向上的战略意义，搬迁也有深层次的产业布局意义，每个城市都将有各自的侧重和分工。</span></span>
                        </span>
                        </span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><br/></span></span>
                        </span>
                        </span>
                    </p>
                    <p style="white-space: normal; text-align: center;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><img src="https://qn-qbao-bbs.qbcdn.com/5f9849c3-b639-4760-ba21-c67a24a9d0db"/></span></span>
                        </span>
                        </span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><br/></span></span>
                        </span>
                        </span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; color: rgb(0, 209, 0); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月28日、30日，钱宝归宁， QBII钱宝5.0新时代宣讲会第七站在南京荣耀故里。</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;">回首忆往昔，峥嵘岁月稠，回家的感觉真好，初心不忘：去年的雷行万里，张总走了一万公里，钱宝微商在涉农方向上卖了8亿的农产品；2017年，微商将基于强社交关系的销售模式大有所为。另外，张总还在宣讲会上透漏，未来南京江北智慧城将被打造成一个巨型的微商孵化器。</span></span>
                        </span>
                        </span>
                        </span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><br/></span></span>
                        </span>
                        </span>
                        </span>
                    </p>
                    <p style="white-space: normal; text-align: center;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><img src="https://qn-qbao-bbs.qbcdn.com/0d63006b-8dd0-4196-ab29-cb7e28dd82e8"/></span></span>
                        </span>
                        </span>
                        </span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><br/></span></span>
                        </span>
                        </span>
                        </span>
                    </p>
                    <p style="white-space: normal;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 17.1429px; line-height: 34.2857px; color: rgb(255, 104, 39); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 21.4286px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">2017年1月1日，四季新元旦，万寿初春朝，QBII钱宝5.0新时代宣讲会第八站在江南龙城常州开启。</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; line-height: 21.4286px; box-sizing: border-box !important; word-wrap: break-word !important;">老张再次阐释什么叫“三千万人的十年”，所谓三千万人的十年就是用十年时间让三千万人脱离贫困走向富足。那么钱旺要做什么？答案就是：我们在成都建了年产1万台的无人机生产线，今年1月5日第一台无人机即将下线问世。2017年我们的目标就是量产一万架无人机植保1亿亩的农田。首站用我，首战必胜，射箭引雕，雕弓天狼。</span></span>
                        </span>
                        </span>
                        </span>
                        </span>
                    </p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><img src="https://qn-qbao-bbs.qbcdn.com/c5857e16-0bdd-4b61-a944-dda3f50a9e69"/></span></span>
                        </span><br/></p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><br/></span></span>
                        </span>
                    </p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; font-size: 14px; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(0, 213, 255); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">2017年1月7日， QBII钱宝5.0新时代宣讲会第九站在秦砖汉瓦之间，梦回西安，我们继续在一起。</strong></span></span><span
                            style="margin: 0px; padding: 0px; max-width: 100%; font-family: 微软雅黑; font-size: 14px; line-height: 17.5px; color: rgb(120, 114, 114); box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);">张</span><span
                            style="margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; font-size: 14px; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);">维天降灵，延元万年，天下康宁，在“丝绸之路”的起点，这么一群热情昂扬的人聚集起来，让所有的一切变的醇厚、浓烈而有温度。</span></span>
                        </span>
                        </span>
                    </p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><img src="https://qn-qbao-bbs.qbcdn.com/ffcd7830-5a9a-450a-a1e3-0c12a2962243" /></p>
                    <p style="margin-top: 25px; margin-bottom: 25px; white-space: normal; padding: 0px; max-width: 100%; clear: both; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; font-family: 微软雅黑; font-size: 14px; line-height: 17.5px; color: rgb(255, 41, 65); box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">2017年1月11日、12日， QBII钱宝5.0新时代宣讲会第十站在郑州长风一起，雾霾皆散。</strong></span><span
                            style="color: rgb(62, 62, 62); font-family: 微软雅黑; font-size: 14px; line-height: 17.5px; background-color: rgb(255, 255, 255);">钱宝5.0巡回宣讲会每到一处，都是雾霾驱散，晴空万里。从清嫩香脆天津沙窝萝卜之里，窥见我们的世界，平凡的世界：在郑州站的第二场上，张总在宣讲会现场提出了一个新主题——网格化建设。2017年是城之宝大年，今年张总将带领团队进行雷行万里第二季的巡回。这也就意味着，2017年春节之后，雷行万里将再次起航，和去年不同的是，这次主打城市线。从乡村到城市，雷行万里不变的是那份“三千万人的十年”的初心。</span></p>
                    <p
                        style="white-space: normal;"><img src="https://qn-qbao-bbs.qbcdn.com/36e8adce-c0e5-42b3-97c1-0f189112b95a" /></p>
                    <p style="white-space: normal;"><br/></p>
                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: 微软雅黑; white-space: normal; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(172, 57, 255);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px; line-height: 17.5px;">2017年1月14日，QBII钱宝5.0新时代宣讲会最后一站落地“天府之国”成都。</span></strong>
                        </span><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; line-height: 17.5px;">QBII钱宝5.0巡回宣讲正式收官——2017年，我们继续以品牌之名行军万里：</span>2016年，钱旺以本心之初进军全国，2017年，钱旺以强大的品牌之名继续砥砺，在全国展开科学合理的大布局、大突围；2016年，雷行万里徒步行走近1万公里，2017年，雷行万里继续行军帮扶，以城带乡，为实现“三千万人的十年”继续前行！</span>
                    </p>
                    <p><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"><br/></span></p>
                    <p><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"><img src="https://qn-qbao-bbs.qbcdn.com/cdf1a129-1aa4-48da-827d-b470bc0cca7c"/></span></p>
                    <p><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"><br/></span></p>
                    <p><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"></span></p>
                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; white-space: normal; text-align: center; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; line-height: 17.5px; color: rgb(0, 0, 0);">QBII钱宝5.0新时代巡回宣讲会</span></p>
                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; white-space: normal; text-align: center; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(0, 82, 255);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 16px; line-height: 17.5px;">2016一路相伴，2017一起前行</span></strong>
                        </span>
                    </p>
                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; white-space: normal; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(0, 82, 255);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">雷行万里第二季</strong></span></p>
                    <p
                        style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; white-space: normal; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(0, 0, 0);">将接棒QBII钱宝5.0新时代宣讲会继续巡回</span></p>
                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; white-space: normal; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(255, 76, 0);">带着700个2000万的目标展开全国的网格化建设</span></strong></p>
                    <p
                        style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; white-space: normal; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(0, 0, 0);">似群星散落于各个城市的宝粉们，</span></p>
                    <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; white-space: normal; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(255, 169, 0);"><strong style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">你们准备好了么？</strong></span></p>
                    <p><span style="margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"><br/></span><br/></p>

									</div>
								</div>
							</div>
						</div>
						<!-- end 帖子内容 -->
					</div>



				</div>
			</div>
			<!-- end 帖子详情-->

		</div>
	</div>

</html>`,
5:`<!DOCTYPE html>
<!--headTrap<body></body><head></head><html></html>--><html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">

<script nonce="" type="text/javascript">
window.__nonce_str = ""
if (location.href.indexOf("safe=0") == -1 && window.__nonce_str) {
	window.__moonsafe_csp_offset || (window.__moonsafe_csp_offset = 18);
	document.write('<meta http-equiv="Content-Security-Policy" content="script-src https: \'unsafe-inline\' \'unsafe-eval\' *.qq.com *.weishi.com'+(window.__nonce_str ? ' \'nonce-' + window.__nonce_str + "\'":"")+ '">');

}
</script>

        <script nonce="" type="text/javascript">
            window.logs = {
                pagetime: {}
            };
            window.logs.pagetime['html_begin'] = (+new Date());
        </script>

<script type="text/javascript">
    var biz = "MzIwNTE4MjAxMg=="||"";
    var sn = "" || ""|| "5a02c218d7d2bcfd8ee73bdf0a479a94";
    var mid = "100000001" || ""|| "100000001";
    var idx = "1" || "" || "1";
    window.__allowLoadResFromMp = true;

</script>
<script type="text/javascript">
var page_begintime=+new Date,is_rumor="",norumor="";
1*is_rumor&&!(1*norumor)&&biz&&mid&&(document.referrer&&-1!=document.referrer.indexOf("mp.weixin.qq.com/mp/rumor")||(location.href="http://mp.weixin.qq.com/mp/rumor?action=info&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"#wechat_redirect")),
document.domain="qq.com";
</script>
<script type="text/javascript">
var MutationObserver=window.WebKitMutationObserver||window.MutationObserver||window.MozMutationObserver,isDangerSrc=function(t){
if(t){
var e=t.match(/http(?:s)?:\/\/([^\/]+?)(\/|$)/);
if(e&&!/qq\.com(\:8080)?$/.test(e[1])&&!/weishi\.com$/.test(e[1]))return!0;
}
return!1;
},ishttp=0==location.href.indexOf("http://");
-1==location.href.indexOf("safe=0")&&ishttp&&"function"==typeof MutationObserver&&"mp.weixin.qq.com"==location.host&&(window.__observer_data={
count:0,
exec_time:0,
list:[]
},window.__observer=new MutationObserver(function(t){
window.__observer_data.count++;
var e=new Date,r=[];
t.forEach(function(t){
for(var e=t.addedNodes,o=0;o<e.length;o++){
var n=e[o];
if("SCRIPT"===n.tagName){
var i=n.src;
isDangerSrc(i)&&(window.__observer_data.list.push(i),r.push(n)),!i&&window.__nonce_str&&n.getAttribute("nonce")!=window.__nonce_str&&(window.__observer_data.list.push("inlinescript_without_nonce"),
r.push(n));
}
}
});
for(var o=0;o<r.length;o++){
var n=r[o];
n.parentNode&&n.parentNode.removeChild(n);
}
window.__observer_data.exec_time+=new Date-e;
}),window.__observer.observe(document,{
subtree:!0,
childList:!0
})),function(){
if(-1==location.href.indexOf("safe=0")&&Math.random()<.01&&ishttp&&HTMLScriptElement.prototype.__lookupSetter__&&"undefined"!=typeof Object.defineProperty){
window.__danger_src={
xmlhttprequest:[],
script_src:[],
script_setAttribute:[]
};
var t="$"+Math.random();
HTMLScriptElement.prototype.__old_method_script_src=HTMLScriptElement.prototype.__lookupSetter__("src"),
HTMLScriptElement.prototype.__defineSetter__("src",function(t){
t&&isDangerSrc(t)&&window.__danger_src.script_src.push(t),this.__old_method_script_src(t);
});
var e="element_setAttribute"+t;
Object.defineProperty(Element.prototype,e,{
value:Element.prototype.setAttribute,
enumerable:!1
}),Element.prototype.setAttribute=function(t,r){
"SCRIPT"==this.tagName&&"src"==t&&isDangerSrc(r)&&window.__danger_src.script_setAttribute.push(r),
this[e](t,r);
};
}
}();
</script>

        <link rel="dns-prefetch" href="//res.wx.qq.com">
<link rel="dns-prefetch" href="//mmbiz.qpic.cn">
<link rel="shortcut icon" type="image/x-icon" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/favicon22c41b.ico">
<script nonce="" type="text/javascript">
    String.prototype.html = function(encode) {
        var replace =["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&amp;", "&", "&yen;", "¥"];
        if (encode) {
            replace.reverse();
        }
        for (var i=0,str=this;i< replace.length;i+= 2) {
             str=str.replace(new RegExp(replace[i],'g'),replace[i+1]);
        }
        return str;
    };

    window.isInWeixinApp = function() {
        return /MicroMessenger/.test(navigator.userAgent);
    };

    window.getQueryFromURL = function(url) {
        url = url || 'http://qq.com/s?a=b#rd';
        var tmp = url.split('?'),
            query = (tmp[1] || "").split('#')[0].split('&'),
            params = {};
        for (var i=0; i<query.length; i++) {
            var arg = query[i].split('=');
            params[arg[0]] = arg[1];
        }
        if (params['pass_ticket']) {
        	params['pass_ticket'] = encodeURIComponent(params['pass_ticket'].html(false).html(false).replace(/\s/g,"+"));
        }
        return params;
    };

    (function() {
	    var params = getQueryFromURL(location.href);
        window.uin = params['uin'] || "" || '';
        window.key = params['key'] || "" || '';
        window.wxtoken = params['wxtoken'] || '';
        window.pass_ticket = params['pass_ticket'] || '';
    })();

    function wx_loaderror() {
        if (location.pathname === '/bizmall/reward') {
            new Image().src = '/mp/jsreport?key=96&content=reward_res_load_err&r=' + Math.random();
        }
    }

</script>

        <title>回顾 | QBII钱宝5.0的巡回之路，一路风尘一路歌</title>

<style>html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.6}body{-webkit-touch-callout:none;font-family:-apple-system-font,"Helvetica Neue","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;background-color:#f3f3f3;line-height:inherit}body.rich_media_empty_extra{background-color:#fff}body.rich_media_empty_extra .rich_media_area_primary:before{display:none}h1,h2,h3,h4,h5,h6{font-weight:400;font-size:16px}*{margin:0;padding:0}a{color:#607fa6;text-decoration:none}.rich_media_inner{font-size:16px;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.rich_media_area_primary{position:relative;padding:20px 15px 15px;background-color:#fff}.rich_media_area_primary:before{content:" ";position:absolute;left:0;top:0;width:100%;height:1px;border-top:1px solid #e5e5e5;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);top:auto;bottom:-2px}.rich_media_area_primary .original_img_wrp{display:inline-block;font-size:0}.rich_media_area_primary .original_img_wrp .tips_global{display:block;margin-top:.5em;font-size:14px;text-align:right;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.rich_media_area_extra{padding:0 15px 0}.rich_media_title{margin-bottom:10px;line-height:1.4;font-weight:400;font-size:24px}.rich_media_meta_list{margin-bottom:18px;line-height:20px;font-size:0}.rich_media_meta_list em{font-style:normal}.rich_media_meta{display:inline-block;vertical-align:middle;margin-right:8px;margin-bottom:10px;font-size:16px}.meta_original_tag{display:inline-block;vertical-align:middle;padding:1px .5em;border:1px solid #9e9e9e;color:#8c8c8c;border-top-left-radius:20% 50%;-moz-border-radius-topleft:20% 50%;-webkit-border-top-left-radius:20% 50%;border-top-right-radius:20% 50%;-moz-border-radius-topright:20% 50%;-webkit-border-top-right-radius:20% 50%;border-bottom-left-radius:20% 50%;-moz-border-radius-bottomleft:20% 50%;-webkit-border-bottom-left-radius:20% 50%;border-bottom-right-radius:20% 50%;-moz-border-radius-bottomright:20% 50%;-webkit-border-bottom-right-radius:20% 50%;font-size:15px;line-height:1.1}.meta_enterprise_tag img{width:30px;height:30px!important;display:block;position:relative;margin-top:-3px;border:0}.rich_media_meta_text{color:#8c8c8c}span.rich_media_meta_nickname{display:none}.rich_media_thumb_wrp{margin-bottom:6px}.rich_media_thumb_wrp .original_img_wrp{display:block}.rich_media_thumb{display:block;width:100%}.rich_media_content{overflow:hidden;color:#3e3e3e}.rich_media_content *{max-width:100%!important;box-sizing:border-box!important;-webkit-box-sizing:border-box!important;word-wrap:break-word!important}.rich_media_content p{clear:both;min-height:1em}.rich_media_content em{font-style:italic}.rich_media_content fieldset{min-width:0}.rich_media_content .list-paddingleft-2{padding-left:30px}.rich_media_content blockquote{margin:0;padding-left:10px;border-left:3px solid #dbdbdb}img{height:auto!important}@media(min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.mm_appmsg .rich_media_inner,.mm_appmsg .rich_media_meta,.mm_appmsg .discuss_list,.mm_appmsg .rich_media_extra,.mm_appmsg .title_tips .tips{font-size:17px}.mm_appmsg .meta_original_tag{font-size:15px}}@media(min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.mm_appmsg .rich_media_title{font-size:25px}}@media screen and (min-width:1024px){.rich_media{width:740px;margin-left:auto;margin-right:auto}.rich_media_inner{padding:20px}body{background-color:#fff}}@media screen and (min-width:1025px){body{font-family:"Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif}.rich_media{position:relative}.rich_media_inner{background-color:#fff;padding-bottom:100px}}.radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.cell{padding:.8em 0;display:block;position:relative}.cell_hd,.cell_bd,.cell_ft{display:table-cell;vertical-align:middle;word-wrap:break-word;word-break:break-all;white-space:nowrap}.cell_primary{width:2000px;white-space:normal}.flex_cell{padding:10px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex_cell_primary{width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;box-flex:1;flex:1}.original_tool_area{display:block;padding:.75em 1em 0;-webkit-tap-highlight-color:rgba(0,0,0,0);color:#3e3e3e;border:1px solid #eaeaea;margin:20px 0}.original_tool_area .tips_global{position:relative;padding-bottom:.5em;font-size:15px}.original_tool_area .tips_global:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #dbdbdb;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.original_tool_area .radius_avatar{width:27px;height:27px;padding:0;margin-right:.5em}.original_tool_area .radius_avatar img{height:100%!important}.original_tool_area .flex_cell_bd{width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.original_tool_area .flex_cell_ft{font-size:14px;color:#8c8c8c;padding-left:1em;white-space:nowrap}.original_tool_area .icon_access:after{content:" ";display:inline-block;height:8px;width:8px;border-width:1px 1px 0 0;border-color:#cbcad0;border-style:solid;transform:matrix(0.71,0.71,-0.71,0.71,0,0);-ms-transform:matrix(0.71,0.71,-0.71,0.71,0,0);-webkit-transform:matrix(0.71,0.71,-0.71,0.71,0,0);position:relative;top:-2px;top:-1px}.weui_loading{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:weuiLoading 1s steps(12,end) infinite;animation:weuiLoading 1s steps(12,end) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=) no-repeat;-webkit-background-size:100%;background-size:100%}@-webkit-keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}@keyframes weuiLoading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}.gif_img_wrp{display:inline-block;font-size:0;position:relative;font-weight:400;font-style:normal;text-indent:0;text-shadow:none 1px 1px rgba(0,0,0,0.5)}.gif_img_wrp img{vertical-align:top}.gif_img_tips{background:rgba(0,0,0,0.6)!important;filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#99000000',endcolorstr = '#99000000');border-top-left-radius:1.2em 50%;-moz-border-radius-topleft:1.2em 50%;-webkit-border-top-left-radius:1.2em 50%;border-top-right-radius:1.2em 50%;-moz-border-radius-topright:1.2em 50%;-webkit-border-top-right-radius:1.2em 50%;border-bottom-left-radius:1.2em 50%;-moz-border-radius-bottomleft:1.2em 50%;-webkit-border-bottom-left-radius:1.2em 50%;border-bottom-right-radius:1.2em 50%;-moz-border-radius-bottomright:1.2em 50%;-webkit-border-bottom-right-radius:1.2em 50%;line-height:2.3;font-size:11px;color:#fff;text-align:center;position:absolute;bottom:10px;left:10px;min-width:65px}.gif_img_tips.loading{min-width:75px}.gif_img_tips i{vertical-align:middle;margin:-0.2em .73em 0 -2px}.gif_img_play_arrow{display:inline-block;width:0;height:0;border-width:8px;border-style:dashed;border-color:transparent;border-right-width:0;border-left-color:#fff;border-left-style:solid;border-width:5px 0 5px 8px}.gif_img_loading{width:14px;height:14px}i.gif_img_loading{margin-left:-4px}.gif_bg_tips_wrp{position:relative;height:0;line-height:0;margin:0;padding:0}.gif_bg_tips_wrp .gif_img_tips_group{position:absolute;top:0;left:0;z-index:9999}.gif_bg_tips_wrp .gif_img_tips_group .gif_img_tips{top:0;left:0;bottom:auto}.rich_media_global_msg{position:fixed;top:0;left:0;right:0;padding:1em 35px 1em 15px;z-index:1;background-color:#c6e0f8;color:#8c8c8c;font-size:13px}.rich_media_global_msg .icon_closed{position:absolute;right:15px;top:50%;margin-top:-5px;line-height:300px;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);background:transparent url(/mmbizwap/zh_CN/htmledition/images/icon/appmsg/icon_appmsg_msg_closed_sprite.2x.png) no-repeat 0 0;width:11px;height:11px;vertical-align:middle;display:inline-block;-webkit-background-size:100% auto;background-size:100% auto}.rich_media_global_msg .icon_closed:active{background-position:0 -17px}.preview_appmsg .rich_media_title{margin-top:1.9em}@media screen and (min-width:1024px){.rich_media_global_msg{position:relative;margin:0 20px}.preview_appmsg .rich_media_title{margin-top:0}}</style>
<style>

    </style>
<!--[if lt IE 9]>
<link onerror="wx_loaderror(this)" rel="stylesheet" type="text/css" href="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_pc2c9cd6.css">
<![endif]-->

    </head>
    <body id="activity-detail" class="zh_CN mm_appmsg">

    <script type="text/javascript">
        var write_sceen_time = (+new Date());
    </script>

    <div id="js_article" class="rich_media preview_appmsg">

        <div id="js_top_ad_area" class="top_banner">

        </div>


        <div class="rich_media_inner">

                        <div id="page-content">
                <div id="img-content" class="rich_media_area_primary">
                    <h2 class="rich_media_title" id="activity-name" style="margin-top:0">
                        回顾 | QBII钱宝5.0的巡回之路，一路风尘一路歌
                    </h2>


                    <div class="rich_media_content " id="js_content">




                        <section class="" style="max-width: 100%; box-sizing: border-box; color: rgb(62, 62, 62); font-family: 微软雅黑; line-height: 25.6px; border-width: 0px; border-style: none; border-color: initial; word-wrap: break-word !important;"><section style="padding: 0.6em; max-width: 100%; box-sizing: border-box; min-height: 1em; color: rgb(255, 255, 255); border-radius: 0.8em; background: rgb(252, 180, 43); word-wrap: break-word !important;"><section class="" data-autoskip="1" data-bgless="lighten" data-bglessp="30%" style="padding: 1em; max-width: 100%; box-sizing: border-box; border-radius: 0.8em; color: rgb(193, 126, 0); background: rgb(254, 233, 194); word-wrap: break-word !important;"><p style="max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 14px; text-indent: 28px; white-space: pre-wrap; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;">　　<strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(0, 112, 192); box-sizing: border-box !important; word-wrap: break-word !important;">回顾，是为了让我们更好地走好之后的“路”，同时，也让我们回头看看之前规划的“路”。</span></strong>从2016年11月的QBII钱宝5.0彻底变革的酝酿，到起而行之付诸实践的全国巡回宣讲</span><span style="max-width: 100%; font-size: 14px; text-indent: 28px; white-space: pre-wrap; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;">，从QBII钱宝5.0初撩面纱如洞开微明，到豁然开朗拨开云雾见得漫天云霞，从南国南岭之南的广州启幕，到西南巴蜀腹地的成都收官，这是巨变涌动的尖峰时刻。</span></p><p style="max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 14px; text-indent: 28px; white-space: pre-wrap; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;"><br style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"  /></span></p></section></section></section><p style="max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><br style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"  /></span></p><p style="max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">在大潮奔涌的互联网之海，巨变与迭代始终伴随，个体命运高低起伏。相信，且保持坚强，登上QBII钱宝5.0的方舟才不会迷航。</span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></p><p style="text-align: center;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lrUiaR4dI6eqUl3o2pMDgpktjb2sxBic9DOxsaM9Kqdr5s9kut1mLKuaA/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.39453125" data-w="512"  /></p><section class="" style="max-width: 100%; box-sizing: border-box; border-width: 0px; border-style: none; border-color: initial; word-wrap: break-word !important;"><section class="" style="margin: 1em auto; max-width: 100%; box-sizing: border-box; word-wrap: break-word !important;"><section data-width="100%" style="margin-right: 5px; margin-left: 5px; max-width: 100%; box-sizing: border-box; border-radius: 0.5em; width: 670px; box-shadow: rgba(0, 0, 0, 0.498039) -3px 3px 5px; background-image: linear-gradient(-135deg, transparent 1em, rgb(85, 136, 170) 0px); background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial; word-wrap: break-word !important;"><section style="max-width: 100%; box-sizing: border-box; width: 1.4em; height: 1.4em; float: right; border-bottom-left-radius: 0.5em; box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 3px; background-image: linear-gradient(-135deg, transparent 2em, gray 0px); background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial; word-wrap: break-word !important;"></section><section class="" style="padding: 1em 2em 1.5em 1em; max-width: 100%; box-sizing: border-box; word-wrap: break-word; color: rgb(255, 255, 255); line-height: 1.75em;"><p style="max-width: 100%; min-height: 1em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 14px; line-height: 17.5px; white-space: pre-wrap; box-sizing: border-box !important; word-wrap: break-word !important;">下面</span><span style="max-width: 100%; font-size: 14px; line-height: 17.5px; white-space: pre-wrap; box-sizing: border-box !important; word-wrap: break-word !important;">就让我们一起回首，看看那段峥嵘倥偬的光辉岁月，难忘时刻。</span></p></section></section></section></section><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">　　2016年11月5日， 老张在《雷声》第一次提出QBII的概</span><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">念。大咖坐而论道， 畅谈钱宝5.0时代；起而行之，开启全国宣讲巡</span><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">回，你愿意做一个QBII么？</span></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lDPueuyyKFaOaBicZ41ejASibmJn2ZicCJxiathKyx0gMTjSKrWtzUoQFXQ/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.4857142857142857" data-w="525"  /></span></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-family: 微软雅黑; line-height: 32px; text-indent: 28px; color: rgb(255, 76, 0); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年11月13日， QBII钱宝5.0新时代宣讲会首站花开“五羊城”广州，布道幕启，风流云聚，全新纪元第一书。</span></strong>&nbsp;</span><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;">经过钱旺全军在2016年的浴血拼杀，创造了可被投资并具备超强盈利能力的大量标的，宣讲会现场还公布了成为QBII的入围标准与权利。</span></span></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lFxrBiadnJv5XDpg9TXb2d1J9dgkunwqocq1qMfyHlwia5ia2FzqTqbOibg/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.6560636182902585" data-w="503"  /></span></span></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; color: rgb(0, 128, 255); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年11月27日，潘高寿一炮头响浙中东南沿海，QBII钱宝5.0新时代宣讲会第二站于东方稠州义乌启动，薪火相传，续启时代。</span></strong>&nbsp;</span><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;">潘高寿品牌的力量，预见钱宝的未来。</span></span></span></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565l7o8EG5AFVUbB4dz6pmnws7ZjNClxysTCyglkia0WlVGuOJCrh0nluicg/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.6584269662921348" data-w="445"  /></span></span></span></p><p style="max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(216, 79, 169); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月3日，回归于QBII5.0理念策源地上海，QBII钱宝5.0新时代宣讲会第三站华彩绽放。</span></strong>&nbsp;</span><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">QBII钱宝5.0新时代的转型将依托于微商孵化的华丽转身，实现钱宝会员投资人分级制度。钱旺的不动产资产储备数据尤为抢眼，这也为QBII的推出奠定了坚实的实业根基。</span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lvcyWb1b9hDYibIMncJmshR0MvvwBTIYyT3zkf02XX2hA6EV2jQuoiaOA/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.822463768115942" data-w="552"  /></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-family: 微软雅黑; line-height: 32px; text-indent: 28px; color: rgb(255, 41, 65); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月10日，钱旺速度冲破黎明前黑暗，QBII钱宝5.0新时代宣讲会第四站在苏州开启。</span></strong>&nbsp;</span><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;">姑苏城内， 以初心之名树立信用，建立品牌，攒存用户，且向宝粉们阐述投资人分级制度：要将有价值的资产交给有资格和能够与我们一起前行的用户。东方欲晓，莫道君行早，踏遍青山人未老，这边风景独好！</span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></span></p><p style="text-align: center;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lwxk8BJmr4j0uNBxvBZcicXicWlPY2KBTYVvSEJvXPAfTTmHOYDILz8sQ/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.5594541910331384" data-w="513"  /></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; color: rgb(2, 30, 170); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月17日，为了信仰和坚守，QBII钱宝5.0新时代宣讲会第五站一起在青岛共襄举</span></strong>&nbsp;</span><span style="max-width: 100%; line-height: 32px; text-indent: 32px; color: rgb(2, 30, 170); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">杯！</span></strong>&nbsp;</span><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;">QBII PRO需要很强的风险承担能力，成为QBII PRO需要有四个必备的要素，老兵先行才是正确的战略方向；未来微商商户的发展方向，将从平台销售转变为自营，相应地，微商商户只需要做好品控和生产。飞渡东方瑞士，搏击颠覆浪潮，钱旺之舟形如鲶鱼，所涉之处，或静水流深，或暗流汹涌，我们始终稳健，始终灵活，最后更具智慧与定力。</span></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></span></span></p><p style="text-align: center;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lTeNQEKoGYIOJB3ic7iap9F7ianTsQmmgdic2r3iahgBGuhHATGSGiaYrsRIg/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.6601178781925344" data-w="509"  /></span></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; text-indent: 28px; color: rgb(255, 169, 0); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月26日，一切都是最好的安排， QBII钱宝5.0新时代宣讲会第六站于帝都北京顺势而动。</span></strong>&nbsp;</span><span style="max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">忆往昔，戎马倥偬，指点江山，激扬文字，挥斥意气方遒。钱旺更名和搬迁，引出了钱旺2017年整体战略布局和战略方向的规划：各子公司的搬迁是为明年的战略重点——“涉农”做产业布局，因为钱旺沿着国脉行国运的战略方向不会变，为了将“涉农”贯彻于明年全年的布局中，钱旺将已有的微电商和无人机业务作为战略先导。除了涉农方向上的战略意义，搬迁也有深层次的产业布局意义，每个城市都将有各自的侧重和分工。</span></span></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></span></span></span></p><p style="text-align: center;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lWp09OKNgaVoGDCg8aBLZicJ9Qthibf53s3EDPlibxMkQXtibd2EH8hWEmw/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.6633858267716536" data-w="508"  /></span></span></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></span></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; color: rgb(0, 209, 0); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;">2016年12月28日、30日，钱宝归宁， QBII钱宝5.0新时代宣讲会第七站在南京荣耀故里。</span></strong>&nbsp;</span><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;">回首忆往昔，峥嵘岁月稠，回家的感觉真好，初心不忘：去年的雷行万里，张总走了一万公里，钱宝微商在涉农方向上卖了8亿的农产品；2017年，微商将基于强社交关系的销售模式大有所为。另外，张总还在宣讲会上透漏，未来南京江北智慧城将被打造成一个巨型的微商孵化器。</span></span></span></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></span></span></span></span></p><p style="text-align: center;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lPc4CbBCqXia5EWapFZ4kICVtALEgia1JNnWjWpbibFX3g3WKK9gBoAkEQ/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="1.3275488069414316" data-w="461"  /></span></span></span></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></span></span></span></span></p><p><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 32px; text-indent: 32px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; text-indent: 28px; line-height: 18.75px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 17.1429px; line-height: 34.2857px; color: rgb(255, 104, 39); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 21.4286px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;">2017年1月1日，四季新元旦，万寿初春朝，QBII钱宝5.0新时代宣讲会第八站在江南龙城常州开启。</span></strong>&nbsp;</span><span style="max-width: 100%; font-size: 14px; line-height: 21.4286px; box-sizing: border-box !important; word-wrap: break-word !important;">老张再次阐释什么叫“三千万人的十年”，所谓三千万人的十年就是用十年时间让三千万人脱离贫困走向富足。那么钱旺要做什么？答案就是：我们在成都建了年产1万台的无人机生产线，今年1月5日第一台无人机即将下线问世。2017年我们的目标就是量产一万架无人机植保1亿亩的农田。首站用我，首战必胜，射箭引雕，雕弓天狼。</span></span></span></span></span></span></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lAKEV3DVTQTW71vh3YupDAWlH5IkpFTVgGPdtypQGEWoRH6ayhoytSA/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.46480938416422285" data-w="682"  /></span></span></span><br  /></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></span></span></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 18.75px; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(62, 62, 62); font-family: 微软雅黑; text-indent: 28px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 15px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 14px; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(0, 213, 255); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">2017年1月7日， QBII钱宝5.0新时代宣讲会第九站在秦砖汉瓦之间，梦回西安，我们继续在一起。</strong></span></span><span style="max-width: 100%; font-size: 14px; line-height: 17.5px; color: rgb(120, 114, 114); box-sizing: border-box !important; word-wrap: break-word !important;">张</span><span style="max-width: 100%; font-size: 14px; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;">维天降灵，延元万年，天下康宁，在“丝绸之路”的起点，这么一群热情昂扬的人聚集起来，让所有的一切变的醇厚、浓烈而有温度。</span></span></span></span></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lkT4kktyzL33jrgQeYnFibN8ucviajuTwNzZOTbna5HEe5UefMQ7Ks4Jw/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.35871156661786235" data-w="683"  /></p><p style="margin-top: 25px; margin-bottom: 25px; max-width: 100%; min-height: 1em; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-family: 微软雅黑; font-size: 14px; line-height: 17.5px; color: rgb(255, 41, 65); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">2017年1月11日、12日， QBII钱宝5.0新时代宣讲会第十站在郑州长风一起，雾霾皆散。</strong></span><span style="color: rgb(62, 62, 62); font-family: 微软雅黑; font-size: 14px; line-height: 17.5px;">钱宝5.0巡回宣讲会每到一处，都是雾霾驱散，晴空万里。从清嫩香脆天津沙窝萝卜之里，窥见我们的世界，平凡的世界：在郑州站的第二场上，张总在宣讲会现场提出了一个新主题——网格化建设。2017年是城之宝大年，今年张总将带领团队进行雷行万里第二季的巡回。这也就意味着，2017年春节之后，雷行万里将再次起航，和去年不同的是，这次主打城市线。从乡村到城市，雷行万里不变的是那份“三千万人的十年”的初心。</span></p><p><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lBjJDHrhMibw51Deb72oXHA5tBBTvVacoRkhyudoIyfAQKcj6Qfkfksg/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.6624605678233438" data-w="634"  /></p><p><br  /></p><p style="max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: 微软雅黑; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(172, 57, 255); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 14px; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;">2017年1月14日，QBII钱宝5.0新时代宣讲会最后一站落地“天府之国”成都。</span></strong>&nbsp;</span><span style="max-width: 100%; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;">QBII钱宝5.0巡回宣讲正式收官——2017年，我们继续以品牌之名行军万里：</span>2016年，钱旺以本心之初进军全国，2017年，钱旺以强大的品牌之名继续砥砺，在全国展开科学合理的大布局、大突围；2016年，雷行万里徒步行走近1万公里，2017年，雷行万里继续行军帮扶，以城带乡，为实现“三千万人的十年”继续前行！</span></p><p><span style="max-width: 100%; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></p><p><span style="max-width: 100%; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><img data-src="http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565loTwy7pPqzGZqXcFiaxKHYNdp672upiao4YvBfMrKuUlhWZUW2WiazmSicQ/0?wx_fmt=jpeg" style="width: 366px;" data-type="jpeg" data-ratio="0.7050147492625368" data-w="678"  /></span></p><p><span style="max-width: 100%; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"><br  /></span></p><p><span style="max-width: 100%; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"></span></p><p style="max-width: 100%; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; text-align: center; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; line-height: 17.5px; color: rgb(0, 0, 0); box-sizing: border-box !important; word-wrap: break-word !important;">QBII钱宝5.0新时代巡回宣讲会</span></p><p style="max-width: 100%; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; text-align: center; text-indent: 28px; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(0, 82, 255); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; font-size: 16px; line-height: 17.5px; box-sizing: border-box !important; word-wrap: break-word !important;">2016一路相伴，2017一起前行</span></strong></span></p><p style="max-width: 100%; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(0, 82, 255); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">雷行万里第二季</strong></span></p><p style="max-width: 100%; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(0, 0, 0); box-sizing: border-box !important; word-wrap: break-word !important;">将接棒QBII钱宝5.0新时代宣讲会继续巡回</span></p><p style="max-width: 100%; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(255, 76, 0); box-sizing: border-box !important; word-wrap: break-word !important;">带着700个2000万的目标展开全国的网格化建设</span></strong></p><p style="max-width: 100%; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(0, 0, 0); box-sizing: border-box !important; word-wrap: break-word !important;">似群星散落于各个城市的宝粉们，</span></p><p style="max-width: 100%; min-height: 1em; color: rgb(160, 160, 160); font-family: 微软雅黑; font-size: 14px; text-align: center; line-height: 2em; box-sizing: border-box !important; word-wrap: break-word !important;"><span style="max-width: 100%; color: rgb(255, 169, 0); box-sizing: border-box !important; word-wrap: break-word !important;"><strong style="max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;">你们准备好了么？</strong></span></p><p><br  /></p>
                    </div>
                    <script type="text/javascript">
                        var first_sceen__time = (+new Date());

                        if ("" == 1 && document.getElementById('js_content'))
                            document.getElementById('js_content').addEventListener("selectstart",function(e){ e.preventDefault(); });

                                        (function(){
                            if (navigator.userAgent.indexOf("WindowsWechat") != -1){
                                var link = document.createElement('link');
                                var head = document.getElementsByTagName('head')[0];
                                link.rel = 'stylesheet';
                                link.type = 'text/css';
                                link.href = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx31619e.css";
                                head.appendChild(link);
                            }
                        })();
                    </script>



                    <div class="ct_mpda_wrp" id="js_sponsor_ad_area" style="display:none;">

                    </div>



                                        <div class="rich_media_tool" id="js_toobar3">
                                                                    <div id="js_read_area3" class="media_tool_meta tips_global meta_primary" style="display:none;">阅读 <span id="readNum3"></span></div>

                        <span style="display:none;" class="media_tool_meta meta_primary tips_global meta_praise" id="like3">
                            <i class="icon_praise_gray"></i><span class="praise_num" id="likeNum3"></span>
                        </span>

                        <a id="js_report_article3" style="display:none;" class="media_tool_meta tips_global meta_extra" href="##">投诉</a>

                    </div>



                                    </div>

                <div class="rich_media_area_primary sougou" id="sg_tj" style="display:none">

                </div>

                <div class="rich_media_area_extra">


                                        <div class="mpda_bottom_container" id="js_bottom_ad_area">

                    </div>

                    <div id="js_iframetest" style="display:none;"></div>

                                    </div>

            </div>
            <div id="js_pc_qr_code" class="qr_code_pc_outer" style="display:none;">
                <div class="qr_code_pc_inner">
                    <div class="qr_code_pc">
                        <img id="js_pc_qr_code_img" class="qr_code_pc_img">
                        <p>微信扫一扫<br>关注该公众号</p>
                    </div>
                </div>
            </div>

        </div>
    </div>



        <script nonce="">
    var __DEBUGINFO = {
        debug_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/debug/console2ca724.js",
        safe_js : "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/moonsafe2f3e84.js",
        res_list: []
    };
</script>



<script type="text/javascript">

    if (!window.console) window.console = { log: function() {} };

    if (typeof getComputedStyle == 'undefined') {
        if (document.body.currentStyle) {
            window.getComputedStyle = function(el) {
                return el.currentStyle;
            }
        } else {
            window.getComputedStyle = {};
        }
    }
    var occupyImg = function() {
        var images = document.getElementsByTagName('img');
        var length = images.length;
        var container = document.getElementById('img-content');
        var max_width = container.offsetWidth;
        var container_padding = 0;
        var container_style = getComputedStyle(container);
        container_padding = parseFloat(container_style.paddingLeft) + parseFloat(container_style.paddingRight);
        max_width -= container_padding;
        var ua = navigator.userAgent.toLowerCase();
        var re = new RegExp("msie ([0-9]+[\.0-9]*)");
        var version;
        if (re.exec(ua) != null) {
            version = parseInt(RegExp.$1);
        }
        var isIE = false;
        if (typeof version != 'undefined' && version >= 6 && version <= 9) {
            isIE = true;
        }
        if (!max_width) {
            max_width = window.innerWidth - 30;
        }
        for (var i = 0; i < length; ++i) {
            var src_ = images[i].getAttribute('data-src');
            var realSrc = images[i].getAttribute('src');
            if (!src_ || realSrc) continue;
            var width_ = 1 * images[i].getAttribute('data-w') || max_width;
            var ratio_ = 1 * images[i].getAttribute('data-ratio');
            var height = 100;
            if (ratio_ && ratio_ > 0) {
                var img_style = getComputedStyle(images[i]);
                var init_width = images[i].style.width;

                if (init_width) {
                    images[i].setAttribute('_width', init_width);
                    if (init_width != 'auto') width_ = parseFloat(img_style.width);
                }
                var parent_width = 0;
                var parent = images[i].parentNode;
                var outerWidth = 0;
                while (true) {
                    var parent_style = getComputedStyle(parent);
                    if (!parent || !parent_style) break;
                    parent_width = parent.clientWidth - parseFloat(parent_style.paddingLeft) - parseFloat(parent_style.paddingRight) - outerWidth;
                    if (parent_width > 0) break;
                    outerWidth += parseFloat(parent_style.paddingLeft) + parseFloat(parent_style.paddingRight) + parseFloat(parent_style.marginLeft) + parseFloat(parent_style.marginRight) + parseFloat(parent_style.borderLeftWidth) + parseFloat(parent_style.borderRightWidth);
                    parent = parent.parentNode;
                }
                parent_width = parent_width || max_width;
                var width = width_ > parent_width ? parent_width : width_;
                var img_padding_border = parseFloat(img_style.paddingLeft) + parseFloat(img_style.paddingRight) + parseFloat(img_style.borderLeftWidth) + parseFloat(img_style.borderRightWidth);
                var img_padding_border_top_bottom = parseFloat(img_style.paddingTop) + parseFloat(img_style.paddingBottom) + parseFloat(img_style.borderTopWidth) + parseFloat(img_style.borderBottomWidth);
                img_padding_border = img_padding_border || 0;
                img_padding_border_top_bottom = img_padding_border_top_bottom || 0;
                height = (width - img_padding_border) * ratio_ + img_padding_border_top_bottom;
                images[i].style.cssText += ";width: " + width + "px !important;";
                if (isIE) {
                    var url = images[i].getAttribute('data-src');
                    images[i].src = url;
                } else {
                    images[i].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
                }
            } else {
                images[i].style.cssText += ";visibility: hidden !important;";
            }
            images[i].style.cssText += ";height: " + height + "px !important;";
        }
    }
    occupyImg();
</script>
<script type="text/javascript">

    var not_in_mm_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm322696.css";
    var windowwx_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_winwx31619e.css";
    var article_improve_combo_css = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo322696.css";
    var tid = "";
    var aid = "";
    var clientversion = "";
    var appuin = "MzIwNTE4MjAxMg=="||"";

    var source = "";
    var abtest_cookie = "";

    var scene = 75;

    var itemidx = "";

    var _copyright_stat = "0";
    var _ori_article_type = "";

    var nickname = "FiniTech";
    var appmsg_type = "6";
    var ct = "1486553685";
    var publish_time = "2017-02-08" || "";
    var user_name = "gh_07b293939d07";
    var user_name_new = "";
    var fakeid   = "";
    var version   = "";
    var is_limit_user   = "0";
    var round_head_img = "http://mmbiz.qpic.cn/mmbiz/Cibe1b4EaJdtZjOuXydqQnAicDWzemh0XgibYozYJQlWharGylS3G4NzNbK0uB5MuqcbmWxRh7iblJhuGkicCruF3oQ/0?wx_fmt=png";
    var ori_head_img_url = "http://wx.qlogo.cn/mmhead/Q3auHgzwzM5gb5WpSj8TRMnRl6M2iaXbOXHaqia7Zxa0PnLTkpYyWGIQ/132";
    var msg_title = "回顾 | QBII钱宝5.0的巡回之路，一路风尘一路歌";
    var msg_desc = "回顾，是为了让我们更好地走好之后的“路”，同时，也让我们回头看看之前规划的“路”。从2016年11月的Q";
    var msg_cdn_url = "http://mmbiz.qpic.cn/mmbiz_jpg/Cibe1b4EaJdsb156QkHpEfv7Es7yq565lWp09OKNgaVoGDCg8aBLZicJ9Qthibf53s3EDPlibxMkQXtibd2EH8hWEmw/0?wx_fmt=jpeg";
    var msg_link = "http://mp.weixin.qq.com/s?__biz=MzIwNTE4MjAxMg==\x26amp;tempkey=LgcyQ5PCHWQLdoatl%2BCu%2BlIMy4SOJNdLcZCey4R93spRxO0eXaE%2F%2BjIHGxZA39nuTri4D6Uc6zVQ9XPA48KfAzJ74OFCmipkaVeC3MeLVRoAEs4fmFbnKm3%2B3tzL6k1dGctr4Wq9BNsNNKlN%2FYowPA%3D%3D\x26amp;chksm=1735845220420d44e25878deed7eb1a68778e5db6ae9d3ce2ba1d43a5f8387baa07f9d7c3caa#rd";
    var user_uin = "335916035"*1;
    var msg_source_url = '';
    var img_format = 'jpeg';
    var srcid = '0208OYCqdbJdIg6kJVPuZxME';
    var req_id = '0819zCoHSHAkOrODjuL0B2G6';
    var networkType;
    var appmsgid = '' || '100000001'|| "100000001";
    var comment_id = "0" * 1;
    var comment_enabled = "" * 1;
    var is_need_reward = "0" * 1;
    var is_https_res = ("" * 1) && (location.protocol == "https:");
    var msg_daily_idx = "0" || "";

    var devicetype = "";
    var source_encode_biz = "";


    var reprint_ticket = "";
    var source_mid = "";
    var source_idx = "";

    var show_comment = "0";
    var __appmsgCgiData = {
        can_use_page : "0"*1,
        is_wxg_stuff_uin : "0"*1,
        card_pos : "",
        copyright_stat : "0",
        source_biz : "",
        hd_head_img : "http://wx.qlogo.cn/mmhead/Q3auHgzwzM5gb5WpSj8TRMnRl6M2iaXbOXHaqia7Zxa0PnLTkpYyWGIQ/0"||(window.location.protocol+"//"+window.location.host + "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/appmsg/pic_rumor_link.2x264e76.jpg")
    };
    var _empty_v = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/pic/pages/voice/empty26f1f1.mp3";

    var copyright_stat = "0" * 1;

    var pay_fee = "" * 1;
    var pay_timestamp = "";
    var need_pay = "" * 1;

    var need_report_cost = "0" * 1;
    var use_tx_video_player = "0" * 1;
    var appmsg_fe_filter = "contenteditable";

    var friend_read_source = "" || "";
    var friend_read_version = "" || "";
    var friend_read_class_id = "" || "";

    var is_only_read = "1" * 1;
    var read_num = "2" * 1;
    var like_num = "0" * 1;
    var liked = "false" == 'true' ? true : false;
    var is_temp_url = "LgcyQ5PCHWQLdoatl\x26nbsp;Cu\x26nbsp;lIMy4SOJNdLcZCey4R93spRxO0eXaE/\x26nbsp;jIHGxZA39nuTri4D6Uc6zVQ9XPA48KfAzJ74OFCmipkaVeC3MeLVRoAEs4fmFbnKm3\x26nbsp;3tzL6k1dunX9IRigfqBijGhmioH8aQ==" ? 1 : 0;
    var send_time = "1486554080";
      var icon_emotion_switch = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch.2x2f1273.png";
      var icon_emotion_switch_active = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch_active.2x2f1273.png";
      var icon_loading_white = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/common/icon_loading_white2805ea.gif";
      var icon_audio_unread = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/audio/icon_audio_unread26f1f1.png";
      var icon_qqmusic_default = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_default.2x26f1f1.png";
      var icon_qqmusic_source = "//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/qqmusic/icon_qqmusic_source263724.png";

    var topic_default_img = '//res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/topic/pic_book_thumb.2x2e4987.png';







    var ban_scene = "0" * 1;

    var svr_time = "1486554677" * 1;

        window.wxtoken = "";





    window.is_login = '1' * 1;

    window.__moon_initcallback = function(){
        if(!!window.__initCatch){
            window.__initCatch({
                idkey : 27613,
                startKey : 0,
                limit : 128,
                badjsId: 43,
                reportOpt : {
                    uin : uin,
                    biz : biz,
                    mid : mid,
                    idx : idx,
                    sn  : sn
                },
                extInfo : {
                    network_rate : 0.01,
                    badjs_rate: 0.1
                }
            });
        }
    }


</script>

        <script>window.__moon_host = 'res.wx.qq.com';window.__moon_mainjs = 'appmsg/index.js';window.moon_map = {"appmsg/emotion/caret.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/caret278965.js","biz_wap/jsapi/cardticket.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/cardticket275627.js","appmsg/emotion/map.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/map278965.js","appmsg/emotion/textarea.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/textarea27cdc5.js","appmsg/emotion/nav.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/nav278965.js","appmsg/emotion/common.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/common278965.js","appmsg/emotion/slide.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/slide2a9cd9.js","pages/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/report322696.js","pages/music_player.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/music_player333ed7.js","pages/loadscript.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/loadscript30203e.js","appmsg/emotion/dom.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/dom31ff31.js","biz_wap/utils/hashrouter.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/hashrouter2805ea.js","biz_common/utils/wxgspeedsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/wxgspeedsdk30bcdd.js","a/sponsor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor3189b5.js","a/app_card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/app_card333f3d.js","a/ios.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/ios333f3d.js","a/android.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/android2c5484.js","a/profile.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/profile31ff31.js","a/sponsor_a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/sponsor_a_tpl.html32c414.js","a/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_tpl.html32c414.js","a/mpshop.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/mpshop311179.js","a/card.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/card311179.js","biz_wap/utils/position.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/position2f1750.js","a/a_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a_report32e586.js","biz_common/utils/respTypes.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/respTypes2c57d0.js","appmsg/my_comment_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/my_comment_tpl.html325336.js","appmsg/cmt_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cmt_tpl.html32e586.js","sougou/a_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/a_tpl.html2c6e7c.js","appmsg/emotion/emotion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/emotion/emotion2f3ac3.js","biz_wap/utils/wapsdk.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/wapsdk315b3f.js","biz_common/utils/monitor.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/monitor304edd.js","biz_common/utils/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/report275627.js","appmsg/open_url_with_webview.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/open_url_with_webview3145f0.js","biz_common/utils/http.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/http30b871.js","biz_common/utils/cookie.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/cookie275627.js","appmsg/topic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/topic_tpl.html31ff31.js","pages/voice_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_tpl.html2f2e72.js","pages/voice_component.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/voice_component3338bb.js","pages/qqmusic_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/qqmusic_tpl.html32c414.js","new_video/ctl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/new_video/ctl2d441f.js","a/testdata.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/testdata31a4be.js","appmsg/reward_entry.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/reward_entry3004a4.js","appmsg/comment.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/comment33aa5f.js","appmsg/like.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/like2eb52b.js","pages/version4video.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/version4video335186.js","a/a.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a333f3d.js","rt/appmsg/getappmsgext.rt.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/rt/appmsg/getappmsgext.rt2c21f6.js","biz_wap/utils/storage.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/storage2a74ac.js","biz_common/tmpl.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/tmpl2b3578.js","appmsg/img_copyright_tpl.html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/img_copyright_tpl.html2a2c13.js","biz_common/ui/imgonepx.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/ui/imgonepx275627.js","biz_wap/utils/ajax.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/ajax3274c9.js","biz_wap/utils/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/log2fcb7c.js","sougou/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/sougou/index31aefe.js","biz_wap/safe/mutation_observer_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/safe/mutation_observer_report2fafd1.js","appmsg/fereport.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/fereport33a3b2.js","appmsg/report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report304cae.js","appmsg/report_and_source.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/report_and_source318ea2.js","appmsg/page_pos.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/page_pos30c907.js","appmsg/cdn_speed_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_speed_report3097b2.js","appmsg/wxtopic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/wxtopic31a3be.js","appmsg/voice.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/voice310e30.js","appmsg/qqmusic.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/qqmusic31623d.js","appmsg/iframe.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/iframe32707f.js","appmsg/review_image.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/review_image309c11.js","appmsg/outer_link.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/outer_link275627.js","biz_wap/jsapi/core.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/core2ffa93.js","appmsg/copyright_report.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/copyright_report2ec4b2.js","appmsg/async.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/async33aa5f.js","biz_wap/ui/lazyload_img.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/lazyload_img32a62b.js","biz_common/log/jserr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/log/jserr2805ea.js","appmsg/share.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/share322696.js","appmsg/cdn_img_lib.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/cdn_img_lib30b785.js","biz_common/utils/url/parse.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/url/parse2fb01a.js","page/appmsg/not_in_mm.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/not_in_mm.css32c99a.js","page/appmsg/page_mp_article_improve_combo.css":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/style/page/appmsg/page_mp_article_improve_combo.css32c99a.js","biz_common/dom/event.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/event32e586.js","appmsg/test.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/test314065.js","biz_wap/utils/mmversion.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/mmversion2f1d97.js","appmsg/max_age.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/max_age2fdd28.js","biz_common/dom/attr.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/attr275627.js","appmsg/log.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/log300330.js","biz_common/dom/class.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/dom/class275627.js","biz_wap/utils/device.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/device2b3aae.js","biz_wap/jsapi/a8key.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/a8key2a30ee.js","biz_common/utils/string/html.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/string/html29f4e9.js","appmsg/index.js":"//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/index332f3f.js"};</script><script type="text/javascript">(function(){function d(a){window.__wxgspeeds.moonls_loadjs_begin=+new Date;var c=document.createElement("script");document.getElementsByTagName("body")[0].appendChild(c);c.type="text/javascript";c.async="async";;c.onload=function(){a&&f()};c.src=b;window.__wxgspeeds.moonls_loadjs_end=+new Date}function f(){window.__wxgspeeds.moonls_save_begin=+new Date;localStorage.setItem("__WXLS__moon",String(__moonf__));localStorage.setItem("__WXLS__moonarg",JSON.stringify({version:b,method:""}));window.__wxgspeeds.moonls_save_end=+new Date}var a=!!top&&!!top.window&&top.window.user_uin||0,e=0!==a&&1>Math.floor(a/100)%100;if(2876363900==a||1506075==a||942807682==a)e=!0;var b="//res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/moon32ebc4.js";window.__loadAllResFromMp&&(b=b.replace("res.wx.qq.com","mp.weixin.qq.com"),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=27613_12_1");window.__wxgspeeds||(window.__wxgspeeds={});if("function"==typeof __moonf__)__moonf__(),e&&localStorage&&f();else if(window.__wxgspeeds.moonloadtime=+new Date,e&&localStorage)try{var g=JSON.parse(localStorage.getItem("__WXLS__moonarg"))||{};if(g&&g.version==b){var h=localStorage.getItem("__WXLS__moon");localStorage.setItem("__WXLS__moonarg",JSON.stringify({version:b,method:"fromls"}));window.__moonls_fromls=!0;window.__wxgspeeds.moonls_loadls_end=+new Date;eval(h);__moonf__()}else d(!0)}catch(k){window.__moonls_fail=!0,d(!0)}else d(!1)})();</script>
  <script type="text/javascript">
    var real_show_page_time = +new Date();
    if (!!window.addEventListener){
        window.addEventListener("load", function(){
            window.onload_endtime = +new Date();
        });
    }

  </script>

    </body>
    <script nonce="" type="text/javascript">document.addEventListener("touchstart", function() {},false);</script>
</html>
<!--tailTrap<body></body><head></head><html></html>-->

`
}
