/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('Its 😂 OK!');
//       } else {
//         reject('Its NOT 🛢 ok!');
//       }
//     }, DELAY);
//   });
// };

// makeOrder('pie').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

const makeOrder = dish => {
  return Promise.resolve(`Its 😂 OK! ${dish}`);
};

makeOrder('pie').then(onMakeOrderSuccess);

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
}

function onMakeOrderError(error) {
  console.log('onMakeOrderError');
  console.log(error);
}

/*
 * Покемоны с https://pokeapi.co/
 */

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(r => r.json())
  .then(pokemon => {
    console.log(pokemon);
  })
  .catch(error => {
    console.log('This is catch.');
    console.log(error);
  });
