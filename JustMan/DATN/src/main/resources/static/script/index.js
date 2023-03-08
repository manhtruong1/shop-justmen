$(function () {
    changeUiHomePage();
    carousel();
})


function changeUiHomePage() {
    $(".nav-link").removeClass('active-nav');

    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
        $('#promo-banner-1').attr("src", "./image/image/tai-xuong.jpg");
        $('#promo-banner-2').attr("src", "./image/image/tai-xuong-1.jpg");
        $('#promo-banner-3').attr("src", "./image/image/tai-xuong-2.jpg");
        $('.navbar').css("padding-bottom", "0px");
        $('.search-form').css("padding-top", "0px");
        $('.search-form').css("padding-bottom", "20px");

    } else {
        $('#promo-banner-1').attr("src", "./image/image/tai-xuong.jpg");
               $('#promo-banner-2').attr("src", "./image/image/tai-xuong-1.jpg");
               $('#promo-banner-3').attr("src", "./image/image/tai-xuong-2.jpg");
        $('.navbar').css("padding-bottom", "50px");
        $('.search-form').css("padding-top", "50px");
        $('.search-form').css("padding-bottom", "50px");
    }

    if (window.matchMedia && window.matchMedia('(max-width: 576px)').matches) {
         $('#promo-banner-1').attr("src", "./image/image/tai-xuong.jpg");
                $('#promo-banner-2').attr("src", "./image/image/tai-xuong-1.jpg");
                $('#promo-banner-3').attr("src", "./image/image/tai-xuong-2.jpg");
    }
}

$(window).resize(changeUiHomePage);