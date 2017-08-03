$(document).ready(function () {
    $(".menu-list").on("click", ".menu-item", function () {
        $(".menu-item").removeClass("active");
        $(this).addClass("active");
    });

    var mixer = mixitup('.container');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });


});

//Счетчик цифр

$(document).ready(function () {
    var time = 2, cc = 1;
    $(window).scroll(function () {
        $('#counts').each(function () {
            var cPos = $(this).offset().top,
                topWindow = $(window).scrollTop();
            if (cPos < topWindow + 200) {
                if (cc < 2) {
                    $('div').each(function () {
                        var i = 1,
                            num = $(this).data('num'),
                            step = 1000 * time / num,
                            that = $(this),
                            int = setInterval(function () {
                                if (i <= num) {
                                    that.html(i);
                                }
                                else {
                                    cc = cc + 2
                                    clearInterval(int);
                                }
                                i++;
                            }, step);
                    });
                }
            }
        });
    });
});
//     var show = true;
//     var countbox = "#counts";
//     $(window).on("scroll load resize", function () {

//         if (!show) return false;

//         var w_top = $(window).scrollTop();
//         var e_top = $(countbox).offset().top;

//         var w_height = $(window).height();
//         var d_height = $(document).height();

//         var e_height = $(countbox).outerHeight();

//         if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
//             $(".spincrement").spincrement({
//                 thousandSeparator: "",
//                 duration: 3000
//             });

//             show = false;
//         }
//     });
// });