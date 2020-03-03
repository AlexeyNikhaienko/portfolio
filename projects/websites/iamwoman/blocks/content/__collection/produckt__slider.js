//Объявление переменых, которые содержат все слайды и кнопки управления
let prodSlidesArray = document.querySelectorAll(".slider__item");
let prodLeftArrow = document.querySelector(".slider__prev");
let prodRightArrow = document.querySelector(".slider__next");

//Объявление переменной, служащей для хранения индекса текущего слайда
let curIndexSlide = 0;

//Чтобы показывался первый слайдер при запуске сайта + чтобы слайдер срабатывал при первом же клике на кнопку управления
prodShowSlider();
//setTimeout(prodShowSlider, 3000);
//Переменная для хранения номера текущего слайдера, т.е. имеет вид 01, 02 и т.д.
let counterSlide = 1;
//Чтобы корректно показывался номер первого слайдера при запуске сайта
showNumberSlide();

//Установка "слушателей" на кнопки навигации
prodLeftArrow.addEventListener("click", function() {
       if (curIndexSlide - 1 < 0) {
              curIndexSlide = prodSlidesArray.length - 1;
              counterSlide = prodSlidesArray.length;
       } else {
              curIndexSlide--;
              counterSlide = curIndexSlide + 1;
       }
       prodShowSlider();
       showNumberSlide();
});
prodRightArrow.addEventListener("click", function() {
       if (curIndexSlide + 1 > prodSlidesArray.length - 1) {
              curIndexSlide = 0;
              counterSlide = 1;
       } else {
              curIndexSlide++;
              counterSlide = curIndexSlide + 1;
       }
       prodShowSlider();
       showNumberSlide();
});

//Функция, которая показывает слайды
function prodShowSlider() {
       //Цикл для скрытия ВСЕХ слайдов массива
       for (let i = 0; i < prodSlidesArray.length; i++) {
              prodSlidesArray[i].style.display = "none";
       }
       prodSlidesArray[curIndexSlide].style.display = "block";//Для отображения слайда с определённым индексом i
}

//Функция для показа номера текущего слайда
function showNumberSlide() {
       let numberSlide = document.querySelector(".slider__current");
       numberSlide.textContent = "0" + counterSlide;
}