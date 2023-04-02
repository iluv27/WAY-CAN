

// For the fixed Nav Section

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.querySelector("nav").classList.add("fixed");
        document.querySelector(".started-button").classList.add("fixed");
    } else {
        document.querySelector("nav").classList.remove("fixed");
        document.querySelector(".started-button").classList.remove("fixed");
    }
}


// For the responsive nav bar
const burger = document.querySelector(".burger");
const nav = document.querySelector(".pages");
const navLinks = document.querySelectorAll(".pages li");

burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
});

