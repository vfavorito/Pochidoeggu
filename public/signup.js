$(document).ready(() => {
  // Getting references to our form and inputs
  const SignUpForm = $(".SignUp");
  const SignUpUser = $("#SignUpUserName");
  const SignUpPass = $("#SignUpPassword");

  // When the form is submitted, we validate there's an email and password entered
  SignUpForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      username: SignUpUser.val().trim(),
      password: SignUpPass.val().trim(),
    };

    if (!userData.username || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    signUp(userData.username, userData.password);
    SignUpUser.val("");
    SignUpPass.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  const signUp = function (username, password) {
    $.post("/api/signup", {
      username: username,
      password: password,
    }).then(() => {
      // If there's an error, log the error
    });
  };
});
