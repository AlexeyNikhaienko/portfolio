//Объявление переменных, содержащих массив с элементами
//const bannerSlide = document.querySelector(".slider-banner");
const bannerSlideArray = document.querySelectorAll(".banner .slide");
const navBanner = document.querySelectorAll(".header .circle");

//Переменная, которая будет хранить значения текущего индекса слайда
let curIndexBannerSlide = 0;

//Объявление переменных, котрые участвуют в работе автоматического показа слайдов
const bannerIntervalTime = 5000;//Через сколько времени (мс) показывается новый слайд
let bannerInterval;//Переменная-таймер

function showBannerSlides() {
  for (let i = 0; i < bannerSlideArray.length; i++) {
    bannerSlideArray[i].classList.remove("slide--visible");
    for (let j = 0; j < navBanner.length; j++) {
      navBanner[j].classList.remove("burg-menu");
    }
    navBanner[curIndexBannerSlide].classList.add("burg-menu");
    document.querySelector(".burg-menu").style.transition = "all 0.7s ease-in-out";
  }
  bannerSlideArray[curIndexBannerSlide].classList.add("slide--visible");

  //Если отображается последний слайд, то у блока с эмблемой изменяется фон
  //При отображении других слайдов фон согласно стилям CSS
  if (curIndexBannerSlide == bannerSlideArray.length - 1) {
    document.querySelector(".label--color__army").setAttribute("style", "background: #7FC6E6");
  } else {
    document.querySelector(".label--color__army").removeAttribute("style", "background-color");
  }
  nextBannerSlide();
}

showBannerSlides();

//Функции для показа предыдущего/следующего слайда
function prevBannerSlide() {
  if (curIndexBannerSlide == 0) {
    curIndexBannerSlide = bannerSlideArray.length - 1
  } else {
    curIndexBannerSlide--;
  }
}

function nextBannerSlide() {
  if (curIndexBannerSlide == bannerSlideArray.length - 1) {
    curIndexBannerSlide = 0;
  } else {
    curIndexBannerSlide++;
  }
}

//Автослайдер
bannerInterval = setInterval(showBannerSlides, bannerIntervalTime);