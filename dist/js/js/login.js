define(["jquery"],function(){return{init:function(){$(".login-top>div>span").click(function(){console.log($(this).index()),console.log($(".login-top>div>form").eq($(this).index())),$(".login-top>form").eq($(this).index()).addClass("active").siblings().removeClass("active")});var l=!1,e=!1;$(".log-btn").click(function(){for(var o in localStorage)$("#userId").val()!=localStorage.user&&$("#userId").val()!=localStorage.email||(l=!0),$("#pwd").val()==localStorage.pwd&&(e=!0);l&&e&&(location.href="index.html"),l||console.log("user  cw"),e||console.log("pwd  cw")})}}});