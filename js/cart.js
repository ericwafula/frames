// Biz Logic
var total = (amount, price) => amount * price;

// checks to see if value is greater than 1
var greaterThan = (value) => {
    if (value > 1){
        return true;
    }
}

// UI Logic
$(document).ready(function(){
    var price = 1200;
    $("#price").text(price);
    $("form#calculate").submit(function(event){
        event.preventDefault();

        var amount = $("#amount").val();
        $("#price").text(amount * price);
        $("#total-frames").text(amount);

        if (greaterThan(amount) === true){
            $("#plural").text("s");
        }
        else{
            $("#plural").text("");
        }

        $("#price").text(amount * price);
        $(".btn-checkout").show();
        $(".btn-checkout").click(function(){
            $(location).attr('href', 'checkout.html');
        });
    });
    
});