var swiper = new Swiper('.slide-characters', {
  slidesPerView: 4,
  spaceBetween: 19,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    375: {
      slidesPerView: 1.3,
    },
    425: {
      slidesPerView: 1.5,
    },
    560: {
      slidesPerView: 1.9,
    },
    768: {
      slidesPerView: 2.4,
    },
    992: {
      slidesPerView: 3.1,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
});

AOS.init({
  duration: 1000,
  once: true,
})
