const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemonById(pokemonId) {
  return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response => {
    // console.log('THEN!!');
    // console.log(response);

    return response.json();
  });
}

function fetchAdventureTimeById(adventureTimeId) {
  const url = `https://adventure-time-api.herokuapp.com/api/v1/characters/${adventureTimeId}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

export default { fetchPokemonById, fetchAdventureTimeById };
