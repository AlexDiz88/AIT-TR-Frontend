console.log("Welcome to JS");
let x = 9;
let str = "some text";
x = 21;
console.log(x);
console.log(str);
const y = 10; // константу сменить нельзя, будет ошибка
// y = 11;
console.log(y);
console.log("-------------");

// получение элемента
const button = document.getElementById("btn1");
console.log(button);

let btn1 = document.getElementById("btn1");
console.log(btn1);

let txt1 = document.getElementsByClassName("words");
console.log(txt1);
console.log(txt1[1]);

let tags = document.getElementsByTagName("p");
console.log(tags);

// создание элемента
const epilog = document.createElement("div");
console.log(epilog);
const textNode = document.createTextNode("added with TextNode");
epilog.innerHTML = "added with innerHTML. ";
epilog.appendChild(textNode);
document.body.appendChild(epilog);

// ЗАДАНИЕ
const div01 = document.createElement("div");
const div02 = document.createElement("div");
div01.innerHTML = "<p>Я люблю кодить</p>";
div02.innerText = "Я люблю кодить2";
div02.innerHTML += " +awdadawd";
epilog.appendChild(div01);
epilog.append(div02);

// получение атрибута
const fruit = document.getElementById("aim");
let fruitAttribute = fruit.getAttribute("class");
console.log(fruitAttribute);
fruit.setAttribute("class", "orange");

// применение стилей
fruit.style.fontSize = "26px";
fruit.style.backgroundColor = "orange";
fruit.style.textAlign = "center";

const panda = document.getElementById("panda");
panda.style.fontSize = "26px";
panda.style.backgroundColor = "forestgreen";
panda.style.textAlign = "center";

//слушатели событий
let btn3 = document.getElementById("killPandaBtn");
btn3.addEventListener("click", () => {
  panda.remove();
});
