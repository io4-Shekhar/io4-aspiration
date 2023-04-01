function getname() {
  console.log("my name is shekhar");
}
getname();

function gethobbies() {
  console.log("my hobbies is playing cricket");
}
gethobbies();

function prompt() {
  console.log(
    `my favorite avenger is Ironman. I am dying heart fan of Ironman`
  );
}
prompt();

function findeven(n) {
  console.log("typeof", typeof n);
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
