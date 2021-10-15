$(document).ready(function () {
    $('#odd').on("click", function () {
        $(".prime").toggleClass("unselected");
        $(".even").toggleClass("unselected");
    });
    $('#even').on("click", function () {
        $(".odd").toggleClass("unselected");
        $(".prime").toggleClass("unselected");
    });
    $('#prime').on("click", function () {
        $(".odd").toggleClass("unselected");
        $(".even").toggleClass("unselected");
    });

    $(".product_list>ul>li>span>input").on("click", function () {
        $(this).closest("li").toggleClass("product_selected");
        $(this).closest("li").toggleClass("overlay");
    })

    $(".fa-times-circle").on("click", function () {
        $("#search").val("");
    })

    $(".fa-search").on("click", function () {
        let class_num = $("#search").val();
        console.log($(".product_list>ul>li[id!=" + class_num + "]"));
        $(".product_list>ul>li").removeClass("unselected");
        $(".product_list>ul>li[id!=" + class_num + "]").addClass("unselected");

    })
    $(".go_top").on("click", function () {
        $('html,body').animate({ scrollTop: $('.container').offset().top }, 400);
    });

})




