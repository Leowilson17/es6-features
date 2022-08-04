// let
// let a = 5;
// {
//     let a = 20;
// }
// console.log(a);

// const - the value never ever changed
// const number = 10;
// console.log(number);

// arrow function
// doesn't have function keyword,return keyword,curly brackets.
// They are not well suited for defining object methods.
// var multiple = (x, y) => (x * y);
// console.log(multiple(5, 4));

// for / of - same as for loop
// let array = ['Bumrah', 'Rohit', 'Kohli'];
// for (let loop of array) {
//     console.log(loop);
// }
// let name = 'leowilson';
// for (let letters of name) {
//     console.log(letters);
// }

// default parameter
// function num(a, b = 10) {
//     return a + b;
// }
// console.log(num(8));

// string includes method .It will be return true or false
// var str = 'Today is August 1,2022';
// console.log(str.includes('is'));

// string startswith in starting the string
// var str = 'My Name is Leowilson';
// console.log(str.startsWith('My'));
// endswith in ending a string
// var str_2 = 'I am BCA Graduate';
// console.log(str_2.endsWith('BCA'));

// array from
// method returns an Array object from any object with a length property or any iterable object.
// var arr = Array.from('kdjjskjjkaj');
// console.log(arr);

// keys - method returns an Array Iterator object with the keys of an array.
// var iterate = [1, 2, 3, 44, 5];
// var loop = iterate.keys();
// for (let index of loop) {
//     console.log(index);
// }

// find - method returns the value of the first array element that passes a test function.
// var value = [1, 2, 32, 23, 12];
// let ans = value.find(finder);
// function finder(values) {
//     return values > 12;
// }
// console.log(ans);

// findIndex() -  method returns the index of the first array element that passes a test function.
// var value = [1, 2, 32, 23, 12];
// let ans_2 = value.findIndex(finder);
// function finder(values) {
//     return values > 12;
// }
// console.log(ans_2);

// trunc method - returns the integer part of x
// console.log(Math.trunc(4.9));
// console.log(Math.trunc(-4.9));
// console.log(Math.trunc(4.4));

// sign method -  returns if x is negative, null or positive
// console.log(Math.sign(5));
// console.log(Math.sign(-5));
// console.log(Math.sign(0));

// cbrt - cube root. 
// console.log(Math.cbrt(8));
// console.log(Math.cbrt(343));
// console.log(Math.cbrt(125));

// log2 - returns the base 2 logarithm
// console.log(Math.log2(4));
// console.log(Math.log2(16));
// console.log(Math.log2(32));

// log10 - returns the base 10 logarithm.
// console.log(Math.log10(10));
// console.log(Math.log10(100));
// console.log(Math.log10(60));


// Map method()
// It execute every element in array, creates a new array,does not change original array,does not execute empty array
// var numArray = [2, 3, 4, 5, 6];
// console.log(numArray.map(index => index * 2));

// reduce method()
// var redArray = [3, 2, 1, 4, 5, 6];
// var counting = redArray.reduce((previousvalue, currentvalue) =>
//     previousvalue * currentvalue);
// console.log(counting);
// var right = [3, 2, 12, 3, 2];
// console.log(right.reduce((first, second) => {
//     return first + second;
// }, 0));

// some method()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// var condition = [20, 38, 99, 21, 23];
// var check = (data) => data % 2 == 0;
// console.log(condition.some(check));

// filter method() method creates a shallow copy of a portion of a given array
// var symbols = [2, 3, 4, 5, 2, 9, 12];
// console.log(symbols.filter(item => item > 5));

// callback - first run main function and next run call back function
// function mainFunction(callBack) {
//     console.log('Welcome!!');
//     callBack();
// }
// function callBack() {
//     console.log('React JS')
// }
// mainFunction(callBack);


// promise - step by step execution. It is a object that represents a task will be completed in the future.
// promise only wait other function not wait.
// var create = new Promise(function (resolve, reject) {
//     var num = 5;
//     if (num > 3) {
//         resolve(num);
//     }
//     else {
//         reject(num);
//     }
// });
// create.then(function (data) {
//     console.log("Resolve is Working", data);
// }).catch(function (result) {
//     console.log('Reject is working', result)
// })
// map and forEach difference
// map method return a new array, but forEach doesn't return anything.
// map method is chainable, forEach method is notchainable.

// closure - outer function value access to inner function
// function outerFn() {
//     var value = 20;
//     function inner() {
//         console.log(value + 10);
//     };
//     return inner;
// };
// console.dir(outerFn());


// isInteger method() - the arguments is integer it return true
// console.log(Number.isInteger(20));  // true
// console.log(Number.isInteger(20.5)); // false

// isSafeInteger - it is take double precision number
// console.log(Number.isSafeInteger(30)); // true
// console.log(Number.isSafeInteger(128772128798));

// isFinite method() -  method returns false if the argument is Infinity or NaN otherwise return true.
// console.log(Number.isFinite(10 / 0)); // false
// console.log(Number.isFinite(10 / 3)); // true

// isNan method() - the argument is string it return true, otherwise return false.
// console.log(isNaN("Hello")); // true
// console.log(isNaN(5)); //false

//  entries() - Create an Array Iterator, and then iterate over the key/value
// var animals = ['lion', 'tiger', 'elephant', 'deer'];
// var colData = animals.entries();
// for (let round of colData) {
//     console.log(round);
// }var animals = ['lion', 'tiger', 'elephant', 'deer'];
// var colData = animals.entries();
// for (let round of colData) {
//     console.log(round);
// }

// class -  template of js object. this keyword create a class. the method names is Constructor() 
// class Data {
//     student(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }
// var objData = new Data("Mani", 2001);
// console.log(objData.name, objData.year);

// // object property
// var object =
// {
//     'name': 'Leowilson',
//     'age': 21
// };
// var find = 'name';
// console.log(object['age']);
// console.log(object[find]);


// promise chaining
// function main() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Hello!!!,Leowilson');
//             resolve({name:'Leo'});
//         }, 3000);
//     });
// };

// function display(info) {
//     return new Promise((resolve, reject) => {
//         console.log('Loading',info);
//         resolve();
//     });
// };

// function final() {
//     return new Promise((resolve, reject) => {
//         console.log('Final Call');
//         reject();
//     })
// }
// main()
//     .then(display)
//     .then(final)
//     .catch(() => {
//         console.log('Lose');
//     });

// async function and await keyword - only run promise function

// function addNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Hai!!');
//             resolve({ Degree: 'BCA'});
//         }, 3000);
//     });
// };
//     async function waitState(dept) {
//         var col = await addNum(dept);    
//         console.log('Run', col);
//     };
//     waitState();

// promise.all - array of promise. one function reject and promise.all function return catch
// var sum = Promise.resolve("Fabevy");
// var tech = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Technology");
//             resolve();
//         }, 2000);
//         // resolve();
//     });
// };
// var symbol = Promise.reject('**');

// Promise.all([sum, tech, symbol])
//     .then((data) => {
//         console.log('Success',data);
//     })
//     .catch(() => {
//         console.log("Failure");
//     });

//     const p1 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('one'), 1000);
//       });
//       const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('two'), 2000);
//       });
//       const p3 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('three'), 3000);
//       });
//       const p4 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('four'), 4000);
//       });
//       const p5 = new Promise((resolve, reject) => {
//         reject();
//       });
      
      // Using .catch:
      // Promise.all([p1, p2, p3,p4,p5])
      // .then((values) => {
      //   console.log(values);
      // })
      // .catch((error) => {
      //   console.log("reject")
      // });

// Hoisting - var declaration and function declaration move to top order in compile time. let keyword cannot move top order. let doesnot have Hoisting.
// var b;
// console.log(b); // undefined - var go to Hoisting

// template literals
// var year = 2021;
// console.log(`year ${year}`);
// "usestrict"
// function example(){
// console.log(arguments); // arrow function doesnot  take arguments. usestrict disable in arrow func 
// };
// example(3,2,4,5); 

// destructing assignment - expression that makes it easy to extract values from arrays, or properties from objects, into distinct variables.
// var languages = ['HTML','CSS','Javascript'];
// var [a,b,c] = languages;
// console.log(a,b,c);
// var mobile = {company:"Realme",price:25000};
// var {company,price} = mobile;
// console.log(company,price);


// spread operator - concate two variable values.
// var first = [3,2,'Hello World!!'];
// var second = [5,3,...first];
// function output(a,b,...c){
//     return ((a+b) * c.length);
// };
// var x = output(3,5,...second);
// console.log(x);
// function test(data,data1,data2,data3,data4){
//   console.log("Values: ",data,data1,data2,data3,data4);
// }
// test(...[2,3,45,5,6]);

// rest operator - opposite function of spread operator
// function value(...data){
//   console.log("Output: ", data);
// }
// value(2,3,4,1,23);

// shallow copy - cannot change original array/object address
var lang = {
  name : 'C++',
  compiler : 'TurboC'
};
var lang_1= lang;
lang_1.name = "Python"; // op lang_1:python, lang:python
console.log(lang_1,lang);  //  change value in both variable 

var intArray = [2,3,4];
var intArray2 = intArray;
intArray[0] = 5;
console.log(intArray,intArray2); // op [5,3,4] [5,3,4]

var changeArr = [5,4,2];
var changeArr2 = [...changeArr]; // create new array
changeArr2[0] = 9;
console.log(changeArr,changeArr2); // [5.4.2]  [9,4,2]

// deep copy - create a new array/ object address
var product = {
  name : 'samsung',
  model : 2022
};
var shop = {...product}; // create new object so the shop value are changed.
shop.model = 2021;  
console.log(product,shop); // op pro: 2022, shop : 2021



