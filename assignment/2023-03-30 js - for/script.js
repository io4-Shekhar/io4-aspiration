const arr = ["abcdefghijklm"];
console.log(arr);

function findArray() {
  console.log("hello");
}
const carName = "Kia";

let container = [
  false,
  "Mumbai",
  "javaScript",
  null,
  undefined,
  48754,
  findArray,
  carName,
  true,
  "Nakul",
  ["abc", "xy2", 3, 4],
  { car: "Kia", model: "Carens" },
];

// element : whatever contained inside array
// index: position of element -- starts from 0
// length: quantity of elements inside array

console.log("1--->", container[10]);
console.log("2--->", container[8]);
console.log("3--->", container);

for (let i = 0; i <= container.length; i++) {
  //   console.log(`${i} --->`, container[i]);
  if (container[i] == "Nakul") {
    console.log("Found", container[i], "on index", i);
  }
}

const arrOfNumbers = [45, 89, 23, 784, 35965, 5962, 7456, 856];
const arrOfString = ["Delhi", "Mumbai", "Ashwin", "Gangtok"];

console.log("20 --->", arrOfNumbers.length); //shekhar

console.log("21 -->", arrOfString[1]); //A

// ES6
// Array destructuring
const cities = [
  "Delhi",
  "Mumbai",
  "Agra",
  "Gangtok",
  "Nagpur",
  "Pune",
  "Ayodhya",
];
const abc = cities[4];
console.log("AA--->", abc); // S:undefined, A: , N:Nagpur, Nm:Nagpur

const [shekhar, nakul, neeta, ashwin, rajni] = cities;

console.log("--->", ashwin); // 3 // gangtok
console.log("--->", nakul); //mumbai

// rest operator
const [, , xyz, ...abcd] = cities;
console.log("abcd--->", abcd);
console.log("xyz--->", xyz);

////////////////////////////////////////
let myName = "Vinay Maurya";

// to find the length
console.log(`31 --> length `, myName.length);
console.log(`32 --> length `, "      ".length);

// how to cut any string
// 1. slice
// 2. substring
// 3. substr
console.log(`33 --> slice `, myName.slice(4));
console.log(`34 --> slice `, myName.slice(4, 9));
console.log(`35 --> slice `, myName.slice(-3));

// substring
console.log(`36 --> substring `, myName.substring(4));
console.log(`37 --> substring `, myName.substring(4, 9));

// substr
console.log(`38 --> substr `, myName.substr(4));
console.log(`39 --> substr `, myName.substr(4));

//replace
console.log(`40 --> replace `, myName.replace("Vinay", "Neeta"));
console.log(`41 --> replace `, myName.replace("Vinay", "Rajni"));
