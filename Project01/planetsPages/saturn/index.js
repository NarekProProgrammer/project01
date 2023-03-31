document.getElementById("left").innerText = "<";
document.getElementById("right").innerText = ">";
let i = 0;
let interval;
let t = 3000;
let images = [
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/5f19c5fcd28887ddbd6281b3/0x0.jpg?format=jpg&crop=1514,709,x0,y233,safe&width=1200",
  "https://starwalk.space/gallery/images/saturn-planet-guide/1920x1080.jpg",
  "https://dnd2oi6izkvoi.cloudfront.net/2022/10/18/image/jpeg/zzV5Jos6vgklolrCzKJcQUG8Aiqld9S8qaoc5GJs.jpg",
  "https://images.squarespace-cdn.com/content/v1/5fa5ec79661ee904d2973ca0/0b52f9b9-4612-400e-9505-ac72818fb2b8/saturn.png",
  "https://images.labroots.com/content_article_profile_image_8c3b79099476cd865eddb421da10d19f6821c4f7_3127.jpg",
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
