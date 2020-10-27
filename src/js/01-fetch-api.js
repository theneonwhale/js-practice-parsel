/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-cards.hbs';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
};

// const r = fetch('https://pokeapi.co/api/v2/pokemon/9').then(data =>
//   console.log(data),
// );

const r = fetch('https://pokeapi.co/api/v2/pokemon/667')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
    refs.cardContainer.innerHTML = markup;
  })
  .catch(error => console.log(error));

// console.log(r);
