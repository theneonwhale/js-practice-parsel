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

promise.then(
  onFulfilled,
  onRejected,

  //   result => console.log(result), //resolve
  //   error => console.log(error), //reject
);

console.log(promise);

function onFulfilled(result) {
  console.log(`${result} 🐸 Everything is OK!`);
}

function onRejected(error) {
  console.log(`${error} 🐷 Everything is SAD!`);
}
