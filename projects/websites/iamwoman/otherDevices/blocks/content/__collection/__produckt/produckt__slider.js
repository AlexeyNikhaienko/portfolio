//Объявление переменых
//Родительский блок для слайдера
const collectionArea = document.querySelector(".collection .produckt");
//Массив со слайдами
const sliderCollectionArr = document.querySelectorAll(".wrapper .prod");
//Элементы переключения слайдов
const collectionLeftArrow = document.querySelector(".wrapper .left");
const collectionRightArrow = document.querySelector(".wrapper .right");

//Переменная, которая будет хранить значение текущего индекса слайда
let curIndexSlide = 0;

//Автослайдер
//Через сколько времени (мс) показывается новый слайд
const collectionIntervalTime = 5000;
//let collectionInterval = setInterval(nextСollectionSlide, collectionIntervalTime);

//На кнопки устанавливаются слушатели событий, чтобы переключать слайды
collectionLeftArrow.addEventListener("click", prevСollectionSlide);

collectionRightArrow.addEventListener("click", nextСollectionSlide);

//Функция, которая показывает слайды,
//а также устанавливает их как фоновое изображение для всего блока
function showСollectionSlides() {
       for (let i = 0; i < sliderCollectionArr.length; i++) {
              sliderCollectionArr[i].classList.remove("prod--current");
       }
       sliderCollectionArr[curIndexSlide].classList.add("prod--current");

       if (curIndexSlide === 0) {
              collectionArea.style.backgroundImage = "url(./blocks/content/__collection/__produckt/img/prod-bcg1.jpg)";
       } else if (curIndexSlide === sliderCollectionArr.length - 1) {
              collectionArea.style.backgroundImage = "url(./blocks/content/__collection/__produckt/img/prod-bcg2.jpg)";
       } else {
              collectionArea.style.backgroundImage = `url(${sliderCollectionArr[curIndexSlide].firstElementChild.getAttribute("src")})`;
       }
       setCurrIndex();
}
showСollectionSlides();

//Функция устанавливает текстовые значения текущего индекса и общего количества слайдов
function setCurrIndex() {
       const curIndex = document.querySelector(".wrapper__toggle .cur");
       const totalNumber = document.querySelector(".wrapper__toggle .total");
       curIndex.textContent = `0${curIndexSlide + 1}/`;
       totalNumber.textContent = sliderCollectionArr.length;
}

//Функции для показа предыдущего/следующего слайда
function nextСollectionSlide() {
       if (curIndexSlide === sliderCollectionArr.length - 1) {
              curIndexSlide = 0;
       } else {
              curIndexSlide++;
       }
       showСollectionSlides();
       //сброс автослайдера, чтобы он корректно работал в случае пролистывания слайда пользователем
       clearInterval(collectionInterval);
       collectionInterval = setInterval(nextСollectionSlide, collectionIntervalTime);
}

function prevСollectionSlide() {
       if (curIndexSlide === 0) {
              curIndexSlide = sliderCollectionArr.length - 1;
       } else {
              curIndexSlide--;
       }
       showСollectionSlides();
       //сброс автослайдера, чтобы он корректно работал в случае пролистывания слайда пользователем
       clearInterval(collectionInterval);
       collectionInterval = setInterval(nextСollectionSlide, collectionIntervalTime);
}