"use strict";

// преобразования объекта в json и обратно
let jsonString = JSON.stringify({ age: 18, name: "Bob" });
console.log(jsonString);
console.log(JSON.parse(jsonString));

async function getMyJsonInfo() {
  const response = await fetch(
    "http://127.0.0.1:5500/classworks/lesson_20230328/api/gibson.json"
  );
  const obj = await response.json();
  console.log(obj);
}

getMyJsonInfo();
