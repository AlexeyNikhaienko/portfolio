//Прототип объекта, который выполняет пролистывание слайдов/слайдеров в блоке
class NewParentSlider {
       //constructor(startIndex, element, subClass) {
       constructor(props) {
              //Свойства
              this.startIndex = props.startIndex;//с какой картинки/слайдера начинается слайдшоу
              this.currentIndex = this.startIndex;//индекс текущего элемента, по умолчанию this.startIndex
              this.element = props.element;//с каким из слайдеров выполняется работа
              this.childSlide = props.subClasses.childSlide;//класс дочернего слайда/слайдера
              //this.slides = this.element.querySelectorAll(".carousel .slide");//массив со слайдами
              this.slides = this.element.querySelectorAll(this.childSlide);//массив со слайдами
              this.leftArrow = props.subClasses.leftArrow;
              this.rightArrow = props.subClasses.rightArrow;

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
              this.slides.forEach( (item, index) => {
                     if (index === this.currentIndex) {
                            item.classList.add("active");
                     } else {
                            item.classList.remove("active");
                     }
              });
       }

       //Функции по переключению слайдов
       newSlide() {
              //let newNextBtn = this.element.querySelector(".carousel__switch .next");
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
              //let newPrevBtn = this.element.querySelector(".carousel__switch .prev");
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

//Массив со слайдерами из блока "carousel".
//Для каждого элемента массива создаётся сущность, которой в качестве св-в передаётся всё необходимое
let newSlider = document.querySelectorAll(".new .carousel");
newSlider.forEach(item => {
       new NewParentSlider({
              startIndex: 0,
              element: item,
              subClasses: {
                     childSlide: ".slide",
                     leftArrow: ".prev",
                     rightArrow: ".next"
              }
       });
});

// newSlider.forEach(item => {
//        new NewParentSlider(0, item, ".slide");
// });

/*class NewInstanceSlider extends NewParentSlider {
       constructor(startIndex, element, subElement) {
              super(startIndex, element);
              this.subElement = subElement;
              this.likes = this.subElement.querySelectorAll(".slide .like");

              this.likesCounter();
       }

       //Функция-счётчик лайков
       likesCounter() {
              let counter = 0;
              return function() {
                     return counter++;
              }
       }
}*/

//let likesBtn = document.querySelectorAll(".carousel .slide");
// newSlider.forEach(item => {
//        new NewInstanceSlider(0, item, likesBtn);
// });
