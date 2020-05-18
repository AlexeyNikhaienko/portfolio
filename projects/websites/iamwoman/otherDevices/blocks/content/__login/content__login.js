//Объявление переменных
//Кнопки для показа/скрытия регистрационной формы
const btnVisibleForm= document.querySelectorAll(".header .user");
const btnHideForm = document.querySelector(".modal .close-form");
//Кнопка для показа корзины покупок. По умолчанию переводит на форму регистрации
const btnShop = document.querySelector(".header .shop");

//Установка обработчиков событий на кнопки
for (let i = 0; i < btnVisibleForm.length; i++) {
    btnVisibleForm[i].addEventListener("click", () => {
        //Установка стилей
        document.querySelector(".modal").setAttribute("style", "display: block; z-index: 15");
    });
}

btnShop.addEventListener("click", () => {
    //Установка стилей
    document.querySelector(".modal").setAttribute("style", "display: block; z-index: 15");
});

btnHideForm.addEventListener("click", () => {
    //Очистка стилей
    document.querySelector(".modal").removeAttribute("style", "display; z-index");
});