define(["jquery"],function(){return{init:function(){var a=new Promise(function(i,a){$.ajax({type:"get",url:"../data/tejia.json",dataType:"json",success:function(a){a=a.tejia,i(a)},error:function(a){console.log(a)}})}),t="";a.then(function(s){var n=s.length;layui.use(["laypage","layer"],function(){var a=layui.laypage;layui.layer,a.render({elem:"demo1",count:20,jump:function(a){!function(a){for(var i=20*(a-1);i<Math.min(n,20*a);i++)t+='<li data-id="'+s[i].id+'"><span class="discount"><div><span>8</span><i>.4</i><em>折</em></div></span><span class="distxt"><p>03-13 16:32</p></span><div class="aaa"><a href="##"><div class="photo"><div class="brandlogo"><img class="bf_img_scroll_loading" src="'+s[i].img+'"></div><img src="'+s[i].simg+'"/></div></a></div><h5><a href="##" >'+s[i].miaoshu+'</a></h5><a href="##"><h6><span>今日特价</span><b>'+s[i].price+'</b></h6></a><div class="clear bytn-new"><div class="buy"><a href="##">立即购买</a></div><span class="text-999">近30天最低价 &nbsp;<s>'+s[i].sprice+"</s></span></div></li>";$(".tj-shop>ul").html(t),t=""}(a.curr)}}),$(".tj-shop>ul>li").click(function(){var a=$(this).attr("data-id");location.href="details.html?"+a})})})}}});