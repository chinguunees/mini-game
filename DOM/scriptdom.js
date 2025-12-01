const domTest = document.getElementById("daalgawar1");

console.log(domTest);

domTest.innerHTML = "<h1>DOM Daalgawar 1</h1>";

// daalgawar 2

const tarag = document.getElementById("daalgawar2");

tarag.innerHTML = "<h1>Daalgawar 2</h1><ul><li>Тараг(Yogurt)</li></h1>";

// daalgawar 3

const uldsen = document.getElementById("daalgawar3");

uldsen.innerHTML =
  "<h1>Daalgawar 3</h1><ul><li>Сүү(Milk)</li><li>Тахианы Мах(Chicken)</li><li>Жимс(Fruits)</li></ul>";

// daalgawar 4

const list = ["Тараг", "Сүү", "Тахианы Мах", "Жимс", "Beer", "Snack"];
console.log(list);
let ul = `</ul>`;

for (let i = 0; i < list.length; i++) {
  const item = list[i];
  const element = `<li>${item}</li>`;
  ul = element + ul;
}
ul = `<ul>` + ul;
console.log(ul);

const looptei = document.getElementById("daalgawar4");
looptei.innerHTML = "<h1>Daalgawar4</h1>" + ul;

// daalgawar 5

const input = document.getElementById("input");

function submit() {
  const too = document.getElementById("daalgawar5");
  const inputValue = input.value;
  if (inputValue < 11 && inputValue > 0) {
    too.innerHTML = "Зөв тоо оруулсан байна";
    console.log("Зөв тоо оруулсан байна");
  } else {
    console.log("Буруу тоо оруулсан байна");
    too.innerHTML = "Буруу тоо оруулсан байна";
  }
}
