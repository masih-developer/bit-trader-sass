const navbar = document.querySelector(".nav");
const navListWrapper = document.querySelector(".nav__list-wrapper");
const navbarOpenBtn = document.querySelector(".nav__bar-icon");
const navbarCloseBtn = document.querySelector(".nav__close-icon");

window.addEventListener("scroll", () => {
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add("nav--active");
    } else {
        navbar.classList.remove("nav--active");
    }
});

navbarOpenBtn.addEventListener("click", () => {
    navListWrapper.classList.add("nav__list--show");
});

navbarCloseBtn.addEventListener("click", () => {
    navListWrapper.classList.remove("nav__list--show");
});

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
    spaceBetween: 40,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});
