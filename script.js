// ALERT DI BENVENUTO
const alertBtn = document.getElementById("alert-btn");
 
if (alertBtn) {
    alertBtn.addEventListener("click", function () {
        alert("Benvenuto a bordo, pirata!");
    });
}
 
// MENU MOBILE
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
 
if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}
 
// EFFETTO SCROLL HEADER
window.addEventListener("scroll", function () {
 
    const header = document.querySelector("header");
 
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#0d2230";
    } else {
        header.style.backgroundColor = "#142f43";
    }
});