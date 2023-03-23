// Тема - Ассинхронность: Timers, Eventloop, Promise, then, fetch

// объявили асинхронную функцию
// сначала выполнится синхронный код, только потом асинхронный
// Eventloop - процесс реализации задержки выполнения кода в однопоточном движке JS
setTimeout(() => {
  console.log("Сработает через 3 сек после вызова");
}, 3000);

setTimeout(() => {
  console.log("асинхронный код с 0 задержкой");
}, 0);

console.log("Обычный код");

function hello() {
  setTimeout(() => {
    console.log("Мы хорошо разобрались в EventLoop");
  }, 1500);
}

hello();

// написать функцию, которая принимает слово и выводит его через N секунд
function latePrint(word, latency) {
  setTimeout(() => {
    console.log(word);
  }, latency * 1000);
}

latePrint("Slow Boom!", 3);
