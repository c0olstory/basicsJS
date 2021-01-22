"use strict";

// 1

let a = 1,  b = 1, c, d;
c = ++a;
console.log(c); // сначала происходит сложение, потом результат присваивается в переменную с.

d = b++;
console.log(d); // сначала значение присваивается переменной d, потом происходит увеличение значения

c = 2 + ++a;
console.log(c); // 2 + (++2) Сначала увеличиваем переменную а на 1, потом складываем

d = 2 + b++;
console.log(d); // 2 + (2++) Сначало сложение 2+2, потом увеличение переменной b на 1

console.log(a);
console.log(b);

// 2

a = 2;
let x = 1 + (a *= 2);
console.log(x); // результат равен 5. Сначала вычисление происходит в скобках а = 2 * 2, потом сложение 

// 3

/**
 * Функция отвечающая за сравнение двух чисел введенных пользователем и последующее вычисления этих чисел
 */
function computation() {

   let numberOne = enterNumber("Введите первое число")
   let numberTwo = enterNumber("Введите второе число")

   if (numberOne >= 0 && numberTwo >= 0) {
      let result = numberOne - numberTwo;
      console.log(result);
   } else if (numberOne < 0 && numberTwo < 0) {
      let result = numberOne * numberTwo;
      console.log(result)
   } else if(numberOne >= 0 && numberTwo < 0 || numberOne < 0 && numberTwo >= 0) {
      let result = numberOne + numberTwo;
      console.log(result)
   }
}

/**
 * Функция отвечающая за ввод числа пользователем
 * @param {a} a Строка с просьбой ввести число
 * @returns {number} Вернет число, которое ввел пользователь
 */
function enterNumber(a) {
   let number = parseInt(prompt(a));
   return number;
}

computation()

// 4

/**
 * Функция позволяет получить случайное число от 1 до 100
 */
function randomNumber() {
   let num = parseInt(Math.random() * 100)
   return num;
}

/**
 * Функция отвечающая за сложение двух чисел
 * @param {a} a Первое число
 * @param {b} b Второе число
 */
function sum(a, b) {
   let result = a + b;
   return result;
}

/**
 * Функция отвечающая за вычитание двух чисел
 * @param {a} a Первое число
 * @param {b} b Второе число
 */
function sub(a, b) {
   let result = a - b;
   return result;
}

/**
 * Функция отвечающая за умножение двух чисел
 * @param {a} a Первое число
 * @param {b} b Второе число
 */
function mul(a, b) {
   let result = a * b;
   return result;
}

/**
 * Функция отвечающая за деление двух чисел
 * @param {a} a Первое число
 * @param {b} b Второе число
 */
function div(a, b) {
   let result = a / b;
   return result;
}


let addition = sum(randomNumber(), randomNumber());
let subtraction = sub(randomNumber(), randomNumber());
let multiplication = mul(randomNumber(), randomNumber());
let division = div(randomNumber(), randomNumber());

// 5

let Nameoperation = prompt("Введите тип арифметической операции \n (Сложение, вычитание, умножение или деление)");
Nameoperation = Nameoperation.toUpperCase();

mathOperation( 3, 2, Nameoperation);

/**
 * Функция, которая позволяет произвести выбранную пользователем арифметическую операцию
 * @param {operation} operation Тип арифметической операции
 * 
 */
function mathOperation(arg1, arg2, operation) { 
   arg1 = randomNumber();
   arg2 = randomNumber();
   switch (operation){
      case ("СЛОЖЕНИЕ" || "СУММА"):
         let addition = sum(arg1, arg2);
         console.log(addition);
         break
      case "ВЫЧИТАНИЕ":
         let subtraction = sub(arg1, arg2);
         console.log(subtraction);
         break
      case "УМНОЖЕНИЕ":
         let multiplication = mul(arg1, arg2);
         console.log(multiplication);
         break
      case "ДЕЛЕНИЕ":
         let division = div(arg1, arg2);
         console.log(division);
         break
   }
}