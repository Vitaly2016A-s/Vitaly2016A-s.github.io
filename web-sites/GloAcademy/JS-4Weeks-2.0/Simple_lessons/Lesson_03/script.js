/*
* @Author: Vitaly
* @Date:   2018-05-31 18:27:56
* @Last Modified by:   User
* @Last Modified time: 2018-06-03 03:47:00
*/
/* Обявление переменных*/
var credits,
		nam,
		shopGoods = [],
		time,
		price,
		mainList = {
		clientBudjet : credits,
		shopName : name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false 
};

/*Блоки функций*/

function start() {
	credits = prompt("Ваш бюджет на месяц?", "70000");
	while(isNaN(credits) || credits == "" || credits == null) {credits = prompt("Ваш бюджет на месяц?", "70000");}
	console.log("Бюджет: " + credits);
	name = prompt("Название вашего магазина?", "shop_name").toUpperCase();
	console.log("Название магазина: " + name);
}

function chooseGoods() {
	for (var i=0;i<3;i++) {
		let productName = prompt("Какой тип товаров будем продавать?");
		console.log("Output: " + productName);
		if ((typeof(productName)) === "string" || (typeof(productName)) === null || productName != '' || productName.length<50) {
			console.log("Всё верно!"  + "\nТип: " + typeof(productName));
			mainList.shopGoods[i] = productName;
		} else {
			console.log("Не верно!");
			alert("Пожалуйста, повторите попытку!");
			break;
		}
	}
}

function workTime(time){
	if (time < 0) {
		console.log("Время не может быть отрицательным!");
	} else if (time > 0 && time < 8) {
		console.log("Простите.. Магазин ещё не открылся!");
	} else if (time > 8 && time < 20) {
		console.log("Время работать!");
	} else if (time > 20 && time < 24) {
		console.log("К сожалению, магазин уже закрыт...");
	}	else if (time > 24) {
		console.log("В сутках только 24 часа!");
	}
}

function dayBudjet() {
	alert("Бюджет клиента в день составляет: " + (credits/30));
	console.log("Бюджет клиента в день составляет: " + (credits/30) + "\nDONE!");
}

/*Вызов функций*/

// start();
// chooseGoods();
// dayBudjet();
// workTime(5);

/* Подзадания 2-4 */

function discountSystem(price) {
	if (mainList.discount) {
		price = price * 0.80;
		console.log("Price: " + price);
	} else {
		console.log("Price: " + price);
	}
}
// discountSystem(84.5);

function shopEmployers() {
	for(let i=1;i<5;i++) {
		let person = prompt("Имя сотрудника №" + i);
		let phone  = prompt("Телефонный номер сотредника№" + i);
		console.log("Имя: " + person + "\nНомер:" + phone);
	}
}
// shopEmployers()