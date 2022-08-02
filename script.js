// let
let a = 5;
{
    let a = 20;
}
console.log(a);

// const - the value never ever changed
const number = 10;
console.log(number);

// arrow function
// doesn't have function keyword,return keyword,curly brackets.
// They are not well suited for defining object methods.
var multiple = (x, y) => (x * y);
console.log(multiple(5, 4));

// for / of - same as for loop
let array = ['Bumrah', 'Rohit', 'Kohli'];
for (let loop of array) {
    console.log(loop);
}
let name = 'leowilson';
for (let letters of name) {
    console.log(letters);
}

// default parameter
function num(a, b = 10) {
    return a + b;
}
console.log(num(8));

// string includes method .It will be return true or false
var str = 'Today is August 1,2022';
console.log(str.includes('is'));

// string startswith in starting the string
var str = 'My Name is Leowilson';
console.log(str.startsWith('My'));
// endswith in ending a string
var str_2 = 'I am BCA Graduate';
console.log(str_2.endsWith('BCA'));

// array from
// method returns an Array object from any object with a length property or any iterable object.
var arr = Array.from('kdjjskjjkaj');
console.log(arr);

// keys - method returns an Array Iterator object with the keys of an array.
var iterate = [1, 2, 3, 44, 5];
var loop = iterate.keys();
for (let index of loop) {
    console.log(index);
}

// find - method returns the value of the first array element that passes a test function.
var value = [1, 2, 32, 23, 12];
let ans = value.find(finder);
function finder(values) {
    return values > 12;
}
console.log(ans);

// findIndex() -  method returns the index of the first array element that passes a test function.
var value = [1, 2, 32, 23, 12];
let ans_2 = value.findIndex(finder);
function finder(values) {
    return values > 12;
}
console.log(ans_2);

// trunc method - returns the integer part of x
console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));
console.log(Math.trunc(4.4));

// sign method -  returns if x is negative, null or positive
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));

// cbrt - cube root. 
console.log(Math.cbrt(8));
console.log(Math.cbrt(343));
console.log(Math.cbrt(125));

// log2 - returns the base 2 logarithm
console.log(Math.log2(4));
console.log(Math.log2(16));
console.log(Math.log2(32));

// log10 - returns the base 10 logarithm.
console.log(Math.log10(10));
console.log(Math.log10(100));
console.log(Math.log10(60));


// Map method()
// It execute every element in array, creates a new array,does not change original array,does not execute empty array
var numArray = [2, 3, 4, 5, 6];
console.log(numArray.map(index => index * 2));

// reduce method()
var redArray = [3, 2, 1, 4, 5, 6];
var counting = redArray.reduce((previousvalue, currentvalue) =>
    previousvalue * currentvalue);
console.log(counting);
var right = [3, 2, 12, 3, 2];
console.log(right.reduce((first, second) => {
    return first + second;
}, 0));

// some method()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
var condition = [20, 38, 99, 21, 23];
var check = (data) => data % 2 == 0;
console.log(condition.some(check));

// filter method() method creates a shallow copy of a portion of a given array
var symbols = [2, 3, 4, 5, 2, 9, 12];
console.log(symbols.filter(item => item > 5));

// callback - first run main function and next run call back function
function mainFunction(callBack) {
    console.log('Welcome!!');
    callBack();
}
function callBack() {
    console.log('React JS')
}
mainFunction(callBack);


// promise - step by step execution. It is a object that represents a task will be completed in the future.
var create = new Promise(function (resolve, reject) {
    var num = 5;
    if (num > 3) {
        resolve(num);
    }
    else {
        reject(num);
    }
});
create.then(function (data) {
    console.log("Resolve is Working", data);
}).catch(function (result) {
    console.log('Reject is working', result)
})
// map and forEach difference
// map method return a new array, but forEach doesn't return anything.
// map method is chainable, forEach method is notchainable.

// closure - outer function value access to inner function
function outerFn() {
    var value = 20;
    function inner() {
        console.log(value + 10);
    };
    return inner;
};
console.dir(outerFn());


// isInteger method() - the arguments is integer it return true
console.log(Number.isInteger(20));  // true
console.log(Number.isInteger(20.5)); // false

// isSafeInteger - it is take double precision number
console.log(Number.isSafeInteger(30)); // true
console.log(Number.isSafeInteger(128772128798));

// isFinite method() -  method returns false if the argument is Infinity or NaN otherwise return true.
console.log(Number.isFinite(10 / 0)); // false
console.log(Number.isFinite(10 / 3)); // true

// isNan method() - the argument is string it return true, otherwise return false.
console.log(isNaN("Hello")); // true
console.log(isNaN(5)); //false

//  entries() - Create an Array Iterator, and then iterate over the key/value
var animals = ['lion', 'tiger', 'elephant', 'deer'];
var colData = animals.entries();
for (let round of colData) {
    console.log(round);
}

// class -  template of js object. this keyword create a class. the method names is Constructor() 
class Data {
    student(name, year) {
        this.name = name;
        this.year = year;
    }
}
var objData = new Data("Mani", 2001);
console.log(objData.name, objData.year);

// object property
var object =
{
    'name': 'Leowilson',
    'age': 21
};
var find = 'name';
console.log(object['age']);
console.log(object[find]);


// promise chaining
function checkPromise() {
    return new Promise(function (resolve, reject) {
        console.log('Processing');
        resolve();
    });
}

function promiseChain() {
    return new Promise(function (resolve, reject) {
        console.log('Loading');
        reject();
    });
}
checkPromise()
    .then(function (promiseChain) {
        console.log('Success-1');
    })
    .catch(function (promiseChain) {
        console.log('Failure');
    });

// promiseChain()
// .then(function () {
//     console.log('Success-2');
// })
// .catch(function (){
//     console.log('Rejected');
// });

// async function and await keyword

function addNum() {
    setTimeout(() => {
        console.log('Hai!!');
    }, 2000);
};
async function waitState() {
    await addNum();
    console.log('Run');
};
waitState();