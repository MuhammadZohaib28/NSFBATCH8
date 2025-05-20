// let studentsName = ["Farhan", "Ali", "Zohaib", "Atif"]

// console.log(studentsName[2])

// studentsName.map(i => console.log(i))

let studentData = {
  name: "Ali",
  fatherName: "Zafar",
  age: 22,
  phoneNo: "0342453353",
  cnic: "41313-1231312-245",
};

// let keys = Object.values(studentData)

// console.log(keys.map(i => console.log(i)))

for (let item in studentData) {
  console.log(item, studentData[item]);
}

let students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 92 },
  { name: "John", marks: 67 },
  { name: "Ayesha", marks: 48 },
];

let filteredData = students.filter((i) => i.marks >= 50);

filteredData.map((i) => console.log(i.name));

console.log(`The number of students passed are ${filteredData.length}`);

let books = {
  title: "The 100 days of financial freedom",
  author: "Nakamoto",
  year: 2023,
};

if (books.year >= 2020) {
  console.log("New Book");
} else {
  console.log("Old Book");
}

let numbers = [3, 7, 2, 9, 4];
// let sumOfArray = numbers.reduce((accu, num) => accu + num, 0);

// console.log(sumOfArray);

let num = 0;

for (let i = 0; i <= numbers.length - 1; i++) {
  num += numbers[i];
}

console.log(num);

let totalCount = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
    totalCount++;
  }
}

console.log(`Total Count of Even Num is ${totalCount}`);
