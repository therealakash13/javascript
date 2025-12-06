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

// Counter with closure
// function counter() {
//   var count = 0;
//   this.increment = function () {
//     return ++count;
//   };
//   this.decrement = function () {
//     return --count;
//   };
//   this.show = function() {
//     return count;
//   }
// }

// var counter1 = new counter();
// console.log("Current count:", counter1.show());
// console.log(" ");
// console.log("Increment:", counter1.increment());
// console.log("Increment:", counter1.increment());
// console.log("Increment:", counter1.increment());
// console.log("Increment:", counter1.increment());
// console.log("Increment:", counter1.increment());
// console.log(" ");
// console.log("Decrement:", counter1.decrement());
// console.log("Decrement:", counter1.decrement());
// console.log("Decrement:", counter1.decrement());
// console.log("Decrement:", counter1.decrement());
// console.log("Decrement:", counter1.decrement());

// Call back functions
// function process(callback) {
//   callback();
// }

// process(() => console.log("Done!"));

// setTimeouts
// setTimeout(function runLater() {
//   console.log("This runs later");
// }, 2000); // runLater() runs after 2000 ms

// console.log("prints immediately"); // doesn't block main thread

// function calculator(a, b, operation) {
//   return operation(a, b);
// }

// calculator(5, 3, (x, y) => console.log(x + y)); // add
// calculator(5, 3, (x, y) => console.log(x * y)); // multiply

// map. reduce. filter
const users = [
  { firstName: "Akash", lastName: "Kumar", age: 27 },
  { firstName: "Narendra", lastName: "Modi", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 55 },
  { firstName: "Akshay", lastName: "Kumar", age: 55 },
];

// filter out user with age > 50 and print their fullname
// const output = users
//   .filter((user) => user.age > 50)
//   .map((user) => `${user.firstName} ${user.lastName}`);

// const output = users.reduce((acc, curr) => {
//   if (curr.age > 50) {
//     acc.push(`${curr.firstName} ${curr.lastName}`);
//   }
//   return acc;
// }, []);

// reduce it to object of age group -> no. of user
// const output = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age] + 1;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc
// }, {});

// console.log(output);

// xhr
// const xhr = new XMLHttpRequest();
// xhr.open('GET','http://localhost:3000');
// xhr.onprogress = (e) => {
//   if (e.lengthComputable) {
//     console.log(`Downloaded ${e.loaded} of ${e.total} bytes`);
//   } else {
//     console.log(`Downloaded ${e.loaded} bytes`);
//   }
// };
// xhr.send();

// callback hell and xhr
// xhr request
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://dummyjson.com/test");
// xhr.responseType = "json";
// xhr.addEventListener("load", function () {
//   console.log(xhr.response);
// });
// xhr.send();

// generic function to make calls
// function makeHttpRequest(method, url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.responseType = "json";
//   // xhr.addEventListener("load", function () {
//   //   callback(xhr.response);
//   // });

//   // OR

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       callback(xhr.response);
//     }
//   };
//   xhr.send();
// }

// makeHttpRequest("GET", "https://dummyjson.com/test", function (data) {
//   console.log(data);
// });

// callback hell
// function makeHttpRequest(method, url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.responseType = "json";
//   // xhr.addEventListener("load", function () {
//   //   callback(xhr.response);
//   // });

//   // OR

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       callback(xhr.response);
//     }
//   };
//   xhr.send();
// }

// makeHttpRequest("GET", "https://dummyjson.com/users", function (userData) {
//   makeHttpRequest("GET", `https://dummyjson.com/posts/user/${userData.users[0].id}`, function (postData) {
//     makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postData.posts[0].id}`, function (commentData) {
//       makeHttpRequest( "GET", `https://dummyjson.com/users/${commentData.comments[0].user.id}`, function (commentUserData) {
//         console.log(commentUserData);
//       });
//     });
//   });
// });

// Promises
function makeHttpRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) resolve(xhr.response);
        else reject("Error while fetching: " + url);
      }
    };

    xhr.send();
  });
}

makeHttpRequest("GET", "https://dummyjson.com/users").then((userData) => {
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/posts/user/${userData.users[0].id}`
    );
  }).then((postData) => {
    return makeHttpRequest("GET", `https://dummyjson.com/comments/post/${postData.posts[0].id}`);
  }).then((commentData) => {
    return makeHttpRequest("GET", `https://dummyjson.com/users/${commentData.comments[0].user.id}`);
  }).then((commentUserData) => {
    console.log({commentUserData});
  }).catch((error) => {
    console.error(error);
  });
