const increaseFontBtn = document.getElementById("increase-font-btn");
const decreaseFontBtn = document.getElementById("decrease-font-btn");
let text = document.getElementsByTagName("p");

increaseFontBtn.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.fontSize = "30px";
  }
});

decreaseFontBtn.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.fontSize = "18px";
  }
});
