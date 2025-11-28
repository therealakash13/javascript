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
