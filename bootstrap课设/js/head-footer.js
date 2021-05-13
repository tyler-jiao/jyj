$(document).ready(function () {
    function JYJ_getDate() {
        // 调用Date类，使用其中的属性实现事件显示
        var JYJ_today = new Date();
        var JYJ_date = JYJ_today.getFullYear() + "-" + twoDigits(JYJ_today.getMonth() + 1) + "-" + twoDigits(JYJ_today.getDate()) + " ";
        var JYJ_week = " 星期" + "日一二三四五六 ".charAt(JYJ_today.getDay());
        var JYJ_time = twoDigits(JYJ_today.getHours()) + ": " + twoDigits(JYJ_today.getMinutes()) + ": " + twoDigits(JYJ_today.getSeconds());
        $(".head-time span").html(JYJ_date + " " + JYJ_week + " " + JYJ_time);
    }
    // 分钟为0-9时，之后一个字符，不好看，添加一个0在前面
    function twoDigits(JYJ_1) {
        if (JYJ_1 < 10) return "0" + JYJ_1;
        return JYJ_1;
    }
    // 每隔1秒调用一次方法，实现实时更新时间
    $(function () {
        setInterval(JYJ_getDate, 1000);
    });
    // 导航栏显示与隐藏
    $(".one_bar").hover(function () {
        $(this).children("ul").slideToggle();
        $(this).siblings().children("ul").slideUp();
    });
    $(".three-bar").hover(function () {
        $(this).siblings().children("ul").slideUp();
        $(this).children("ul").slideDown();
    },function () {
        $(this).children("ul").slideUp();
    });
    // 鼠标移入与移出改变背景颜色
    $(".nav li").hover(function () {
        $(this).css("background-color", "#FFD400");
        $(this).css("color", "white");
    }, function () {
        $(this).css("background-color", "white");
        $(this).css("color", "#314B60");
    });

})
