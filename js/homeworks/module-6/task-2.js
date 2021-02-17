/*
* Задача. Фильтрация массива чисел

Задание
Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Тесты
Объявлена функция filterArray(numbers, value).
Для перебора массива numbers использован метод forEach.
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение. */

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(item => (item > value ? filteredNumbers.push(item) : false));

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
