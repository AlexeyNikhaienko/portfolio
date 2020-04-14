//Объявление переменных, выбранных из HTML
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

//Переменные для поля input
const rangeArea = document.querySelector(".blog__toggle .range");//поле input
let indexArea = document.querySelector(".blog .index");//поле с номерами слайдов
let curNumberSlide = document.querySelector(".blog__toggle .cur");//номер текущего слайда

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

//Функция определяет количество одновременно показываемых слайдов,
//размер отступа в зависимости от текущей ширины экрана
function detectedWidthScreen() {
  blogBlockWidth = document.querySelector(".blog").offsetWidth;
  if (window.innerWidth <= 490) {
    items = 1;
    marginRight = 0;//убрал отступы у всех слайдов при данной ширине экрана
  } else if (window.innerWidth > 490) {
    items = 2;
    marginRight = blogBlockWidth * 0.028;//0.028 (2.8%) согласно макета
  }
  //Вызов функции, которая устанавливает размеры элементов
  setElementsSizes(blogBlockWidth, items, marginRight);
  //Вызов функции, которая заполняет массив
  createArray();
  //Вызов функции, которая отвечает за работу бегунка
  thumbSliderControl();
}
detectedWidthScreen();

//Функция устанавливает размеры элементов
function setElementsSizes(parentWidth, numberItems, margin) {
  //Массив с изображениями внутри слайдов
  const blogImage = document.querySelectorAll(".pic");
  widthSlide = (parentWidth - (margin * (numberItems - 1))) / numberItems;

  //цикл проходит по массиву со слайдами и устанавливает для них размеры,
  //которые затем передаются в массив slidesWidthArr и в дальнейшем участвуют в расчётах
  for (let i = 0; i < sliderBlogArr.length; i++) {
    //Цикл проходит по массиву с изображениями и устанавливает для них
    //максимальную ширину
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
}

//Функция по созданию массива с элементами типа "ширина слайда + отступ"
function createArray() {
  slidesWidthArr = [0];
  for (let j = 0; j < sliderBlogArr.length; j++) {
    if (j === sliderBlogArr.length - 1 && window.innerWidth > 490) {
      marginRight = 0;//обнулил отступ у последнего слайда
    }
    slidesWidthArr.push(sliderBlogArr[j].offsetWidth + marginRight);
  }
  return slidesWidthArr;
}

//Функция для смещения блока-обёртки "sliderWrap" влево
function shiftSliderToLeft() {
  //shift + slidesWidthArr[curIndexBlogSlide] - для корректного вычисления значения "substrWidth",
  //т.к. при работе слайдера происходит пролистывание последнего элемента в т.ч.
  substrWidth = sliderWidth - blogBlockWidth - (shift + slidesWidthArr[curIndexBlogSlide]);

  //Проверка, можно ли выполнять сдвижку влево
  if (substrWidth > 0 && substrWidth <= (sliderWidth - blogBlockWidth)) {
    shift += slidesWidthArr[curIndexBlogSlide];
  } else if (substrWidth <= 0) {
    shift = sliderWidth - blogBlockWidth;
  }
  curIndexBlogSlide++;
  sliderWrap.style.transform = `translateX(-${ shift }px)`;
  //console.log(`LEFT: ${substrWidth}, ${shift}, ${curIndexBlogSlide}`);
}
shiftSliderToLeft();

function shiftSliderToRight() {
  substrWidth = sliderWidth - blogBlockWidth - shift + slidesWidthArr[curIndexBlogSlide];

  if (substrWidth >= 0 && substrWidth < (sliderWidth - blogBlockWidth)) {
    shift -= slidesWidthArr[curIndexBlogSlide];
  } else if (substrWidth >= (sliderWidth - blogBlockWidth)) {
    shift = 0;
  }
  curIndexBlogSlide--;
  sliderWrap.style.transform = `translateX(-${ shift }px)`;
  //console.log(`toRight(${ substrWidth }, ${shift}, ${curIndexBlogSlide})`);
}

//Управление бегунком
rangeArea.addEventListener("input", thumbSliderControl);

function thumbSliderControl() {
  //общее количество слайдов
  document.querySelector(".blog__toggle .total").textContent = `${sliderBlogArr.length}`;
  rangeArea.max = sliderBlogArr.length;//значение max для "бегунка"
  //переменная для обозначения шага смещения текста над бегунком
  let rangeStep;
  //разбивка полосы на равные участки (для определения величины шага)
  //let sizeRangeStep = rangeArea.offsetWidth / (sliderBlogArr.length - 1);
  let sizeRangeStep = rangeArea.offsetWidth / (sliderBlogArr.length - rangeArea.min);
  //погрешность, которая возникает при одновременном смещении бегунка и текста над ним
  //let errorShiftingIndexArea = indexArea.offsetWidth / (sliderBlogArr.length - 1);
  let errorShiftingIndexArea = indexArea.offsetWidth / (sliderBlogArr.length - rangeArea.min);

  //Условие для смещения текста над бегунком
  if (rangeArea.value === rangeArea.min) {
    rangeStep = 0;
  } else {
    rangeStep = sizeRangeStep - errorShiftingIndexArea;
  }

  //rangeArea.value - rangeArea.min -- чтобы было корректное значение при смещении (т.к. min для слайдера равно 1)
  indexArea.style.transform = `translateX(${(rangeArea.value - rangeArea.min) * rangeStep}px)`;
  curNumberSlide.textContent = `0${rangeArea.value}/`;
}

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
              //Одинаковое условие для всех ширин экрана
              if (curIndexBlogSlide > 1 && curIndexBlogSlide < slidesWidthArr.length) {
                shiftSliderToRight();
              }
            } else {
              //Проверка текущей ширины экрана
              if (window.innerWidth <= 490) {
                //curIndexBlogSlide < slidesWidthArr.length - 1, т.к. на экране отображается только 1 слайд
                if (curIndexBlogSlide > 0 && curIndexBlogSlide < slidesWidthArr.length - 1) {
                  shiftSliderToLeft();
                }
              } else if (window.innerWidth > 490) {
                //curIndexBlogSlide < slidesWidthArr.length - 2, т.к. на экране отображается 2 слайда
                if (curIndexBlogSlide > 0 && curIndexBlogSlide < slidesWidthArr.length - 2) {
                  shiftSliderToLeft();
                }
              }
            }
        }
    }
    //Блокировка других событий
    e.preventDefault();
  });
}
touchSlider(sliderWrap);