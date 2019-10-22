// Занятие 1. Слайд 10.

let string = "some test string";

// 1. Получить первую и последнюю буквы строки

console.log(string[0], string[string.length - 1]);

// 2. Сделать первую и последнюю буквы в верхнем регистре

console.log(
  string[0].toUpperCase() +
    string.slice(1, -1) +
    string[string.length - 1].toUpperCase()
);

// 3. Найти положение слова ‘string’ в строке

console.log(string.indexOf("string"));

// 4. Найти положение второго пробела (“вручную” ничего не считать)

console.log(string.indexOf(" ", string.indexOf(" ") + 1));

// 5. Получить строку с 5-го символа длиной 4 буквы

console.log(string.substr(5, 4));

// 6. Получить строку с 5-го по 9-й символы

console.log(string.slice(5, 9 + 1));

// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

let newString = string.slice(0, -6);

console.log(newString);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

const a = 20;
const b = 16;

let newString2 = a + "" + b;

console.log(newString2);

// Занятие 1. Слайд 13.

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

console.log(+Math.PI.toFixed(2));

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

let maxValue = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let minValue = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

console.log(`Max value: ${maxValue} Min Value: ${minValue}`);

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой

console.log(+Math.random().toFixed(2));

// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

const randomNumber = 10;

console.log(Math.round(Math.random() * 10));

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

console.log(+(0.6 + 0.7).toFixed(1));

// 5. Получить число из строки ‘100$’

console.log(parseFloat("100$"));

// Занятие 2. Слайд 12.

// Чему равно а, почему?

// let a = 0 || 'string'; // ‘string’;  0 - false, ‘string’ - true
// let a = 1 && 'string'; // 'string'; 1 - true, 'string' - true
// let a = null || 25; // 25; null - false, 25 - true
// let a = null && 25; // null; null - false, 25 - true
// let a = null || 0 || 35; // 35; null - false, 0 - false, 35 - true
// let a = null && 0 && 35; // null; null - false, 0 - false, 35 - true

// Что отобразится в консоли. Почему?

// 12 + 14 + '12' // 2612
// 3 + 2 - '1' // 4
// '3' + 2 - 1 // 31
// true + 2 // 3
// +'10' + 1 // 11
// undefined + 2 // NaN
// null + 5 // 5
// true + undefined // NaN

// Занятие 2. Слайд 16.

// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let variable = "hidden";

if (variable === "hidden") {
  variable = "visible";
} else variable = "hidden";

console.log(variable);

// 2. Используя if, записать условие:
// a. если переменная равна нулю, присвоить ей 1;
// b. если меньше нуля - строку “less then zero”;
// c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let variable2 = 1;

if (variable2 === 0) {
  variable2 = 1;
} else if (variable2 < 0) {
  variable2 = "less then zero";
} else {
  variable2 *= 10;
}

console.log(variable2);

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false
};
if (car.age > 5) {
  car.needRepair = true;
  console.log("Need Repair", car);
} else console.log(car);

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }. Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = {
  name: "Intel core i7",
  price: "100$",
  discount: "15%"
};

if (item.discount) {
  item.priceWithDiscount = `${parseFloat(item.price) -
    (parseFloat(item.price) * parseInt(item.discount)) / 100}$`;
  console.log(item, item.priceWithDiscount);
} else {
  console.log(item, item.price);
}

// 5. Дан следующий код:

// let product = {
//   name: “Яблоко”,
//   price: “10$”
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// Написать условие если (цена товара больше или равна минимальной цене) и (меньше или равна максимальной цене) то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = {
  name: "Яблоко",
  price: "10$"
};

let min = 10;
let max = 20;

if (parseFloat(product.price) >= min && parseFloat(product.price) <= max) {
  console.log(product, product.name);
} else {
  console.log(product, "Товаров не найдено");
}
