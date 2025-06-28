"use strict";
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const firstName = "Ramadan";
const age = 18;
const techSchool = "Dev Career";
const details = `I am ${firstName}, a Frontend Developer with a Frontend Engineering Certification from ${techSchool} and I am ${age} years old`;

console.log(`Ramadan's little details: ${details}`);

const massMark = 9.5;
const heightMark = 1.88;
const massJohn = 8.5;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIJohn, BMIMark);

const result = BMIJohn > BMIMark || BMIMark > BMIJohn;
console.log(result);

if (BMIMark > BMIJohn) {
  console.log("Mark BMI is greater than John Bmi");
  console.log(`Mark BMI ${BMIMark} is greater than John Bmi ${BMIJohn}`);
} else {
  console.log("John BMI is greater than Mark Bmi");
  console.log(`John BMI ${BMIJohn} is greater than Mark Bmi ${BMIMark}`);
}

const day = "Thursday";
switch (day) {
  case "monday":
    console.log("It's raining");
    break;
  case "Tuesday":
    console.log("I love eating");
    break;
  case "Wednesday":
    console.log("I write code and I am glad I can solve problems");
    break;
  case "Thursday":
    console.log("Today is thursday");
    break;
  default:
    console.log("I love me");
}

let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and total value = ${tip + bill}`
);

bill = 40;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and total value = ${tip + bill}`
);

bill = 430;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and total value = ${tip + bill}`
);

function Ramadan() {
  console.log("my name is Ramadan");
}

Ramadan();

function foodstuffs(rice, yam) {
  console.log(rice, yam);
  const foods = `I bought some foodstuffs and I used my balance to buy ${rice} bags of rice and ${yam} tubers of yam`;
  return foods;
}
const foodStuffArguements = foodstuffs(8, 19);
console.log(foodStuffArguements);

// function Declaration
function calcYear(birthyear) {
  const age = 2025 - birthyear;
  return age;
}
const year = calcYear(26);
console.log(year);

// function Expression(Anonymouns function)
const calcAge = function (birthyear) {
  return 2025 - birthyear;
};
const ageR = calcAge(year);
console.log(year, ageR);

const currenYear = new Date().getFullYear();
const CalculateAge = (birthYear) => currenYear - birthYear;
const myAge = calcAge(1976);
console.log(myAge);
const month = new Date().getMonth();
console.log(month);

const Fruits = (fruit) => {
  return fruit * 4;
};

const FruitProcessor = (apple, mango) => {
  const fruitsPieces = Fruits(apple);
  const mangoFruits = Fruits(mango);
  const Juices = `Juice with ${fruitsPieces} pieces of apple and ${mangoFruits} pieces of Mangos`
  return Juices
};

console.log(FruitProcessor(10, 2));
