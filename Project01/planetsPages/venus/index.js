document.getElementById("left").innerText = "<";
document.getElementById("right").innerText = ">";
let i = 0;
let interval;
let t = 3000;
let images = [
  "https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P.jpg",
  "https://static01.nyt.com/images/2020/09/22/science/19SCI-OUTTHERE-VENUS1/19SCI-OUTTHERE-VENUS1-videoSixteenByNine3000.jpg?year=2020&h=1688&w=3000&s=d355373626bbbe65b35688e3f943b8fde1ed92a78475324389f6dbf3d91e910d&k=ZQJBKqZ0VN&tw=1",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Venus_-_December_23_2016.png/220px-Venus_-_December_23_2016.png",
  "https://cdn.britannica.com/44/21144-050-64C80234/topography-image-Venus-radar-data-clouds-spacecraft.jpg",
  "https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/b42ebce0-20db-491b-99ba-bd6ecf5a3ef8/Rendition/low-res/Content/Public",
  "https://images.newscientist.com/wp-content/uploads/2021/04/29112534/2amj054_web.jpg?crop=1:1,smart&width=1200&height=1200&upscale=true",
  "https://scx2.b-cdn.net/gfx/news/2022/venus-planet.jpg",
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
