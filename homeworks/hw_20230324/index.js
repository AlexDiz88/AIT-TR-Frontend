"use strict";

// Задание 1
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let isValid =
    checkParentheses() === true
      ? "Все скобки расставлены правильно"
      : "Скобки расставлены неверно";
  console.log(isValid);
  let result = document.getElementById("result");
  result.innerText = isValid;
});

function checkParentheses() {
  let code = document.getElementById("code").value;
  const stack = [];
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];

  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      const lastOpenBracket = stack.pop();

      if (!lastOpenBracket) {
        return false;
      }
      if (
        openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(char)
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Задание 2
const nextBtn = document.getElementById("next-btn");
const finishBtn = document.getElementById("finish-btn");
const usersArray = [];

nextBtn.addEventListener("click", () => {
  let userFirstName = document.getElementById("firstname").value;
  let userLastName = document.getElementById("lastname").value;
  createUser(userFirstName, userLastName);
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
});

finishBtn.addEventListener("click", () => {
  printUsers();
});

function createUser(firstname, lastname) {
  let user = {
    name: firstname,
    surname: lastname,
  };
  if (user.name !== "" || user.surname !== "") {
    usersArray.push(user);
  }
}

function printUsers() {
  let userListBlock = document.getElementById("result2");
  while (userListBlock.firstChild) {
    userListBlock.removeChild(userListBlock.firstChild);
  }

  let ulListElement = document.createElement("ul");
  userListBlock.appendChild(ulListElement);
  for (let i = 0; i < usersArray.length; i++) {
    let li = ulListElement.appendChild(document.createElement("li"));
    li.innerText = usersArray[i].name + " " + usersArray[i].surname;
  }
  console.log(usersArray);
}
