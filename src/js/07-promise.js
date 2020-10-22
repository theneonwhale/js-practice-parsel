/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Promise is OK!');
    }

    reject('Promise is NOT ok!');
  }, 1000);
});

// promise.then(
//   onFulfilled,
//   onRejected,

//   //   result => console.log(result), //resolve
//   //   error => console.log(error), //reject
// );

// console.log(promise);

function onFulfilled(result) {
  console.log(`${result} 🐸 Everything is OK!`);
}

function onRejected(error) {
  console.log(`${error} 🐷 Everything is SAD!`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// promise
//   .then(result => {
//     console.log(result);
//     return 4;
//   })
//   .then(x => {
//     console.log(x);
//     return 5;
//   })
//   .then(y => {
//     console.log(y);
//     return 6;
//   });

// promise
//   .then(onFulfilled, onRejected)
//   .then(
//     x => {
//       console.log(x);
//       throw Error('Error 😞  on 2 cicle');
//       return 5;
//     },
//     error => console.log(error),
//   )
//   .then(
//     y => console.log(y),
//     error => console.log(error),
//   );

promise
  .then(onFulfilled)
  .then(x => {
    console.log(x);
    // throw new Error('This is error 🍼 in 2 then.');
    return 5;
  })
  .then(y => console.log(y))
  .catch(error => console.log(`${error} This is catch error 👹 .`))
  .finally(() => {
    console.log('This is 🦁 finnaly.');
  });
