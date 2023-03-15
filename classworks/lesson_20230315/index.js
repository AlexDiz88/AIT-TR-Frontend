const container = document.getElementById("btn-container");

// const coffeeBtn = container.children[0];
const coffeeBtn = container.children[0];
container.addEventListener("click", (e) => {
  console.log(e.target);
  console.log("Boom");
});
