/*
* @Author: Vitaly
* @Date:   2018-05-31 18:27:56
* @Last Modified by:   User
* @Last Modified time: 2018-05-31 21:20:19
*/

var credits = prompt("Ваш бюджет на месяц?", "70000");
console.log("Бюджет: " + credits);
var name = prompt("Название вашего магазина?", "shop_name");
console.log("Название магазина: " + name);
var shopGoods = [];

var mainList = {
	clientBudjet : credits,
	shopName : name,
	shopGoods: [],
	employers: {},
	open : false
};

for (var i=0;i<3;i++) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
	console.log("Output: " + mainList.shopGoods[i]);
}

alert("Бюджет клиента в день составляет: " + (credits/30));
console.log("Бюджет клиента в день составляет: " + (credits/30) + "\nDONE!");
