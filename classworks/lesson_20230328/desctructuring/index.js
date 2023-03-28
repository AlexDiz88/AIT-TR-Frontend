const pirate = {
  name: "Jack",
  secondName: "Sparrow",
  age: 40,
  isDrunk: true,
  belongings: ["rum bottle", "smoking pipe", "spyglass", "pistole"],
};

// стандартный вариант
const name1 = pirate.name;
const age1 = pirate.age;

// использование деструктуризации
let { secondName } = pirate; // достает по полю secondName и сохраняет в одноименную переменную
let { name, age, isDrunk, belongings } = pirate; // создание нескольктих переменных и присвоение значений из свойств объекта

// задание
const tower = {
  title: "Berlin Tower",
  height: 368,
  squareSize: 1326,
  rooms: ["restaurant", "Observation deck"],
};
// сохранить в переменные все поля объекта
// и вывести в печать
// сохраните в отдельную перменную "Observation deck"
let { title, height, squareSize, rooms } = tower;
let [, observation] = rooms;
console.log(observation);

// копирование всех свойств другого объекта + добавление новых свойств
const mordorTower = {
  ...tower,
  hasFlamingEye: true,
};
console.log(mordorTower);
