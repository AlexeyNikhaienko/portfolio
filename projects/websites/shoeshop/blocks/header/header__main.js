//Инициализация переменных для блока кода, отвечающего за скрытие основного меню
//при кликании за пределами блока либо на кнопку-бургер
let menuMain = document.querySelector(".header__menu-main");//Родительский блок для всего меню
let menuBurg = document.querySelector(".burg-menu");//Кнопка с эмблемой меню

//Объявление переменных для блока кода, ответственного за открытие/закрытие вкладок под-меню
let menuMainItems = document.querySelectorAll(".mobile .item-nav");//Элементы основного меню
let itemSubNav = document.querySelectorAll(".mobile .item-subnav");//Элементы вкладки "New"
let menuSub = document.querySelectorAll(".mobile .list--hid");//Меню для вкладок "New...Brands"
let catalog = document.querySelectorAll(".mobile .catalog-mobile");//Меню для вкладок "New for men..."
let itemCloseMenu = document.querySelectorAll(".mobile .item--pe__prev");//Элементы, которые закрывают вкладки
//Объявление функций, которые открывают/закрывают вкладки под-меню
openSubMenu();
closeSubMenu();

//Код для закрытия основного меню при нажатии за пределами блока меню либо на кнопку с эмблемой меню
//Функция, которая выполняет проверку на наличие указанного класса у элемента.
//Если этого класса нет, то он добавляется к элементу
let toggleMenu = function toggleMenu() {
  menuMain.classList.toggle("active");
}

//На кнопку с эмблемой меню устанавливается обработчик события
menuBurg.addEventListener("click", function(e) {
  //Для отображения/ скрытия основного меню
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
  }
});

//Код для открытия/закрытия вкладок под-меню
//Функция, которая открывает под-меню при нажатии на соответствующие элементы основного меню
function openSubMenu() {
  //Открываются меню для вкладок "New...Brands" при нажатии на соответствующий элемент из основного меню
  for (let i = 0; i < menuMainItems.length; i++) {
    menuMainItems[i].addEventListener ("click", function () {
      menuSub[i].style.transform = "translateX(0)";
    });
  }

  for (let i = 0; i < itemSubNav.length; i++) {
    //Открываются вкладки для под-меню "New" при кликании на его элементы
    itemSubNav[i].addEventListener ("click", function () {
      catalog[i].style.transform = "translateX(0)";
    });
  }
}

//Функция, которая закрывает вкладки при нажатии на соответствующие элементы основного меню/под-меню
function closeSubMenu() {
  for (let i = 0; i < itemCloseMenu.length; i++) {
    if (i < 1) {//Т.к. первый элемент должен закрывать саму вкладку "New"
      itemCloseMenu[i].addEventListener ("click", function () {
        menuSub[i].style.transform = "translateX(100%)";
      });
    } else if (i > 3) {//Т.к. начиная с 4 элемента массива происходит закрытие вкладок "Men...Brands"
      itemCloseMenu[i].addEventListener ("click", function () {
        for (let k = 1; k < menuSub.length; k++) {
          menuSub[k].style.transform = "translateX(100%)";
        }
      });
    } else {//Закрывает элементы под-меню, расположенные на вкладке "New"
      itemCloseMenu[i].addEventListener ("click", function () {
        //Цикл перебирает элементы с классом "Сatalog" (new for men, new for women, new for kids)
        for (let k = 0; k < catalog.length; k++) {
          catalog[k].style.transform = "translateX(100%)";
        }
      });
    }
  }
}