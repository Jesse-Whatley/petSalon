
function showNotification(msg,style){
    $("#notificationText").text(msg);
    $("#notification").show();
    $("#notification").removeClass("alert-danger");
    $("#notification").removeClass("alert-success");
    $("#notification").addClass(style)
    setTimeout(hideNotification,3000);
}

function hideNotification(){
    $("#notification").hide();
}
