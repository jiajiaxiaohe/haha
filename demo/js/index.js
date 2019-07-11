// 轮播图
$(".cont").banner({
    aimg:$(".cont").find("img"),			//必传		
    isList:true,			//可选，默认为true
    autoPlay:true,			//可选，默认为true
    delayTime:2000,
    moveTime:1000,			//可选，默认为200
    index:0
})
$(".cont2").banner({
    aimg:$(".cont2").find("img"),			//必传		
    isList:true,			//可选，默认为true
    autoPlay:true,			//可选，默认为true
    delayTime:2000,
    moveTime:1000,			//可选，默认为200
    index:0
})
$(".cont3").banner({
    aimg:$(".cont3").find("img"),			//必传		
    isList:true,			//可选，默认为true
    autoPlay:true,			//可选，默认为true
    delayTime:2000,
    moveTime:1000,			//可选，默认为200
    index:0
})
$(".cont4").banner({
    aimg:$(".cont4").find("img"),			//必传		
    isList:true,			//可选，默认为true
    autoPlay:true,			//可选，默认为true
    delayTime:2000,
    moveTime:1000,			//可选，默认为200
    index:0
})



// 三级菜单
$("header").find(".ul2").children("li.i1").mouseover(function(){
    $(this).addClass("active").children(".prom").stop().show()
})

$("header").find(".ul2").children("li.i1").mouseout(function(){
    $(this).removeClass("active").children(".prom").stop().hide()
})
$("header").find(".ul2").children("li.i2").mouseover(function(){
    $(this).addClass("active");
    $(".prom2").stop().show();
})
$("header").find(".ul2").children("li.i2").mouseout(function(){
    $(".prom2").stop().hide();
    $("li.i2").removeClass("active");

})
$("header").find(".ul2").children("li.i3").mouseover(function(){
    $(this).addClass("active");
    $(".prom3").stop().show();
})
$("header").find(".ul2").children("li.i3").mouseout(function(){
    $(".prom3").stop().hide();
    $("li.i3").removeClass("active");

})
$("header").find(".ul2").children("li.i4").mouseover(function(){
    $(this).addClass("active");
    $(".prom4").stop().show();
})
$("header").find(".ul2").children("li.i4").mouseout(function(){
    $(".prom4").stop().hide();
    $("li.i4").removeClass("active");

})





// 选项卡切换
$(".tips .gao .a1g").mouseover(function(){
    $(this).addClass("change").siblings().removeClass("change");
    $("#firstPage").show().siblings("#secondPage").hide();
})
$(".tips .gao .a2g").mouseover(function(){
    $(this).addClass("change").siblings().removeClass("change");
    $("#secondPage").show().siblings("#firstPage").hide();
})

$(".wx").mouseover(function(){
    $(".wx1").toggle();
})
$(".wx1").mouseout(function(){
    $(".wx1").hide();
})

//楼层切换
$(".lc").children("li").click(function(){
    console.log(1)
                var index = $(this).index();
                var iNowFloor = $(".floor").eq(index);
                var t = iNowFloor.offset().top;
                $("html").stop().animate({
                    scrollTop:t
                })
                
            })

// 限时抢购倒计时
var t1 = document.querySelector(".t1");
var d = new Date(); 
d = d.setDate(d.getDate() + 1);
function timer(d) {
    var newtime = new Date();
    var time = (d - newtime) / 1000;
    var h = parseInt(time / 60 / 60 % 24);
    var m = parseInt(time / 60 % 60);
    var s = parseInt(time % 60);
    return h + ":" + m + ":" + s ;
}
setInterval(function(){
    t1.innerHTML = timer(d);
}, 1000)
