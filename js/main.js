AOS.init({
  offset: 100,
  duration: 600,
  easing: 'ease',
  delay: 500,
  once: false,
	mirror: false,
  anchorPlacement: 'top-center',
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animated',
});

const img_src = ['./img/fashion.jpg', './img/momizi.jpg', './img/tokyostation.jpg', './img/train.jpg', './img/nara.jpg', './img/azisai.png'];
let num = -1;

const img_src_sec = ['./img/my1.jpg', './img/my2.jpg', './img/my3.jpg', './img/my4.jpg', './img/my5.jpg', './img/my6.jpg'];

const img_src_thi = ['./img/cafe1.jpg', './img/cafe2.jpg', './img/cafe3.jpg', './img/cafe7.jpg', './img/cafe5.jpg', './img/cafe6.jpg' ];

function slide_time() {
  if (num === 5) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("hobby-slide").src = img_src[num];
  document.getElementById("fashion-slide").src = img_src_sec[num];
  document.getElementById("cafe-slide").src = img_src_thi[num];
}

setInterval(slide_time, 1200);

function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click',() => {
  hamburger();
});

const pagetopBtn = document.querySelector('#page-top');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});