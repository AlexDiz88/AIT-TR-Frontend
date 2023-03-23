// функция которая возвращает промис (а в промисе число)
function loadNumber() {
  return new Promise(function (resolved, rejected) {
    setTimeout(() => {
      // любой наш код
      let result = 158;
      resolved(result);
    }, 3000);
  });
}

let promiseOfNumber = loadNumber(); // функция вернула промис
let number = promiseOfNumber.then((value) => {
  console.log("Внутри callback-функции" + value); // получаем значение resolved
  return value;
});
console.log("За пределами callback-функции" + number); // не получает значение, т.к. вызов синхронный
