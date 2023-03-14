let input = document.querySelector(".userText");
let btn = document.querySelector(".btn");

btn.addEventListener(
  "click",
  (addLeters = () => {
    let letters = {};

    for (let i = 0; i < input.value.length; i++) {
      const leter = input.value[i];
      if (letters[leter]) {
        letters[leter]++;
      } else {
        letters[leter] = 1;
      }
    }

    let keySort = Object.keys(letters).sort(function (a, b) {
      return letters[b] - letters[a];
    });
    let ul = document.querySelector(".list");
    let inputLength = input.value.length;
    for (let i = 0; i < keySort.length; i++) {
      let d = keySort[i];
      let interest = (letters[d] / inputLength) * 100;
      ul.insertAdjacentHTML(
        "beforeend",
        `<li>${d}: ${letters[d]} - ${interest.toFixed(3)} %</li>`
      );
    }
  })
);
// Створив окрему кнопку яка повністю все очищає
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function () {
  const lettersClear = document.querySelector(".list");
  while (lettersClear.firstChild) {
    lettersClear.removeChild(lettersClear.firstChild);
  }
});
