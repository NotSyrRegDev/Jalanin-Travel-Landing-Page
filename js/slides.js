const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 1,
  allowSlideNext: true,
  loop: true,
});

const swiper2 = new Swiper('.swiper-2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 3,
  allowSlideNext: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});

const swiper3 = new Swiper('.swiper-3', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 3,
  allowSlideNext: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }

});

setInterval(() => {
    swiper.slideNext();
},  3000)
setInterval(() => {
    swiper2.slideNext();
},  5000)
setInterval(() => {
    swiper3.slideNext();
},  2500)
