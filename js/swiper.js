const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  // Default parameters
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    220: {
      slidesPerView: 4,
      spaceBetween: 2,
      direction: 'vertical',
      grid: {
        rows: 1,
      },
    },
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },

});