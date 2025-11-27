// const value = prompt("1-10 дотор тоо оруулан таагаарай");

// const randomNumber = Math.floor(Math.random() * 10 + 1);
for (let i = 0; true; i++) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  value = Number(prompt("1-10 дотор тоо оруулан "));
  let oroldlogo = i;
  if (value === 0) break;

  if (value < randomNumber) {
    console.log("Жаахан багадаад байна");
  } else if (value != randomNumber) {
    console.log("Уг нь зөв тоо нь байнашдээ: ", randomNumber);
  }
  if (value > randomNumber) {
    console.log("Ихийг оруулаад байнаа");
  } else if (value != randomNumber) {
    console.log("Уг нь зөв тоо нь: ", randomNumber);
  }
  if (value === randomNumber) {
    console.log(
      "Зөв таалаа баяр хүргье, Хөөрхнөө",
      "Зөв тоо нь:",
      randomNumber,
      "Нийт оролдлого",
      oroldlogo
    );
    break;
  }
}

//comment
