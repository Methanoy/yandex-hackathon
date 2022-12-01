//элементы карусели
const sliders = Array.from(document.querySelectorAll('.carousel'));
const marginWidth = 20;

sliders.forEach((el) => {
  const slider = el;
  const sliderList = slider.querySelector('.carousel__section');
  const slides = slider.querySelectorAll('.carousel__element');
  const breadcrumbs = slider.querySelectorAll('.breadcrumbs__dot');
  const slideWidth = (slides[0].offsetWidth + marginWidth);

  let slideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posY1 = 0,
    posY2 = 0,
    posFinal = 0,
    isSwipe = false,
    isScroll = false,
    allowSwipe = true,
    transition = true,
    nextTrf = 0,
    prevTrf = 0,
    lastTrf = --slides.length * slideWidth,
    posThreshold = slides[0].offsetWidth * 0.35,
    trfRegExp = /([-0-9.]+(?=px))/;

  function swipeStart() {
    let evt = getEvent();

    if (allowSwipe) {

      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderList.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
    }
  }

  function breadcrumbsStyle(index) {
    breadcrumbs.forEach(dot => dot.classList.remove('breadcrumbs__dot_active'));
    breadcrumbs[index].classList.add('breadcrumbs__dot_active');
  }

  function swipeAction() {
    let evt = getEvent(),
      style = sliderList.style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    // определение действия: свайп или скролл
    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет протаскивания дальше одного слайда
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      // двигаем слайд
      sliderList.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }
  }

  function swipeEnd() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--;
          breadcrumbsStyle(slideIndex);
        } else if (posInit > posX1) {
          slideIndex++;
          breadcrumbsStyle(slideIndex);
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }
  }


  function getEvent() {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  };

  function slide() {
    if (transition) {
      sliderList.style.transition = 'transform .5s';
    }
    sliderList.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
  };

  function setTransform(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderList.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  };

  function reachEdge() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

  sliderList.style.transform = 'translate3d(0px, 0px, 0px)';


  sliderList.addEventListener('transitionend', () => allowSwipe = true);
  slider.addEventListener('touchstart', swipeStart);
})
