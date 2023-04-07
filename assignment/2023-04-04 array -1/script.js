// 01.

const arr1 = [1, 2, 3, 4, 5];
const square = arr1.map((num) => num ** 2);
console.log("01.---->", square);

// 02.
const input = [1, -4, 12, 0, -3, 29, -150];
const sumOfPositives = input.reduce((sum, num) => {
  if (num > 0) {
    return sum + num;
  } else {
    return sum;
  }
}, 0);

console.log("02----->", sumOfPositives);
//3
// 3A.
let num = 3;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log("3A.---->", factorial);
//3B
let num1 = 5;
let factorial1 = 1;

for (let i = 1; i <= num1; i++) {
  factorial1 *= i;
}

console.log("3B.--->", factorial1);

//3C
let num2 = 4;
let factorial2 = 1;

for (let i = 1; i <= num2; i++) {
  factorial2 *= i;
}

console.log("3C.--->", factorial2);

//3D
let num3 = 10;
let factorial3 = 1;

for (let i = 1; i <= num3; i++) {
  factorial3 *= i;
}

console.log("3D.---->", factorial3);
//04
const words = ["Python", "Javascript", "Go", "Java", "PHP", "Ruby"];

const filteredWords = words.filter((word) => word.length < 8);

console.log("04.---->", filteredWords);
//5
//5A
let arr = [1, 4, 9, 16, 25];

for (let i = 0; i < arr.length; i++) {
  arr[i] *= 2;
}

console.log("5A.--->", arr);
//5B
let arr0 = [21, 0.4, 9, -1.6, 125];

for (let i = 0; i < arr0.length; i++) {
  arr0[i] *= 2;
}
console.log("5B.---->", arr0);

//6
// arr = [1,4,9,16,25,2,45,3,0]
//6A
const arr12 = [1, ,];
const arr14 = arr12.join("st ");
//console.log("6A---->", arr14);
const arr17 = [2, ,];
const arr18 = arr17.join("nd ");
//console.log(arr18);
const arr19 = [3, ,];
const arr20 = arr19.join("rd ");
//console.log(arr20);
const arr15 = [4, 9, 16, 25, 45, 0];
const arr16 = arr15.join("th ");
//console.log(arr16);
const arr21 = [...arr14, ...arr18, ...arr20, ...arr16];
const arr22 = arr21.join("");
console.log("6A--->", arr22);

//6B
//const arr = [2, 1, 0, 4, 9, -1.6, 1, 2, 51, 3];
const arr23 = [1, 1, ,];
const arr24 = arr23.join("st ");
//console.log("6A---->", arr14);
const arr25 = [2, 2, ,];
const arr26 = arr25.join("nd ");
//console.log(arr18);
const arr27 = [3, ,];
const arr28 = arr27.join("rd ");
//console.log(arr20);
const arr29 = [4, 9, -1.6, 51, 0];
const arr30 = arr29.join("th ");
//console.log(arr16);
const arr31 = [...arr24, ...arr26, ...arr28, ...arr30];
const arr32 = arr31.join("");
console.log("6b--->", arr32);

//07
//07A
const years = [2001, 1994, 1999, 2016, 2025, 2028, 2099, 1992];

const leapYears = years.filter((year) => year % 4 == 0);

const normalYears = years.filter((year) => year % 4 != 0);

console.log("7A1.--->", leapYears);
console.log("7A1.--->", normalYears);
//07B
const years1 = [2021, 2004, 2090, 2016, 2125, 2028, 2032, 1972];
const leapYears2 = years1.filter((year) => year % 4 == 0);

const normalYears2 = years1.filter((year) => year % 4 != 0);
console.log("7B1.--->", leapYears2);
console.log("7B2.--->", normalYears2);

//concat with (leap years and leap years2)

arr10 = leapYears.concat(leapYears2);
console.log("07.-->leap years", arr10);

//concat with (normal years and normal years2)

arr11 = normalYears.concat(normalYears2);
console.log("07.-->normal years", arr11);

//08

const arr2 = [
  "Python",
  "JavaScript",
  "Go",
  "Java",
  "PHP",
  "C++",
  "React",
  "c",
  "RoR",
  "Ruby",
  "Swift",
  "verna",
  "Jaguar",
];
arr3 = [];
arr3.push("python");
arr3.push("c++");
arr3.push("java");
arr3.push("React");
arr3.push("javascript");
console.log("08.--->", arr3);

//09
const arr4 = [21, 0.4, 9, -1.6, 12, 5, 81, 94, -9];

const arr4output = arr4.filter((num) => num >= 5);

console.log("09.--->", arr4output);

//10

const arr5 = [20, 1.4, 92, -1.61, 1.22, 50, 81, 94, -9];

const arr5output = arr5.filter((num) => num % 2 == 0);

console.log("10.---->", arr5output);
//11
//11A
const arr6 = ["dog", "wolf", "by", "family", "eaten", "camping"];
const arr6output = arr6.filter((arr11) => arr11.length <= 5);

console.log("11A.---->", arr6output);
//11B
const arr7 = [
  "Python",
  "Javascript",
  "Go",
  "Java",
  "PHP",
  "C++",
  "RoR",
  "Ruby",
  "Swift",
  "Kotlin",
  "LISP",
];

const arr7output = arr7.filter((arr111) => arr111.length <= 5);

console.log("11B.---->", arr7output);
//12

//12A

//const arr012 = ClearName([
//"avengers",
//"captain_america",
//"i ronman",
//"black panther",
//]);
const arr013 = [" avenger"];
const arr014 = ["  captain_america"];
const arr015 = ["i ronman   "];
const arr016 = [" black panther"];
const arr017 = [...arr013, ...arr014, ...arr015, ...arr016];
const arr018 = arr017.join("");
console.log(arr018);
