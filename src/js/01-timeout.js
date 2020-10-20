import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До вызова setTimeout');

// setTimeout(x => {
//   console.log(x);
//   console.log('1 - Внутри callback для setTimeout');
// }, 2000, 56);

// setTimeout(() => {
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000);

// console.log('После вызова setTimeout');

// for (let i = 0; i < 10000; i += 1) {
//   console.log(i);
// }

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}