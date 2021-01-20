$(document).ready(() => {
  const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  const sleepCat = $("#sleepCat");

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
  const viewPet = $("#viewPetBtn");
  const petStatus = $("#petStatusDiv");

  //this function will take the user to their own page
  viewPet.on("click", () => {
    petStatus.text(petNeeds[0]);
    sleepCat.attr("src", "./assets/images/cat2.png");
  });

  const eatBtn = $("#eat");
  eatBtn.on("click", () => {
    feedMe();
    petStatus.text(petHappy[0]);
  });

  function feedMe() {
    const food1 = $("#food");
    food1.prepend("<img src=../public/assets/images/fish.JPG>");
    sleepCat.attr("src", "../public/assets/images/cat1.png");
    const lastFeed = currentTime;
    console.log(lastFeed);
  }
});
