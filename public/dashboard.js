$(document).ready(() => {
  const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  const moodBar = $("#myBar");
  const username = $("#username");
  const petNeeds = [
    "I am hungy. Please feed me!",
    "I have too much energy! Lets go for a walk.",
    "I missed you. Lets play a game!",
  ];

  const petHappy = [
    "Yumm, thank you for feeding me my favorite food",
    "Thanks for playing with me!",
  ];
  function increaseBar(int) {
    const sendInt = {
      requester: username.tostring(),
      value: int,
    };
    $.post("/api/updatePet", sendInt).then(() => {
      let x = int.tostring();
      x += "0%";
      moodBar.width(x);
    });
  }

  //display the virtual pets need
  //const viewPet = $("#viewPetBtn");
  const petStatus = $("#petStatusDiv");
  const sleepCat = $("#sleepCat");
  sleepCat.attr("src", "./assets/images/cat2.png");
  petStatus.text(petNeeds[0]);
  increaseBar(0);

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
    increaseBar(5);
  });

  function feedMe() {
    const food1 = $("#food");
    food1.prepend("<img src=./assets/images/fish.JPG>");
    sleepCat.attr("src", "./assets/images/cat1.png");
    const lastFeed = currentTime;
    petStatus.text(petHappy[1]);
    console.log(lastFeed);
  }

  const playBtn = $("#play");
  playBtn.on("click", () => {
    //playFunction();
    petStatus.text(petHappy[2]);
    increaseBar(8);
  });

  /*function playFunction() {
    alert("This will display a game... to come tomorrow afternoon!");
  }
  */

  // function increaseMood(MoodLevel) {
  //   moodBar.width(MoodLevel);
  // }
});
