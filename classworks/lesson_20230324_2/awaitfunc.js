"use strict";

function getFive() {
  return 5;
}
let result = getFive();
console.log(result);

// с помощью async мы делаем функцию асинхронной
// мы получаем промис в качестве return
async function getSeven() {
  return new Promise(function (resolved, rejected) {
    setTimeout(() => {
      resolved(7);
    }, 2000);
  });
}
let result2 = getSeven();
console.log(result2);

// с помощью await мы избавляемся от then и запись становится проще
let result3;
getNine();
async function getNine() {
  result3 = await getSeven();
  console.log(result3);
}

// RandomCat with async
loadCat();

async function loadCat() {
  const response = await fetch("https://aws.random.cat/meow");
  let catLink = (await response.json()).file;
  console.log(catLink);
  return catLink;
}
