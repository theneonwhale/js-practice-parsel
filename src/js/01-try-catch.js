// Обработка ошибок с try...catch
//  - Синтаксис
//  - Какие ошибки ловит
//    - ❌ ошибки парсинга (parsing errors)
//    - ✅ ошибки выполнения (runtime errors)
//  - Ловит только ошибки в синхронном коде
//    - Как словить ошибку в асинхронном коде
//  - Объект ошибки
//    - name
//    - message
//    - stack
//  - Блок catch без объекта ошибки

try {
  console.log('1-1');
  // setTimeout(() => {
  //   try {
  //     myVar;
  //   } catch (error) {
  //     console.log('error');
  //   }
  // }, 500);
  myVar;

  console.log('1-2');
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);

  console.log('error');
}
console.log(2);
