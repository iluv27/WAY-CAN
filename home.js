

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
