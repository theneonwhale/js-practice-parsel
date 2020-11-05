// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  // return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 1000));
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 1000),
  );

  // return 5;
}

async function aMakeSmoothie() {
  try {
    console.time('aMakeSmoothie');
    const apple = await getFruit('apple');
    // console.log(apple);
    const kiwi = getFruit('kiwi');
    // console.log(kiwi);
    const strawberry = getFruit('strawberry');
    // console.log(kiwi);

    const fruits = await Promise.all([apple, kiwi, strawberry]);
    console.log(fruits);
    return fruits;
    console.timeEnd('aMakeSmoothie');
  } catch (error) {
    console.log('Error ', error);
  }
}

aMakeSmoothie().then(fruits => console.log(fruits));

// function makeSmoothie() {
//   getFruit('apple').then(apple => {
//     console.log(apple);
//     getFruit('kiwi').then(apple => console.log(apple));
//   });
// }

// const fn = async function () {};

// const arc = async () => {};

// const obj = {
//   async getName() {},
// };

// class X {
//   async getName() {}
// }
