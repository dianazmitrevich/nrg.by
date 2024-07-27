$(".main-banner .banner__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
});

let menuToggles = document.querySelectorAll(".menu-toggle");
let menu = document.querySelector(".header .menu");
let body = document.querySelector("body");

menuToggles.forEach((menuToggle) => {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
        body.classList.toggle("stop-scroll");
    });
});

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && ![...menuToggles].some((toggle) => toggle.contains(event.target))) {
        menu.classList.remove("show");
        body.classList.remove("stop-scroll");
    }
});
