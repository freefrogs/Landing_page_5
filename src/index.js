import './styles/style.scss';
import slider from './scripts/slider';
import formValidation from './scripts/formValidation';
import hamburger from './scripts/hamburger';

document.addEventListener('DOMContentLoaded', function() {
  slider();
  formValidation();
  hamburger();
});