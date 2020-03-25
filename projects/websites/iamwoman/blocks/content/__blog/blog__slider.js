const blogBlockArea = document.querySelector(".blog");//служит "полем" для свайпов
const blogSlider = document.querySelector(".blog .slider");//обёртка для слайдов, которая сдвигается
const sliderBlogArr = document.querySelectorAll(".blog__slider .element");//массив со слайдами
let blogBlockWidth;//ширина блока "blog"

let curIndexBlogSlide = 0;//для хранения текущего индекса слайда
let shift = 0;//смещение для обёртки
let slidesWidthArr = [0];//массив с "ширина слайда + отступ"
let sliderWidth = 0;//ширина обёртки для слайдов
let widthSlide;//максимальная ширина отдельного слайда

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
  //граница перехода между количеством отображаемых слайдов
  let maxWidthScreen = [
    window.matchMedia("(max-width: 490px)"),
    window.matchMedia("(min-width: 491px)")
  ];

  //Функция сравнивает текущий размер экрана с условиями
  //и передаёт заданные в условии  значения
  function compareWidth(widthScreen) {
    blogBlockWidth = blogBlockArea.offsetWidth;
    if (maxWidthScreen[0].matches) {
      items = 1;
      marginRight = 0;//убрал отступы у всех слайдов при данной ширине экрана
    } else if (maxWidthScreen[1].matches) {
      items = 2;
      marginRight = blogBlockWidth * 0.028;//0.028 (2.8%) согласно макета
    }
  }

  //цикл устанавливает слушатель на каждое значение media
  for (let i = 0; i < maxWidthScreen.length; i++) {
    compareWidth(maxWidthScreen[i]);
    maxWidthScreen[i].addListener(compareWidth);
  }

  //Вызов функции, которая устанавливает размеры слайдов
  setElementsSizes();
}
detectedWidthScreen();
console.log(blogBlockWidth, items, marginRight);

//Функция устанавливает размеры элементов
function setElementsSizes() {
  //Массив с изображениями внутри слайдов
  const blogImage = document.querySelectorAll(".pic");
  widthSlide = (blogBlockWidth - (marginRight * (items - 1))) / items;

  //цикл проходит по массиву со слайдами и устанавливает для них размеры,
  //которые затем передаются в массив slidesWidthArr и в дальнейшем участвуют в расчётах
  for (let i = 0; i < sliderBlogArr.length; i++) {
    if (i === sliderBlogArr.length - 1) {
      marginRight = 0;//обнулил отступ у последнего слайда
    }
    slidesWidthArr.push(widthSlide + marginRight);//добавление в массив размеров слайдов
    sliderWidth += (widthSlide + marginRight);//определение общей ширины обёртки

    sliderBlogArr[i].style.width = `${widthSlide}px`;//назначение ширины для всех слайдов
    sliderBlogArr[i].style.marginRight = `${marginRight}px`;//назначение отступа для всех слайдов

    //Цикл проходит по массиву с изображениями и устанавливает для них
    //максимальную ширину
    for (let k = 0; k < blogImage.length; k++) {
      blogImage[k].style.maxWidth = sliderBlogArr[i].style.width;
    }
  }
}
//console.log(slidesWidthArr, sliderWidth, widthSlide, marginRight);
console.log(slidesWidthArr, sliderWidth);

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

  //rangeArea.value - строковый тип данных, поэтому его необходимо привести к числовому типу
  //Number(rangeArea.value) - 1 чтобы было корректное значение при смещении (т.к. min для слайдера равно 1)
  indexArea.style.transform = `translateX(${(Number(rangeArea.value) - 1) * rangeStep}px)`;
  curNumberSlide.textContent = `0${rangeArea.value}/`;
}