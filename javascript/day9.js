//OBJECTS IN JAVASCRIPT

let studentData = {
  studentName: "Danish",
  studentRollNo: "1212-B",
  studentClass: 9,
  studentClassSection: "C",
  studentFatherName: "Jawwad",
};

const studentDataKeys = Object.keys(studentData);

studentDataKeys.map((i) => console.log(i));

console.log(Object.entries(studentData));

for (let key in studentData) {
  console.log(key, studentData, "FOR IN LOOP");
}

let usersData = [
  {
    name: "Muhammad Zohaib",
    age: 24,
    position: "Frontend Developer",
    experience: 2,
  },
  {
    name: "Saad",
    age: 23,
    position: "Backend Developer",
    experience: 3,
  },
  {
    name: "Hamza",
    age: 26,
    position: "AI/ML Engineer",
    experience: 7,
  },
  {
    name: "Hamza",
    age: 26,
    position: "AI/ML Engineer",
    experience: 5,
  },
  {
    name: "Hamza",
    age: 26,
    position: "AI/ML Engineer",
    experience: 4,
  },
  {
    name: "Hamza",
    age: 26,
    position: "AI/ML Engineer",
    experience: 6,
  },
  {
    name: "Hamza",
    age: 26,
    position: "AI/ML Engineer",
    experience: 3,
  },
];

usersData.push({
  name: "Maria",
  age: 29,
  position: "Team Lead",
  experience: 13,
  address: {
    city: "Karachi",
    area: "DHA PHASE 2",
  },
});

let filteredData = usersData.filter((i) => i.experience > 3);
console.log(filteredData, "FILTEREData");

let finalData = usersData.map((i) => {
  if (i?.address !== undefined) {
    console.log(i.address);
  }
});
