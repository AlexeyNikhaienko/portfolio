//Код для блока header
//Инициализация переменных
let menuMain = document.querySelector(".header__menu-main");
let menuBurg = document.querySelector(".burg-menu");//Кнопка с эмблемой меню
//let circle = document.querySelectorAll(".pag .circle");//Создание массива из элементов управления слайдером

//Выполняется проверка на наличие указанного класса у элемента.
//Если этого класса нет, то он добавляется к элементу
let toggleMenu = function toggleMenu() {
  menuMain.classList.toggle("active");
};

//На кнопку с эмблемой меню устанавливается обработчик события
menuBurg.addEventListener("click", function(e) {
  //Для отображения/ скрытия меню
  e.stopPropagation();

  toggleMenu();
});

//Для отслеживания клика глобально, т.е. в любом месте страницы,
//слушатель событий устанавливается на весь документ "document"
document.addEventListener("click", function(e) {
  //Определяем, где был выполнен клик и сохраняем в переменной
  let target = e.target;

  //Сравниваем, является ли элемент, на котором совершён клик, самим меню
  //или является ли узел menu потомком элемента target.
  //Возвращаемый результат (true/false) сохраняется в переменную
  let menu = target == menuMain || menuMain.contains(target);

  //Аналогично, только для кнопки вызова меню
  let hamburger = target == menuBurg;

  let menuMainActive = menuMain.classList.contains("active");

  //Наконец, выполняется проверка всех выше приведённых условий
  if (!menu && !hamburger && menuMainActive) {
    toggleMenu();
  };
});














/*function curCircle() {
  for (let i = 0; i < circle.length; i++) {
    circle[i].addEventListener("click", function() {
      circle[i - 1].classList.remove("burg-menu");
      circle[i].classList.add("burg-menu");
    });
  };
};*/