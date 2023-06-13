
let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector('#save-el');
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countNumber = count + ' - ';
  saveEl.textContent += countNumber;
  countEl.textContent = 0;
  count = 0;
}








