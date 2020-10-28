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
import API from './api-service'; //бэкенд
import getRefs from './get-refs'; //рефы

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  API.fetchPokemonById(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
  // console.log(form.elements);
}

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
// fetchPokemonById(45)
//   .then(renderPokemonCard)
//   .catch(error => console.log(error));

API.fetchAdventureTimeById('finn')
  .then(renderAdventureTimeCard)
  .catch(error => console.log(error));

// .then(renderPokemonCard)
// .catch(error => console.log(error));

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function renderAdventureTimeCard(adventure) {
  refs.cardATContainer.innerHTML = adventureTimeCardTpl(adventure);
}

function onFetchError(error) {
  alert('Error!!! Ups!');
}

//////////////////////Параметры запроса/////////////////////////

fetch('https://pokeapi.co/api/v2/pokemon?offset=300&limit=100')
  .then(r => r.json())
  .then(console.log);

fetch(
  'https://pixabay.com/api?key=18468929-778868d20e0ea2a779d7d4913&q=cosmos&image_type=illustration',
)
  .then(r => r.json())
  .then(console.log);

const url = 'http://newsapi.org/v2/top-headlines?q=коронавирус';
const options = {
  headers: { 'X-Api-Key': '78a7a5d1d4074a089e9876225c6e9b0d' },
};
fetch(url, options)
  .then(response => response.json())
  .then(console.log);

fetch(
  'http://api.weatherstack.com/current?access_key=dc5b1cd5a04b8c218f2c43a23746cffe&query=Kiev',
)
  .then(response => response.json())
  .then(console.log);
