jQuery(document).ready(function($){
    $("#topSlider").sliderResponsive({
        // Using default everything
        // slidePause: 5000,
        // fadeSpeed: 800,
         //autoPlay: "on",
        // showArrows: "on",
        // hideDots: "off"
        // hoverZoom: "on",
        // titleBarTop: "off"
    });

    // top menu

    $(".sf-menu").superfish({
        delay: 0,
        speed: "fast",
        cssArrows: true
    });
    $(".sf-menu").after("<div id='my-menu'>");
    $(".sf-menu").clone().appendTo("#my-menu");
    $("#my-menu").find("*").attr('style', '');
    $("#my-menu").find("ul").removeClass("sf-menu");
    $("#my-menu").mmenu({
        extensions : [ 'widescreen', 'theme-light', 'pageshadow', 'effect-menu-slide', 'effect-listitems-slide' ],
        navbar: {
            title: "Туроператор TURAL"
        }
    });
    var api = $("#my-menu").data("mmenu");
    api.bind("closed", function(){
        $(".toggle-mnu").removeClass("on");
    });

    $(".mobile-mnu").click(function(){
        var mmAPI = $("#my-menu").data("mmenu");
        mmAPI.open();
        var thiss = $(this).find(".toggle-mnu");
        thiss.toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });
// end top menu
// tabs



// scrollTo Top
    $('#top').on('click', function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800); return false;
    });
// headerBigSlider
    $("#topSlider").owlCarousel({
        //autoplayTimeout: 2000,
        autoplay: false,
        autoHeight: false,
        // loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                //autoplayTimeout: 2000,
            },
            1920: {
                items: 1,
                nav: true,
                //autoplayTimeout: 2000
            }
        }
    });
// owlCarousel
    $("#owl-propose").owlCarousel({
        pagination: true,
        margin: 10,
        center: false,
        autoplayTimeout: 2000,
        autoplay: false,
        navText: "",
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                autoplayTimeout: 2000
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop: true,

            }
        }
    });


});// end ready
$(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation()
})