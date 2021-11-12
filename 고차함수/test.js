let studentList = [
  {
    name: 'Anna',
    gender: 'female',
    grades: [4.5, 3.5, 4],
  },
  {
    name: 'Dennis',
    gender: 'male',
    country: 'Germany',
    grades: [5, 1.5, 4],
  },
  {
    name: 'Martha',
    gender: 'female',
    grades: [5, 4, 4, 3],
  },
  {
    name: 'Brock',
    gender: 'male',
    grades: [4, 3, 2],
  },
];

let output = studentReports(studentList);

console.log(output); // -->
[
  { name: 'Anna', gender: 'female', grades: 4 },
  { name: 'Martha', gender: 'female', grades: 4 },
];

function studentReports(students) {
  // TODO: 여기에 코드를 작성합니다.
  return students.filter((e) => e.gender === "female")
  .forEach((e) => e.grades = e.grades.reduce((a, b) => a + b) / e.grades.length);
}
