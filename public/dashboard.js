/* eslint-disable indent */
$(document).ready(() => {
  const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  const moodBar = $("#myBar");
  const petNeeds = [
    "I am hungy. Please feed me!",
    "I have too much energy! Lets go for a walk.",
    "I missed you. Lets play a game!",
  ];

  const petHappy = [
    "Yumm, thank you for feeding me my favorite food",
    "Thanks for taking me on a walk! I'm sleepy now.",
  ];
  //display the virtual pets need
  //const viewPet = $("#viewPetBtn");
  const petStatus = $("#petStatusDiv");
  const sleepPet = $("#sleepPet");
  // sleepCat.attr("src", "./assets/images/cat2.png");
  petStatus.text(petNeeds[0]);
  //increaseMood("0%");
  const username = function () {
    x = $("#username").text();
    z = x.split(" ");
    return z[1];
  };

  const eatBtn = $("#eat");
  eatBtn.on("click", () => {
    petStatus.text(petHappy[0]);
    increaseMood(9);
    moodTimer(3000);
  });

  function feedMe() {
    changePic();
    const lastFeed = currentTime;
    petStatus.text(petHappy[1]);
    console.log(lastFeed);
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
      feedMe();
      walk();
    });
  }
  /*
  function moodTimer(setTime) {
    const mood = moodBar.width();
    setTimeout(() => {
      increaseMood(mood);
    }, setTime);
  }
  */

  function moodTimer(setTime) {
    const mood = moodBar.width();
    if (mood > 0) {
      mood = moodBar - 1;
      setInterval(() => {
        increaseMood(mood);
      }, setTime);
    } else {
      clearInterval(setTime);
    }
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
    petEl.classList.toggle("rotator");
    console.log("You clicked");
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
