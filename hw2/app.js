// Занятие 2. Слайд 8.

// 1. Создать объект с полем product, равным ‘iphone’

const objectProduct = {
  product: "iphone"
};

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’

objectProduct.price = 1000;
objectProduct["currency"] = "dollar";

// 3. Добавить поле details, которое будет содержать объект с полями model и color

objectProduct.details = {};
objectProduct.details.model = "x";
objectProduct.details.color = "white";

console.log(objectProduct);

// Занятие 3. Слайд 4.

// 1. Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let a = "block";

switch (a) {
  case "block":
    console.log("block");
    break;
  case "none":
    console.log("none");
    break;
  case "inline":
    console.log("inline");
    break;
  default:
    console.log("other");
}

// 2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let variable = "hidden";

variable = variable === "hidden" ? "visible" : "hidden";

console.log(variable);

// 2. Используя if, записать условие:
// a. если переменная равна нулю, присвоить ей 1;
// b. если меньше нуля - строку “less then zero”;
// c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let variable2 = 0;

variable2 =
  variable2 === 0 ? 1 : variable2 < 0 ? "less then zero" : variable2 * 10;

console.log(variable2);

// 3. 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: "Lexus",
  age: 10,
  create: 2008,
  needRepair: false
};

car.age > 5
  ? (console.log("Need Repair", car), (car.needRepair = true))
  : console.log(car);

// Занятие 3. Слайд 10.

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

const string = "i am in the easycode";

let newString = string[0].toUpperCase() + "";

for (let i = 1; i < string.length; i++) {
  if (string[i - 1] === " ") {
    newString += string[i].toUpperCase();
  } else newString += string[i];
}

console.log(newString);

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

const string2 = "tseb eht ma i";
let reverseString = "";
for (let i = string2.length - 1; i >= 0; i--) {
  reverseString += string2[i];
}

console.log(reverseString);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let res = 1;

for (let i = 1; i <= 10; i++) {
  res *= i;
}

console.log(res);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let string3 = "JavaScript is a pretty good language";

let stringArray = string3.split(" ");

let newString3 = "";

for (let i = 0; i < stringArray.length; i++) {
  newString3 +=
    stringArray[i][0].toUpperCase() +
    stringArray[i].slice(1, stringArray[i].length);
}

console.log(newString3);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let newArrayNumbers = [];

for (let number of arrayNumbers) {
  if (number % 2 === 1) {
    newArrayNumbers.push(number);
  }
}

console.log(newArrayNumbers);

// 6. Дан объект:
let list = {
  name: "denis",
  work: "easycode",
  age: 29
};

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

for (let item in list) {
  if (typeof list[item] === "string") {
    list[item] = list[item].toUpperCase();
  }
}

console.log(list);
