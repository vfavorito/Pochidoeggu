/* eslint-disable indent */
$(document).ready(() => {
  const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  const moodBar = $("#myBar");
  const petNeeds = [
    "I'm hungy. Feed me!!",
    "I have too much energy! Lets go for a walk.",
    "I'm sleepy now",
  ];

  const petStatus = $("#petStatusDiv");
  const sleepPet = $("#sleepPet");
  petStatus.text(petNeeds[0]);

  const username = function () {
    x = $("#username").text();
    z = x.split(" ");
    return z[1];
  };

  const eatBtn = $("#eat");
  eatBtn.on("click", () => {
    feedMe();
    petStatus.text(petHappy[1]);
    increaseMood(5);
  });

  function feedMe() {
    changePic();
    petStatus.text(petHappy[1]);
    console.log(lastFeed);
    moodTimer(3000);
  }

  function increaseMood(int) {
    const num = int;
    let numString = num.toString();
    const sendInt = {
      requester: username,
      value: numString,
    };
    console.log(sendInt);
    $.post("/api/updatePet", sendInt).then(() => {
      numString += "0%";
      moodBar.width(numString);
      console.log(moodBar.width());
    });
  }

  function moodTimer(setTime) {
    setTimeout(() => {
      increaseMood(0);
    }, setTime);
  }

  // const sendName = {
  //   requester: username,
  // };
  // $.get("/api/updatePet", sendName).then((res) => {
  //   console, log(res);
  // });

  const petEl = document.querySelector(".pet");
  const walk = $("#walk");

  walk.on("click", () => {
    console.log(petEl.classList);
    changePic();
    petEl.classList.add("rotator");
    setTimeout(() => {
      petEl.classList.remove("rotator");
    }, 8001);
    console.log("You clicked");
    petStatus.text(petNeeds[1]);
  });

  function changePic() {
    const petPicSrc = sleepPet.attr("src");

    switch (petPicSrc) {
      case "/assets/images/cat2.png":
        sleepPet.attr("src", "./assets/images/cat1.png");
        break;

      case "/assets/images/dog2.png":
        sleepPet.attr("src", "./assets/images/dog1.png");
        break;

      case "/assets/images/rabbit2.png":
        sleepPet.attr("src", "./assets/images/rabbit1.png");
        break;
    }
  }
});
