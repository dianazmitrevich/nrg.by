$(".main-banner .banner__slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
});

$(".restaurants__cards .cards__list").slick({
    arrows: false,
    dots: false,
    infinite: false,
    // slidesToShow: 3,
    variableWidth: true,
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

let d_tabs = document.querySelectorAll(".d_tabs");

d_tabs.forEach((d_tab) => {
    let tabs = d_tab.querySelectorAll(".tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            let num = parseInt(tab.getAttribute("data-tab"));

            d_tab.querySelectorAll(".tab").forEach((element) => {
                element.classList.remove("selected");
            });

            d_tab.parentNode.querySelectorAll(".card").forEach((element) => {
                element.classList.remove("selected");
            });

            tab.classList.add("selected");
            let selectedCard = d_tab.parentNode.querySelector(`.card[data-tab='${num}']`);
            selectedCard.classList.add("selected");
        });
    });
});
