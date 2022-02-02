'use strict';
//усложненное задание к уроку № 4
let string = " Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...) ",
    string1 = "Создайте функцию, которая принимает 1 аргумент",
    number = 1212312309538;


const messageOutput = function(str) {
  if(str.length <= 30 && str != "number") {
    str.trim();
    console.log(str);
  } else if(str.length > 30 && str != "number") {
    console.log(str.substr(0, 29).trim() + '...');
  } else if ("number") {
    console.log('Вы ввели не слово');
  }
}
messageOutput(string);
//усложненное задание № 1 к уроку № 3
// let lang = prompt("Английский или русский язык?", "en или ru");
// const newArr = [
//   ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
//   ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
// ];
// //вывод через if
// if (lang === "ru") {
//   console.log(newArr[0].join(" "));
// } else if (lang === "en") {
//   console.log(newArr[1].join());
// } else {
//   console.log("Вы не ввели ни одно из предложенных значений! Попробуйте заново");
// }
// //вывод через оператор switch
// switch(true) {
//   case lang === "ru":
//     console.log(newArr[0].join());
//     break;
//   case lang === "en":
//     console.log(newArr[1].join());
//     break;
//   default:
//     console.log("Вы не ввели ни одно из предложенных значений! Попробуйте заново");
//     break;
// }
// //вывод через тернарный оператор
// lang === "ru" ? console.log(newArr[0].join()) : lang === "en" ? console.log(newArr[1].join()) : console.log("Вы не ввели ни одно из предложенных значений! Попробуйте заново")

// //усложненное задание № 2 к уроку № 3
// let namePerson= prompt("Введите из предложенного или свой вариант", "Артем, Александр, свой вариант"); 
// namePerson === "Артем" ? console.log("Директор") : namePerson === "Александр" ? console.log("Преподаватель") : console.log("Студент") 

// //усложненное задание к уроку № 2
// let num = 266219,
//     arr = num.toString().split("");

// let result = 1;

// for (let i = 0; i < arr.length; i++) {
//   result *= + arr[i];
// }

// result **= 3;
// console.log(result);

// console.log(result.toString().slice(0, 2));
