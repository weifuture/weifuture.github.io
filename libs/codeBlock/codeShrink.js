// build time:Tue Mar 03 2020 01:29:39 GMT+0800 (China Standard Time)
$(function(){var e=$('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');$(".code-area").prepend(e);$(".code-expand").on("click",function(){if($(this).parent().hasClass("code-closed")){$(this).siblings("pre").find("code").show();$(this).parent().removeClass("code-closed")}else{$(this).siblings("pre").find("code").hide();$(this).parent().addClass("code-closed")}})});
//rebuild by neat 