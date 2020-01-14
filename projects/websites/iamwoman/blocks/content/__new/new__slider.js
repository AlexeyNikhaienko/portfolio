//Объявление переменых, которые содержат все слайды и кнопки управления
let newSlidesArray = document.querySelectorAll(".slider-produckt__dress");
//let newSlidesBlouse = document.querySelectorAll(".slider-produckt__blouse");
let newLeftArrow = document.querySelector(".new__mobile-slider__prev");
let newRightArrow = document.querySelector(".new__mobile-slider__next");

//Объявление переменной, служащей для хранения индекса текущего слайда
let newCurIndexSlide = 0;
//Чтобы показывался первый слайдер при запуске сайта + чтобы слайдер срабатывал при первом же клике на кнопку управления
newShowSlider();

//Установка "слушателей" на кнопки навигации
newLeftArrow.addEventListener("click", function() {
       if (newCurIndexSlide - 1 < 0) {
              newCurIndexSlide = newSlidesArray.length - 1;
       } else {
              newCurIndexSlide--;
       }
       newShowSlider();
});
newRightArrow.addEventListener("click", function() {
       if (newCurIndexSlide + 1 > newSlidesArray.length - 1) {
              newCurIndexSlide = 0;
       } else {
              newCurIndexSlide++;
       }
       newShowSlider();
});

//Функция, которая показывает слайды
function newShowSlider() {
       //Цикл для скрытия ВСЕХ слайдов массива
       for (let i = 0; i < newSlidesArray.length; i++) {
              newSlidesArray[i].style.display = "none";
       }
       newSlidesArray[newCurIndexSlide].style.display = "block";//Для отображения слайда с определённым индексом i
}