// slider.js - Swiper slider configurations
function initSliders() {
  // Hero slider (if exists)
  const heroSlider = document.querySelector('.hero-swiper');
  if (heroSlider) {
    new Swiper('.hero-swiper', {
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 1000,
      pagination: { el: '.hero-pagination', clickable: true },
    });
  }

  // Testimonial slider
  const testimonialSlider = document.querySelector('.testimonial-swiper');
  if (testimonialSlider) {
    new Swiper('.testimonial-swiper', {
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: { el: '.testimonial-pagination', clickable: true },
      navigation: { nextEl: '.testimonial-next', prevEl: '.testimonial-prev' },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  // Project slider
  const projectSlider = document.querySelector('.project-swiper');
  if (projectSlider) {
    new Swiper('.project-swiper', {
      loop: true,
      autoplay: { delay: 3500, disableOnInteraction: false },
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: { el: '.project-pagination', clickable: true },
      navigation: { nextEl: '.project-next', prevEl: '.project-prev' },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }

  // Brand slider
  const brandSlider = document.querySelector('.brand-swiper');
  if (brandSlider) {
    new Swiper('.brand-swiper', {
      loop: true,
      autoplay: { delay: 2000, disableOnInteraction: false },
      speed: 500,
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      },
    });
  }

  // Gallery slider
  const gallerySlider = document.querySelector('.gallery-swiper');
  if (gallerySlider) {
    new Swiper('.gallery-swiper', {
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: { el: '.gallery-pagination', clickable: true },
      navigation: { nextEl: '.gallery-next', prevEl: '.gallery-prev' },
      breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      },
    });
  }
}

document.addEventListener('DOMContentLoaded', initSliders);