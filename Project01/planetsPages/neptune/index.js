document.getElementById("left").innerText = "<";
document.getElementById("right").innerText = ">";
let i = 0;
let interval;
let t = 3000;
let images = [
  "https://cdn.mos.cms.futurecdn.net/PezBzd9Fehsq9XWgWMauVV.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
  "https://solarsystem.nasa.gov/system/stellar_items/image_files/90_feature_1600x900_4.jpg",
  "https://img-aws.ehowcdn.com/360x267p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/6df376ea235d4f828498f55ae9b29b34.jpg",
  "https://www.sciencefriday.com/wp-content/uploads/2022/04/Neptune.jpg",
  "https://www.sciencenews.org/wp-content/uploads/2022/09/092222_cc_neptune-rings_feat-1030x580.jpg",
  "https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/AW_187527_OUTERPLANETS_Neptune_hx4ioc.jpg",
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
