const loginForm = $(".LoginForm");
const loginUser = $("#LoginUserName");
const loginPass = $("#LoginPassword");

// When the form is submitted, we validate there's an email and password entered
loginForm.on("submit", (event) => {
  event.preventDefault();
  const userData = {
    username: loginUser.val().trim(),
    password: loginPass.val().trim(),
  };

  if (!userData.username || !userData.password) {
    return;
  }

  // If we have an email and password we run the loginUser function and clear the form
  login(userData.username, userData.password);
  loginUser.val("");
  loginPass.val("");
});

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
const login = function (username, password) {
  $.post("/api/login", {
    username: username,
    password: password,
  }).then(() => {
    window.location.replace("/dashboard");
    // If there's an error, log the error
  });
  // If there's an error, log the error
};