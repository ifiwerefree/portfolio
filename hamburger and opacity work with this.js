const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))



window.onscroll = function() {
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    var navbar = document.getElementById("navbar");
    if (scrollPosition > 600) {
        navbar.style.opacity = 0;
    } else if (scrollPosition > 500) {
        navbar.style.opacity = 0.4;
    } else if (scrollPosition > 400) {
        navbar.style.opacity = 0.7;
    } else if (scrollPosition > 300) {
        navbar.style.opacity = 0.8;
    } else if (scrollPosition > 200) {
        navbar.style.opacity = 0.9;
    } else {
        navbar.style.opacity = 1;
    }
};
