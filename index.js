// Execution of javascript program
// var n = 2;
// function square(num) {
//     var ans = num * num;
//     return ans;
// }

// var square2 = square(n);
// var square4 = square(4);

// Window object
// var x = 10;
// console.log(window.x); // 10
// console.log(window.location.href);

// Hoisting
// console.log(a);   // undefined
// greet();  // "Hello!"

// var a = 10;
// function greet() {
//   console.log("Hello!");
// }

// undefined vs not defined
// var a;
// console.log(a); // undefined
// console.log(b);  //undefined
// var b = 10;
// console.log(x);  // ReferenceError: x is not defined

// scope, scope chain and lexical environment
// function a() {
//   console.log(b);  // can access b as b is present in the lexical environment of a() which is global space
// }
// var b = 10;
// a();

// let vs const vs var
// console.log(a);  // undefined
// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// console.log(c);  // ReferenceError: Cannot access 'c' before initialization

// var a = 10;
// var a1;
// a1 = 15;  // possible
// let b;
// b = 20;  // possible
// const c = 30;
// const d;  // SyntaxError: Missing initializer in const declaration

// Closures
// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// z();  // 10

// setTimeout()
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i); // creates a new copy of i each time instead of referring to i
//   }
// }
// x();

//  OR

// function x() {
// //  not possible with var because of lexical scoping
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();
