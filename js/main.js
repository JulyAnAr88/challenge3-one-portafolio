//-------TYPING EFFECT------//
const $text = document.querySelector(".title__hello");
let str = $text.innerHTML;
let i = 0;

$text.innerHTML = "";

function typing() {
  if (i < str.length) {
    $text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typing, 200);
  } else {
    setTimeout(() => {
      $text.innerHTML = "";
      i = 0;
      setTimeout(typing, 200);
    }, 2000);
  }
}

setTimeout(typing, 1500);

//-------NAV MENU------//
const navButton = document.querySelector(".menu__burguer");
const navMenu = document.querySelector(".menu__nav");

const burguer = document.querySelector(".menu__icon-burguer");
const x = document.querySelector(".menu__icon-x");

const navItems = document.querySelectorAll(".menu__list__item");

// mostrar/ocultar menú
navButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-active");
    burguer.classList.toggle("menu_hidden");
    x.classList.toggle("menu_hidden");
});

// ocultar menú al hacer click en un link
navItems.forEach( item => item.addEventListener("click", () => {
    navMenu.classList.remove("nav-active");
    burguer.classList.remove("menu_hidden");
    x.classList.add("menu_hidden");
    })
)

//-------SCROLL ANIMATION------//
//animacion de la pagina
window.sr = ScrollReveal({ reset: true });
sr.reveal(".sobre-mi")
sr.reveal(".skills", {duration: 200})
sr.reveal(".about", {origin: 'right', distance: '300px', duration: 2000});