"use strict";

const arr = [1, 2, 3];
let [a, b, c, d = "default"] = arr;
console.log(arr);
console.log(a, b, c, d);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
d = 34;
console.log(d);

// задачи
//-------------------------------------------
// Задача 1 - Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log(fruits.length); // ответ: 4

//-------------------------------------------
// Задача 2
// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.

// Решение:
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл"); // [ 'Джаз', 'Блюз', 'Рок-н-ролл' ]
console.log(styles);
let middleEl = Math.floor(styles.length / 2);
styles[middleEl] = "Классика"; // [ 'Джаз', 'Классика', 'Рок-н-ролл' ]
console.log(styles);
let deletedFirstElement = styles.shift(); // Джаз
console.log(deletedFirstElement);
styles.unshift("Рэп", "Регги"); // [ 'Рэп', 'Регги', 'Классика', 'Рок-н-ролл' ]
console.log(styles);

//-------------------------------------------
// Задача 3 - Каков результат? Почему?
let arr3 = ["a", "b"];

arr3.push(function () {
  console.log("function code");
});

arr3[2](); // во вторую ячейку добавится функция и она будет вызвана этой строкой кода

//-------------------------------------------
// Задача 4
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
let numArray = [];
//input();

function sumInput(arrNumbers) {
  let res = 0;
  arrNumbers.forEach((element) => {
    res += element;
  });
  console.log(res);
}

function input() {
  let num = prompt("Введите число");
  if (num === null || num === "" || isNaN(Number(num))) {
    sumInput(numArray);
  } else {
    numArray.push(Number(num));
    input();
  }
}

//-------------------------------------------
// Задача 5
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:
// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
console.log("---Задача 5---");
let array = [1, 3, -2, -6, 3, 4, -9, 8, -5, -2, 21, 4, -6, 8, 7];
console.log(getMaxSubSum(array));
console.log(getMaxSubSum2(array));

function getMaxSubSum2(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (let item of arr) {
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }
  return maxSum;
}

function getMaxSubSum(arr) {
  let chain = 0;
  let chainPositive = 0;
  let maxChainSum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num >= 0) {
      chain += num;
      if (chain > chainPositive) {
        chainPositive = chain;
      }
    } else if (num < 0) {
      if (chain + num < 0) {
        if (chainPositive > maxChainSum) {
          maxChainSum = chainPositive;
        }
        chain = 0;
        chainPositive = 0;
      } else if (chain + num >= 0) {
        chain += num;
      }
    }
  }
  if (chainPositive > maxChainSum) {
    maxChainSum = chainPositive;
  }
  return maxChainSum;
}
