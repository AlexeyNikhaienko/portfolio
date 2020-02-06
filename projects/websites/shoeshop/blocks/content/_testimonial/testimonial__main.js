//Объявление переменных
const testimonialSlide = document.querySelector(".testimonial");
const quotesArray = document.querySelectorAll(".testimonial .quote");
const prevBtnQuote = document.querySelector(".testimonial .arrow--left");
const nextBtnQuote = document.querySelector(".testimonial .arrow--right");
//Переменная, которая будет хранить значения текущего индекса слайда
let curIndexSlide = 0;

//Объявление переменных, котрые участвуют в работе автоматического показа слайдов
const intervalTime = 4000;//Через сколько времени (мс) показывается новый слайд
let quoteInterval;//Переменная-таймер

//Определение функции, которая добавляет/удаляет класс у элемента
function showQuoteSlide() {
  for (let i = 0; i < quotesArray.length; i++) {
    quotesArray[i].classList.remove("slider__quote");
  }
  quotesArray[curIndexSlide].classList.add("slider__quote");
}

//Вызов функции. Выведет сразу первый слайд при загрузке страницы
showQuoteSlide();

//Функции для показа предыдущего/следующего слайда
function prevQuoteSlide() {
  if (curIndexSlide == 0) {
    curIndexSlide = quotesArray.length - 1;
  } else {
    curIndexSlide--;
  }
  showQuoteSlide();
}

function nextQuoteSlide() {
  if (curIndexSlide == quotesArray.length - 1) {
    curIndexSlide = 0;
  } else {
    curIndexSlide++;
  }
  showQuoteSlide();
}

//Установка слушателей на кнопки навигации
//Работают только по клику мыши
prevBtnQuote.addEventListener("click", function() {
  prevQuoteSlide();
  //Сброс таймера для корректной работы автослайдера после клика
  clearInterval(quoteInterval);
  quoteInterval = setInterval(nextQuoteSlide, intervalTime);
});

nextBtnQuote.addEventListener("click", function() {
  nextQuoteSlide();
  clearInterval(quoteInterval);
  quoteInterval = setInterval(nextQuoteSlide, intervalTime);
});

//Автослайдер с показом слайдов ч/з заданныйы интевал
quoteInterval = setInterval(nextQuoteSlide, intervalTime);

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

  surface.addEventListener("touchstart", function(e) {
    //Чтобы стрелки навигации работали на мобильных телефонах, планшетах
    //Содержит ли стрелка навигации один из указанных классов
    if (e.target.classList.contains("arrow") || e.target.classList.contains("testimonial__arrow")) {
      //Проверка, какая именено стрелка нажимается - левая или правая
        if (e.target.classList.contains("arrow--left")) {
          prevQuoteSlide();
        } else if (e.target.classList.contains("arrow--right")) {
          nextQuoteSlide();
        }
    }

    //Переменная для хранения pageX, pageY
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    //Блокировка других событий
    e.preventDefault();
  });

  surface.addEventListener("touchmove", function(e) {
    //Блокировка других событий
    e.preventDefault();
  });

  surface.addEventListener("touchend", function(e) {
    //Переменная для хранения pageX, pageY
    let touchObj = e.changedTouches[0];
    distanceX = touchObj.pageX - startX;
    distanceY =  touchObj.pageY - startY;
    //Разность по времени между тем, как пользователь нажал и отпустил
    elapsedTime = new Date().getTime() - startTime;

    //Проверка условий для свайпа
    //Если наше время превышает время свайпа, то свайпа быть не должно
    if (elapsedTime <= allowedTime) {
      //Для распознавания события как свайпа
      //Math.abs чтобы избежать ошибки при свайпе влево и вправо
        if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
            if (distanceX > 0) {
              prevQuoteSlide();
            } else {
              nextQuoteSlide();
            }
        }
    }

    //Блокировка других событий
    e.preventDefault();
  });
}

touchSlider(testimonialSlide);