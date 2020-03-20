const blogBlockArea = document.querySelector(".blog");//служит "полем" для свайпов
const blogBlockWidth = blogBlockArea.offsetWidth;//ширина блока "blog"
const blogSlider = document.querySelector(".blog .slider");//обёртка для слайдов, которая сдвигается
const sliderBlogArr = document.querySelectorAll(".blog__slider .element");//массив со слайдами

const blogImage = document.querySelectorAll(".pic");

let curIndexBlogSlide = 0;//для хранения текущего индекса слайда
let shift = 0;//смещение для обёртки
let slidesWidthArr = [0];//массив с "ширина слайда + отступ"
let sliderWidth = 0;//ширина обёртки для слайдов

//let marginRight = blogBlockWidth * 0.028;//правый внешний отступ слайда (marginRight)(согласно макету равен 2,8%)
//let items = 1;//колличество одновременно выводимых слайдов (согласно макета)
let items;//колличество одновременно выводимых слайдов (согласно макета)
let marginRight;//правый внешний отступ слайда (marginRight)
//let widthSlide = (blogBlockWidth - (marginRight * (items - 1))) / items;//максимальная ширина отдельного слайда

//Переменные для поля input
let indexArea = document.querySelector(".blog .index");//поле с номерами слайдов
let curNumberSlide = document.querySelector(".blog__toggle .cur");//номер текущего слайда
let totalNumberSlide = document.querySelector(".blog__toggle .total");//общее количество слайдов
const rangeArea = document.querySelector(".blog__toggle .range");//поле input

totalNumberSlide.textContent = `${sliderBlogArr.length}`;
rangeArea.max = sliderBlogArr.length;//значение max для "бегунка"

//Функция определяет количество одновременно показываемых слайдов
//в зависимости от текущей ширины экрана
detectedWidthScreen();
function detectedWidthScreen() {
  //граница перехода между количеством отображаемых слайдов
  let maxWidthScreen = window.matchMedia("(max-width: 490px)");
  function compareWidth(e) {
    if (e.matches) {
      items = 1;
      marginRight = 0;//убрал отступы у всех слайдов при данной ширине экрана
    } else {
      items = 2;
      marginRight = blogBlockWidth * 0.028;//0.028 (2.8%) согласно макета
    }
  }
  compareWidth(maxWidthScreen);
  maxWidthScreen.addListener(compareWidth);
}

//Управление бегунком
rangeArea.addEventListener("input", thumbSliderControl);

function thumbSliderControl() {
  //переменная для обозначения шага смещения текста над бегунком
  let rangeStep;
  //размер (px) шага смещения для текста над бегунком
  let sizeRangeStep = rangeArea.offsetWidth / (sliderBlogArr.length - 1);
  //погрешность, которая возникает при одновременном смещении бегунка и текста над ним
  let errorShiftingindexArea = indexArea.offsetWidth / (sliderBlogArr.length - 1);

  if (rangeArea.value == rangeArea.min) {
    rangeStep = 0;
  } else {
    rangeStep = sizeRangeStep - errorShiftingindexArea;
  }

  //rangeArea.value - строковый тип данных, поэтому его необходимо привести к числовому типу
  //Number(rangeArea.value) - 1 чтобы было корректное значение при смещении (т.к. min для слайдера равно 1)
  indexArea.style.transform = `translateX(${(Number(rangeArea.value) - 1) * rangeStep}px)`
  curNumberSlide.textContent = `0${rangeArea.value}/`; 
}

//Смещение ленты с изображениями
let widthSlide = (blogBlockWidth - (marginRight * (items - 1))) / items;//максимальная ширина отдельного слайда
console.log(blogBlockWidth, marginRight, widthSlide);

for (let i = 0; i < sliderBlogArr.length; i++) {
  if (i === sliderBlogArr.length - 1) {
    marginRight = 0;//убрал отступ у последнего слайда
  }
  sliderBlogArr[i].style.width = `${widthSlide}px`;//назначение ширины для всех слайдов
  sliderBlogArr[i].style.marginRight = `${marginRight}px`;//назначение отступа для всех слайдов

  slidesWidthArr.push(sliderBlogArr[i].offsetWidth + marginRight);//добавление в массив размеров слайдов
  sliderWidth += (sliderBlogArr[i].offsetWidth + marginRight);
}
blogSlider.style.width = `${sliderWidth}px`;

console.log(slidesWidthArr, sliderWidth);

for (let k = 0; k< blogImage.length; k++) {
  blogImage[k].style.maxWidth = `${widthSlide}px`;
}


































/*rangeArea.addEventListener("input", function() {
  //переменная для обозначения шага смещения текста над бегунком
  let rangeStep;
  //размер (px) шага смещения для текста над бегунком
  let sizeRangeStep = rangeArea.offsetWidth / (sliderBlogArr.length - 1);
  //погрешность, которая возникает при одновременном смещении бегунка и текста над ним
  let errorShiftingindexArea = indexArea.offsetWidth / (sliderBlogArr.length - 1);

  if (this.value == this.min) {
    rangeStep = 0;
  } else {
    rangeStep = sizeRangeStep - errorShiftingindexArea;
  }

  //this.value - строковый тип данных, поэтому его необходимо привести к числовому типу
  //Number(this.value) - 1 чтобы было корректное значение при смещении (т.к. min для слайдера равно 1)
  indexArea.style.transform = `translateX(${(Number(this.value) - 1) * rangeStep}px)`
  curNumberSlide.textContent = `0${this.value}/`;
});*/


/*detectedWidthScreen();
function detectedWidthScreen() {
  //граница перехода между количеством отображаемых слайдов
  let maxWidthScreen = window.matchMedia("(max-width: 489px)");
  function compareWidth(e) {
    if (e.matches) {
      items = 1;
    } else {
      items = 2;
    }
  }
  compareWidth(maxWidthScreen);
  maxWidthScreen.addListener(compareWidth);
}*/