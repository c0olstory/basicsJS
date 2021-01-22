
let temp = +prompt("Задайте температуру в градусах по Цельсию");

let fahr = (9 / 5) * temp + 32;

alert(fahr);

// -----------------
let admin = null;
let nameUser = "Василий";

admin = nameUser;

console.log(admin);
// -----------------

let example1 = 10 + 10 + "10"; // 10(число) + 10(число) = 20(число) + "10"(строка) = "2010" (строка)
console.log(example1, typeof example1);

let example2 = 10 + "10" + 10; // 10(число) + "10"(строка) = "1010"(строка) + 10 = "101010"
console.log(example2, typeof example2);

let example3 = 10 + 10 + +"10"; // 10(число) + 10(число) = 20(число) + +"10"(число) = 30(число)
console.log(example3, typeof example3);

let example4 = 10 / -""; // 10(число) / -0 = -бесконечность
console.log(example4, typeof example4);

let example5 = 10 / +"2,5"; // 2,5 будет числом, но т.к. нельзя использовать запятую будет возвращено NaN . 10 / NaN = NaN
console.log(example5, typeof example5);
// -----------------