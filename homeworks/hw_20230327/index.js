"use strict";

let btn = document.getElementById("btn");
let checkbox = document.getElementById("checkbox");

btn.addEventListener("click", () => {
  let isConfirmed = checkbox.checked;
  let promise = new Promise(function (resolve, reject) {
    console.log("Отправляем запрос на сервер.........");
    let result = getObj(isConfirmed);
    if (result !== "Ошибка") {
      setTimeout(() => {
        resolve(result);
      }, 4000);
    } else {
      reject(new Error("Согласие пользователя не получено"));
    }
  });

  promise
    .then(function (result) {
      console.log("Запрос выполнен успешно ");
      console.log(result);
    })
    .catch(function (error) {
      console.log("Ошибка!");
      console.log(error);
    });

  function getObj(confirm) {
    if (!confirm) {
      return "Ошибка";
    }
    let schoolInfoObj = {};
    setTimeout(() => {
      schoolInfoObj.title = "ait-tr";
    }, 1000);
    setTimeout(() => {
      schoolInfoObj.site = "ait-tr.de";
    }, 2000);
    setTimeout(() => {
      schoolInfoObj.phone = "493052014182";
    }, 3000);
    setTimeout(() => {
      schoolInfoObj.email = "go@ait-tr.de";
    }, 4000);
    return schoolInfoObj;
  }
});
