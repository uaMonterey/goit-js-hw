// типы данных в js

const str = 'hello';
const num = 2324;
const symb = Symbol('hello');
const bool = true;
const bigInteger = BigInt(37827327382);
const arr = [];
const obj = {};
const und = undefined;
const nu = null;

// console.log(typeof bigInteger)
// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof arr)
// console.log(typeof obj)
// console.log(typeof und)
// console.log(typeof symb)
// console.log(typeof bool)

// Преобразования типов

// console.log(Boolean(1456))
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(' '))

// console.log(Number("   777    "))
// console.log(parseInt(" 777sads   "))
// console.log(Number(true))
// console.log(Number(false))














// Зачем нужен Symbol
// Это примитивный тип данных, как boolean или string, который нужен для создания уникальных идентификаторов. 

// console.log(Symbol('Hello') === Symbol('Hello'))

// Существуют «глобальные символы», они доступны во всех частях вашей программы. 
// То есть вы можете создать символ и поместить его в некую базу, это делается с помощью функции Symbol.for()

// const someName = Symbol.for('Some identifier');

// console.log(Symbol.for('Some identifier') === someName)