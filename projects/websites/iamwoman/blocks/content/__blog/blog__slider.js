const blogBlockArea = document.querySelector(".blog");//служит "полем" для свайпов
const sliderBlogArr = document.querySelectorAll(".blog__slider .element");//массив со слайдами
let blogBlockWidth;//ширина блока "blog"

let items;//колличество одновременно выводимых слайдов (согласно макета)
let marginRight;//правый внешний отступ слайда (marginRight)
let curIndexBlogSlide = 0;//для хранения текущего индекса слайда
let slidesWidthArr = [0];//массив с "ширина слайда + отступ"
let sliderWidth = 0;//ширина обёртки для слайдов
let widthSlide;//максимальная ширина отдельного слайда

//window.addEventListener("resize", detectedWidthScreen);
let resizeTimer;
window.addEventListener("resize", function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    return detectedWidthScreen();
  }, 250);
});

function detectedWidthScreen() {
  blogBlockWidth = blogBlockArea.offsetWidth;
  let curBlogWidth = blogBlockWidth;
  if (this.innerWidth <= 490) {
    items = 1;
    marginRight = 0;
    //e.preventDefault();
  } else if (this.innerWidth > 490) {
    items = 2;
    marginRight = curBlogWidth * 0.028;
    //e.preventDefault();
  }
  setElementsSizes(curBlogWidth, items, marginRight);
  console.log(curBlogWidth);
}
detectedWidthScreen();

function setElementsSizes(parentWidth, numberItems, margin) {
  //Массив с изображениями внутри слайдов
  const blogImage = document.querySelectorAll(".pic");
  widthSlide = (parentWidth - (margin * (numberItems - 1))) / numberItems;
  for (let i = 0; i < sliderBlogArr.length; i++) {
    for (let k = 0; k < blogImage.length; k++) {
      blogImage[k].style.maxWidth = `${ widthSlide }px`;
    }

    if (i === sliderBlogArr.length - 1) {
      margin = 0;
      sliderBlogArr[i].style.marginRight = `${ margin }px`;
    } else {
      sliderBlogArr[i].style.marginRight = `${ margin }px`;
    }

    sliderBlogArr[i].style.width = `${ widthSlide }px`;
    sliderBlogArr[i].style.marginRight = `${ margin }px`;
  }
  sliderWidth = ((sliderBlogArr[0].offsetWidth * sliderBlogArr.length) + (margin * (sliderBlogArr.length - 1)));
  pushSlidesWidthInArr();
}

function pushSlidesWidthInArr() {
  while (curIndexBlogSlide < sliderBlogArr.length) {
    if (curIndexBlogSlide === sliderBlogArr.length - 1) {
      marginRight = 0;
    }
    slidesWidthArr.push(sliderBlogArr[0].offsetWidth + marginRight);
    curIndexBlogSlide++;
  }
  console.log(slidesWidthArr);
}













































/*const blogBlockArea = document.querySelector(".blog");//служит "полем" для свайпов
const blogSlider = document.querySelector(".blog .slider");//обёртка для слайдов, которая сдвигается
const sliderBlogArr = document.querySelectorAll(".blog__slider .element");//массив со слайдами
let blogBlockWidth;//ширина блока "blog"

let curIndexBlogSlide = 0;//для хранения текущего индекса слайда
let slidesWidthArr = [0];//массив с "ширина слайда + отступ"
let sliderWidth = 0;//ширина обёртки для слайдов
let widthSlide;//максимальная ширина отдельного слайда

let shift = 0;//смещение для обёртки blogSlider
let substr = 0;//разница между ширинами blogBlockWidth и blogSlider (т.е. sliderWidth)

let items;//колличество одновременно выводимых слайдов (согласно макета)
let marginRight;//правый внешний отступ слайда (marginRight)

//Переменные для поля input
let indexArea = document.querySelector(".blog .index");//поле с номерами слайдов
let curNumberSlide = document.querySelector(".blog__toggle .cur");//номер текущего слайда
let totalNumberSlide = document.querySelector(".blog__toggle .total");//общее количество слайдов
const rangeArea = document.querySelector(".blog__toggle .range");//поле input

totalNumberSlide.textContent = `${sliderBlogArr.length}`;//показывает текущий номер слайда
rangeArea.max = sliderBlogArr.length;//значение max для "бегунка"

//Слушатель событий для глобального объекта window
//(следит за изменением ширины (ориентации) экрана устройства)
window.addEventListener("resize", detectedWidthScreen);

//Функция определяет количество одновременно показываемых слайдов
//в зависимости от текущей ширины экрана
function detectedWidthScreen() {
  blogBlockWidth = blogBlockArea.offsetWidth;
  if (window.innerWidth <= 490) {
    items = 1;
    marginRight = 0;//убрал отступы у всех слайдов при данной ширине экрана
  } else if (window.innerWidth > 490) {
    items = 2;
    marginRight = blogBlockWidth * 0.028;//0.028 (2.8%) согласно макета
  }
  //Вызов функции, которая устанавливает размеры слайдов
  setElementsSizes();
  //Вызов функции, которая отвечает за работу бегунка
  thumbSliderControl();
}
detectedWidthScreen();
//console.log(blogBlockWidth, items, marginRight);

//Функция устанавливает размеры элементов
function setElementsSizes() {
  //Массив с изображениями внутри слайдов
  const blogImage = document.querySelectorAll(".pic");
  widthSlide = (blogBlockWidth - (marginRight * (items - 1))) / items;

  //цикл проходит по массиву со слайдами и устанавливает для них размеры,
  //которые затем передаются в массив slidesWidthArr и в дальнейшем участвуют в расчётах
  for (let i = 0; i < sliderBlogArr.length; i++) {
    //if (i === sliderBlogArr.length - 1) {
      //marginRight = 0;//обнулил отступ у последнего слайда
    //}
    slidesWidthArr.push(widthSlide + marginRight);//добавление в массив размеров слайдов
    sliderWidth += (widthSlide + marginRight);//определение общей ширины обёртки

    sliderBlogArr[i].style.width = `${widthSlide}px`;//назначение ширины для всех слайдов
    sliderBlogArr[i].style.marginRight = `${marginRight}px`;//назначение отступа для всех слайдов

    //Цикл проходит по массиву с изображениями и устанавливает для них
    //максимальную ширину
    for (let k = 0; k < blogImage.length; k++) {
      blogImage[k].style.maxWidth = sliderBlogArr[i].style.width;
    }

    console.log(widthSlide, sliderWidth, slidesWidthArr);
  }
  //slidesWidthArr[slidesWidthArr.length - 1] = (slidesWidthArr.length - 1) - marginRight;
}
//console.log(slidesWidthArr, sliderWidth, widthSlide, marginRight);
//console.log(slidesWidthArr, sliderWidth);

//Функции для смещения слайдера влево/вправо
function shiftBlogSliderToLeft() {
  substr = sliderWidth - blogBlockWidth - (shift + slidesWidthArr[curIndexBlogSlide]);
  if (substr >=0) {
    shift += slidesWidthArr[curIndexBlogSlide];
    blogSlider.style.transform = `translateX(${ -shift }px)`;
  }
  curIndexBlogSlide++;
  setElementsSizes();
  console.log(shift);
}
function taimer() {
  setInterval(shiftBlogSliderToLeft, 2000);
}
//taimer();

//Управление бегунком
rangeArea.addEventListener("input", thumbSliderControl);

function thumbSliderControl() {
  //переменная для обозначения шага смещения текста над бегунком
  let rangeStep;
  //разбивка полосы на равные участки (для определения величины шага)
  let sizeRangeStep = rangeArea.offsetWidth / (sliderBlogArr.length - 1);
  //погрешность, которая возникает при одновременном смещении бегунка и текста над ним
  let errorShiftingindexArea = indexArea.offsetWidth / (sliderBlogArr.length - 1);

  if (rangeArea.value === rangeArea.min) {
    rangeStep = 0;
  } else {
    rangeStep = sizeRangeStep - errorShiftingindexArea;
  }

  //rangeArea.value - строковый тип данных, поэтому его необходимо привести к числовому типу явно
  //Number(rangeArea.value) - 1 чтобы было корректное значение при смещении (т.к. min для слайдера равно 1)
  indexArea.style.transform = `translateX(${(Number(rangeArea.value) - 1) * rangeStep}px)`;
  curNumberSlide.textContent = `0${rangeArea.value}/`;
}*/