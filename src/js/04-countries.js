import '../css/common.css';
import '../css/countries.css';
import countries from './countries.json';
import itemsTemplate from '../templates/countries-items.hbs';

const galleryRef = document.querySelector('.js-gallery');

const markup = itemsTemplate(countries);
galleryRef.insertAdjacentHTML('beforeend', markup);