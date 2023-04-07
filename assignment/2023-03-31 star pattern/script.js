for (let r = 1; r <= 10; r++) {
  for (let c = 1; c <= r; c++) {
    if (c == 1 || r == c || r == 10) {
      document.write("* &nbsp;");
    } else {
      document.write(" &nbsp;&nbsp;&nbsp;");
    }
  }
  document.write("</br>");
}

document.write("</br>");
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) {
    if (j == 1 || i == j || i == 10) {
      document.write("*");
    } else {
      document.write("&nbsp;&nbsp;");
    }
  }
  document.write("</br>");
}
for (let r = 1; r <= 10; r++) {
  for (let c = 1; c <= r; c++) {
    if (c == 1 || r == c || r == 10) {
      document.write("*&nbsp;&nbsp;&nbsp;&nbsp;");
    } else {
      document.write(" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    }
  }
  document.write("</br>");
}
document.write("<br/>");

let i, j, k;
for (i = 1; i <= 5; i++) {
  for (k = 1; k <= 5 - i; k++) {
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  for (j = 1; j <= i; j++) {
    document.write("*&nbsp;");
  }
  for (l = 2; l <= i; l++) {
    document.write("*&nbsp;");
  }
  document.write("<br/>");
}
document.write("<br/>");
for (i = 1; i <= 5; i++) {
  for (k = 1; k <= 5 - i; k++) {
    document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
  }
  for (j = 1; j <= i; j++) {
    document.write("*&nbsp;");
  }
  for (l = 2; l <= i; l++) {
    document.write("*&nbsp;");
  }
  document.write("<br/>");
}

const arr4 = [
  "h",
  "e",
  "l",
  "l",
  "o",
  2,
  4,
  6,
  8,
  "eat",
  "ox",
  "sleep",
  "exercise",
];
const number = arr4.filter(
  (shekhar) => typeof shekhar == "string" && shekhar.length > 1
);
console.log(number);
