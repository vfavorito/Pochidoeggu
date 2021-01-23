$(document).ready(() => {
  // Getting references to our form and inputs
  const SignUpForm = $(".SignUp");
  const SignUpUser = $("#SignUpUserName");
  const SignUpPass = $("#SignUpPassword");
  const SignUpPetName = $("#petName");
  const SignUpPet = $("input[type='radio']");
  let curPet1;
  let curPet2;
  const loginRedirect = $("#loginHere");

  SignUpPet.click(function () {
    curPet1 = this.dataset.string1;
    curPet2 = this.dataset.string2;
    return curPet1, curPet2;
  });
  // When the form is submitted, we validate there's a username and password entered
  SignUpForm.on("submit", (event) => {
    event.preventDefault();
    const userData = {
      username: SignUpUser.val().trim(),
      password: SignUpPass.val().trim(),
      petname: SignUpPetName.val().trim(),
      pet1: curPet1,
      pet2: curPet2,
    };
    if (
      !userData.username ||
      !userData.password ||
      !userData.petname ||
      !userData.pet1
    ) {
      alert("Please fill out all the sign up fields!");
      return;
    }

    // If we have a username and password we run the signUp function and clear the form
    signUp(
      userData.username,
      userData.password,
      userData.petname,
      userData.pet1,
      userData.pet2
    );
    SignUpUser.val("");
    SignUpPass.val("");
    SignUpPetName.val("");
  });

  // signUp does a post to our "api/signup" route and if successful, redirects us the the members page
  const signUp = function (username, password, petname, pet1, pet2) {
    $.post("/api/signup", {
      username: username,
      password: password,
      petname: petname,
      pet1: pet1,
      pet2: pet2,
    })
      .then(() => {
        window.location.replace("/");
        alert("Account Added");
      })
      .fail(() => {
        alert("Username is unavailable");
      });
  };
  loginRedirect.on("click", () => {
    window.location.replace("/");
  });
});
