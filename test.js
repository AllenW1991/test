window.onload = function () {
    var ad_list = document.getElementById("ad_lists");
    var ad_arr = document.getElementsByTagName("img");
    ad_list.style.width = 960 * ad_arr.length + "px";

    var nav_dots = document.getElementById("nav");
    var outer = document.getElementById("slide_show_outer");
    nav_dots.style.left = (outer.offsetWidth - nav_dots.offsetWidth) / 2 + "px";

    // var ad_index = 0;
    var ads = document.getElementsByTagName("a");
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    next_prev()

    for (i = 0; i < ads.length; i++) {
        ads[i].num = i;
        ads[i].onclick = function () {
            index = this.num;
            ad_list.style.left = index * -960 + "px";
            set_dots();
        };
    }

    function set_dots() {
        for (var i = 0; i < ads.length; i++) {
            ads[i].style.backgroundColor = "";
        }
        ads[index].style.backgroundColor = "rgba(223, 223, 223, 0.8)"
    }

    function next_prev() {
        var x = 0;
        ads[x].style.backgroundColor = "rgba(223, 223, 223, 0.8)"
        next.onclick = function () {
            x += 1;
            ad_list.style.left = x * -960 + "px";
            if (x >= ads.length) {
                x = 0;
                ad_list.style.left = x * -960 + "px";
            } else if (x < 0) {
                x = x + ads.length;
                ad_list.style.left = x * -960 + "px";
            }
            for (var i = 0; i < ads.length; i++) {
                ads[i].style.backgroundColor = "";
            }
            ads[x].style.backgroundColor = "rgba(223, 223, 223, 0.8)"
        }
        prev.onclick = function () {
            x -= 1;
            for (var i = 0; i < ads.length; i++) {
                ads[i].style.backgroundColor = "";
            }
            if (x >= 0) {
                ad_list.style.left = x * -960 + "px";
                ads[x].style.backgroundColor = "rgba(223, 223, 223, 0.8)"
            }
            if (x < 0) {
                ad_list.style.left = (x + ads.length) * -960 + "px";
                ads[x + ads.length].style.backgroundColor = "rgba(223, 223, 223, 0.8)"
            }
            if (x <= -10) {
                x = 0;
                ad_list.style.left = x * -960 + "px";
                ads[x].style.backgroundColor = "rgba(223, 223, 223, 0.8)"
            }

        }
    }
};