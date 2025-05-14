// ARRAYS IN JAVASCRIPT
let name = "Ali";
let name1 = "Saad";
let name2 = "Saad";

let fruitsName = ["Apple", "Banana", "Guava", "Orange"];

console.log(fruitsName.length);

for (let i = 0; i <= fruitsName.length - 1; i++) {
  console.log(fruitsName[i]);
}

let studentsName = ["Ali", "Azhar", "Sana", "Maria", "Waleed"];

console.log(studentsName);

studentsName.push("Samad");

console.log(studentsName);

studentsName.pop();

console.log(studentsName, "POP KAY BAAD");

studentsName.shift();

console.log(studentsName, "SHIFT KAY BAAD");

studentsName.unshift("Ali");

console.log(studentsName, "UNSHIFT KAY BAAD");

studentsName.splice(1, 1, "Ahsan", "Naveed", "Mubashir");

console.log(studentsName, "SPLICE KAY BAAD");

studentsName.map((pakistan) => console.log(pakistan));

studentsName.sort();

studentsName.push("Fawad");

studentsName.sort()

console.log(studentsName, "SORT");



studentsName.map(i => i)