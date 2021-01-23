/* eslint-disable indent */
$(document).ready(() => {
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
  //increaseMood("0%");
  const username = function () {
    x = $("#username").text();
    z = x.split(" ");
    return z[1];
  };

  const eatBtn = $("#eat");
  eatBtn.on("click", () => {
    petStatus.text(petHappy[0]);
    increaseMood(5);
  });

  function feedMe() {
    changePic();
    petStatus.text(petHappy[1]);
    moodTimer(13000);
  }

  function increaseMood(int) {
    const num = int;
    let numString = num.toString();
    const sendInt = {
      requester: username,
      value: numString,
    };
    //console.log(sendInt);
    $.post("/api/updatePet", sendInt).then(() => {
      numString += "0%";
      moodBar.width(numString);
      feedMe();
      //console.log(moodBar.width());
    });
  }

  function moodTimer(setTime) {
    setTimeout(() => {
      increaseMood(0);
    }, setTime);
  }

  const catEl = document.querySelector(".cat");
  const btnRoll = $(".btnMove");

  btnRoll.on("click", () => {
    console.log(catEl.classList);
    changePic();
    catEl.classList.toggle("rotator");
    console.log("You clicked");
  });

  function changePic() {
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
  }
  // setTimeout(originGet, 5000);
  // function originGet() {
  //   const sendName = {
  //     requester: username,
  //   };
  //   console.log(sendName);
  //   $.get("/api/updatePet", sendName).then((res) => {
  //     console, log(res);
  //   });
  // }
});
