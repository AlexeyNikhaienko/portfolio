//Объявление переменных
const btnOpenMenu = document.querySelector(".nav > .burg");//Кнопка для открытия меню
const btnCloseMenu = document.querySelector(".menu-main .btn");//Кнопка для закрытия меню

/*Установка обработчиков событий на кнопки*/
btnOpenMenu.addEventListener("click", function() {
      /*Установка стилей*/
      document.querySelector(".menu-main").setAttribute("style", "transform: translateX(100%)");
});

btnCloseMenu.addEventListener("click", function() {
      /*Очистка стилей*/
      document.querySelector(".menu-main").removeAttribute("style", "transform");
});