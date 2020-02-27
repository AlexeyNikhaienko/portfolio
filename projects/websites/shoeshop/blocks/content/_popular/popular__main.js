const popularBlockWidth = document.querySelector(".popular").offsetWidth;
const popSlider = document.querySelector(".popular__wrap");
const popSlidesArray = document.querySelectorAll(".product");

let shiftToLeft = 0;//смещение влево
let curIndex = 0;//индекс текущего слайда
let slidesWidthArr = [0];//массив с "ширина слайда + отступ"
let sliderWidth = 0;//ширина обёртки для слайдов

let marginRight = popularBlockWidth * 0.025;//правый внешний отступ слайда (marginRight)(согласно макету равен 2,5%)
let items = 4;//колличество одновременно выводимых слайдов (согласно макета)
let widthSlide = (popularBlockWidth - (popularBlockWidth * 0.025 * (items - 1))) / items;//ширина отдельного слайда
//console.log(widthSlide);

//console.log(popularBlockWidth);
//Цикл для установки всех необходимых метрик для слайдера
for (let i = 0; i < popSlidesArray.length; i++) {
  //назначение для слайдов внених отступов
  if (i == popSlidesArray.length - 1) {
    marginRight = 0;
    popSlidesArray[i].style.marginRight = marginRight;
  } else {
    popSlidesArray[i].style.marginRight = marginRight + "px";
  }
  //назначение одинаковой ширины для каждого слайда в массиве 
  popSlidesArray[i].style.width = widthSlide + "px";

  slidesWidthArr.push(widthSlide + marginRight);//добавление в массив размеров сладов
  sliderWidth += widthSlide + marginRight;//определение итоговой ширины обёртки для слайдов
}

//назначение ширины обёртки для слайдов
popSlider.style.width = sliderWidth + "px";
/*console.log(popSlider.style.width);
console.log("sliderWidth = " + sliderWidth);
console.log(slidesWidthArr);*/

//функция для смещения слайдов влево
function shiftSliderToLeft() {
  let substr = sliderWidth - popularBlockWidth - (shiftToLeft + slidesWidthArr[curIndex]);
  if (substr >= 0) {
    shiftToLeft += slidesWidthArr[curIndex];
    popSlider.style.left = -shiftToLeft + "px";
  } else {
    popSlider.style.left = -(sliderWidth - popularBlockWidth) + "px";
    shiftToLeft = 0;
    curIndex = -1;
  }
  curIndex++;
  console.log(curIndex, substr, shiftToLeft, popSlider.style.left);
}
shiftSliderToLeft();

//функция для запуска автослайдера
function autoSlider() {
  setInterval(shiftSliderToLeft, 1500);
}
//autoSlider();











/*let shiftToLeft = 0;
let curIndex = 0;
let slidesWidthArr = [0];
let sliderWidth = 0;
let marginRight = popularBlockWidth * 0.025;
//let extraSize = 0;

console.log(popularBlockWidth);

for (let i = 0; i < popSlidesArray.length; i++) {
  if (i == popSlidesArray.length - 1) {
    marginRight = 0;
    popSlidesArray[i].style.marginRight = marginRight;
  } else {
    popSlidesArray[i].style.marginRight = marginRight + "px";
  }

  slidesWidthArr.push(popSlidesArray[i].offsetWidth + marginRight);
  sliderWidth += popSlidesArray[i].offsetWidth + marginRight;
}
console.log("sliderWidth = " + sliderWidth);
console.log(slidesWidthArr);

function shiftSliderToLeft() {
  let substr = sliderWidth - popularBlockWidth - (shiftToLeft + slidesWidthArr[curIndex]);
  //let substr = sliderWidth - popularBlockWidth - shiftToLeft;
  //extraSize += 0.1656;
  if (substr >= 0) {
    shiftToLeft += slidesWidthArr[curIndex];
    //extraSize += 0.1656;
    //popSlider.style.left = -shiftToLeft - (slidesWidthArr[curIndex] * extraSize) + "px";
    //popSlider.style.left = -(shiftToLeft + marginRight) + "px";
    popSlider.style.left = -shiftToLeft + "px";
    //curIndex++;
  } else {
    popSlider.style.left = -(sliderWidth - popularBlockWidth) + "px";
    shiftToLeft = 0;
    curIndex = -1;
    /*extraSize += 0.1657;
    popSlider.style.left = -(sliderWidth - popularBlockWidth + (slidesWidthArr[curIndex] * extraSize)) + "px";*/
    //popSlider.style.left = -(sliderWidth - popularBlockWidth + (popularBlockWidth * marginRight * popSlidesArray.length)) + "px";
   // curIndex--;
   //console.log(marginRight);
   //clearInterval(autoSlider);
  /*}
  curIndex++;
  console.log(curIndex, substr, shiftToLeft, popSlider.style.left);
}
shiftSliderToLeft();

function autoSlider() {
  setInterval(shiftSliderToLeft, 1500);
}
//autoSlider();*/