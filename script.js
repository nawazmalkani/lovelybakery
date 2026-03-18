// Wait until full page loads
window.addEventListener("DOMContentLoaded", function(){

// Loader
const loader = document.getElementById("loader");
if(loader){
loader.style.display = "none";
}

// Fade Animation
const elements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
elements.forEach(el => {
const position = el.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(position < screenHeight - 100){
el.classList.add('show');
}
});
});

// Menu Toggle (FIXED)
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if(menuToggle && navMenu){
menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});
}

});

// Close menu when clicking outside
document.addEventListener("click", function(e){
const navMenu = document.getElementById("nav-menu");
const menuToggle = document.getElementById("menu-toggle");

if(navMenu && menuToggle){
if(!navMenu.contains(e.target) && !menuToggle.contains(e.target)){
navMenu.classList.remove("active");
}
}
});

// Close menu when clicking any link
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
document.getElementById("nav-menu").classList.remove("active");
});
});

// Smooth scroll for same page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if(target){
target.scrollIntoView({ behavior: 'smooth' });
}
});
});