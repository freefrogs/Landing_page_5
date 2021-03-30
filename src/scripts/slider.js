const slider = () => {
  const slides = [...document.querySelectorAll('.download__slide')];

  const changeSlide = (el) => {
    let s = el.dataset.slide;
    el.classList.remove(`download__slide--${s}`);
    if (s === '3') {
      s = 1
    } else {
      s = parseInt(s,10);
      s++;
    }
    el.classList.add(`download__slide--${s}`)
    el.dataset.slide = s;
  }

  setInterval(() => {
    slides.map(s => {
      changeSlide(s);
    })
  }, 4000);
}

export default slider