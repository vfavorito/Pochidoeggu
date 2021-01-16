$("#loginSubmit").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let user = {
      email: $("#emailInput").val().trim(),
      password: $("#passwordInput").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/login", {
      type: "POST",
      data: user
    }).then(
      function(err,responce) {
        if(err){alert(err)};

      }
    );
  });
