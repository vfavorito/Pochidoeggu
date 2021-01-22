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
    "Thanks for playing with me!",
  ];

  //display the virtual pets need
  //const viewPet = $("#viewPetBtn");
  const petStatus = $("#petStatusDiv");
  const sleepCat = $("#sleepCat");
  // sleepCat.attr("src", "./assets/images/cat2.png");
  petStatus.text(petNeeds[0]);
  increaseMood("0%");

  /*
  viewPet.on("click", () => {
    petStatus.text(petNeeds[0]);
    sleepCat.attr("src", "./assets/images/cat2.png");
    increaseMood("0%");
  });
  */

  const eatBtn = $("#eat");
  eatBtn.on("click", () => {
    feedMe();
    petStatus.text(petHappy[0]);
    increaseMood("50%");
  });

  function feedMe() {
    const food1 = $("#food");
    food1.prepend("<img src=./assets/images/fish.JPG>");
    const petPicSrc = sleepCat.attr("src");

    switch (petPicSrc) {
      case "/assets/images/cat2.png":
        sleepCat.attr("src", "./assets/images/cat1.png");
        break;

      case "/assets/images/dog2.png":
        sleepCat.attr("src", "./assets/images/dog1.png");
        break;

      case "/assets/images/rabbit2.png":
        sleepCat.attr("src", "./assets/images/rabbit1.png");
        break;
    }
    const lastFeed = currentTime;
    petStatus.text(petHappy[1]);
    console.log(lastFeed);
    moodTimer(3000);
  }

  const playBtn = $("#play");
  playBtn.on("click", () => {
    //playFunction();
    petStatus.text(petHappy[2]);
    increaseMood("80%");
    moodTimer(2000);
  });

  /*function playFunction() {
    alert("This will display a game... to come tomorrow afternoon!");
  }
  */

  function increaseMood(MoodLevel) {
    moodBar.width(MoodLevel);
  }

  function moodTimer(setTime) {
    setInterval(() => {
      increaseMood("0%");
    }, setTime);
  }
});
const catEl = document.querySelector(".cat");
const btnRoll = document.querySelector(".btnMove");

btnRoll.addEventListener("click", () => {
  catEl.classList.toggle("rotator");
  console.log("You clicked");
});
