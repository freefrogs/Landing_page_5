const hamburger = () => {
  const ham = document.querySelector('.nav__hamburger');
  const nav = document.querySelector('.nav__small');

  const onHamburgerClick = () => {
    ham.classList.toggle('nav__hamburger--active');
    if (ham.classList.contains('nav__hamburger--active')) {
      nav.classList.add('nav__small--active');
    } else {
      nav.classList.remove('nav__small--active');
    }
  }
  ham.addEventListener('click', onHamburgerClick);
};

export default hamburger;