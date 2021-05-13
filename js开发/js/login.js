$("document").ready(function () {
    $("button.login-btn").click(function () {
        var JYJ_name = document.getElementById("name");
        if (JYJ_name.validity.valueMissing) {
            JYJ_name.setCustomValidity("用户名不能为空");
        } else if (JYJ_name.validity.patternMismatch) {
            JYJ_name.setCustomValidity("提示：user1");
        } else {
            JYJ_name.setCustomValidity("");
        }
        // window.location.href = "register.html";
        var JYJ_pwd = document.getElementById("pwd");
        if (JYJ_pwd.validity.valueMissing) {
            JYJ_pwd.setCustomValidity("密码不能为空");
        } else if (JYJ_pwd.validity.patternMismatch) {
            JYJ_pwd.setCustomValidity("提示：123456");
        } else {
            JYJ_pwd.setCustomValidity("");
        }
    })

})