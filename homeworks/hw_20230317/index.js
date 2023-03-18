"use strict";

const dateOfNews = "6 МАРТА 2023";

const link1 = "https://pro-kotikov.ru/interesnoe/novosti";
const newsCategory1 = "событие";
const newsTitle1 = "Найдена самая пушистая кошка в мире";
const newsTime1 = "14:05";

const link2 = "https://pro-kotikov.ru/interesnoe/novosti";
const newsCategory2 = "спорт";
const newsTitle2 = "Кот превысил скорость звука, убегая с кухни";
const newsTime2 = "10:24";

createNewsBlock(dateOfNews, link1, newsCategory1, newsTitle1, newsTime1);
createNewsBlock(dateOfNews, link2, newsCategory2, newsTitle2, newsTime2);

// смена background для новостей спорта
let sportNews = document.querySelectorAll(".news-block__category");
sportNews.forEach((e) => {
  if (e.innerText === "спорт") {
    e.parentElement.parentElement.style.backgroundColor = "#c3e289";
  }
});

// функция создания блока для новой новости на нужную дату
function createNewsBlock(date, link, category, title, time) {
  const newsBlockDate = document.getElementsByClassName("news-block__date");
  for (let i = 0; i < newsBlockDate.length; i++) {
    if (newsBlockDate[i].innerText === date) {
      let newsBlockContainer = document.createElement("div");
      newsBlockContainer.classList.add("news-block__container");
      newsBlockDate[i].insertAdjacentElement("afterend", newsBlockContainer);
      let newsBlockLink = document.createElement("a");
      newsBlockContainer.appendChild(newsBlockLink);
      newsBlockLink.href = link;
      newsBlockLink.target = "_blank";
      let categoryBlockContainer = document.createElement("div");
      categoryBlockContainer.classList.add("news-block__category");
      newsBlockLink.appendChild(categoryBlockContainer);
      categoryBlockContainer.innerText = category;
      let titleBlockContainer = document.createElement("div");
      titleBlockContainer.classList.add("news-block__title");
      titleBlockContainer.innerText = title;
      newsBlockLink.appendChild(titleBlockContainer);
      let timeBlockContainer = document.createElement("div");
      timeBlockContainer.classList.add("news-block__time");
      newsBlockLink.appendChild(timeBlockContainer);
      timeBlockContainer.innerText = time;
    }
  }
}
