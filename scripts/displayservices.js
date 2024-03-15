//this line is similar to window.onload
$(document).ready(function(){
    //console.log("services action");

    //all the code here

    $("#groomingDiv").hide();
    $("#vaccinesDiv").hide();
    $("#hotelDiv").hide();

    $("#groomingBtn").click(function(){
        $("li").removeClass("dark");
        $(this).addClass("dark");
        $("#groomingDiv").show();
        $("#vaccinesDiv").hide();
        $("hotelDiv").hide();
    });
    $("#vaccinesBtn").click(function(){
        $("li").removeClass("dark");
        $(this).addClass("dark");
        $("#groomingDiv").hide();
        $("#vaccinesDiv").show();
        $("#hotelDiv").hide();
    });
    $("#hotelBtn").click(function(){
        $("li").removeClass("dark");
        $(this).addClass("dark");
        $("#groomingDiv").hide();
        $("#vaccinesDiv").hide();
        $("#hotelDiv").show();
    });
});

