document.getElementById("left").innerText = "<";
document.getElementById("right").innerText = ">";
let i = 0;
let interval;
let t = 3000;
let images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/800px-Mercury_in_true_color.jpg",
  "https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg",
  "https://solarsystem.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVVFIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--271ff8be3125a1e3b9284c6b326bca3bea2dc590/PIA16853.jpg",
  "https://cdn.britannica.com/05/110305-050-42CA686B/Mercury-Wide-Angle-Messenger-probe-hemisphere-image-Jan-14-2008.jpg",
  "https://4.bp.blogspot.com/-eJd9cphcd_s/WiujDonH1sI/AAAAAAAAC8o/CfPJz9hTyOgMle1jzFZM5d0l_r0h3ewngCLcBGAs/s1600/mercuryglobe.jpg",
  "https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mercury.png",
  "https://media.wired.com/photos/5a7e7aa86c14324bc836c6e0/master/w_2560%2Cc_limit/mercury_in_false_color.jpg",
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
