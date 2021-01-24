$(document).ready(() => {
  const loginForm = $(".LoginForm");
  const loginUser = $("#LoginUserName");
  const loginPass = $("#LoginPassword");
  const signUpRedirect = $("#createAcc");

  // When the form is submitted, we validate there's a username and password entered
  loginForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      username: loginUser.val().trim(),
      password: loginPass.val().trim(),
    };
    if (!userData.username || !userData.password) {
      alert("Please enter your username and password!");
      return;
    }

    // If we have a username and password we run the login function and clear the form
    login(userData);
    loginUser.val("");
    loginPass.val("");
  });

  // login does a post to our "api/login" route and if successful, redirects us to dashboard page
  const login = function (userData) {
    console.log(userData);
    $.post("/api/login", userData)
      .then(() => {
        window.location.replace("/dashboard");
      })
      .fail(() => {
        alert("Login Not Found");
      });
  };
  // if create account button is clicked redirect to signup page
  signUpRedirect.on("click", () => {
    window.location.replace("/signup");
  });
});
