//Объявление переменных
const blogSlide = document.querySelectorAll(".blog");
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
blogInterval = setInterval(nextBlogSlide, blogIntervalTime);