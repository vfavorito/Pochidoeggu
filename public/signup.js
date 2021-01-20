$(document).ready(() => {
  // Getting references to our form and inputs
  const SignUpForm = $(".SignUp");
  const SignUpUser = $("#SignUpUserName");
  const SignUpPass = $("#SignUpPassword");

  // When the form is submitted, we validate there's a username and password entered
  SignUpForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      username: SignUpUser.val().trim(),
      password: SignUpPass.val().trim(),
    };

    if (!userData.username || !userData.password) {
      return;
    }

    // If we have a username and password we run the signUp function and clear the form
    signUp(userData.username, userData.password);
    SignUpUser.val("");
    SignUpPass.val("");
  });

  // signUp does a post to our "api/signup" route and if successful, redirects us the the members page
  const signUp = function (username, password) {
    $.post("/api/signup", {
      username: username,
      password: password,
    })
      .then(() => {
        window.location.replace("/");
        alert("Account Added");
      })
      .fail(() => {
        alert("Bad Sign In");
      });
  };
});
