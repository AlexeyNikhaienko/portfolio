//Объявление переменных
const btnVisibleForm= document.querySelector(".header .user");//Кнопка для показа регистрационной формы
const btnHideForm = document.querySelector(".header .close-form");//Кнопка для скрытия регистрационной формы

/*Установка обработчиков событий на кнопки*/
btnVisibleForm.addEventListener("click", () => {
      /*Установка стилей*/
      document.querySelector(".modal").setAttribute("style", "transform: translateX(-100%)");
});

btnHideForm.addEventListener("click", () => {
      /*Очистка стилей*/
      document.querySelector(".modal").removeAttribute("style", "transform: translateX(-100%)");
});