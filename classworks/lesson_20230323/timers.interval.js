// периодический вызов кода каждые N сек
const ourInterval = setInterval(() => {
  console.log("периодический вызов кода");
}, 500);

setTimeout(() => {
  clearInterval(ourInterval);
}, 2000);

// создать функцию - "А я же говорила" с интервалом 3 сек,
// которая останавливается через 20 сек
const iVeToldYou = setInterval(() => {
  console.log("А я же говорила");
}, 3000);

setTimeout(() => {
  clearInterval(iVeToldYou);
}, 20000);
