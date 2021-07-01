$(document).ready(function(){
    $("#login").click(function(){
        $(this).css("background", "#E2B48E");
        $(this).css("color", "white")
        $("#sign-up").css("background", "#FFFFFF");
        $("#sign-up").css("color", "#6E6D49");
    });
    $("#sign-up").click(function(){
        $(this).css("background", "#E2B48E");
        $(this).css("color", "white")
        $("#login").css("background", "#FFFFFF");
        $("#login").css("color", "#6E6D49");
    });
});