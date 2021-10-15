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
        this.closest("li").toggleClass("product_selected");
        console.log(this);
    })
});
