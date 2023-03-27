console.log("output-1", "500" + 100); //500100 string
console.log("output-2", 56 + 100); //156 number
console.log("output-3", 56 + "100"); // 56100 string
console.log("output-4", "500" / "100"); // 5  string
console.log("output-5", 56 + 100 + true); // 157   boolean
console.log("output-6", 56 + 100 + Number(true)); // 156true nan
console.log("output-7", 56 + 100 + "true"); // 156 boolean
console.log("output-8", 56 + 100 + Number("true")); // 156true nan
console.log("output-9", 56 + 100 + Number("Vinay")); // 156vinay nan
console.log("output-10", 50 - "100" + "Vinay"); //nan
