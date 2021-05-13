$("document").ready(function () {
    //使用正则表达式判断用户名是否合法
    function checkuser() {
        var JYJ_useName = $(".useName").val();
        // alert(useName);
        var reg = /^[a-zA-Z][a-zA-Z0-9]{3,9}$/;
        if (!reg.test(JYJ_useName)) {
            // alert(reg.test(useName));
            $(".DivLogin").html('用户名4～10个字符，字母开头');
        } else {
            $(".DivLogin").html('');
            return true;
        }
    }

    //判断密码是否合法
    function checkpass() {
        var JYJ_password = $('.password').val();
        if (JYJ_password.length < 6) {
            $(".DivPass").html('密码必须等于或大于6个字符');
            return false;//阻止提交
        } else {
            $(".DivPass").html('');
            return true;
        }
    }

    //判断两次密码是否合法
    function checkrepass() {
        var JYJ_password = $('.password').val();
        var JYJ_repassword = $('.repassword').val();
        if (JYJ_password !== JYJ_repassword) {
            $(".DivRep").html('两次输入的密码不一致');
            return false;
        } else {
            $(".DivRep").html('');
            return true;
        }
    }

    //适用正则表达式判断email是否合法
    function checkmail() {
        var JYJ_mail = $('.email').val();
        var JYJ_reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]{3})/;
        if (!JYJ_reg.test(JYJ_mail)) {
            $(".DivEmail").html('Email格式不合法');
            return false;
        } else {
            $(".DivEmail").html('');
            return true;
        }
    }

    //当input丢失焦点时判断
    $('.useName').blur(checkuser);
    $('.password').blur(checkpass);
    $('.repassword').blur(checkrepass);
    $(".email").blur(checkmail);
    //提交表单时判断
    $('.register-form .myform').submit(function () {
        //是否阻止表单提交
        var JYJ_flag = true;
        if (!checkuser()) JYJ_flag = false;
        if (!checkpass()) JYJ_flag = false;
        if (!checkrepass()) JYJ_flag = false;
        if (!checkmail()) JYJ_flag = false;
        return JYJ_flag;
    })
})