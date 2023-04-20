/*let fizz = 3;
let buzz = 5;

for (var i = 1; i <= 100; i++) {
  if (fizz % 3 == 0) {
    return buzz;
    if (buzz % 5 == 0) {
    }
  }
  console.log(i);
}*/
//01
let s = "";
let c3 = 0,
  c5 = 0;
for (var i = 1; i <= 100; i++) {
  c3++;
  c5++;
  if (c3 == 3) {
    s += "fizz";
    c3 = 0;
  }
  if (c5 == 5) {
    s += "buzz";
    c5 = 0;
  }
  if (s.length == 0) console.log(i);
  else console.log(s);
  s = "";
}
//02
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sum(arr) {
  let sum = 0; // initialize sum

  // Iterate through all elements
  // and add them to sum
  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return sum;
}
console.log("02---->   Sum of given array is " + sum(arr));

// 03
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const string = prompt("Enter a string: ");

const result = reverseString(string);
console.log("03---->", result);

//04
function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map((v) => (max = Math.max(max, v.length)));
  result1 = str_ara.filter((v) => v.length == max);
  return result1;
}

console.log(
  "04---->",
  longest_string(["Rat", "cat", "elephant", "cow", "lion"])
);
