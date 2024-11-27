function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel__inner');
  const carouselArrowRight = carousel.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = carousel.querySelector('.carousel__arrow_left');

  const slideWidth = carousel.querySelector('.carousel__slide').offsetWidth;
  const slidesCount = carouselInner.children.length;
  let activeSlidePosition = 0;

  function showAvailibleArrows () {
    carouselArrowRight.style.display = activeSlidePosition === slidesCount - 1 ? 'none' : '';
    carouselArrowLeft.style.display = activeSlidePosition === 0 ? 'none' : '';
  }

  function carouselClickHandler (evt) {
    let carouselArrow = evt.target.closest('.carousel__arrow');

    if (!carouselArrow) {
      return;
    }

    if (carouselArrow === carouselArrowRight) {
      activeSlidePosition++;
    } else {
      activeSlidePosition--;
    }

    carouselInner.style.transform = `translateX(-${slideWidth * activeSlidePosition}px)`;
    showAvailibleArrows();
  }

  showAvailibleArrows();

  carousel.addEventListener('click', carouselClickHandler);
}
