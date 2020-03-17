//Объявление переменых
const collectionArea = document.querySelector(".collection .produckt");//для работы свайпа
const sliderCollectionArr = document.querySelectorAll(".produckt__wrapper .img");//массив с изображениями
//Переменная, которая будет хранить значения текущего индекса слайда
let curIndexSlide = 0;

//Автослайдер
const collectionIntervalTime = 5000;//Через сколько времени (мс) показывается новый слайд
let collectionInterval = setInterval(nextСollectionSlide, collectionIntervalTime);

//Функция, которая показывает слайды,
//а также устанвливает их как фоновое изображение для всего блока
function showСollectionSlides() {
       let bcg = document.querySelector(".collection");
       for (let i = 0; i < sliderCollectionArr.length; i++) {
              sliderCollectionArr[i].classList.remove("img--current");
       }
       sliderCollectionArr[curIndexSlide].classList.add("img--current");
       bcg.style.backgroundImage = `url(${sliderCollectionArr[curIndexSlide].getAttribute("src")})`;
}

showСollectionSlides();

//Функции для показа предыдущего/следующего слайда
function nextСollectionSlide() {
       if (curIndexSlide === sliderCollectionArr.length - 1) {
              curIndexSlide = 0;
       } else {
              curIndexSlide++;
       }
       showСollectionSlides();
       //сброс автослайдера, чтобы он корректно работал в случае пролистывания слайда пользователем
       clearInterval(collectionInterval);
       collectionInterval = setInterval(nextСollectionSlide, collectionIntervalTime);
}

function prevСollectionSlide() {
       if (curIndexSlide === 0) {
              curIndexSlide = sliderCollectionArr.length - 1;
       } else {
              curIndexSlide--;
       }
       showСollectionSlides();
       //сброс автослайдера, чтобы он корректно работал в случае пролистывания слайда пользователем
       clearInterval(collectionInterval);
       collectionInterval = setInterval(nextСollectionSlide, collectionIntervalTime);
}

//Слайдер для touch-событий
const collectionTouchSlider = function(element) {
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
              distanceY = touchObj.pageY - startY;
              //Разность по времени между тем, как пользователь нажал и отпустил
              elapsedTime = new Date().getTime() - startTime;

              //Проверка условий для свайпа
              //Если наше время превышает время свайпа, то свайпа быть не должно
              if (elapsedTime <= allowedTime) {
                     //Для распознавания события как свайпа
                     //Math.abs чтобы избежать ошибки при свайпе влево и вправо
                     if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
                            if (distanceX > 0) {
                                   prevСollectionSlide();
                            } else {
                                   nextСollectionSlide();
                            }
                     }
              }
              //Блокировка других событий
              e.preventDefault();
       });
}

collectionTouchSlider(collectionArea);