const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger-close");
const openFeatures = document.querySelector(".open-features");
const openCompany = document.querySelector(".open-company");
const featuresMobile = document.querySelector(".features-mobile");
const companyMobile = document.querySelector(".company-mobile");
const openSvg = document.querySelector("#openSvg");
const openSvg2 = document.querySelector("#openSvg2");

mobileMenu.classList.toggle("flex-col");
mobileMenu.classList.toggle("mobile-menu");
mobileMenu.classList.toggle("none");

//Event Listeners

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("flex-col");
    mobileMenu.classList.toggle("mobile-menu");
    mobileMenu.classList.toggle("none");
    overlay.classList.toggle("none");
});

hamburgerClose.addEventListener("click", () => {
    mobileMenu.classList.toggle("flex-col");
    mobileMenu.classList.toggle("mobile-menu");
    mobileMenu.classList.toggle("none");
    overlay.classList.toggle("none");
    featuresMobile.classList.remove("flex-col");
    featuresMobile.classList.add("none");
    companyMobile.classList.remove("flex-col");
    companyMobile.classList.add("none");
    openSvg.classList.remove("open-svg");
    openSvg2.classList.remove("open-svg");
});

openFeatures.addEventListener("click", () => {
    featuresMobile.classList.toggle("none");
    featuresMobile.classList.toggle("flex-col");
    openSvg.classList.toggle("open-svg");
});

openCompany.addEventListener("click", () => {
    companyMobile.classList.toggle("none");
    companyMobile.classList.toggle("flex-col");
    openSvg2.classList.toggle("open-svg");
});
