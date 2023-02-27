const kodomAli = {
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

const result = kodomAli.exam();
// console.log(result);

const badamAli = {
  name: "kacha badam",
  money: 8000,
};
const result2 = kodomAli.exam.call(badamAli);
// console.log(result2);

const badanmMoney = kodomAli.treatDay.call(badamAli, 400, 40);
console.log(badanmMoney);

const badanmMoney2 = kodomAli.treatDay.apply(badamAli, [1000, 100]);
console.log(badanmMoney2);

const badamAliTreat = kodomAli.treatDay.bind(badamAli);
const remaining = badamAliTreat(1000, 100);
console.log(remaining);

const obj = { a: 1, b: 7, c: 3, length: 2 };
console.log(Object.keys(obj).length);

const obj1 = { module: 35, video: 2 };
const obj2 = { module: 35, video: 2 };
console.log(obj1 === obj2);

const getGirlFriend = (name = "chokina") => "name";
console.log(getGirlFriend());
