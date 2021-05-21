const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle("change");
})

var navbar = document.getElementById("navbar");
var menuHamburger= document.getElementById("ham");
var sticky = navbar.offsetTop;

// code for sticky navigation bar
window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// for hamburger menu

menuHamburger.addEventListener('click',() => {
  if(navbar.className === "main_navigation"){
    navbar.classList.add("responsive");
  } else {
    navbar.classList.remove("responsive");
  }
});

