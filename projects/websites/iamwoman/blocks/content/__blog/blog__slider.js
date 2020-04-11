//Объявление переменных, выбранных из HTML
//const blogBlockArea = document.querySelector(".blog");
const sliderWrap = document.querySelector(".blog .slider");//блок-обёртка над слайдером
const sliderBlogArr = document.querySelectorAll(".blog__slider .element");//массив со слайдами

let blogBlockWidth;//ширина блока "blog"
let sliderWidth = 0;//ширина обёртки для слайдов
let items;//колличество одновременно выводимых слайдов (согласно макета)

let marginRight;//правый внешний отступ слайда (marginRight)
let widthSlide;//максимальная ширина отдельного слайда
//Объявление массива с элементами вида "ширина слайда + отступ". Изначально не содержит элементов,
//т.к. при изменении размеров экрана (в т.ч. ориентации) JS будет добавлять ВСЕ ширины слайдов
//в ОДИН (общий) массив
let slidesWidthArr;

let curIndexBlogSlide = 0;//для хранения текущего индекса слайда
let shift = 0;//величина смещения блока-обёртки sliderWrap
let substrWidth;//разница между ширинами блока-обёртки "sliderWrap" и родительским блоком "blogBlockArea"

let blogLeft = document.querySelector(".blogLeft");
let blogRight = document.querySelector(".blogRight");
blogLeft.addEventListener("click", () => {
  shiftSliderToLeft();
});
blogRight.addEventListener("click", () => {
  //console.log("click right btn");
  shiftSliderToRight();
});


//Чтобы исключить одновременную загрузку нескольких событий (ширин экрана, которые приведены 
//в качестве пороговых значений в detectedWidthScreen())
window.addEventListener("load", () =>{
  //Объявление переменной для таймера, по истечении времени которого выполняется перерисовка экрана
  let resizeTimer;
  //Для отслеживания изменения размеров экрана
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);//сброс таймера
    //Переопределение таймера
    resizeTimer = setTimeout(function() {
      detectedWidthScreen();
    }, 250);
  });
});

function detectedWidthScreen() {
  //blogBlockWidth = blogBlockArea.offsetWidth;
  blogBlockWidth = document.querySelector(".blog").offsetWidth;
  if (window.innerWidth <= 490) {
    items = 1;
    marginRight = 0;
  } else if (window.innerWidth > 490) {
    items = 2;
    marginRight = blogBlockWidth * 0.028;
  }
  setElementsSizes(blogBlockWidth, items, marginRight);
  createArray();
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
    //Для каждого слайда в массиве устанавливаются одинаковые ширина и правый отступ
    sliderBlogArr[i].style.width = `${ widthSlide }px`;
    sliderBlogArr[i].style.marginRight = `${ margin }px`
  }
  sliderWidth = ((sliderBlogArr[0].offsetWidth * sliderBlogArr.length) + (margin * (sliderBlogArr.length - 1)));
  //Ширина блока-обёртки "sliderBlogArr"
  sliderWrap.style.minWidth = `${ sliderWidth }px`;
  console.log(sliderWidth, blogBlockWidth);
}

//Функция по созданию массива с элементами типа "ширина слайда + отступ"
function createArray() {
  slidesWidthArr = [0];
  for (let j = 0; j < sliderBlogArr.length; j++) {
    if (j === sliderBlogArr.length - 1) {
      marginRight = 0;
    }
    slidesWidthArr.push(sliderBlogArr[j].offsetWidth + marginRight);
  }
  console.log(slidesWidthArr);
}

//Функция для смещения блока-обёртки "sliderWrap" влево
function shiftSliderToLeft() {
  let substr = sliderWidth - blogBlockWidth;
  //shift + slidesWidthArr[curIndexBlogSlide] - для корректного вычисления значения "substrWidth",
  //т.к. при работе слайдера происходит пролистывание последнего элемента в т.ч.
  substrWidth = substr - (shift + slidesWidthArr[curIndexBlogSlide]);

  //Проверка, можно ли выполнять сдвижку влево
  if (substrWidth > 0 && substrWidth <= substr) {
    shift += slidesWidthArr[curIndexBlogSlide];
  } else if (substrWidth <= 0) {
    shift = sliderWidth - blogBlockWidth;
  }
  curIndexBlogSlide++;
  sliderWrap.style.transform = `translateX(-${ shift }px)`;
  console.log(`LEFT: ${substrWidth}, ${shift}, ${curIndexBlogSlide}`);
}
shiftSliderToLeft();

function shiftSliderToRight() {
  //Проверка, можно ли выполнять сдвижку вправо
  /*if (substrWidth !== substr) {
    shift -= slidesWidthArr[curIndexBlogSlide];
    curIndexBlogSlide--;
  } else {
    shift = 0;
  }
  sliderWrap.style.transform = `translateX(${ shift }px)`;*/
  shift -= slidesWidthArr[curIndexBlogSlide];
  curIndexBlogSlide--;
  sliderWrap.style.transform = `translateX(-${ shift }px)`;
  console.log(`toRight(${ substrWidth }, ${shift}, ${curIndexBlogSlide})`);
}
//shiftSliderToRight();

//Слайдер для touch-событий
const touchSlider = function(element) {
  let surface = element;//переменная, в которой хранится область взаимодействий с пользователем
  let startX = 0;//стартовая позиция по оси х для курсора
  let startY = 0;
  let distanceX = 0;//пройденная дистанция по оси х
  let distanceY = 0;
  let threshold = 100;//min дистанция, при котором сработает свайп
  let restraint = 100;//ограничение действия по оси У, max расстояние
  let allowedTime = 300;//min время, которое должен длиться свайп, чтобы он сработал

  let startTime = 0;
  let elapsedTime = 0;

  surface.addEventListener("touchstart", (e) => {
    //Переменная для хранения pageX, pageY
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    //Блокировка других событий
    e.preventDefault();
  });

  surface.addEventListener("touchmove", (e) => {
    //Блокировка других событий
    e.preventDefault();
  });

  surface.addEventListener("touchend", (e) => {
    //Переменная для хранения pageX, pageY
    let touchObj = e.changedTouches[0];
    distanceX = touchObj.pageX - startX;
    distanceY = touchObj.pageY - startY;
    //Разность по времени между тем, как пользователь нажал и отпустил
    elapsedTime = new Date().getTime() - startTime;

    //Проверка условий для свайпа
    //Если наше время превышает время свайпа, то свайпа быть не должно
    if (elapsedTime <= allowedTime) {
      //Для распознавания события как свайпа
      //Math.abs чтобы избежать ошибки при свайпе влево и вправо
        if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
            if (distanceX > 0) {
              if (curIndexBlogSlide > 1 && curIndexBlogSlide < slidesWidthArr.length) {
                shiftSliderToRight();
              }
            } else {
              if (curIndexBlogSlide > 0 && curIndexBlogSlide < slidesWidthArr.length - 1) {
                shiftSliderToLeft();
              }
            }
        }
    }
    //Блокировка других событий
    e.preventDefault();
  });
}
touchSlider(sliderWrap);





































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