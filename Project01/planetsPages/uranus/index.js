document.getElementById("left").innerText = "<";
document.getElementById("right").innerText = ">";
let i = 0;
let interval;
let t = 3000;
let images = [
  "https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg",
  "https://media.cnn.com/api/v1/images/stellar/prod/230328140006-02-hubble-telescope-gas-giants-weather-uranus-split.jpg?c=16x9&q=h_720,w_1280,c_fill",
  "https://ychef.files.bbci.co.uk/976x549/p0257vk5.jpg",
  "https://telescope.live/sites/default/files/styles/front_page_obs_w696_h452/public/2021-04/https---cdn.cnn_.com-cnnnext-dam-assets-210331213108-conclu-uranus.jpg?itok=Z_DzNcvA",
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71FrlSluuML._AC_UF1000,1000_QL80_.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/615b0eb9b8c542963579c049/Planet-Uranus-/960x0.jpg?format=jpg&width=960",
  "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTg1NzQ2OTc2NjI4MTU2MDMy/uranus-the-most-bizarre-planet-in-the-solar-system.png",
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
