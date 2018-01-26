jQuery(document).ready(function($){
    var wWidth = $(window).width();
    if(wWidth <= 768) {
        $("#head").addClass("container-fluid");
    } else {
        $("#head").addClass("container");
    }

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
// sandwich on card tur
    $(".sandBtm, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
    });
    $(".sandBtm").click(function(){
        if($(".openspan").is(":visible")) {
            $(".openspan").slideUp(600);
        }else{
            $(".openspan").slideDown(600);
        }

    });
// card datepicker
    $.datepicker.regional['ru'] ={
        closeText: "Закрыть",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "Сегодня",
        monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
            "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
        monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
            "Июл","Авг","Сен","Окт","Ноя","Дек" ],
        dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
        dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
        dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $( "#datepicker" ).datepicker({
            dateFormat: 'dd.mm.yy'
        }
    );

// indextabs
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

// card Tabs
    $('#cardTabs .tab').click(function(e){
        e.preventDefault();
        $('#cardTabs .tab').removeClass('active')
            .eq($(this).index()).addClass('active');
        $('.tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');

// // card Tabs
    $('#dopinfo .left-tab').click(function(){
        $('#dopinfo .left-tab').removeClass('active')
            .eq($(this).index()).addClass('active');
        $('.right-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');


// scrollTo Top
    $('#top').on('click', function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800); return false;
    });
// headerBigSlider
    var $item = $('.carousel .item');
    var $wHeight = $("#topSlider").height();
    var $wWidth = $(window).width();
    $item.eq(0).addClass('active');
    $item.height($wHeight);
    $item.addClass('full-screen');

    $('.carousel img').each(function() {
        var $src = $(this).attr('src');
        $(this).parent().css({
            'background-image' : 'url(' + $src + ')',
        });
        $(this).remove();
    });

    $(window).on('resize', function (){
        $wHeight = $(window).height();
        $item.height($wHeight);
    });
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
// owlCarousel
    $("#owl-propose").owlCarousel({
        pagination: true,
        margin: 10,
        center: false,
        autoplayTimeout: 2000,
        autoplay: true,
        navText: "",
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav: true,
                autoplayTimeout: 2000
            },
            600:{
                items:2,
                nav: true
            },
            768:{
                items:2,
                nav: true
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
        autoplay: true,
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
                nav:false,
                autoplayTimeout: 2000
            },
            1000:{
                items:3,
                nav:true,
                loop: true,
                autoplayTimeout: 2000

            }
        }
    });
// tabsCarousel
    $("#owl-propose3").owlCarousel({
        pagination: true,
        margin: 10,
        center: false,
        autoplay: true,
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
                nav:false,
                autoplayTimeout: 2000
            },
            1000:{
                items:3,
                nav:true,
                loop: true,
                autoplayTimeout: 2000

            }
        }
    });
// mainArticles
    $("#mainArt").owlCarousel({
        pagination: true,
        margin: 20,
        center: false,
        autoplay: false,
        navText: "",
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                autoplayTimeout: 2000
            },
            670:{
                items:1,
                nav: true,
                autoplayTimeout: 2000
            },
            992:{
                items:2,
                nav: true
            },
            1000:{
                items: 3,
                nav:true,
                loop: true,
                autoplayTimeout: 2000

            }
        }
    });

// Main News
    $("#mainNews1").owlCarousel({
        pagination: true,
        margin: 10,
        center: false,
        autoplay: true,
        navText: "",
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                nav: true,
                autoplayTimeout: 2000
            },

            670:{
                items: 1,
                nav: true,
                autoplayTimeout: 2000

            },
            992:{
                items:2,
                nav: true,
                autoplayTimeout: 2000

            },
            1000:{
                items:3,
                nav:true,
                loop: true,
                autoplayTimeout: 2000

            }
        }
    });
// Main responce
    $("#response").owlCarousel({
        items: 2,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        navText: "",
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                nav: true,
                loop: true,
                autoplayTimeout: 2000
            },
            600:{
                items:1,
                nav: true,
                loop: true,
                autoplayTimeout: 2000
            },
            1000:{
                items:2,
                nav:true,
                loop: true,
                autoplayTimeout: 2000

            }
        }

    });
// sidebar Propose
    $('#sidepropose').owlCarousel({
        items: 1,
        navText: "",
        nav: true,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                nav: true,
                autoplayTimeout: 2000
            },
            600:{
                items: 2,
                nav: true,
                autoplayTimeout: 2000
            },

            1000:{
                items: 1,
                nav: true,
                autoplayTimeout: 2000

            }
        }
    });
// Relatetd tours
    $("#reltours").owlCarousel({
        items: 4,
        nav: true,
        loop: true,
        margin: 20,
        navText: "",
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                nav: true,
                autoplayTimeout: 2000
            },
            600:{
                items: 2,
                nav: true,
                autoplayTimeout: 2000
            },

            1000:{
                items: 3,
                nav: true,

                autoplayTimeout: 2000

            }
        }

    });
// Relatetd tours
    $("#relpostart").owlCarousel({
        items: 3,
        nav: true,
        loop: false,
        margin: 20,
        navText: "",
        autoplay: false,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                nav: true,
                autoplayTimeout: 2000
            },
            600:{
                items: 2,
                nav: true,
                autoplayTimeout: 2000
            },

            1000:{
                items: 3,
                nav: true,
                autoplayTimeout: 2000

            }
        }

    });
// Card Slider
    $("#cardslider").owlCarousel({
        nav: true,
        margin: 20,
        navText: "",
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1,
                nav: true,
                loop: true,
                autoplayTimeout: 2000
            },
            600:{
                items: 3,
                nav: true,
                loop: true,
                autoplayTimeout: 2000
            },
            992:{
                items: 3 ,
                nav: true,
                loop: true,
                autoplayTimeout: 2000

            },
            1000:{
                items: 4,
                nav: true,
                loop: true,
                autoplayTimeout: 2000

            }
        }
    });
// Open search panel
    $(".top-searchIcon > img").click(function () {
        $(".top-search").fadeIn(300);

    });
// Close search panel
    $(".close").click(function () {
        $(".top-search").fadeOut(300);
    });
// form button
//     $("#formbtn").magnificPopup({
//         type: 'inline';
//     });

    $("#formbtn").click(function(){
        $(".choosevocation").fadeIn(300);
    });
    $(".closeform").click(function () {
        $(".choosevocation").fadeOut(300);
    });

// vertical carousel on sidebar

    $('#slideimg').jcarousel( {
        // vertical: true,
        wrap: 'circular',
        animation: 'slow',
    }).jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });
    $('.prev').jcarouselControl({
        target: '-=1'
    });
    $('.next').jcarouselControl({
        target: '+=1'
    });

// lazyLoad
    $(".art-item").slice(0,6).show();
    $("#button-more").click(function(e){
        e.preventDefault();
        $('.art-item:hidden').slice(0,6).slideDown();
    });
});// end ready
$(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation()
});
