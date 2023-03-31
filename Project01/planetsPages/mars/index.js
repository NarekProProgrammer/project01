document.getElementById("left").innerText = "<";
document.getElementById("right").innerText = ">";
let i = 0;
let interval;
let t = 3000;
let images = [
  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png",
  "https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg",
  "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png",
  "https://solarsystem.nasa.gov/system/stellar_items/image_files/6_mars.jpg",
  "https://www.worldatlas.com/upload/bb/c3/32/shutterstock-1041249343.jpg",
  "https://cdn.britannica.com/24/73524-050-3C2F3432/result-seasons-Mars-planet-inclination-plane-cap.jpg",
  "https://www.vaisala.com/sites/default/files/images/LIFT-Mars_3D-illustration_1600x900.jpg",
];
document.getElementById("img").src = images[0];
document.getElementById("inp0").checked = true;
function changePic(id, side = "notDefined") {
  if (side === "notDefined") {
    document.getElementById("img").src = images[id];
    i = id;
  } else {
    if (side === "right") {
      if (i === images.length - 1) {
        i = 0;
      } else {
        i++;
      }
    } else {
      if (i === 0) {
        i = images.length - 1;
      } else {
        i--;
      }
    }
    document.getElementById(`inp${i}`).checked = true;
    document.getElementById("img").src = images[i];
  }
}
function play() {
  interval = setInterval(() => {
    changePic("notDefined", "right");
  }, t);
}
function pause() {
  clearInterval(interval);
}
function changeSpeed() {
  t = document.getElementById("speed").value;
  clearInterval(interval);
  interval = setInterval(() => {
    changePic("notDefined", "right");
  }, t);
}
