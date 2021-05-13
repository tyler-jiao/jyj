$("document").ready(function () {
    var JYJ_select = $(".slide>ul>li");
    JYJ_select.addClass("select");
    JYJ_select.click(function () {
        $(this).siblings().removeClass("selected");
        // $(this).removeClass("select");
        $(this).toggleClass("selected");
        $(this).children("ul").slideToggle();
        $(this).siblings().children("ul").slideUp();
    })
    $(".slide > ul > li > ul > li>a").on('click', function () {
        return false;
    });//阻止事件冒泡
    for (let JYJ1 = 0; JYJ1 < 5; JYJ1++) {
        $(".i-star").append("<i class=\"icon-star\"></i>");
    }
    for (let JYJ1 = 0; JYJ1 < 4; JYJ1++) {
        $(".i-star2").append("<i class=\"icon-star\"></i>");
    }
    for (let JYJ1 = 0; JYJ1 < 3; JYJ1++) {
        $(".i-star3").append("<i class=\"icon-star\"></i>");
    }
    $(".shop-main dl dt>i").addClass("chang-color");
    $(".shop-main dl dt").hover(function () {
        $(this).children("i").show();
        $(this).addClass("border-smaller");
    }, function () {
        $(this).children("i").hide();
        $(this).removeClass("border-smaller");
    })
});