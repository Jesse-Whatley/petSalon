// JS vs Jquery

$("h1").click(function(){
    $(".header-img img").hide();
});

$(".main-text").click(function(){
    $(".header-img img").show();
});

$("#mode").click(function(){
    $("header").addClass("dark");
});