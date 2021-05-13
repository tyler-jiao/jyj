$("document").ready(function () {
    // 鼠标移入加入阴影效果，移出取消
    $(".brand-right .brand-img").hover(function () {
        $(this).addClass("shadow");
    }, function () {
        $(this).removeClass("shadow");
    })
    // 显示与隐藏图片前的覆盖层
    $(".tabs dl dt").hover(function () {
        $(this).children("i").show();
        // $("this").append($("<i></i>")).addClass("mask");
        // alert("11");
        $(this).addClass("shadow");
    }, function () {
        // $(".tabs dl dt i").hide();
        $(this).children("i").hide();
        $(this).removeClass("shadow");
    })
    // 鼠标移入改变背景颜色，其他兄弟元素恢复为未选中颜色，移出后依然为选中颜色
    $(".tabs-list>ul>li").hover(function () {
        // alert(JYJ_flag);
        $(this).siblings().removeClass("selected");
        $(this).siblings().addClass("unselect");
        $(this).removeClass("unselect");
        $(this).addClass("selected");
    }, function () {
        $(this).addClass("selected");
    })
    // 为实现上个功能需要判断当前是哪个最后移入的li，才能实现移出时依然是选中状态
    var JYJ_flag = 1;
    $(".tabs-list ul li:first").mouseover(function () {
        // $("div#tabs-one").show();
        JYJ_flag = 1;
        JYJ_count();
    })
    $(".tabs-list ul li:eq(1)").mouseover(function () {
        // $("div#tabs-two").show();
        JYJ_flag = 2;
        JYJ_count();
    })
    $(".tabs-list ul li:last").mouseover(function () {
        // $("div#tabs-three").show();
        JYJ_flag = 3;
        JYJ_count();
    })
    function JYJ_count() {
        if (JYJ_flag === 1) {
            $(".tabs-content>div").hide();
            $("div#tabs-one").show();
        } else if (JYJ_flag === 2) {
            $(".tabs-content>div").hide();
            $("div#tabs-two").show();
        } else {
            $(".tabs-content>div").hide();
            $("div#tabs-three").show();
        }
    }
    // 加入小星星图标，循环5个
    for (let JYJ1 = 0; JYJ1 < 5; JYJ1++) {
        $(".i-star").append("<i class=\"icon-star\"></i>");
    }
    $(".thumbnail button").click(function () {
        // 添加一个添加到购物车中的小提示，缓慢出现，缓慢消失的样式
        $(this).addClass("shop-car");
        // 在button内部后面添加一段代码调用其对应的类完成显示与消失
        $(this).append($("<i class='shop-car-s'>加入购物车成功!</i>"));
        // 因为是在button内部后添加的代码，鼠标点击提示，会触发button事件，因此取消事件冒泡
        $(".shop-car-s").fadeIn(2000).on('click', function () {
            return false;
        });//阻止事件冒泡
        $(this).children("i.shop-car-s").fadeOut(1000);
        // $(".shop-car-s").on('click', function () {
        //     return false;
        // });//阻止事件冒泡
        // alert("加入购物车成功！");
    })
})

$(function(){
    //每个固定的时间移动图片
    var JYJ_timer = setInterval(picLoop,1500);
    var JYJ_index = 0;
    function picLoop(){
        JYJ_index++;
        if (JYJ_index==8) {JYJ_index=0;}
        $(".brand-left .content").animate({"left":-750*JYJ_index},300);
        $(".brand-left li").eq(JYJ_index).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
    }

    //定时器的控制
    $(".brand-left .pic").hover(function(){
        clearInterval(JYJ_timer);
        $(".brand-left .left").show();
        $(".brand-left .right").show();
    },function(){
        JYJ_timer = setInterval(picLoop,1500);
        $(".brand-left .left").hide();
        $(".brand-left .right").hide();
    })

    $(".brand-left li").mouseover(function(){
        $(this).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
        JYJ_index = $(this).JYJ_index();
        $(".brand-left .content").animate({"left":-750*JYJ_index},300);

    })

    $(".brand-left .left").click(function(){
        JYJ_index--;
        if (JYJ_index==-1) {JYJ_index=7;}
        $(".brand-left .content").animate({"left":-750*JYJ_index},300);
        $(".brand-left li").eq(JYJ_index).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
    })
    $(".brand-left .right").click(function(){
        JYJ_index++;
        if (JYJ_index==8) {JYJ_index=0}
        $(".brand-left .content").animate({"left":-750*JYJ_index},300);
        $(".brand-left li").eq(JYJ_index).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)"); 
    })
})
