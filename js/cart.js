
// UI Logic
$(document).ready(function(){
    $("form#calculate").submit(function(event){
        event.preventDefault();
        $(".btn-checkout").show();
    });
});