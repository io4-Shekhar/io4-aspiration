for (var i = 1; i <= 10; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}

for (var i = 1; i <= 70; i++) {
  console.log(`27 * ${i} = ${27 * i}`);
}

for (let year = 2000; year <= 2200; year++) {
  if (year % 4 == 0) {
    console.log(year);
  } else {
    console.log(`The year ${year} is not a leap year`);
  }
}
