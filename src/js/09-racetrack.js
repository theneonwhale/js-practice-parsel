import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);
  updateWinnerField('');
  updateProgressField('🤖 Заезд начался, ставки не принимаются!');

  determineWinner(promises);
  waitForAll(promises);

  // Promise.race(promises).then(({ horse, time }) => {
  // updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time} времени.`);
  // updateResultsTable({ horse, time, raceCounter });
  // refs.winnerField.textContent = `🎉 Победил ${horse}, финишировав за ${time} времени.`;
  // console.log(`🎉 Победил ${horse}, финишировав за ${time} времени.`);
  // });
  // Promise.all(promises).then(({ horse, time }) => {
  // updateProgressField('📝 Заезд окончен, принимаются ставки.');
  // refs.progressField.textContent = '📝 Заезд окончен, принимаются ставки.';

  // console.log('📝 Заезд окончен, принимаются ставки.');
  // });
}

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 5000);

    setTimeout(() => {
      resolve({ horse, time });
      reject();
    }, time);
  });
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
    времени`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField('📝 Заезд окончен, принимаются ставки.');
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

// run(horses[0])
//   .then(x => console.log(x))
//   .catch(y => console.log(y));

// run(horses[1])
//   .then(x => console.log(x))
//   .catch(y => console.log(y));

// run(horses[2])
//   .then(x => console.log(x))
//   .catch(y => console.log(y));

// run(horses[3])
//   .then(x => console.log(x))
//   .catch(y => console.log(y));
// run(horses[4])
//   .then(x => console.log(x))
//   .catch(y => console.log(y));

// const promises = horses.map(run);

// console.log(promises);

// Promise.race(promises).then(({ horse, time }) => {
//   console.log(`🎉 Победил ${horse}, финишировав за ${time} времени.`);
// });
// Promise.all(promises).then(({ horse, time }) => {
//   console.log('📝 Заезд окончен, принимаются ставки.');
// });

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
