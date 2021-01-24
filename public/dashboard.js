$(document).ready(() => {
  const moodBar = $("#myBar");
  const petNeeds = [
    "I'm hungy. Feed me!!",
    "Thanks for the food. Now, I have too much energy! Lets go for a walk.",
    "I'm sleepy now",
    "That was a nice nap. I need food now.",
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
  });

  function feedMe() {
    changePic();
    petStatus.text(petNeeds[1]);
    console.log(lastFeed);
  }

  let i = 0;
  function increaseMood(int) {
    const num = int;
    let numString = num.toString();
    if (i = 0) {
      i = 10;
      let width = num;
      const id = setInterval(frame, 10);
      function frame() {
        if (width <= 2) {
          clearInterval(id);
          i = 0;
        } else {
          width--;
          moodBar.width(num);
        }
      }
    }
    const sendInt = {
      requester: username,
      value: numString,
    };
    console.log(sendInt);
    $.post("/api/updatePet", sendInt).then(() => {
      numString += "0%";
      moodBar.width(numString);
      console.log(moodBar.width());
      setInterval(increaseMood(10), 5000);
    });
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
    petStatus.text(petNeeds[2]);
    setInterval(increaseMood(10), 5000);
  });

  const sleep = $("#sleep");

  sleep.on("click", () => {
    setInterval(increaseMood(10), 5000);
    petStatus.text(petNeeds[3]);
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
