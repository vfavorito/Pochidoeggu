/* eslint-disable indent */
$(document).ready(() => {
  const moodBar = $("#myBar");
  const petNeeds = [
    "I'm hungy. Feed me!!",
    "I have too much energy! Lets go for a walk.",
    "I'm sleepy now",
  ];
  const petHappy = [
    "Yumm, thank you for feeding me my favorite food",
    "Thanks for playing with me!",
  ];
  //display the virtual pets need
  //const viewPet = $("#viewPetBtn");
  const petMood = 10;
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
    petStatus.text(petHappy[1]);
    moodTimer(3000, petMood);
  });

  function changeMood(int) {
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
      changePic();
      petStatus.text(petHappy[1]);
    });
  }

  function moodTimer(setTime, int) {
    num = int;
    const interval1 = setInterval(() => {
      if (num === 0) {
        clearInterval(interval1);
      } else {
        num--;
        changeMoodBar(num);
      }
    }, setTime);
  }

  function changeMoodBar(int) {
    const num = int;
    console.log(num);
    let numString = num.toString();
    numString += "0%";
    moodBar.width(numString);
    changeMood(num);
  }
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

  const sleep = $("#sleep");

  sleep.on("click", () => {
    const petPicSrc = sleepPet.attr("src");
    if (petPicSrc.indexOf("1") !== -1) {
      sleepSrc();
    } else {
      return;
    }
  });

  function changePic() {
    const petPicSrc = sleepPet.attr("src");
    switch (petPicSrc) {
      case "/assets/images/cat2.png":
        sleepPet.attr("src", "/assets/images/cat1.png");
        break;

      case "/assets/images/dog2.png":
        sleepPet.attr("src", "/assets/images/dog1.png");
        break;

      case "/assets/images/rabbit2.png":
        sleepPet.attr("src", "/assets/images/rabbit1.png");
        break;
    }
  }

  function sleepSrc() {
    const petPicSrc = sleepPet.attr("src");
    console.log(petPicSrc);
    switch (petPicSrc) {
      case "/assets/images/cat1.png":
        sleepPet.attr("src", "/assets/images/cat2.png");
        break;

      case "/assets/images/dog1.png":
        sleepPet.attr("src", "/assets/images/dog2.png");
        break;

      case "/assets/images/rabbit1.png":
        sleepPet.attr("src", "/assets/images/rabbit2.png");
        console.log("hit this");
        break;
    }
  }
});
