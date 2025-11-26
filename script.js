const value = prompt("1-10 дотор тоо оруулан таагаарай");

const randomValue = 1;

// console.log(Math.floor(Math.random() * 10 + 1));

const randomNumber = Math.floor(Math.random() * 10 + 1);

if (value.includes(randomNumber)) {
  console.log("Zuw taalaa", randomNumber);
} else console.log("Buruu baina", randomNumber);
