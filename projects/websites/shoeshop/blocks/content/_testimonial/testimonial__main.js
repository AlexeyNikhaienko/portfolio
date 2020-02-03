//Объявление переменных
const testimonialSlide = document.querySelector(".testimonial");
const quotesArray = document.querySelectorAll(".testimonial .quote");
const prevBtnQuote = document.querySelector(".testimonial .arrow--left");
const nextBtnQuote = document.querySelector(".testimonial .arrow--right");

//Объявление переменных, котрые участвуют в работе автоматического показа слайдов
const intervalTime = 4000;//Через сколько времени (мс) показывается новый слайд
const autoShowQuotes = true; //Автозапуск слайдера
let quoteInterval;//Переменная-таймер

//Функции для добавления/удалени класса у элемента
function nextQuoteSlide() {
  //Объявление переменной с искомым классом
  const currentQuote = document.querySelector(".slider__quote");
  currentQuote.classList.remove("slider__quote");

  //Если следующий элемент не последний, то ему добавляется класс
  //В противном случае класс добавляется первому элементу
  if (currentQuote.nextElementSibling) {
    currentQuote.nextElementSibling.classList.add("slider__quote");
  } else {
    quotesArray[0].classList.add("slider__quote");
  }

  //Удаление класса у элемента после проверки
  setTimeout(function() {
    currentQuote.classList.remove("slider__quote");
  });
}

function prevQuoteSlide() {
  const currentQuote = document.querySelector(".slider__quote");
  currentQuote.classList.remove("slider__quote");

  //Если предыдующий элемент не первый, то ему добавляется класс
  //В противном случае класс добавляется последнему элементу
  if (currentQuote.previousElementSibling) {
    currentQuote.previousElementSibling.classList.add("slider__quote");
  } else {
    quotesArray[quotesArray.length - 1].classList.add("slider__quote");
  }

  setTimeout(function() {
    currentQuote.classList.remove("slider__quote");
  });
}

//Установка слушателей на кнопки навигации
//Работают только по клику мыши
prevBtnQuote.addEventListener("click", function() {
  prevQuoteSlide();

  if (autoShowQuotes) {
    //Сброс таймера при клике на кнопку
    clearInterval(quoteInterval);
    quoteInterval = setInterval(nextQuoteSlide, intervalTime);
  }
});

nextBtnQuote.addEventListener("click", function() {
  nextQuoteSlide();

  if (autoShowQuotes) {
    clearInterval(quoteInterval);
    quoteInterval = setInterval(nextQuoteSlide, intervalTime);
  }
});

//Если autoShowQuotes = true, то выполняется автозапуск с показом слайдов ч/з заданныйы интевал
if (autoShowQuotes) {
  quoteInterval = setInterval(nextQuoteSlide, intervalTime);
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