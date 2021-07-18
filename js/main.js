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

const img_src = ['./img/fashion.jpg', './img/momizi.jpg', './img/tokyostation.jpg', './img/train.jpg', './img/nara.jpg'];
let num = -1;

function slide_time() {
  if (num === 4) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("hobby-slide").src = img_src[num];
}

setInterval(slide_time, 2000);

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