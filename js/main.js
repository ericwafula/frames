// Business Logic
function User(firstName, lastName, email, phone, county){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.county = county;
    this.address = [];
}
User.prototype.name = function(){
    return this.firstName + " " + this.lastName;
};
// UI Logic
$(document).ready(function(){
    $("#login").click(function(){
        $(this).css("background", "#E2B48E");
        $(this).css("color", "white")
        $("#sign-up").css("background", "#FFFFFF");
        $("#sign-up").css("color", "#6E6D49");
        // Shows the login form and hides sign up form
        $("#login-form").show();
        $("#sign-up-form").hide();
    });
    $("#sign-up").click(function(){
        $(this).css("background", "#E2B48E");
        $(this).css("color", "white")
        $("#login").css("background", "#FFFFFF");
        $("#login").css("color", "#6E6D49");
        // Shows the sign up form and hides the login form
        $("#sign-up-form").show();
        $("#login-form").hide();
    });
    $("form").submit(function(event){
        event.preventDefault();
        // var name = $("#name").val();
        var firstName = $("#first-name").val();
        var lastName = $("last-name").val();
        var email = $("#email-address").val();
        var county = $("#counties").val();
        var phone = $("#phone").val();
        var address = $("#address").val();
        var newUser = new User(firstName, lastName, email, phone, county);
        $("#upload").click(function(){
            alert("Your image has been uploaded!");
        });
    });
    $("#next-step").click(function(){
        $(location).attr('href', 'select_frames.html');
    });
    $("#custom-frame").click(function(){
        $(location).attr('href', 'customtemplate.html');
    });
    $("#about-option").click(function(){
        $(location).attr('href', 'html/about.html');
    });
});