$("document").ready(function () {
    // $(".story-cycle ul img").hover(function () {
    //     $(this).parent().siblings().children().hide()
    // })

    $(".story-main button").click(function () {
        $(this).addClass("shop-car");
        $(this).append($("<i class='shop-car-s'>加入购物车成功!</i>"));
        $(".shop-car-s").fadeIn(2000).on('click', function () {
            return false;
        });//阻止事件冒泡x
        $(this).children("i.shop-car-s").fadeOut(1000);
        // $(".shop-car-s").on('click', function () {
        //     return false;
        // });//阻止事件冒泡
        // alert("加入购物车成功！");
    })
})