const btnOpenMenu = document.querySelector(".menu__burg");
const btnCloseMenu = document.querySelector(".menu__btn--close");

btnOpenMenu.addEventListener("click", function() {
      document.querySelector(".menu").style.transform = "translateX(100%)";
      document.querySelector(".collection__sale").setAttribute("style", "z-index: 5; background-color: #DECEC5; height: 100vh");
});

btnCloseMenu.addEventListener("click", function() {
      document.querySelector(".menu").style.transform = "translateX(-100%)";
      document.querySelector(".collection__sale").removeAttribute("style", "z-index; background-color; height");
});
