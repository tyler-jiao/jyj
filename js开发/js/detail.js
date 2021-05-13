$("document").ready(function () {

    var JYJ_select = $(".slide>ul>li");
    // 添加右侧菜单栏第一个选项卡下的加号图标
    JYJ_select.addClass("select");
    //点击菜单后将加号变成减号
    JYJ_select.click(function () {
        // 先移除选中的菜单中的其他菜单快的减号
        $(this).siblings().removeClass("selected");
        // $(this).removeClass("select");
        // 当前元素添加减号，再次点击时取除减号
        $(this).toggleClass("selected");
        // 显示或隐藏二级菜单
        $(this).children("ul").slideToggle();
         // 收起其他菜单快的二级菜单
        $(this).siblings().children("ul").slideUp();
    })
    // 这是设计时的小BUG，未采用ul>li>dl>dt+dd+dd格式设计，采用的是ul>li>ul，方式
    // 使得放到第二个ul中li的a标签点击时，相当于点击了第一个ul中的li，会引发其对应的事件，所以
    // 添加return false阻止事件冒泡
    $(".slide > ul > li > ul > li>a").on('click', function () {
        return false;
    });//阻止事件冒泡

    $(".content button").click(function () {
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
    $(".differ .color > li span").click(function(){
        $(this).parent().siblings().children("span").removeClass("border-set");
        $(this).siblings().removeClass("border-set");
        $(this).addClass("border-set");
    })
})