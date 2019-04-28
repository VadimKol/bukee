import "./import/modules.js";
import "./import/components.js";

$(document).ready(function(){
    //no js
    $(".screen__img").css("min-height","0");
    if (window.matchMedia('screen and (max-width: 1230px)').matches) {
        $(".page-contents").css("padding","72px 0 184px");
        $(".toc__btn").click(function(){
            $(".page-contents").css("padding","72px 0");
        });
        $(".page-testimonials").css("padding","95px 0 89px");
        $(".slider-item").css("padding","5px 0 0");
    }
    else {
        $(".page-contents").css("padding","143px 0 256px");
        $(".toc__btn").click(function(){
            $(".page-contents").css("padding","143px 0 144px");
        });
        $(".page-testimonials").css("padding","190px 0 178px");
        $(".slider-item").css("padding","5px 186px 0");
    }
    //no js
    $(window).resize(function() { //when resizing browser
        if (window.matchMedia('screen and (max-width: 1230px)').matches) {
            $(".page-contents").css("padding","72px 0 184px");
            if ($(".toc__btn").css("display") === "none") {
                $(".page-contents").css("padding","72px 0");
            }
            $(".toc__btn").click(function(){
                $(".page-contents").css("padding","72px 0");
            });
            $(".page-testimonials").css("padding","95px 0 89px");
            $(".slider-item").css("padding","5px 0 0");
        }
        else {
            $(".page-contents").css("padding","143px 0 256px");
            if ($(".toc__btn").css("display") === "none") {
                $(".page-contents").css("padding","143px 0 144px");
            }
            $(".toc__btn").click(function(){
                $(".page-contents").css("padding","143px 0 144px");
            });
            $(".page-testimonials").css("padding","190px 0 178px");
            $(".slider-item").css("padding","5px 186px 0");
        }
        //alternative for object-fit:cover;
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
    $(".toc__btn").click(function(){
        $(".toc-list").children().slice(10).show();
        $(this).hide();
    });
    //slick
    $(".bg-black-left").height("100%");
    $(".bg-black-right").height("100%");
    $(".slider").slick({
        arrows: false,
        dots: true,
        initialSlide: 2
    });
});