// обозначение проблемы
function getNum() {
  setTimeout(() => {
    return 10;
  }, 3000);
}
let result = getNum();
console.log(result); // получим undefined , так как синхронная функция не ждет таймера и сразу получает результат

// Решение этой проблемы: создание промиса (обещания)
let promise = new Promise(function (resolved, reject) {
  setTimeout(() => {
    resolved(10);
  }, 3000);
});
console.log(promise); // промис в состоянии "pending"

// дожидаемся ответа при помощи "then"
// value - это переменная в которой сохранилось значение
promise.then((value) => {
  console.log(value);
  // значение доступно только внутри callback-функции
});

// создадим промис с reject
let promise2 = new Promise(function (resolved, rejected) {
  setTimeout(() => {
    rejected(new Error("Ошибка"));
  }, 3000);
});
promise2
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
