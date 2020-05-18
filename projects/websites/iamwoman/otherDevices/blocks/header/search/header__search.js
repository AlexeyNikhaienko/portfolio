// Список товаров
const productsData = [
  {id: 0, category: "Платья", brand: "Fashion AnastatiOn", name: "Платье макси с воротником хомут", price: 6450},
  {id: 1, category: "Платья", brand: "A-A Awesome Apparel", name: "Платье-сарафан", price: 2499},
  {id: 2, category: "Платья", brand: "A. Karina", name: "Платье", price: 5990},
  {id: 3, category: "Платья", brand: "Barcelonica", name: "Платье", price: 4990},
  {id: 4, category: "Платья", brand: "A. Karina", name: "Платье", price: 6490},
  {id: 5, category: "Платья", brand: "oodji", name: "Платье", price: 1799},
  {id: 6, category: "Платья", brand: "A-A Awesome Apparel", name: "Платье-футляр/ Офисное платье", price: 6000},
  {id: 7, category: "Платья", brand: "C.H.I.C", name: "Платье", price: 3150},
  {id: 8, category: "Платья", brand: "oodji", name: "Платье", price: 1799},
  {id: 9, category: "Платья", brand: "C.H.I.C", name: "Платье", price: 3150},
  {id: 10, category: "Блузки и рубашки", brand: "ЕЖЕВИКА.", name: "Блузка", price: 3447},
  {id: 11, category: "Блузки и рубашки", brand: "Comodita", name: "Блузка-боди", price: 4150},
  {id: 12, category: "Блузки и рубашки", brand: "oodji", name: "Блузка", price: 1183},
  {id: 13, category: "Блузки и рубашки", brand: "A-A Awesome Apparel", name: "Блуза", price: 1899},
  {id: 14, category: "Блузки и рубашки", brand: "Griga", name: "Блузка", price: 3790},
  {id: 15, category: "Блузки и рубашки", brand: "Barcelonica", name: "Блузка", price: 3990},
  {id: 16, category: "Блузки и рубашки", brand: "ЕЖЕВИКА.", name: "Блузка", price: 2799},
  {id: 17, category: "Блузки и рубашки", brand: "Griga", name: "Блузка", price: 4899},
  {id: 18, category: "Блузки и рубашки", brand: "Comodita", name: "Блузка", price: 1599},
  {id: 19, category: "Брюки", brand: "Comodita", name: "Брюки", price: 2199},
  {id: 20, category: "Брюки", brand: "Comodita", name: "Брюки", price: 2599},
  {id: 21, category: "Брюки", brand: "Griga", name: "Брюки", price: 4800},
  {id: 22, category: "Брюки", brand: "A-A Awesome Apparel", name: "Брюки - BOREAL6", price: 2499},
  {id: 23, category: "Брюки", brand: "A-A Awesome Apparel", name: "Брюки - MARCUS", price: 2981},
  {id: 24, category: "Брюки", brand: "A. Karina", name: "Леггинсы", price: 699},
  {id: 25, category: "Брюки", brand: "Barcelonica", name: "Тайтсы", price: 2196},
  {id: 26, category: "Брюки", brand: "oodji", name: "Брюки", price: 1549},
  {id: 27, category: "Брюки", brand: "C.H.I.C", name: "Платье", price: 6960},
  {id: 28, category: "Брюки", brand: "ЕЖЕВИКА.", name: "Брюки", price: 24900},
  {id: 29, category: "Лонгсливы", brand: "Fashion AnastatiOn", name: "Лонгслив", price: 2900},
  {id: 30, category: "Лонгсливы", brand: "A-A Awesome Apparel", name: "Лонгслив", price: 699},
  {id: 31, category: "Лонгсливы", brand: "A. Karina", name: "Лонгслив", price: 1299},
  {id: 32, category: "Лонгсливы", brand: "Barcelonica", name: "Лонгслив", price: 1299},
  {id: 33, category: "Лонгсливы", brand: "oodji", name: "Лонгслив", price: 1593},
  {id: 34, category: "Лонгсливы", brand: "C.H.I.C", name: "Лонгслив", price: 6000},
  {id: 35, category: "Лонгсливы", brand: "oodji", name: "Лонгслив", price: 999},
  {id: 36, category: "Лонгсливы", brand: "ЕЖЕВИКА", name: "Лонгслив", price: 2900},
  {id: 37, category: "Лонгсливы", brand: "Comodita", name: "Лонгслив", price: 1299},
  {id: 38, category: "Лонгсливы", brand: "Comodita", name: "Лонгслив", price: 1100},
  {id: 39, category: "Босоножки", brand: "Comodita", name: "Босоножки", price: 1599},
  {id: 40, category: "Босоножки", brand: "Fashion AnastatiOn", name: "Босоножки", price: 2199},
  {id: 41, category: "Босоножки", brand: "A-A Awesome Apparel", name: "Босоножки", price: 1799},
  {id: 42, category: "Валенки", brand: "A. Karina", name: "Валенки", price: 4939},
  {id: 43, category: "Валенки", brand: "Barcelonica", name: "Валенки домашние 'Сирень'", price: 4500},
  {id: 44, category: "Валенки", brand: "oodji", name: "Валеши", price: 3700},
  {id: 45, category: "Эспадрильи", brand: "oodji", name: "Эспадрильи", price: 5490},
  {id: 46, category: "Эспадрильи", brand: "C.H.I.C", name: "Эспадрильи", price: 1999},
  {id: 47, category: "Эспадрильи", brand: "A-A Awesome Apparel", name: "Эспадрильи", price: 7200},
  {id: 48, category: "Эспадрильи", brand: "ЕЖЕВИКА", name: "Эспадрильи", price: 2980},
  {id: 49, category: "Эспадрильи", brand: "A. Karina", name: "Эспадрильи", price: 9900},
  {id: 50, category: "Эспадрильи", brand: "oodji", name: "Эспадрильи", price: 3490}
];

//Объявление переменных
//Кнопки для показа/скрытия блока поиска
const btnVisibleSearchForm = document.querySelector(".header .search");
const btnHideSearchForm = document.querySelector(".header .close-search");
//Блок поиска в целом, блок с формой, поисковая строка
const searchBlock = document.querySelector(".header .search-block");
const inputFieldBlock = document.querySelectorAll(".header .search-form")[1];
const request = document.querySelectorAll(".header .request")[1];

//Установка обработчиков событий на кнопки; при нажатии на кнопки форма поиска появляется/ скрывается
btnVisibleSearchForm.addEventListener("click", () => {
  //Установка стилей для блока поиска
  searchBlock.setAttribute("style", "transform: translateX(-100%)");
});

btnHideSearchForm.addEventListener("click", () => {
  //Очистка стилей для блока поиска
  searchBlock.removeAttribute("style", "transform");

  //Очиста поиска
  request.value = "";

  if (inputFieldBlock.childElementCount > 1) {
    inputFieldBlock.removeChild(inputFieldBlock.lastChild);
  }
  if (searchBlock.childElementCount > 2) {
    searchBlock.removeChild(searchBlock.lastChild);
  }
});

//Объявление переменной для таймера, по истечении времени которого выполняется поиск
let changeInputTimer;

//Событие "input" вместо других событий ("keyup" и аналогичные), т.к. поиск срабатывает на ввод и не зависит от того,
//нажал/ отпустил ли пользователь кнопку, сколько одновременно введено символов в поиск
request.addEventListener("input", e => {
  let target = e.target;
  //Перевод запроса в нижний регистр с удалением пробелов до и после него
  let req = target.value.toLowerCase().trim();
  //кнопка очистки поля ввода
  const clearBtn = document.createElement("span");
  //На кнопку "очистить" устанавливается событие по полной очистке поля поиска
  clearBtn.addEventListener("click", () => {
    //Обнуление ввода
    target.value = "";
    //Удаление кнопки "очистить", блока с результатом поиска из DOM
    removeChildElement(inputFieldBlock);
     removeChildElement(searchBlock);
    //Автоматический фокус на поле поиска после очистки (для случая последующего ввода)
    request.focus();
  });

  if (req.length !== 0) {
    if (req.length === 1) {
    //если количество дочерних элементов блока равно указанному (childElementCount), то создаётся узел в DOM.
    //Это необходимо в случае. когда пользователь очищает поле поиска в ручную, а не кнопкой "очистить".
    //При последующем вводе аналогичные элементы больше не создаются и не монтируются в DOM
      if (inputFieldBlock.childElementCount < 2) {
        clearBtn.classList.add("search-form__clear", "clear");
        clearBtn.textContent = "очистить";
        inputFieldBlock.appendChild(clearBtn);
      }
      return inputFieldBlock;
    } else if (req.length === 2) {
      if (searchBlock.childElementCount > 2) {
        removeChildElement(searchBlock);
      }
      return searchBlock;
    } else {
      //функция поиска запускается ч/з 0,75 секунды, а также когда количество символов в поисковой строке 3 и более
      clearTimeout(changeInputTimer);
      changeInputTimer = setTimeout(() => {
        createResultBlock(req);
      }, 750);
    }
  } else {
    if (inputFieldBlock.childElementCount > 1) {
      removeChildElement(inputFieldBlock);
    }
    if (searchBlock.childElementCount > 2) {
      removeChildElement(searchBlock);
    }
  }
});

//Функция, отвечающая за поиск
function createResultBlock(desiredItem) {
  //Массив содержит только те элементы, которые удовлетворяют условиям
  const arrFoundItems = productsData.filter(product => {
    return (product.name.toLowerCase().indexOf(desiredItem) !== -1 ||
                product.brand.toLowerCase().indexOf(desiredItem) !== -1);
  });
  //Копия массива arrFoundItems, выводит ограниченное количество найденных элементов
  const arrFirstElements = [].concat(arrFoundItems);

  if (arrFoundItems.length !== 0) {
    //Удаление ранее встроенных элементов
    removeChildElement(searchBlock);

    if (searchBlock.childElementCount < 3) {
      if (arrFoundItems.length > 5) {
        //Чтобы на экран выводились только первые пять найденных элементов
        arrFirstElements.length = 5;
      }
      //Создание элементов в блоке с классом "search-field" в следующем порядке:
      //родительский блок;
      //заголовок "Лучшие совпадения";
      //список, куда будут добавляться найденные элементы;
      //ссылка на каталог, содержащий все результаты запроса
      const section = document.createElement("section");
      const resultTitle = document.createElement("h2");
      const ul = document.createElement("ul");
      const ref = document.createElement("a");

      //Добавление классов к элементам
      section.classList.add("result");
      resultTitle.classList.add("catalog");
      ul.classList.add("result__list-output", "list-output");
      ref.classList.add("link", "link--color__red");

      //Текстовое содержимое
      resultTitle.textContent = "Лучшие совпадения";
      //чтобы ссылка была "рабочей"
      ref.href = "#";
      //Выводится ссылка с общим количеством найденных товаров
      ref.textContent = `Смотреть все (${arrFoundItems.length})`;

      //Добавление в родительсткий блок дочерних элементов
      section.append(resultTitle, ul, ref);

      //Для каждого элемента в массиве с копией результатов поиска создаются узлы,
      //которые визуально отображают результат
      arrFirstElements.forEach(item => {
        //Аналогично выше приведённому
        const li = document.createElement("li");
        //ссылка на сам товар, цена товара
        const innerRef = document.createElement("a");
        const span = document.createElement("span");

        li.classList.add("list-output__item", "item");
        innerRef.classList.add("link", "link--color__grey");
        span.classList.add("price--size__m");

        innerRef.href = "#";
        innerRef.textContent = item.name;
        span.textContent = item.price;
        li.append(innerRef, span);
        ul.appendChild(li);
      });
      return searchBlock.appendChild(section);
    }
  } else {
    //Если ничего не найдено, то выводится на экран другой блок
    if (searchBlock.childElementCount < 3) {
      const parNotFound = document.createElement("p");
      parNotFound.classList.add("search-block__par", "par", "par--align-content");
      parNotFound.textContent = "По Вашему запросу ничего не найдено";
      return searchBlock.appendChild(parNotFound);
    }
  }
}

//Функиця для удаления элементов
function removeChildElement(parentElement) {
  parentElement.removeChild(parentElement.lastChild);
}