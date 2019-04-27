import "./import/modules.js";
import "./import/components.js";

$(document).ready(function(){
    //no js
    $(".screen__img").css("min-height","0");
    //no js
    //alternative for object-fit:cover;
    $(window).resize(function() { //when resizing browser
        $(".screen__img").each(function() {
            if($(this).height() < $(this).parent().height()) {
                $(this).css({"max-width":"none","max-height":"100%"});
            }
            if($(this).width() < $(this).parent().width()) {
                $(this).css({"max-width":"100%","max-height":"none"});
            }
        });
    });
    $(".screen__img").each(function() {
        if($(this).height() < $(this).parent().height()) {
            $(this).css({"max-width":"none","max-height":"100%"});
        }
    });
    //button-More in table of contents
    $(".toc-list").children().slice(10).hide();
    $(".toc__btn").show();
    $(".page-contents").css("padding","143px 0 256px");
    $(".toc__btn").click(function(){
        $(".toc-list").children().slice(10).show();
        $(".page-contents").css("padding","143px 0 144px");
        $(this).hide();
    });
    //slick
    $(".page-testimonials").css("padding","190px 0 178px");
    $(".slider-item").css("padding","5px 186px 0");
    $(".bg-black-left").height("100%");
    $(".bg-black-right").height("100%");
    $(".slider").slick({
        arrows: false,
        dots: true,
        initialSlide: 2
    });
});