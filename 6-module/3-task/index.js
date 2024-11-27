import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;

  #slides = [];
  #currentSlidePosition = 0;

  constructor(slides) {
    this.#slides = slides || this.#slides;

    this.#render();
  }

  #render() {
    this.elem = createElement(this.#template());

    this.elem.addEventListener('click', this.#onCarouselClick);
    this.#update();
  }

  #template() {
    return `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          ${this.#slides.map(slide => {
      return `
                <div class="carousel__slide" data-id="${slide.id}">
                  <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
                  <div class="carousel__caption">
                    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                    <div class="carousel__title">${slide.name}</div>
                    <button type="button" class="carousel__button">
                      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                    </button>
                  </div>
                </div>
            `
    }).join('\n')}
        </div>
      </div>
    `;
  }

  #onCarouselClick = ({ target }) => {
    if (target.closest('.carousel__button')) {
      const productAddEvent = new CustomEvent('product-add', {
        detail: target.closest('.carousel__slide').dataset.id,
        bubbles: true
      });

      this.elem.dispatchEvent(productAddEvent);
    }

    target.closest('.carousel__arrow_right') && this.#next();
    target.closest('.carousel__arrow_left') && this.#prev();
  }

  #next() {
    this.#currentSlidePosition++;
    this.#update();
  }

  #prev() {
    this.#currentSlidePosition--;
    this.#update();
  }

  #update() {
    const shift = -this.elem.offsetWidth * this.#currentSlidePosition;
    this.elem.querySelector('.carousel__inner').style.transform = `translateX(${shift}px)`;

    this.elem.querySelector('.carousel__arrow_left').style.display = this.#currentSlidePosition === 0 ? 'none' : '';
    this.elem.querySelector('.carousel__arrow_right').style.display = this.#currentSlidePosition === this.#slides.length - 1 ? 'none' : '';
  }
}
