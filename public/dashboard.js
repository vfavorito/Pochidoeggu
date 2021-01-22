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
    startTimer();
  });

  const eatBtn = $("#eat");
  eatBtn.on("click", () => {
    feedMe();
    petStatus.text(petHappy[0]);
  });

  function feedMe() {
    const food1 = $("#food");
    food1.prepend("<img src=./assets/images/fish.JPG");
    sleepCat.attr("src", "./assets/images/cat1.png");
    const lastFeed = currentTime;
    petStatus.text(petHappy[1]);
    move();
    console.log(lastFeed);
  }

  const playBtn = $("#play");
  playBtn.on("click", () => {
    playFunction();
    petStatus.text(petHappy[2]);
  });

  function playFunction() {
    alert("This will display a game... to come tomorrow afternoon!");
  }

  /*Timer functions*/

  let totalSeconds = 0;
  let secondsElapsed = 0;
  let interval;
  function getFormattedMinutes() {
    const secondsLeft = totalSeconds - secondsElapsed;
    const minutesLeft = Math.floor(secondsLeft / 60);
    let formattedMinutes;
    if (minutesLeft < 10) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }
    return formattedMinutes;
  }

  function getFormattedSeconds() {
    const secondsLeft = (totalSeconds - secondsElapsed) % 60;
    let formattedSeconds;
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
    return formattedSeconds;
  }

  function setTime() {
    const minutes = 5;
    totalSeconds = minutes * 60;

    if (check === "Wrong!") {
      totalSeconds = minutes * 60 - 10;
    }
  }

  function renderTime() {
    minDisplay.textContent = getFormattedMinutes();
    secDisplay.textContent = getFormattedSeconds();

    if (secondsElapsed >= totalSeconds) {
      quizResults();
      stopTimer();
    } else if (secondsElapsed <= totalSeconds && question1()) {
      subtractTime;
    }
  }

  function subtractTime() {
    secondsElapsed + 10;
  }

  function startTimer() {
    setTime();

    if (totalSeconds > 0) {
      // eslint-disable-next-line no-unused-vars
      interval = setInterval(() => {
        secondsElapsed++;

        // So renderTime() is called here once every second.
        renderTime();
      }, 1000);
    } else {
      alert("Minutes of work/rest must be greater than 0.");
    }
  }

  function stopTimer() {
    secondsElapsed = 0;
    //setTime();
    renderTime();
  }

  const i = 0;
  function move() {
    // eslint-disable-next-line eqeqeq
    if (i == 0) {
      i = 1;
      const elem = $("#myBar");
      let width = 1;
      const id = setInterval(frame, 10);
      function frame() {
        if (width >= 20) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }
});
