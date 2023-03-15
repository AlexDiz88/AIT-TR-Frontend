// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener("click", () => {
  clonedBtn.innerHTML = "Я изменю тебя";
  document.body.appendChild(clonedBtn);
  clonedBtn.style.backgroundColor = "#a78b71";
  clonedBtn.style.color = "white";
});

clonedBtn.addEventListener("click", () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
});

const taskText = document.createElement("p");
document.getElementById("text").appendChild(taskText);
taskText.innerHTML =
  '<a href="https://github.com/AlexDiz88/AIT-TR-Frontend/blob/master/homeworks/hw_20230314/README.md">Ссылка на задание</a>';
taskText.style.fontSize = "18px";
