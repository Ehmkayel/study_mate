const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const firstName = "Ramadan";
const age = 18;
const techSchool = "Dev Career";
const details = `I am ${firstName}, a Frontend Developer with a Frontend Engineering Certification from ${techSchool} and I am ${age} years old`;

console.log(`Ramadan's little details: ${details}`);
