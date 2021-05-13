$(document).ready(function () {

    $(".contain .sidebar dt").toggle(
        function () {
            $(this).siblings("dd").slideDown("slow");
        },
        function () {
            $(this).siblings("dd").slideUp("slow");
        }
    )
    $(".contain .sidebar dd").hover(function () {
        $(this).children("a").css("color", "white");
        $(this).css("background-color", "#FFD400");
    }, function () {
        $(this).children("a").css("color", "black");
        $(this).css("background-color", "#ccc");
    })
    $(".contain .sidebar dd").click(function () {
        $(".contain .sidebar dd").next("div.con-p").hide();
        $(this).next("div.con-p").show();
    })
});