$(document).ready(function () {
    $("#photo").mouseover(function () {
        $("#photo").fadeTo(1000, 0.30, function () {
            $("#photo").attr("src", "Images/Rose.jpg");
        }).fadeTo(1000, 1);
    });

    //$("#photo").mouseout(function () {
    //    $("#photo").fadeOut("slow");
    //});
});