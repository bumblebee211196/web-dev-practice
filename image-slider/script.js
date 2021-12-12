const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.btn.next');
const prevButton = document.querySelector('.btn.prev');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');
const totalSlides = slides.length;
const interval = 3000;

let slideNumber = 0;
let autoPlay;
let playSlides;

const activateSlide = (index) => {
  slides.forEach((activeSlide) => {
    if (activeSlide.classList.contains('active')) {
      activeSlide.classList.remove('active');
    }
  });
  slides[index].classList.add('active');
}

const activateSlideIcon = (index) => {
  slideIcons.forEach((activeSlideIcon) => {
    if (activeSlideIcon.classList.contains('active')) {
      activeSlideIcon.classList.remove('active');
    }
  });
  slideIcons[index].classList.add('active');
}

const next = () => {
  slideNumber++;
  if (slideNumber === totalSlides) { slideNumber = 0 }
}

const prev = () => {
  slideNumber--;
  if (slideNumber < 0) { slideNumber = totalSlides - 1 }
}

const repeater = () => {
  playSlides = setInterval(() => {
    next();
    activateSlide(slideNumber);
    activateSlideIcon(slideNumber);
  }, interval);
}

nextButton.addEventListener('click', () => {
  next();
  activateSlide(slideNumber);
  activateSlideIcon(slideNumber);
});
prevButton.addEventListener('click', () => {
  prev();
  activateSlide(slideNumber);
  activateSlideIcon(slideNumber);
});
slideIcons.forEach((slideIcon, index) => {
  slideIcon.addEventListener('click', () => {
    slideNumber = index;
    activateSlide(index);
    activateSlideIcon(index);
  })
});
slider.addEventListener('mouseover', () => {
  clearInterval(playSlides);
});
slider.addEventListener('mouseout', () => {
  repeater();
});

activateSlide(slideNumber);
activateSlideIcon(slideNumber);
repeater();
