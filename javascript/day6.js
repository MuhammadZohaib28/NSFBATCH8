//LOOPS IN JAVASCRIPT
// 1 - FOR LOOP
// 2 - WHILE LOOP
// 3 - DO WHILE LOOP

//FOR LOOP

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 6 x 1 = 6
// 6 x 2 = 12

let tableNumber = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

//WHILE LOOP IN JS

// let correctPassword = "1234qwer";
// let attempts = 0;
// let maximumAttempts = 3;
// let isBlocked = false;

// while (attempts < maximumAttempts && !isBlocked) {
//   let userPin = prompt("Enter password please.");

//   if (userPin === correctPassword) {
//     console.log("Access granted, Welcome");
//     break;
//   } else {
//     console.log("Wrong Password");

//     if (attempts > maximumAttempts) {
//       isBlocked = true;
//       console.log("Your account is blocked.");
//     }
//   }
// }

//SWITCH CASES
let userInput = 1;
switch (userInput) {
  case 1:
    console.log("Pizza is ready");
    break;
  case 2:
    console.log("Burger is ready");
    break;
  case 3:
    console.log("Fries is ready");
    break;
  case 4:
    console.log("Coleslaw is ready");
    break;

  default:
    console.log("Invalid Item")
    break;
}
