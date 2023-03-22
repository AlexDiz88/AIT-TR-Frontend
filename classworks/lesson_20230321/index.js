let heroes = ["Tom", "Jerry"];

function addToBeginning(array, element) {
  array.shift();
  // array.shift().unshift(element); // выдаст ошибку
  console.log(array.push("Extra"));
}

addToBeginning(heroes, "Billy");

console.log(heroes);

// Начало:
// shift - убирает нулевой элемент и его же возвращает
// unshift - добавляет в начало и возвращает длину массива

// Работают с концом:
// push - добавляет элемент в конец и возвращает длину массива
// pop - удаляет последний элемент массива и возвращает его
