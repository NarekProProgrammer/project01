document.getElementById("left").innerText = "<";
document.getElementById("right").innerText = ">";
let i = 0;
let interval;
let t = 3000;
let images = [
  "https://cdn.britannica.com/84/4284-050-16C7E8C2/Photograph-Jupiter-range-Voyager-1-cloud-bands-February-1-1979.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/220px-Jupiter_New_Horizons.jpg",
  "https://cdn.britannica.com/66/155966-131-17B5B518/Jupiter.jpg",
  "https://i.natgeofe.com/k/7c7e4173-5ad3-4ef7-8252-354de21430db/jupiter_3x4.jpg",
  "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/jupiter.png",
  "https://th-thumbnailer.cdn-si-edu.com/CwGgQ7nv1nx40ckdWbHvmgHe2O8=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/f7/43/f743590c-75e7-4082-b30a-10950c39e99d/noirlab2116e.jpeg",
  "https://imageio.forbes.com/specials-images/imageserve/631c3d1a07578b6dad515c93/0x0.jpg?format=jpg&crop=2479,1394,x456,y2577,safe&width=1200",
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
