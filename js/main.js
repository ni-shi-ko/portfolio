const img_src = ['../img/fashion.jpg', '../img/momizi.jpg',  '../img/tokyostation.jpg', '../img/train.jpg', '../img/nara.jpg'];
let num = -1

function slide_time() {
  if (num === 4) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("slide").src = img_src[num];
}

setInterval(slide_time, 2000);