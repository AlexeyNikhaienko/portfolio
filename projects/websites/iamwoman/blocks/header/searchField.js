// Список товаров
const productsData = [
  {id: 0, bestResult: "Платья", brand: "Fashion AnastatiOn", name: "Платье макси с воротником хомут", price: 6450},
  {id: 1, bestResult: "Платья", brand: "A-A Awesome Apparel", name: "Платье-сарафан", price: 2499},
  {id: 2, bestResult: "Платья", brand: "A. Karina", name: "Платье", price: 5990},
  {id: 3, bestResult: "Платья", brand: "Barcelonica", name: "Платье", price: 4990},
  {id: 4, bestResult: "Платья", brand: "A. Karina", name: "Платье", price: 6490},
  {id: 5, bestResult: "Платья", brand: "oodji", name: "Платье", price: 1799},
  {id: 6, bestResult: "Платья", brand: "A-A Awesome Apparel", name: "Платье-футляр/ Офисное платье", price: 6000},
  {id: 7, bestResult: "Платья", brand: "C.H.I.C", name: "Платье", price: 3150},
  {id: 8, bestResult: "Платья", brand: "oodji", name: "Платье", price: 1799},
  {id: 9, bestResult: "Платья", brand: "C.H.I.C", name: "Платье", price: 3150},
  {id: 10, bestResult: "Блузки и рубашки", brand: "ЕЖЕВИКА.", name: "Блузка", price: 3447},
  {id: 11, bestResult: "Блузки и рубашки", brand: "Comodita", name: "Блузка-боди", price: 4150},
  {id: 12, bestResult: "Блузки и рубашки", brand: "oodji", name: "Блузка", price: 1183},
  {id: 13, bestResult: "Блузки и рубашки", brand: "A-A Awesome Apparel", name: "Блуза", price: 1899},
  {id: 14, bestResult: "Блузки и рубашки", brand: "Griga", name: "Блузка", price: 3790},
  {id: 15, bestResult: "Блузки и рубашки", brand: "Barcelonica", name: "Блузка", price: 3990},
  {id: 16, bestResult: "Блузки и рубашки", brand: "ЕЖЕВИКА.", name: "Блузка", price: 2799},
  {id: 17, bestResult: "Блузки и рубашки", brand: "Griga", name: "Блузка", price: 4899},
  {id: 18, bestResult: "Блузки и рубашки", brand: "Comodita", name: "Блузка", price: 1599},
  {id: 19, bestResult: "Брюки", brand: "Comodita", name: "Брюки", price: 2199},
  {id: 20, bestResult: "Брюки", brand: "Comodita", name: "Брюки", price: 2599},
  {id: 21, bestResult: "Брюки", brand: "Griga", name: "Брюки", price: 4800},
  {id: 22, bestResult: "Брюки", brand: "A-A Awesome Apparel", name: "Брюки - BOREAL6", price: 2499},
  {id: 23, bestResult: "Брюки", brand: "A-A Awesome Apparel", name: "Брюки - MARCUS", price: 2981},
  {id: 24, bestResult: "Брюки", brand: "A. Karina", name: "Леггинсы", price: 699},
  {id: 25, bestResult: "Брюки", brand: "Barcelonica", name: "Тайтсы", price: 2196},
  {id: 26, bestResult: "Брюки", brand: "oodji", name: "Брюки", price: 1549},
  {id: 27, bestResult: "Брюки", brand: "C.H.I.C", name: "Платье", price: 6960},
  {id: 28, bestResult: "Брюки", brand: "ЕЖЕВИКА.", name: "Брюки", price: 24900},
  {id: 29, bestResult: "Лонгсливы", brand: "Fashion AnastatiOn", name: "Лонгслив", price: 2900},
  {id: 30, bestResult: "Лонгсливы", brand: "A-A Awesome Apparel", name: "Лонгслив", price: 699},
  {id: 31, bestResult: "Лонгсливы", brand: "A. Karina", name: "Лонгслив", price: 1299},
  {id: 32, bestResult: "Лонгсливы", brand: "Barcelonica", name: "Лонгслив", price: 1299},
  {id: 33, bestResult: "Лонгсливы", brand: "oodji", name: "Лонгслив", price: 1593},
  {id: 34, bestResult: "Лонгсливы", brand: "C.H.I.C", name: "Лонгслив", price: 6000},
  {id: 35, bestResult: "Лонгсливы", brand: "oodji", name: "Лонгслив", price: 999},
  {id: 36, bestResult: "Лонгсливы", brand: "ЕЖЕВИКА", name: "Лонгслив", price: 2900},
  {id: 37, bestResult: "Лонгсливы", brand: "Comodita", name: "Лонгслив", price: 1299},
  {id: 38, bestResult: "Лонгсливы", brand: "Comodita", name: "Лонгслив", price: 1100},
  {id: 39, bestResult: "Босоножки", brand: "Comodita", name: "Босоножки", price: 1599},
  {id: 40, bestResult: "Босоножки", brand: "Fashion AnastatiOn", name: "Босоножки", price: 2199},
  {id: 41, bestResult: "Босоножки", brand: "A-A Awesome Apparel", name: "Босоножки", price: 1799},
  {id: 42, bestResult: "Валенки", brand: "A. Karina", name: "Валенки", price: 4939},
  {id: 43, bestResult: "Валенки", brand: "Barcelonica", name: "Валенки домашние 'Сирень'", price: 4500},
  {id: 44, bestResult: "Валенки", brand: "oodji", name: "Валеши", price: 3700},
  {id: 45, bestResult: "Эспадрильи", brand: "oodji", name: "Эспадрильи", price: 5490},
  {id: 46, bestResult: "Эспадрильи", brand: "C.H.I.C", name: "Эспадрильи", price: 1999},
  {id: 47, bestResult: "Эспадрильи", brand: "A-A Awesome Apparel", name: "Эспадрильи", price: 7200},
  {id: 48, bestResult: "Эспадрильи", brand: "ЕЖЕВИКА", name: "Эспадрильи", price: 2980},
  {id: 49, bestResult: "Эспадрильи", brand: "A. Karina", name: "Эспадрильи", price: 9900},
  {id: 50, bestResult: "Эспадрильи", brand: "oodji", name: "Эспадрильи", price: 3490}
];

//Объявление переменных
const btnVisibleSearchForm = document.querySelector(".header .search");//Кнопка для показа блока поиска
const btnHideSearchForm = document.querySelector(".header .close-search");//Кнопка для скрытия блока поиска
const searchField = document.querySelector(".header .search-field");//Блок поиска в целом

const request = document.querySelector(".header .request");//Поисковая строка

//Установка обработчиков событий на кнопки; при нажатии на кнопки форма поиска появляется/ скрывается
btnVisibleSearchForm.addEventListener("click", () => {
  //Установка стилей для блока поиска
  searchField.setAttribute("style", "transform: translateX(-100%)");
});

btnHideSearchForm.addEventListener("click", () => {
  //Очистка стилей для блока поиска
  searchField.removeAttribute("style", "transform");
});

//Событие "input" вместо других событий ("keyup" и аналогичные), т.к. поиск срабатывает на ввод и независит от того,
//нажал/ отпустил ли пользователь кнопку, сколько одновременно введено символов в поиск
request.addEventListener("input", searchStart);

//Функция устанавливает начальные настройки для поля поиска, а именно:
//что вводит пользователь, какое количество символов введено в поиск
function searchStart(e) {
  //Краткая запись
  let target = e.target;
  //Перевод запроса в нижний регистр с удалением пробелов до и после него
  let req = target.value.toLowerCase().trim();
  //Объявление переменных
  const inputFieldBlock = document.querySelector(".header .input-field");
  const clearBtn = document.createElement("span");

  //Проверка условий
  if (req.length !== 0) {
    if (req.length === 1) {
      //если количество дочерних элементов блока равно указанному (childElementCount), то создаётся узел в DOM.
      //Это необходимо в случае. когда пользователь очищает поле поиска в ручную, а не кнопкой "очистить".
      //При последующем вводе аналогичные элементы больше не создаются и не монтируются в DOM
      if (inputFieldBlock.childElementCount === 1) {
        clearBtn.classList.add("search-field__clear", "clear");
        clearBtn.innerHTML = "очистить";
        inputFieldBlock.appendChild(clearBtn);
      }
    } else if (req.length >= 3) {
      //функция поиска запускается, когда количество символов в поисковой строке 3 и более
      createResultBlock(req);
    }

    //На кнопку "очистить" устанавливается событие по полной очистке поля поиска
    clearBtn.addEventListener("click", () => {
      //Очистка поля
      target.value = "";
      //Удаление кнопки "очистить", блока с результатом поиска из DOM
      inputFieldBlock.removeChild(clearBtn);
      searchField.removeChild(searchField.lastChild);

      //Автоматический фокус на поле поиска после очистки (для случая последующего ввода)
      request.focus();
    });
    //console.log(req.length, inputFieldBlock.childElementCount);
  }
}

//Функция, отвечающая за поиск
function createResultBlock(desiredItem) {
  //Массив содержит только те элементы, которые удовлетворяют условиям
  const arrFoundItems = productsData.filter(item => {
    return item.name.toLowerCase().indexOf(desiredItem) !== -1;
  });

  //Проверка условий в зависимости от количества элементов в массиве
  if (arrFoundItems.length !== 0) {
    //Если количество дочерних элементов равняется указанному (childElementCount), то создайтся элемент
    //с результатом запроса.
    //При последующем вводе аналогичные элементы больше не создаются и не монтируются в DOM
    if (searchField.childElementCount === 2) {
      //В блоке с классом "search-field" создаются элементы
      let section = document.createElement("section");//родительский блок
      let bestResult = document.createElement("h3");//заголовок "Лучшие совпадения"
      let ul = document.createElement("ul");//ненумерованный список, куда будут добавляться найденные элементы
      let ref = document.createElement("a");//ссылка на сам элемент

      //Добавление классов к элементам
      section.classList.add("result");
      bestResult.classList.add("result__catalog", "catalog");
      ul.classList.add("list-output");
      ref.classList.add("link-more");

      //Текстовое содержимое
      bestResult.textContent = "Лучшие совпадения";
      ref.textContent = "Смотреть все";

      //Добавление в родительсткий блок дочерних элементов
      section.append(bestResult, ul, ref);

      //Для каждого элемента в массиве с результатами поиска сохдаются узлы,
      //которые визуально отображают результат
      arrFoundItems.forEach(item => {
        //Аналогично выше приведённому
        let li = document.createElement("li");
        let innerRef = document.createElement("a");
        let span = document.createElement("span");

        li.classList.add("list-output__item", "item");
        innerRef.classList.add("link", "ink--color__grey");
        span.classList.add("coincidence");

        innerRef.textContent = item.name;
        span.textContent = `[${arrFoundItems.length}]`;
        li.append(innerRef, span);
        ul.appendChild(li);
      });
      return searchField.appendChild(section);
    }
  }
}