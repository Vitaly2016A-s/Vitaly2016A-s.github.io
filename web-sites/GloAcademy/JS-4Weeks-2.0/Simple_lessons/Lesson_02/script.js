/*
* @Author: Vitaly
* @Date:   2018-05-31 18:27:56
* @Last Modified by:   User
* @Last Modified time: 2018-06-02 20:49:29
*/

var credits = prompt("Ваш бюджет на месяц?", "70000"); 
console.log("Бюджет: " + credits);
var name = prompt("Название вашего магазина?", "shop_name");
console.log("Название магазина: " + name);
var shopGoods = [];
var time = 25; // задаём время (2й Урок)

var mainList = {
	clientBudjet : credits,
	shopName : name,
	shopGoods: [],
	employers: {},
	open : false
};

for (var i=0;i<3;i++) {

	// mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
	// console.log("Output: " + mainList.shopGoods[i]);

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

/*Ещё два способа задать цикл*/
/*
// WHILE //
var i=0;
while (i < 3) {

	// mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
	// console.log("Output: " + mainList.shopGoods[i]);

	let productName = prompt("Какой тип товаров будем продавать?");
	console.log("Output: " + productName);

	if ((typeof(productName)) === "string" || (typeof(productName)) === null || productName != '' || productName.length<50) {
		console.log("Всё верно!"  + "\nТип: " + typeof(productName));
		mainList.shopGoods[i] = productName;
	} else {
		console.log("Не верно!");
		alert("Пожалуйста, повторите попытку!");
	}
	i++;
}	
	*/
/*
// DO WHILE // 
var i=0;
do {

	// mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
	// console.log("Output: " + mainList.shopGoods[i]);

	let productName = prompt("Какой тип товаров будем продавать?");
	console.log("Output: " + productName);

	if ((typeof(productName)) === "string" || (typeof(productName)) === null || productName != '' || productName.length<50) {
		console.log("Всё верно!"  + "\nТип: " + typeof(productName));
		mainList.shopGoods[i] = productName;
	} else {
		console.log("Не верно!");
		alert("Пожалуйста, повторите попытку!");
	}
	i++;
}
while (i < 3)
*/
/* *** */

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

alert("Бюджет клиента в день составляет: " + (credits/30));
console.log("Бюджет клиента в день составляет: " + (credits/30) + "\nDONE!");
