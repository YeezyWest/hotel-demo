"use strict"
const hamburger = document.querySelector('#hamburger-btn');
const menu  = document.querySelector('#mobile-menu')

const toggleBtn = ()=>{
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex')
}
hamburger.addEventListener('click',toggleBtn)
menu.addEventListener('click',toggleBtn)

const arrowLeft = document.querySelector('#arrow-left')
const arrowRight = document.querySelector('#arrow-right')


// let slides = document.querySelectorAll('.slide');
// let index = 0;
// arrowLeft.addEventListener('click', function () {
// 	index = (index + 1) % slides.length;
//     console.log('ok');
// });
// arrowRight.addEventListener('click', function () {
// 	index = (index - 1 + slides.length) % slides.length;
// });
// Slider
const slider = function () {
    const arrowLeft = document.querySelector('#arrow-left')
    const arrowRight = document.querySelector('#arrow-right')
    const slides = document.querySelectorAll('.slide');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  

  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
  
    };
    init();
  
    // Event handlers
    arrowRight.addEventListener('click', nextSlide);
    arrowLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });

  };
  slider();