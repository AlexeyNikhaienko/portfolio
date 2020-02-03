//Объявление переменных
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