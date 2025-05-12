//IF ELSE PRACTICE QUESTIONS

let studentsMarks = 32;

if (studentsMarks < 0 || studentsMarks > 100) {
  console.log("Marks should be greater than 0  and less than 100");
} else if (studentsMarks >= 90) {
  console.log(`Student marks are ${studentsMarks} and student got A+ Grade`);
} else if (studentsMarks >= 80) {
  console.log(`Student marks are ${studentsMarks} and student got A Grade`);
} else if (studentsMarks >= 70) {
  console.log(`Student marks are ${studentsMarks} and student got B Grade`);
} else if (studentsMarks >= 60) {
  console.log(`Student marks are ${studentsMarks} and student got C Grade`);
} else if (studentsMarks >= 50) {
  console.log(`Student marks are ${studentsMarks} and student got D Grade`);
} else {
  console.log(`Student marks are ${studentsMarks} and student got F Grade`);
}

let password = "qwert@.";
let hasUpperCase = /[A-Z]/.test(password);
let hasLowerCase = /[a-z]/.test(password);
let hasNumber = /[0-9]/.test(password);
let hasSpecialChar = /[!@#$%^&*()./{}]/.test(password);

if (
  password.length > 8 &&
  hasUpperCase &&
  hasLowerCase &&
  hasNumber &&
  hasSpecialChar
) {
  console.log("Your password is STRONG");
} else if (password.length > 8 && (hasLowerCase || hasUpperCase) && hasNumber) {
  console.log("Your password is medium");
} else {
  console.log("Your password is very weak");
}

let weather = -5;

if (weather >= 45) {
  console.log(`Temp is ${weather}C and today is very hot day`);
} else if (weather >= 35) {
  console.log(`Temp is ${weather}C and today is sunny day`);
} else if (weather >= 25) {
  console.log(`Temp is ${weather}C and today is cold day`);
} else if (weather >= 5) {
  console.log(`Temp is ${weather}C and today is very cold day`);
} else {
  console.log(`Temp is ${weather}C and today is freezing day`);
}
