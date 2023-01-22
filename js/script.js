"use strict"

// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// }

/* function calcSumm(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm(numOne, numTwo - 1);
	}
}
console.log(calcSumm(4, 6)); */

// let user = {
// 	age: 10,
// };
// user["Вітання"] = "Привіт";
// // alert(user);
// console.log(user);
// delete user["Вітання"];
// console.log(user);


// let obj = {};
// obj.__proto__ = 5;
// console.log(obj.__proto__);


// let user = {};
// console.log(user.noSuchProperty == undefined);


// let user = { name: "Іван", age: 30, };
// console.log("cheese" in user);

// let key;
// let user = {
// 	name: "tolichok",
// 	job: "fullstack webdev",
// 	age: 21,
// };
// for (key in user) {
// 	console.log(user);
// }


// let user = {};
// user.name = "Іван";
// user.surname = "Сміт";
// console.log(user);
// user.name = "Петро"
// console.log(user["name"]);
// delete user.name;


// let calculator = new Calculator();


// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// }
// let user = userInfo;
// user.age = 45;
// console.log(userInfo);


// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// }
// for (const key in userInfo) {
// 	const value = userInfo[key];
// 	console.log(value);
// }
// function showVisitors() {
// 	let a = prompt("Введіть кількість відвідувачів на 1 поверсі");
// 	let b = prompt("Введіть кількість відвідувачів на 2 поверсі");
// 	alert(Math.round(parseInt(a) + parseInt(b)));
// }
// showVisitors();


let str = "Taras";
console.log(str[10]);
console.log(str.charAt(10))