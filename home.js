// console.log("hello danny");
// console.log("calculate two values");
// a = 10;
// b = 20;
// c = a + b;
// console.log(c);
// function display(x, y) {
//     for (var i = 1; i <= 10; i++)

//         console.log(x, '*', i, '=', x * i);
// }
// //display(8);
// console.log("changing parameters");
// display(6);
// function sum(g, h) {
//     console.log('Result =:', g + h);
// }
// console.log('Entermerision');
// sum(70, 20);
// console.log('actual intermerision');
// sum(34, 90);
// console.log('thise is the end of program');

// oops part
// class student {
//     constructor(sname, sage) {
//         console.log("hi thise is the main part of thise program");
//         this.sname = sname;
//         this.sage = sage;
//     }
//     displaystudent1() {
//         console.log("student name:", this.sname, "student age:", this.sage);
//     }
// }

// const s1 = new student('sumit', 17);

// s1.displaystudent1();



//string in java script
// var text = 'welcom top this program';
// demo = text.toUpperCase();
// console.log(demo);
// var num = 12.9845;
// //console.log(num.toFixed(1));
// var str = num.toString();
// // console.log(str, typeof str);
// console.log("thise is the starter");
// setTimeout(() => {
//     console.log('hi')
// }, 2000);

//asynchronouse


// callback function
// function userlogin(cb) {
//     console.log("In India Tajmahl is great place in agra");
//     cb();
// }

// function displayuser() {
//     console.log("hello india");
// }
// userlogin(displayuser);


//promiss method 
// let myPromis = new Promise((resolve, reject) => {
//     var x = 1;
//     if (x == 1) {
//         console.log(" Process Done");
//     } else {
//         console.log("process fail");
//     }
// })
// myPromis.then((res) => {
//     console.log(res)

// }).catch((err) => {
//     console.log(err);
// })
// function login(username, password) {

//     console.log('thise is an login page')
//     return new Promise((resolve, reject) => {

//         //console.log('login oage');
//         if (username == 'akshay' && password == '12345') {
//             resolve(username);
//         } else {
//             // reject('login faild');
//             reject('  plese check username and password  ');
//         }

//     })

// }

// function displaydata(username) {
//     return new Promise((resolve, reject) => {
//         console.log('  displaying data  ');
//         resolve('username' + username);
//     })
// }
//1) login('akshay', '12345').then((data) => {
//     console.log(data);
//     console.log('login sucessfully');
//resolve(res);
// displaydata(data).then((res) => {
//     console.log(res);

// })
// }).catch((err) => {
//     console.log(err);
// })
////2)thise is another way to determine promisss

// async function dothise() {
//     try {
//         const data = await login('aksha', '12345');
//         console.log('hello');
//         const res = await displaydata(data);
//         console.log(res);
//     } catch (err) {
//         console.log('login faild');
//     }
// }
// dothise();
///dom (document object model manupilation)
// console.log('hello dnyaneshwar');
// const a = document.getElementById('h1');
// console.log(a);
// const x = document.getElementById('h1');
// console.log(x);
// const a = document.getElementsByClassName('hundai');
// console.log(a[0]);
//element.style.property='value';

// setTimeout(() => {
//     document.querySelector('#h1').style.color = "green";
// }, 5000)
// function changeColor() {
//     console.log('button clicked');
//     const a = document.querySelector("#poop");
//     a.style.color = "white";
//     a.style.backgroundColor = "green";
//     a.innerHTML = "Hi iam dnyaneshwar ";

// }
// document.querySelector("#btn1").onclick = changeColor;

// function secondLine() {
//     const b = document.querySelector("#h1");
//     b.style.color = "yello";
//     b.style.backgroundColor = "green";
//     b.innerHTML = "......";

// }

// function demo() {
//     let s = document.querySelector("#fristName");
//     console.log(s.value);
//     s.value = s.value.toUpperCase();



// }

//addEventListener method()
//multipal functions call in omne click
// document.querySelector('#btn').addEventListener('click', demo1);
// document.querySelector('#btn').addEventListener('click', demo2);

// function demo1() {
//     console.log('demo1 is called');
// }

// function demo2() {
//     console.log('demo2 is called');
// }


//DOM tree //add new text with the help of .append property

//function newText() {

//     const a = document.createElement("h");
//     const b = document.createTextNode("Trinity Academy Of Engineering");
//     a.appendChild(b);
//     const ele = document.querySelector("#box1");
//     ele.appendChild(a);

// const x = window.innerHeight;
//const y = window.innerWidth;
//console.log(x, y);
//window.close();
//}\
// function deletingData() {
//     const a = confirm("are you sure exit");
//     //console.log(a);
//     if (a) {
//         console.log("data deleting");
//     } else {
//         console.log("deletng cancle");
//     }
// }