"use strict";

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
