//Mars-https://easydrawingguides.com/wp-content/uploads/2020/08/Mars-Step-10.png
//Saturn- https://www.pngmart.com/files/22/Saturn-PNG-Pic.png
//Venera-https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/Venus----Space-Universe-Solar-System-Planet-KS1.png
//Mercury- https://cdn.imgbin.com/7/24/12/imgbin-planet-mercury-earth-planet-XXisDzmWCM0BDfgUyXEQ6w3j2.jpg
//Jupiter-https://cdn-icons-png.flaticon.com/512/3590/3590284.png
//Neptun-https://images.vexels.com/media/users/3/152570/isolated/preview/425035eea8f0d97015ac66c6763d58e8-neptune-planet-icon.png
//Uran-https://static.vecteezy.com/system/resources/previews/018/803/567/original/planet-uranus-icon-png.png
//Earth-https://cdn-icons-png.flaticon.com/512/2072/2072130.png

saturn = () => {
  document.getElementById("planet").src =
    "https://cdn-icons-png.flaticon.com/512/2949/2949013.png";
};
venus = () => {
  document.getElementById("planet").src =
    "https://i.pinimg.com/originals/0f/a5/31/0fa531643954939ec86201276cada5ad.png";
};
mercury = () => {
  document.getElementById("planet").src =
    "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mercury.png";
};
earth = () => {
  document.getElementById("planet").src =
    "https://cdn-icons-png.flaticon.com/512/2072/2072130.png";
};
jupiter = () => {
  document.getElementById("planet").src =
    "https://cdn-icons-png.flaticon.com/512/3590/3590284.png";
};
neptun = () => {
  document.getElementById("planet").src =
    "https://images.vexels.com/media/users/3/152570/isolated/preview/425035eea8f0d97015ac66c6763d58e8-neptune-planet-icon.png";
};
uran = () => {
  document.getElementById("planet").src =
    "https://cdn-icons-png.flaticon.com/512/6989/6989438.png";
};
mars = () => {
  document.getElementById("planet").src =
    "https://easydrawingguides.com/wp-content/uploads/2020/08/Mars-Step-10.png";
};
let planet = {
  left: 0,
  right: 0,
};
let asteroids = [];
let intervalId,
  intervalId2,
  hitNum = 0,
  flewNum = 0,
  posXs = [-100, -50, 0, 50, 100, 150, 200, 250, 300];
function addAsteroid() {
  // if (asteroids.length >= 8) {
  //   clearInterval(intervalId2);
  //   return;
  // }
  let posX = Math.floor(Math.random() * (420 - 1 + 1) + 1);
  let id = `as${asteroids.length}`;
  asteroids.push({
    posX,
    posY: 0,
    id: id,
  });
  let space = document.getElementById("space");
  let asteroid = document.createElement("img");
  asteroid.style.transform = "rotate(180deg)";
  asteroid.style.position = "absolute";
  asteroid.style.left = `${posX}px`;
  asteroid.width = 70;
  asteroid.height = 70;
  asteroid.src =
    "https://thespacex.fans/wp-content/uploads/2020/07/Starship.png";
  asteroid.id = id;
  space.appendChild(asteroid);
}
function intervalFunc() {
  // if (asteroids.length === 0) {
  //   intervalId2 = setInterval(addAsteroid, 2000);
  // }
  asteroids.forEach((el, i) => {
    el.posY += 30;
    document.getElementById(el.id).style.top = `${el.posY}px`;
    if (el.posY >= 360) {
      el.canHit = true;
    }
    let hit =
      el.posX - 30 > planet.right - 50 && el.posX - 30 < planet.right + 50;

    if (el.canHit && hit) {
      hitNum++;
      document.getElementById(el.id).style.transform = "rotate(0deg)";
    } else if (el.posY >= 450) {
      flewNum++;
    }
    document.getElementById("flew").innerHTML = `Flew away: ${flewNum}`;
    document.getElementById("hit").innerHTML = `Caught: ${hitNum}`;
    if ((el.canHit && hit) || el.posY >= 450) {
      setTimeout(() => {
        document.getElementById(el.id).remove();
      }, 600);
      asteroids.splice(i, 1);
    }
  });
}
document.addEventListener(
  "keydown",
  (event) => {
    if (event.code === "Space") {
      setTimeout(() => {
        addAsteroid();
        clearInterval(intervalId);
        intervalId = setInterval(intervalFunc, 1000);
        // clearInterval(intervalId2);
        // intervalId2 = setInterval(addAsteroid, 2000);
      }, 0);
    }
  },
  false
);
document.addEventListener(
  "keydown",
  (event) => {
    if (event.code === "KeyA") {
      debugger;
    }
  },
  false
);
document.addEventListener(
  "keydown",
  (event) => {
    if (event.code === "ArrowLeft") {
      if (planet.right !== 0) {
        setTimeout(() => {
          planet.left += 10;
          planet.right -= 10;
          document.getElementById("planet").style.right = `${planet.left}px`;
          document.getElementById("planet").style.left = `${planet.right}px`;
        }, 0);
      }
    }
  },
  false
);
document.addEventListener(
  "keydown",
  (event) => {
    if (event.code === "ArrowRight") {
      if (planet.right !== 400) {
        setTimeout(() => {
          planet.left -= 10;
          planet.right += 10;
          document.getElementById("planet").style.right = `${planet.left}px`;
          document.getElementById("planet").style.left = `${planet.right}px`;
        }, 0);
      }
    }
  },
  false
);
