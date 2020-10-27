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
import adventureTimeCardTpl from '../templates/adventure-time-cards.hbs';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  cardATContainer: document.querySelector('.js-at-card-container'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', fetchPokemonById);

// const r = fetch('https://pokeapi.co/api/v2/pokemon/9').then(data =>
//   console.log(data),
// );

// const r = fetch('https://pokeapi.co/api/v2/pokemon/330')
//   .then(response => {
//     return response.json();
//   })
//   .then(renderPokemonCard)
//   .catch(error => console.log(error));

// console.log(r);
fetchPokemonById(45)
  .then(renderPokemonCard)
  .catch(error => console.log(error));

fetchAdventureTimeById('finn')
  .then(renderAdventureTimeCard)
  .catch(error => console.log(error));

function fetchPokemonById(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => {
      return response.json();
    },
  );
}

function fetchAdventureTimeById(adventureTimeId) {
  return fetch(
    `https://adventure-time-api.herokuapp.com/api/v1/characters/${adventureTimeId}`,
  ).then(response => {
    return response.json();
  });
}
// .then(renderPokemonCard)
// .catch(error => console.log(error));

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function renderAdventureTimeCard(adventure) {
  refs.cardATContainer.innerHTML = adventureTimeCardTpl(adventure);
}
