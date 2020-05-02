//Прототип объекта, который выполняет пролистывание слайдов/слайдеров в блоке
class NewParentSlider {
       constructor(props) {
              //Привязка свойств, приходящих из параметров конструктора
              this.startIndex = props.startIndex;//с какой картинки/слайдера начинается слайдшоу
              this.element = props.element;//с каким из слайдеров выполняется работа
              this.activeClass = props.subClasses.activeClass;//класс активного (текущего) элемента
              this.childSlide = props.subClasses.childSlide;//класс дочернего слайда/слайдера
              this.leftArrow = props.subClasses.leftArrow;
              this.rightArrow = props.subClasses.rightArrow;

              //Объявление собственных свойств прототипа
              this.currentIndex = this.startIndex;//индекс текущего элемента, по умолчанию this.startIndex
              this.slides = this.element.querySelectorAll(this.childSlide);//массив со слайдами

              //Привязка методов
              this.setActiveSlide();
              this.newSlide();
              this.prevSlide();
       }

       //Функция устанавливает активный слайд
       setActiveSlide() {
              //Цикл проходится по каждому элементу массива и выполняет сравнение
              //текущего индекса currentIndex с индексом текущего элемента
              //и присваивает/ удаляет соответствующий класс
              this.slides.forEach((item, index) => {
                     if (index === this.currentIndex) {
                            item.classList.add(this.activeClass);
                     } else {
                            item.classList.remove(this.activeClass);
                     }
              });
       }

       //Функции по переключению слайдов
       newSlide() {
              let newNextBtn = this.element.querySelector(this.rightArrow);
              newNextBtn.addEventListener("click", () => {
                     if (this.currentIndex === this.slides.length - 1) {
                            this.currentIndex = 0;
                     } else {
                            this.currentIndex++;
                     }
                     this.setActiveSlide();
              });
       }

       prevSlide() {
              let newPrevBtn = this.element.querySelector(this.leftArrow);
              newPrevBtn.addEventListener("click", () => {
                     if (this.currentIndex === 0) {
                            this.currentIndex = this.slides.length -1;
                     } else {
                            this.currentIndex--;
                     }
                     this.setActiveSlide();
              });
       }
}

//Дополнительный класс, который выполняет подсчёт лайков (помимо функционала прототипа)
//Данный класс введён для мобильных телефонов, т.к. согласно макета предусматривается
//слайдер в слайдере
class NewInstanceSlider extends NewParentSlider {
       constructor(props) {
              //Наследование методов от прототипа
              super(props);
              //Привязка методов
              this.likesCounter();
       }

       //Функция-счётчик лайков
       likesCounter() {
              //Цикл проходит по массиву со слайдами и для каждого элемента создаёт привязку к кнопке "Нравится", 
              //а также создаёт привязку к элементу, который будет выводить общее количество лайков
              //Затем устанавливается начальное количество лайков, которое увеличивается при нажатии на кнопку
              this.slides.forEach(item=> {
                     let likesBtn = item.querySelector(".like");
                     let outputAmountLikes = item.querySelector(".amount");
                     let totalLike = 0;
                     likesBtn.addEventListener("click", () => {
                            return outputAmountLikes.textContent = ++totalLike;
                     });
                     this.setActiveSlide();
              });
       }
}

//Чтобы исключить одновременную загрузку нескольких событий (ширин экрана, которые приведены 
//в качестве пороговых значений в detectedWidthNewBlock())
window.addEventListener("load", () => {
       //Объявление переменной для таймера, по истечении времени которого выполняется перерисовка экрана
       let resizeTimer;
       //Для отслеживания изменения размеров экрана
       window.addEventListener("resize", () => {
              clearTimeout(resizeTimer);//сброс таймера
              //Переопределение таймера
              resizeTimer = setTimeout(function() {
                     detectedWidthNewBlock();
              }, 250);
       });
});

//Функция определяет текущую ширину окна браузера и дополнительно создаёт сущности,
//которые являются слайдерами, которые, в свою очередь, содержат в себе другие слайдеры.
//Данная реализация применима для мобильных телефонов с размером экрана до 768px
function detectedWidthNewBlock() {
       if (window.innerWidth < 768) {
              //Массив со слайдерами из блока "tabs".
              //Для каждого элемента массива создаётся сущность, которой в качестве св-в передаётся всё необходимое
              let newWrapperSliders = document.querySelectorAll(".new .tabs");
              newWrapperSliders.forEach(item => {
                     new NewParentSlider({
                            startIndex: 1,
                            element: item,
                            subClasses: {
                                   activeClass: "tabs-active",
                                   childSlide: ".carousel",
                                   leftArrow: ".left",
                                   rightArrow: ".right"
                            }
                     });
              });
       }
       return;
}
detectedWidthNewBlock();

//Массив со слайдерами из блока "carousel".
//Для каждого элемента массива создаётся сущность, которой в качестве св-в передаётся всё необходимое
let newNestedSliders = document.querySelectorAll(".new .carousel");
newNestedSliders.forEach(item => {
       new NewInstanceSlider({
              startIndex: 0,
              element: item,
              subClasses: {
                     activeClass: "slide-active",
                     childSlide: ".slide",
                     leftArrow: ".prev",
                     rightArrow: ".next"
              }
       });
});