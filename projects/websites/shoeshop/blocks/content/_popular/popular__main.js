const popularBlockWidth = document.querySelector(".popular").offsetWidth;
const popSlider = document.querySelector(".popular__wrap");
const popSlidesArray = document.querySelectorAll(".product");

//let shift = 0;//смещение влево
let shift = 0;
let curIndex = 0;//индекс текущего слайда
let slidesWidthArr = [0];//массив с "ширина слайда + отступ"
let sliderWidth = 0;//ширина обёртки для слайдов

let marginRight = popularBlockWidth * 0.025;//правый внешний отступ слайда (marginRight)(согласно макету равен 2,5%)
let items = 4;//колличество одновременно выводимых слайдов (согласно макета)
let widthSlide = (popularBlockWidth - (marginRight * (items - 1))) / items;//ширина отдельного слайда

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

//функция для смещения слайдов влево
function shiftSliderToLeft() {
  let substr = sliderWidth - popularBlockWidth - (shift + slidesWidthArr[curIndex]);
  if (substr >= 0) {
    shift += slidesWidthArr[curIndex];
    popSlider.style.left = -shift + "px";
  } else {
    popSlider.style.right = 0;
  }
  curIndex++;
}
shiftSliderToLeft();

//функция для запуска автослайдера
function autoSlider() {
  setInterval(shiftSliderToLeft, 1500);
}
autoSlider();