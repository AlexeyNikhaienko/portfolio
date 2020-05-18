//Объявление переменных
//Кнопки для открытия/ закрытия меню
const btnOpenMenu = document.querySelector(".nav > .burg");
const btnCloseMenu = document.querySelector(".menu-main .btn");

//Установка обработчиков событий на кнопки
btnOpenMenu.addEventListener("click", () => {
      /*Установка стилей*/
      document.querySelector(".menu-main").setAttribute("style", "transform: translateX(100%)");
      document.querySelector(".collection__extra-info").setAttribute("style", "z-index: 11; background-color: #DECEC5; height: 100vh");
});

btnCloseMenu.addEventListener("click", () => {
      /*Очистка стилей*/
      document.querySelector(".menu-main").removeAttribute("style", "transform");
      document.querySelector(".collection__extra-info").removeAttribute("style", "z-index; background-color; height");
});
