const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}));

var navbar = document.getElementById("navbar");
var backToTopBtn = document.getElementById("back-to-top-btn");

window.onscroll = function() {
    var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;    

    if (scrollPosition > 230) {
        navbar.style.opacity = 0;
    } else if (scrollPosition > 200) {
        navbar.style.opacity = 0.4;
    } else if (scrollPosition > 150) {
        navbar.style.opacity = 0.7;
    } else if (scrollPosition > 100) {
        navbar.style.opacity = 0.8;
    } else if (scrollPosition > 50) {
        navbar.style.opacity = 0.9;
    } else {
        navbar.style.opacity = 1;
    }

    if (scrollPosition > 260) {
        backToTopBtn.style.opacity = 1;
        backToTopBtn.classList.add("show"); 
    } else {
        backToTopBtn.style.opacity = 0;
        backToTopBtn.classList.remove("show"); 
    }  
};




backToTopBtn.addEventListener("click", function(){
    console.log('back to top button clicked')
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
});

document.querySelectorAll('.nav-link[href="#showreel"]').forEach(function(el) {
    el.addEventListener('click', function() {
        document.querySelector("#showreel").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.querySelectorAll('.nav-link[href="#videos"]').forEach(function(el) {
    el.addEventListener('click', function() {
        document.querySelector("#videos").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.querySelectorAll('.nav-link[href="#aboutme"]').forEach(function(el) {
    el.addEventListener('click', function() {
        console.log(document.querySelector("#aboutme"));
        document.querySelector("#aboutme").scrollIntoView({
   			behavior: "smooth",
    		block: "end"
        });
    });
});






// Get the screen width
var screenWidth = window.innerWidth;

// Check if screen width is less than 800px
if (screenWidth < 800) {
  // Add a class to the body element to adjust the layout
  document.body.classList.add("small-screen");
} else {
  // Remove the class to revert back to the original layout
  document.body.classList.remove("small-screen");
}


window.addEventListener("resize", function() {
  // Get the screen width
  var screenWidth = window.innerWidth;

  // Check if screen width is less than 800px
  if (screenWidth < 800) {
    // Add a class to the body element to adjust the layout
    document.body.classList.add("small-screen");
  } else {
    // Remove the class to revert back to the original layout
    document.body.classList.remove("small-screen");
  }
});












