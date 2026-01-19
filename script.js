//slideshow kucing di hero
const images = ["assets/hero/calico png.png", "assets/hero/oyen png.png"];
let i = 0;

setInterval(() => {
  document.getElementById("kucing").src = images[i];
  i = (i + 1) % images.length;
}, 1000);

