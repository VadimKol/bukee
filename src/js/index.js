import "./import/modules.js";
import "./import/components.js";

$(document).ready(function(){
    //no js
    //no js
    $(".toc-list").children().slice(10).hide();
    $(".toc__btn").show();
    $(".page-contents").css("padding","143px 0 256px");
    $(".toc__btn").click(function(){
        $(".toc-list").children().slice(10).show();
        $(".page-contents").css("padding","143px 0 144px");
        $(this).hide();
    });
});