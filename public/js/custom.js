jQuery(document).ready(function($){
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
    $('.proposeSliderTabs .tab').click(function(){
        $('.proposeSliderTabs .tab').removeClass('active')
            .eq($(this).index()).addClass('active');
        $('.tab_item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
// newsTabs
    $('.mainNewsTabs .tab').click(function(){
        $('.mainNewsTabs .tab').removeClass('active')
            .eq($(this).index()).addClass('active');
        $('.tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
// scrollTo Top
    $('#top').on('click', function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800); return false;
    });
// headerBigSlider
//     $("#topSlider").owlCarousel({
//         items:1
//
//     });
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
// tabsCarousel
    $("#owl-propose2").owlCarousel({
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
// mainArticles
    $("#mainArt").owlCarousel({
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

// Main responce
    $("#response").owlCarousel({
        items: 2,
        margin: 20,
        nav: true,
        dots: true,
        navText: "",
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                nav:true,
                autoplayTimeout: 2000
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop: true,

            }
        }

    });
// sidebar Propose
    $('#sidepropose').owlCarousel({
        items: 1,
        navText: "",
        nav: true
    });
// Relatetd tours
    $("#reltours").owlCarousel({
        items: 4,
        nav: true,
        margin: 20,
        navText: ""

    });
});// end ready
$(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation()
})