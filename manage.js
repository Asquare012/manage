// menu
let menu = document.querySelector("#menu");
menu.style.right = "-800px";
// image
let img = document.querySelector("#try");
// button
let butt = document.querySelector("#burger");
butt.addEventListener("click", action);

function action() {
    if (menu.style.right == "-800px") {
        menu.style.right = "20px";
        img.src = "icon-close.svg";
        document.body.style.backgroundColor = "#00000010";
    } else {
        menu.style.right = "-800px";
        img.src = "icon-hamburger.svg";
        document.body.style.backgroundColor = "#00000000";
    }
}
// slider
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});