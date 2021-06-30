function Contact (name, email){
    this.name= name;
    this.email= email;
}
Contact.prototype.greeting = function (){
    return "Hi "+ this.name+ " we will contact you shortly";
}


$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var fullName = $("#name").val();
        var emailAddress = $("#email").val();
        var newContact = new Contact(fullName, emailAddress);
        alert(newContact.greeting());
    });
});
