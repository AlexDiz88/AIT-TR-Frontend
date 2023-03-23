"use strict";

// создание класса-родителя
class Plant {
  constructor(height, age) {
    this.height = height;
    this.age = age;
  }
  grow() {
    this.height += 10;
  }
}
// создание класса-наследника
class Rose extends Plant {
  constructor(height, age, numberOfFlowers) {
    super(height, age);
    this.numberOfFlowers = numberOfFlowers;
  }
}

// создание объекта класса
const rose = new Rose(120, 4, 24);
rose.grow();
console.log(rose);
