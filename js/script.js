// let mobile__menu_open = document.getElementById("mobile__menu_open_btn");
// console.log(mobile__menu_open);
//
//
//
// document.getElementById("mobile__menu_open_btn").onclick = function () {
//     document.getElementById("mobile__menu_open_btn").classList.add("active");
//     document.getElementById("mobile__menu").classList.add("active");
// }
//
// document.getElementById("mobile__menu_closed_btn").onclick = function (){
//     document.getElementById("mobile__menu_open_btn").classList.remove("active");
//     document.getElementById("mobile__menu").classList.remove("active");
// }

// var a;
// let b;

// console.log(a);
// console.log(b);

// a = 1;
// b = 2;

// let a = 1;
// let b = 9 % 3;
//
// console.log(a);
// console.log(b);

// let a = "1";
// let b = 2;
// let c = a + b;
//
// let x = 21 / "2";
//
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(x);

// let a = '1';
// let a = "1";


// let a = true;
// let a = false;
// console.log(a);


// let a = Infinity;
// console.log(a);


// let a = "Hello";
// let b = null;
// let c = a / b;
//
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);


// let name = "Ilya";
//
// console.log( `hello ${1}` ); // ?
//
// console.log( `hello ${"name"}` ); // ?
//
// console.log( `hello ${name}` ); // ?console.log


//
// let a = document.querySelector(".container").clientWidth;
// console.log(a);
// console.log(typeof a); // boolean


// document.getElementById("mobile__menu_open_btn").onclick = function () {
//     document.getElementById("mobile__menu_open_btn").classList.add("active");
//     document.getElementById("mobile__menu").classList.add("active");
// }

// let a = 2 + 1;
// console.log(a);
//
// if ( a == 4) {
//     console.log("Результат подсчета равен 4");
// } else if (a < 4){
//     console.log("Результат подсчета меньше 4");
// } else if (hgjhghj){
//     console.log("Результат подсчета больше 4");
// }


// let a = "1";
// let b = 2;
// console.log(Number(a) + b);

// let a = ( Number("   123   ") ); // 123
// console.log( typeof a); // 123
// console.log( Number("123z") );      // NaN (ошибка чтения числа в "z")
// console.log( Number(true) );        // 1
// console.log( Number(false) );       // 0

// let a = {};
// console.log(a);
// let b = [];
// console.log(b);

// let user = {
//     name: "Roman",
//     age: 30,
//     is_admin: true
// }
//
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.is_admin);
//
// let let = 123;
// console.log(let);

// let a = [];
// console.log(a);


// let f = ["Яблоко", "Апельсин", "Слива"];
//
// console.log( f )
//
// console.log( f[0] ); // Яблоко
// console.log( f[1] ); // Апельсин
// console.log( f[2] ); // Слива


// console.log( f.length); // Длинна массива

// let a = document.querySelectorAll("*");

// let a = document.querySelectorAll(".container");

// let a = document.getElementById('container-1');
// console.log(a);

// let b = document.getElementById("container-3");
// console.log(b);
//
// let a = document.getElementById("container-3").innerHTML = "Hello world!";
// console.log(a);

// let a = document.querySelector(".container").innerText;
// let b = document.querySelector(".container").innerHTML;
// console.log(a);
// console.log(b);

// let a = document.querySelector(".container").innerText;
// console.log(a);


// let a = document.querySelector(".container").innerText = "Good";
// console.log(a);


// let a = document.querySelector(".container");
// a.classList.add("my-custom-class");
// a.classList.remove("container");
// a.style.color = "green";
// a.style.textAlign = "center"
// console.log(a);


// let a = document.querySelector("body").childNodes[1];
// console.log(a);




// function имя(параметры) {
// ...тело...
// }

// function showMessage() {
//     console.log("Hello World!");
// }
//
// showMessage();
// showMessage();
// showMessage();
// showMessage();

// function showHello(){
//     console.log("Hello World!");
// }
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();
// showHello();

let userName = 'Вася';

// function showMessage(a) {
//     let message = 'Привет, ' + a;
//     console.log(message)
// }
//
// showMessage("Vasia"); // Привет, Вася
// showMessage("Petia"); // Привет, Вася
// showMessage("Dima"); // Привет, Вася

// let c = 444;

// function maths(abracadabra, cadabraabra) {
//     let result = abracadabra + cadabraabra;
//     console.log(result);
// }
//
// maths(111, 222, c);
// maths(111, "222", 666);
// maths(222, 333);
// maths(333, 444,);


// function maths(a,b){return a+b;}
// function maths(a, b) {
//     // let result = a + b;
//     // return result;
//     return a + b;
// }

// let sum = maths(123, 321);
// console.log(sum);



// let sum2 = maths(222, 333);
// console.log(sum2);


let a = document.getElementById("container-0");
console.log(a);

a.onclick = function (){
    console.log("123")
}

a.mouseenter = function (){
    console.log("5555")
}