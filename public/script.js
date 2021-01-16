$(document).ready(function(){
$("#loginSubmit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let user = {
      userName:$("#userName").val().trim(),
      password:$("#passwordInput").val().trim()
    };
    console.log(user);
    // Send the POST request.
    $.post("/api/signup", {
      data: user
     }).then(
       $.get("/")
    );
  });



});

