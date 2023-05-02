window.onscroll = function() {
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;    

    if (scrollPosition > 470) {
        navbar.style.opacity = 0;
    } else if (scrollPosition > 425) {
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

    if (scrollPosition > 600) {
        backToTopBtn.style.opacity = 1;
        backToTopBtn.classList.add("show"); 
    } else {
        backToTopBtn.style.opacity = 0;
        backToTopBtn.classList.remove("show"); 
    }  
};


navbar.addEventListener("mouseover", function() {
    navbar.style.opacity = 1;
});

navbar.addEventListener("mouseout", function() {
   if (scrollPosition > 470) {
        navbar.style.opacity = 0;
    } else if (scrollPosition > 425) {
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
});
