// Функция как значение
// Функции не отличаются от чисел, строк или массивов - это просто специальный тип данных (объект высшего порядка), значение, которое можно хранить в переменной или передавать, как аргумент, в другую функцию.

// function greet(name) {
//   return `Добро пожаловать ${name}.`;
// }

// /* Вызываем функцию greet 
//    и выводим результат в консоль */
// console.log(greet('Манго'));
// // Добро пожаловать Манго.

// /* Выводим функцию greet 
//    в консоль не вызывая её */
// console.log(greet);
// /* 
// ƒ greet() { 
//      return `Добро пожаловать ${name}.`; 
// } 
// */
// В первом логе мы вызываем функцию greet при помощи круглых скобок и в консоль выводится результат её выполнения. Во втором логе передаётся ссылка на функцию, а не результат её вызова (отсутствуют круглые скобки), поэтому в консоль выводится тело функции. Это значит, что функцию можно присвоить в переменную или передать, как аругмент, другой функции.

// Задание
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// Тесты
// Объявлена функция makePizza.


function makePizza() {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки

const result = makePizza();
const pointer = makePizza;
