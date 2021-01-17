$(document).ready(() => {
  const loginForm = $(".LoginForm");
  const loginUser = $("#LoginUserName");
  const loginPass = $("#LoginPassword");

  // When the form is submitted, we validate there's a username and password entered
  loginForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      username: loginUser.val().trim(),
      password: loginPass.val().trim(),
    };
    if (!userData.username || !userData.password) {
      return;
    }

    // If we have a username and password we run the loginUser function and clear the form
    login(userData);
    loginUser.val("");
    loginPass.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us to the login page
  const login = function (userData) {
    // ------------------------------------------step 1 sends data from html to api-routes
    console.log(userData);
    $.post("/api/login", userData).then(() => {
      //-----------------------------------------step 5 triggers html-route by going to localhost:8080/dashboard
      window.location.replace("/dashboard");
    });
  };
});
