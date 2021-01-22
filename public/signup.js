$(document).ready(() => {
  // Getting references to our form and inputs
  const SignUpForm = $(".SignUp");
  const SignUpUser = $("#SignUpUserName");
  const SignUpPass = $("#SignUpPassword");
  const SignUpPetName = $("#petName");

  // When the form is submitted, we validate there's a username and password entered
  SignUpForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      username: SignUpUser.val().trim(),
      password: SignUpPass.val().trim(),
      petname: SignUpPetName.val().trim(),
    };

    if (!userData.username || !userData.password || !userData.petname) {
      alert("Please fill out all the sign up fields!");
      return;
    }

    // If we have a username and password we run the signUp function and clear the form
    signUp(userData.username, userData.password, userData.petname);
    SignUpUser.val("");
    SignUpPass.val("");
    SignUpPetName.val("");
  });

  // signUp does a post to our "api/signup" route and if successful, redirects us the the members page
  const signUp = function (username, password, petname) {
    $.post("/api/signup", {
      username: username,
      password: password,
      petname: petname,
    })
      .then(() => {
        window.location.replace("/");
        alert("Account Added");
      })
      .fail(() => {
        alert("Username is unavailable");
      });
  };
});
