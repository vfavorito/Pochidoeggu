/* eslint-disable indent */
$(document).ready(() => {
  const moodBar = $("#myBar");

  //setting the status of the pet's needs
  const petNeeds = [
    "I'm hungry. Feed me or else!!",
    "I have too much energy! Lets go for a walk.",
    "I'm sleepy now",
  ];
  const petHappy = [
    "*Munch* *Munch Munch Munch* Yumm, thank you!",
    "Zoom... Zoom Zoom... Yipee Ki Yay!",
    "*Yawn* I'm going... I'm go... *zzzzzzzzz*",
  ];
  //display the virtual pets need
  const petMood = 10;
  const petStatus = $("#petStatusDiv");
  const sleepPet = $("#sleepPet");
  petStatus.text(petNeeds[0]);

  const username = function () {
    x = $("#username").text();
    z = x.split(" ");
    return z[1];
  };

  //creating the eat action for the pet, setting a timer on the mood, and displays the text of what it wants next
  const eatBtn = $("#eat");
  eatBtn.on("click", () => {
    changePic();
    petEl.classList.add("eating");
    setTimeout(() => {
      petEl.classList.remove("eating");
    }, 4001);
    petStatus.text(petHappy[0]);
    moodTimer(3000, petMood);
    setTimeout(() => {
      petStatus.text(petNeeds[2]);
    }, 5000);
  });

  //sends the value of the mood bar to the database using a post request
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
    });
  }

  //sets a timer for the mood bar to decrease in width
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

  //converts the moodbar value from a percentage to a number to change the value of the width
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

  //creating the walk action for the pet, setting a timer on the mood, and displays the text of what it wants next
  walk.on("click", () => {
    console.log(petEl.classList);
    changePic();
    petEl.classList.add("walking");
    setTimeout(() => {
      petEl.classList.remove("walking");
    }, 8001);
    setTimeout(() => {
      petStatus.text(petNeeds[0]);
    }, 8000);
    console.log("You clicked");
    petStatus.text(petHappy[1]);
    moodTimer(3000, petMood);
  });

  //creating the sleep action for the pet, setting a timer on the mood, and displays the text of what it wants next
  const sleep = $("#sleep");
  sleep.on("click", () => {
    const petPicSrc = sleepPet.attr("src");
    if (petPicSrc.indexOf("1") !== -1) {
      sleepSrc();
      petStatus.text(petHappy[2]);
      setTimeout(() => {
        petStatus.text(petNeeds[1]);
      }, 8000);
      moodTimer(3000, petMood);
    } else {
      return;
    }
  });

  //changes the images of the pet from asleep to awake based off of what was selected in the login
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

  //changing the images on the sleep function for the pet
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
