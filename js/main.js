const swiper2 = new Swiper('.main__slider', {

    slidesPerView: "auto",
    spaceBetween: 14,
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.main__next',
        prevEl: '.main__prev',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 6
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 14,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 14,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});

const headerLang = document.querySelector(".header__lang-curr");
if (headerLang) {
    document.addEventListener("click", (e) => {

        if (headerLang.closest(".header__lang").classList.contains("active") & !e.target.closest('.header__lang-drop')) {
            headerLang.closest(".header__lang").classList.remove("active");
        } else if (e.target.closest('.header__lang-curr')) {
            e.preventDefault();
            headerLang.closest(".header__lang").classList.add("active");
        } else if (e.target.closest('.header__lang-close')) {
            headerLang.closest(".header__lang").classList.remove("active");
        }
    });
}

const headerLangLinks = document.querySelectorAll(".header__lang-drop a");
if (headerLangLinks) {
    headerLangLinks.forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            headerLang.closest(".header__lang").classList.remove("active");
            headerLang.querySelector("img").src = el.querySelector("img").src;
        });
    });
}