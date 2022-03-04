// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function() {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("header_scroll");
        } else {
            nav.classList.remove("header_scroll");
        }
    }
    // Hide Navbar
let navBar = document.querySelectorAll(".nav-link, .btn-main");
let navCollapse = document.querySelector(".navbar-collapse");
navBar.forEach(function(a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    })
})