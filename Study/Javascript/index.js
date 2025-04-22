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


