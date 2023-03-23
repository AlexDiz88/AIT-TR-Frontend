"use strict";

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

const increaseFontBtn = document.getElementById("increase-font-btn");
const decreaseFontBtn = document.getElementById("decrease-font-btn");
const getFontSizeBtn = document.getElementById("get-font-btn");
let text = document.getElementsByTagName("p");
let textFontSize = window.getComputedStyle(text[0]).fontSize;

getFontSizeBtn.addEventListener("click", () => {
  console.log(textFontSize);
});

increaseFontBtn.addEventListener("click", () => {
  textFontSize = parseInt(textFontSize) + 2;
  for (let i = 0; i < text.length; i++) {
    text[i].style.fontSize = textFontSize + "px";
  }
});

decreaseFontBtn.addEventListener("click", () => {
  textFontSize = parseInt(textFontSize) - 2;
  for (let i = 0; i < text.length; i++) {
    text[i].style.fontSize = textFontSize + "px";
  }
});

// типы данных
// BigInt
let num = 1234567896456464654646247657575745642341n;
let num2 = 24646248425152341n;
num = num / num2;
console.log(num);

// string
let str1 = "текст в двойных кавычках";
let a = 100500;
let str2 = `текст в обратных кавычках позволяет использовать ${a} выражения внутри себя`;
console.log(str1);
console.log(str2);
let arr = [1, 2, 3];

let result = prompt("Заголовок:", [
  "начальное значение в окне (не обязательно)",
]); // модальное окно с вводом
console.log(result); // введеное значение

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
}
