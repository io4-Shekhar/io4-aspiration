// question no-1
function getname() {
  console.log("Q.no.-01 my name is shekhar");
}
getname();

function gethobbies() {
  console.log("Q.no.-02 my hobbies is playing cricket");
}
gethobbies();
// question no-2

let a = prompt("write your avenger name");
if ("ironman") {
  console.log("I am a big fan of iron man.");
} else {
  console.log("write a valid key");
}

function findeven(n) {
  console.log("typeof", n);
  if (typeof n != "number") return;

  const rem = n % 2;
  if (rem === 0) {
    console.log(`The number ${n} is an Even number`);
  } else {
    console.log(`The number ${n} is an odd number`);
  }
}
findeven(23);
findeven(20);
