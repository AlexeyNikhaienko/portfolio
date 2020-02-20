const popularBlockWidth = document.querySelector(".popular").offsetWidth;
const popSlider = document.querySelector(".popular__wrap");
const popSlidesArray = document.querySelectorAll(".product");

let shiftSlidesToLeft = 0;
let shiftSlidesToRight = 0;
let curIndexPopSlide = 0;
const slidesWidthArray = [0];
let popSliderWidth = 0;
const slidesMarginRight = 10;

for (let i = 0; i < popSlidesArray.length; i++) {
  slidesWidthArray.push(popSlidesArray[i].offsetWidth);

  if (i == popSlidesArray.length - 1) {
    popSlidesArray[i].style.marginRight = 0;
  } else {
    popSlidesArray[i].style.marginRight = slidesMarginRight + "px"; 
  }

  popSliderWidth += (popSlidesArray[i].offsetWidth + slidesMarginRight);
}

const substraction = popSliderWidth - popularBlockWidth;

function shiftSliderToLeft() {
  shiftSlidesToLeft += slidesWidthArray[curIndexPopSlide];
  curIndexPopSlide++;
  //let substraction = popSliderWidth - popularBlockWidth - shiftSlidesToLeft;
  if (shiftSlidesToLeft < substraction) {
    popSlider.style.left = 0;
  } else {
    popSlider.style.left = -shiftSlidesToLeft + "px";
  }
  console.log(shiftSlidesToLeft);
}

shiftSliderToLeft();

function autoSlider() {
  setInterval(shiftSliderToLeft, 1500);
}
//autoSlider();



























/*const widthSlidesArr = [0];
const slidesMarginRight = 10;
let curIndexPopSlide = 0;
let shift = 0;//смещение

let timer;
let time = 1500;

for (let i = 0; i < popSlidesArray.length; i++) {
  widthSlidesArr.push(popSlidesArray[i].offsetWidth);

  if (i == popSlidesArray.length - 1) {
    popSlidesArray[i].style.marginRight = 0;
  } else {
    popSlidesArray[i].style.marginRight = slidesMarginRight + "px";
  }
}

function shiftPopSlide() {
  shift += widthSlidesArr[curIndexPopSlide];
  curIndexPopSlide++;
  popSlider.style.left = -shift + "px";

  if (curIndexPopSlide == widthSlidesArr.length - 1) {
    clearInterval(timer);
  }
  console.log("popSlider.style.left[" + curIndexPopSlide + "] = " + (shift + widthSlidesArr[curIndexPopSlide]));
}
shiftPopSlide();

function autoSlide() {
  timer = setInterval(shiftPopSlide, time);
}
//autoSlide();*/