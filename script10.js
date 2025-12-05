// const value = prompt("1-10 дотор тоо оруулан таагаарай");

// const randomNumber = Math.floor(Math.random() * 10 + 1);
oroldlogo = 0;
function togloom() {
  let togloy = document.getElementById("togloomiinToo");
  const input = document.getElementById("togloom");
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  oroldlogo++;
  if (input.value < randomNumber) {
    togloy.innerHTML = "<p>Жаахан багадаад байна</p>";
    console.log("Жаахан багадаад байна");
  }
  if (input.value > randomNumber) {
    togloy.innerHTML = "<p>Ихийг оруулаад байнаа</p>";
    console.log("Ихийг оруулаад байнаа");
    // } else if (input.value != randomNumber) {
    //   togloy.innerHTML = "<h1>Уг нь зөв тоо нь</h1>" + randomNumber;
    //   console.log("Уг нь зөв тоо нь: ", randomNumber);
  }
  if (input.value == randomNumber) {
    togloy.innerHTML = "<p>Got it<p>";
    console.log("Зөв таалаа", "Зөв тоо нь:", randomNumber, "Нийт оролдлого");
  }
  if (oroldlogo === 5) {
    togloy.innerHTML = "<p> Game over LOSER <p>";
    console.log("Тоглоом дууслаа, Дахин оролдоно уу");
  }
}
