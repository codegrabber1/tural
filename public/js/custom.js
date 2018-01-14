jQuery(document).ready(function($){
    // top menu

    $(".sf-menu").superfish({
        delay: 200,
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
// scrollTo Top
    $('#top').on('click', function() {
        $("body, html").animate({
            scrollTop: 0
        }, 800); return false;
    });

});// end ready