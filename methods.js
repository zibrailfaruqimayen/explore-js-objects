const student = {
  name: "kodom ali",
  money: 5000,
  study: "Math",
  subjects: ["calculus", "algebra", "geometry"],
  exam: function () {
    return this.name + "is participating in an exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is takeing improvement exam on ${subject}`;
  },
  treatDay: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};
const output = student.exam();
// console.log(output);
const reExam = student.improveExam("algebra");
// console.log(reExam);
const remaining = student.treatDay(900, 100);
console.log(remaining);

const dolaRemaining = student.treatDay(500, 50);
console.log(dolaRemaining);
