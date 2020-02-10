//Объявление переменных
const blogSlide = document.querySelector(".slider-blog");
const blogSlideArray = document.querySelectorAll(".blog .pic");
const prevBtnBlog = document.querySelector(".control .left");
const nextBtnBlog = document.querySelector(".control .right");

//Объявление переменных для блока, содержащего информацию о текщем номере слайда,
//а также об общем количестве слайдов
const totalBlogSlide = document.querySelector(".slides .total").textContent = "0" + blogSlideArray.length;
let curBlogSlide = document.querySelector(".slides .current");
//Переменная, которая будет хранить значения текущего индекса слайда
let curIndexBlogSlide = 0;

//Объявление переменных, котрые участвуют в работе автоматического показа слайдов
const blogIntervalTime = 5000;//Через сколько времени (мс) показывается новый слайд
let blogInterval;//Переменная-таймер

//Определение функции, которая скрывает/показывает слайд
function showBlogSlides() {
  for (let i = 0; i < blogSlideArray.length; i++) {
    blogSlideArray[i].style.display = "none";
  }
  blogSlideArray[curIndexBlogSlide].style.display = "block";
  //Переменная показывает номер текущего слайда
  curBlogSlide.textContent = "0" + (curIndexBlogSlide + 1) + " /";
}

//Вызов функции. Выведет сразу первый слайд при загрузке страницы
showBlogSlides();

//Функции для показа предыдущего/следующего слайда
function prevBlogSlide() {
  if (curIndexBlogSlide == 0) {
    curIndexBlogSlide = blogSlideArray.length - 1;
  } else {
    curIndexBlogSlide--;
  }
  showBlogSlides();
}

function nextBlogSlide() {
  if (curIndexBlogSlide == blogSlideArray.length - 1) {
    curIndexBlogSlide = 0;
  } else {
    curIndexBlogSlide++;
  }
  showBlogSlides();
}

//Установка слушателей на кнопки навигации
//Работают только по клику мыши
prevBtnBlog.addEventListener("click", function() {
  prevBlogSlide();
  clearInterval(blogInterval);
  blogInterval = setInterval(nextBlogSlide, blogIntervalTime);
});

nextBtnBlog.addEventListener("click", function() {
  nextBlogSlide();
  clearInterval(blogInterval);
  blogInterval = setInterval(nextBlogSlide, blogIntervalTime);
});

//Автослайдер
//blogInterval = setInterval(nextBlogSlide, blogIntervalTime);

//Слайдер для touch-событий
const blogTouchSlider = function(element) {
  let surface = element;//переменная, в которой хранится область взаимодействий с пользователем
  let startX = 0;//стартовая позиция по оси х для курсора
  let startY = 0;
  let distanceX = 0;//пройденная дистанция по оси х
  let distanceY = 0;
  let threshold = 100;//min дистанция, при котором сработает свайп
  let restraint = 100;//ограничение действия по оси У, max расстояние
  let allowedTime = 300;//min время, которое должен длиться свайп, чтобы он сработал

  let startTime = 0;
  let elapsedTime = 0;

  surface.addEventListener("touchstart", function(e) {
    //Чтобы стрелки навигации работали на мобильных телефонах, планшетах
    //Содержит ли стрелка навигации один из указанных классов
    if (e.target.classList.contains("control")) {
      //Проверка, какая именено стрелка нажимается - левая или правая
        if (e.target.classList.contains("left")) {
          prevBlogSlide();
        } else if (e.target.classList.contains("right")) {
          nextBlogSlide();
        }
    }

    //Переменная для хранения pageX, pageY
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
    //Блокировка других событий
    e.preventDefault();
  });

  surface.addEventListener("touchmove", function(e) {
    //Блокировка других событий
    e.preventDefault();
  });

  surface.addEventListener("touchend", function(e) {
    //Переменная для хранения pageX, pageY
    let touchObj = e.changedTouches[0];
    distanceX = touchObj.pageX - startX;
    distanceY =  touchObj.pageY - startY;
    //Разность по времени между тем, как пользователь нажал и отпустил
    elapsedTime = new Date().getTime() - startTime;

    //Проверка условий для свайпа
    //Если наше время превышает время свайпа, то свайпа быть не должно
    if (elapsedTime <= allowedTime) {
      //Для распознавания события как свайпа
      //Math.abs чтобы избежать ошибки при свайпе влево и вправо
        if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
            if (distanceX > 0) {
              prevBlogSlide();
            } else {
              nextBlogSlide();
            }
        }
    }

    //Блокировка других событий
    e.preventDefault();
  });
}

blogTouchSlider(blogSlide);