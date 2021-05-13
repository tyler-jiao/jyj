// 对购物车进行的操作
var JYJ_totalcount = 0;//选中商品的总数
function collection() {
    var JYJ_flag = confirm("移入收藏后，将不再购物车显示，是否继续操作?");
    if (JYJ_flag === true) {
        alert("移入收藏成功!");
    }
}

function del() {
    var JYJ_flag = confirm("您确定要删除商品吗?");
    if (JYJ_flag === true) {
        alert("删除成功!");
    }
}

// function accounts() {
//     var JYJ_flag = confirm("您本次购买的商品信息如下：\n\n商品名称：白岩松：白说、岛上书店；\n商品数量：2件；\n商品总计：46.00；\n运费：0元；\n\n请确认以上信息是否有误！！！");
//     if (JYJ_flag) {
//         alert("您的订单已提交");
//     }
// }

// 点击减少件数时，改变对应的价格，选中件数
function minus(num) {
    var JYJ_prices = document.getElementsByName("price")[num].value;
    var JYJ_count = parseInt(document.getElementsByName("amount")[num].value) - 1;
    if (JYJ_count < 1) {
        alert("不能再减了，再减就没有啦！");
    } else {
        document.getElementsByName("amount")[num].value = JYJ_count;
        var JYJ_totals = parseFloat(JYJ_prices * JYJ_count);
        document.getElementById("price" + num).innerHTML = "$" + JYJ_totals + ".00";
        total();
    }
}

// 点击添加件数时，改变对应的价格，选中件数
function plus(JYJ_num) {
    var JYJ_prices = document.getElementsByName("price")[JYJ_num].value;
    var JYJ_count = parseInt(document.getElementsByName("amount")[JYJ_num].value) + 1;
    document.getElementsByName("amount")[JYJ_num].value = JYJ_count;
    // alert(JYJ_count);
    var JYJ_totals = parseFloat(JYJ_prices * JYJ_count);
    document.getElementById("price" + JYJ_num).innerHTML = "$" + JYJ_totals + ".00";
    total();
}
function selectall() {
        total();
}
function total() {
    // alert("jiao");
    JYJ_totalcount = 0;//每次计算选中的总数时先初始化
    var JYJ_prices = document.getElementsByName("price");
    var JYJ_count = document.getElementsByName("amount");
    var JYJ_product = document.getElementsByClassName("ck-box");
    var JYJ_sum = 0;
    for (var i = 0; i < JYJ_prices.length; i++) {
        // console.log(JYJ_prices[i].checked);
        if (JYJ_product[i].checked) {//判断这个商品是否被选中，只有选中才会计算价格
            JYJ_sum += JYJ_prices[i].value * JYJ_count[i].value;
            //计算选中总件数
            JYJ_totalcount += parseInt(document.getElementsByName("amount")[i].value);//累加得到总数
        }
    }
    document.getElementById("totalPrice").innerHTML = "$" + JYJ_sum + '.00';
    document.getElementById("count").innerHTML = JYJ_totalcount;
}
// 算总价格
window.onload=function(){

}

total();
$("document").ready(function () {
    // $("input").prop('checked',true);
    // 选中时会改变商品的边框为选中状态
    $(".ck-box").parent().parent().addClass("change-border");
    // 实现全选功能
    $("input.select-all").click(function () {
        // prop:根据属性值选标签
        var JYJ_ck = $(this).prop('checked');
        //修改属性值
        $(".ck-box").prop('checked', JYJ_ck);
        $("input.select-all").prop('checked', JYJ_ck);
        // 添加时候选中时商品的边框
        if ($(this).prop('checked')) {
            $(".ck-box:checked").parent().parent().css("border", "1px solid #E24425");
        } else {
            $(".ck-box").parent().parent().css("border", "1px solid #cccccc");
        }
        total();
        // var JYJ_2 = $(".ck-box:checked").length;
        // $(".cartList ol li:nth-of-type(2) i").text(JYJ_2);

    })
    $(".ck-box").click(function () {
        var JYJ_1 = $(".ck-box").length;
        var JYJ_2 = $(".ck-box:checked").length;
        // $(".cartList ol li:nth-of-type(2) i").text(JYJ_2);
        $("input.select-all").prop('checked', JYJ_1 === JYJ_2);
        if ($(this).prop('checked')) {
            $(".ck-box:checked").parent().parent().css("border", "1px solid #E24425");
        } else {
            $(this).parent().parent().css("border", "1px solid #cccccc");
        }
    })
    total();
    // 制作订单生成页
    $(".accounts").hide();//隐藏订单生成页
    var JYJ_query_count = 0;//订单提交计算
    $(".cartList ol li:last span").click(function () {
        // alert("aa");
        //未勾选产品需要先勾选产品
        if ($(".ck-box:checked").length === 0) {
            alert("请您先勾选商品，再提交订单！");
            return;
        }
        // 防止订单多次提交
        if (JYJ_query_count===1){
            alert("商品已提交，请勿重复提交\n如需再次提交请刷新页面！");
            return;
        }
        JYJ_query_count = 1;
        //显示订单生成页
        $(".accounts").slideDown(1000);
        // 定义一个数组存放得到选中的数据
        // var JYJ_ced = [];
        // 循环选中的商品，得到其单价，商品名，件数，以及计算总价
        $(".ck-box:checked").each(function (key, value) {

            // alert("11");
            // 单价
            var JYJ_price = $(value).parent().siblings().children("input[name='price']").val();
            // alert(JYJ_price);
            //件数
            var JYJ_amount = $(value).parent().siblings().children("input[name='amount']").val();
            // alert($("<li><span>"+$(value).attr('name')+"</span>"+JYJ_price+"</li>"));
            // 输出商品名，单价，件数
            $(".accounts>ul").append($("<li><span>" + $(value).attr('name') + "</span><span>" + "$"+JYJ_price + "</span><span>" + JYJ_amount + "</span></li>"));
            // 计算总价
            var JYJ_str = $("#totalPrice").text();
            // 利用正则表达式提取总价
            var JYJ_total = JYJ_str.replace(/[^0-9]/, "");
            // alert(JYJ_total)
            $(".accounts>p:nth-of-type(2)>i").html("$"+JYJ_total);
            // JYJ_ced[key] = $(value).attr("name");
        })
        // console.log(JYJ_ced);
        //奇数行换色
        $(".accounts>ul>li:nth-of-type(odd)").css({"width":"607px","background-color":"#cccccc"});
    })
    // 点击支付显示支付成功！
    $(".accounts button").click(function () {
        var jyj_flag = confirm("确认支付吗？")
        if (jyj_flag){
            alert("支付成功！");
        }
    })
    $(".cartList>ul>li:first-child>p:last-child").click(function(){
        var JYJ_f = confirm("确认删除吗？");
        if(JYJ_f){
            $(this).parent().parent().remove();
        }
        
        total();
    })


})

