// const value = prompt("1-10 дотор тоо оруулан таагаарай");

// const randomNumber = Math.floor(Math.random() * 10 + 1);
oroldlogo = 0;
function togloom() {
  let togloy = document.getElementById("togloomiinToo");
  const input = document.getElementById("togloom");
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  oroldlogo++;
  if (input.value < randomNumber) {
    togloy.innerHTML = "<h1>Жаахан багадаад байна</h1>" + randomNumber;
    console.log("Жаахан багадаад байна");
  }
  if (input.value > randomNumber) {
    togloy.innerHTML = "<h1>Ихийг оруулаад байнаа</h1>" + randomNumber;
    console.log("Ихийг оруулаад байнаа");
    // } else if (input.value != randomNumber) {
    //   togloy.innerHTML = "<h1>Уг нь зөв тоо нь</h1>" + randomNumber;
    //   console.log("Уг нь зөв тоо нь: ", randomNumber);
  }
  if (input.value == randomNumber) {
    togloy.innerHTML = "<h1>Зөв таалаа баяр хүргье</h1>";
    console.log(
      "Зөв таалаа баяр хүргье, Хөөрхнөө",
      "Зөв тоо нь:",
      randomNumber,
      "Нийт оролдлого"
    );
  }
  if (oroldlogo === 5) {
    togloy.innerHTML = "<h1> Game over LOSER </h1>";
    console.log("Тоглоом дууслаа, Дахин оролдоно уу");
  }
}
