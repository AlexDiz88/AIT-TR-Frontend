"use strict";

// повторение промисов
let student = {
  name: "Max",
  age: 26,
};

function getStudent() {
  return new Promise(function (resolved, rejected) {
    setTimeout(() => {
      resolved(student);
    }, 100);
  });
}

let promiseStudent = getStudent().then((someData) => {
  //   console.log(someData.name);
});

//---------------------------------------------------------------------------//

// проект Random Cat
// https://aws.random.cat/meow
const catImg = document.getElementById("catImage");
const btnStart = document.getElementById("startBtn");
const btnStop = document.getElementById("stopBtn");
let catGeneratorTimer;
let isActive;
catsGenerating();

function catsGenerating() {
  catGeneratorTimer = setInterval(() => {
    getCatImage();
  }, 5000);
}
btnStart.addEventListener("click", () => {
  if (!isActive) {
    isActive = true;
    catsGenerating();
  }
});
btnStop.addEventListener("click", () => {
  clearInterval(catGeneratorTimer);
  isActive = false;
});

async function getCatImage() {
  const response = await fetch("https://aws.random.cat/meow");
  catImg.src = (await response.json()).file;
}

//
//
//
// более сложный для чтения код
function getCatImage2() {
  // 1. кинули fetch, получаем в ответ Promise
  let responsePromise = fetch("https://aws.random.cat/meow");
  // 2. Дождались промис и сохранили значение в переменную
  // objPromise - в этой переменной лежит ответ с сервера
  let objPromise = responsePromise.then((response) => {
    // 3. Превращаем полученный объект в JSON
    // метод json(); - асинхронный, т.е. возвращает промис
    return response.json();
  });
  let obj = objPromise.then((obj) => {
    catImg.src = obj.file;
    return obj;
  });
}
