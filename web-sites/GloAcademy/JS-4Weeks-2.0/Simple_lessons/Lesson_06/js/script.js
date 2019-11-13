/*
* @Author: Vitaly
* @Date:   2018-05-31 18:27:56
* @Last Modified by:   User
* @Last Modified time: 2018-06-16 19:43:36
*/

/* Взято из второго подзраздела обязательного ДЗ №5 */

let open_btn = document.getElementById("open-btn"),
	name_value = document.getElementsByClassName("name-value")[0],
	budget_value = document.getElementsByClassName("budget-value")[0],
	goods_value = document.getElementsByClassName("goods-value")[0],
	items_value = document.getElementsByClassName("items-value")[0],
	employers_value = document.getElementsByClassName("employers-value")[0],
	discount_value = document.getElementsByClassName("discount-value")[0],
	isopen_value = document.getElementsByClassName("isopen-value")[0],

	goods_item = document.getElementsByClassName("goods-item"),
	goods_btn = document.getElementsByTagName("button")[1],
	budget_btn = document.getElementsByTagName("button")[2],
	employers_btn = document.getElementsByTagName("button")[3],
	choose_item = document.querySelector(".choose-item"),
	time_value = document.querySelector(".time-value"),
	count_budget_value = document.querySelector(".count-budget-value"),
	hire_employers_item = document.querySelectorAll(".hire-employers-item");

/* Присваиваем ID полей ввода для дальнейшей блокировки */

let inputGoods_1 = document.getElementById("goods_1"),
		inputGoods_2 = document.getElementById("goods_2"),
		inputGoods_3 = document.getElementById("goods_3"),
		inputGoods_4 = document.getElementById("goods_4"),
		inputItems= document.getElementById("items"),
		inputBudget = document.getElementById("budget"),
		inputEmployers_1 = document.getElementById("employers_1"),
		inputEmployers_2 = document.getElementById("employers_2"),
		inputEmployers_3 = document.getElementById("employers_3");

/* Переменные для функционала магазина */

let credits,
		shopGoods = [],
		price,
		mainList = {
			clientBudjet : credits,
			shopName : name,
			shopGoods: [],
			employers: {},
			open: false,
			discount: false,
			shopItems: []
		}

/*Выключаем строку ввода "Расчет бюджета" */
function budgetInputDisable() {
	inputBudget.disabled = true;
}
budgetInputDisable();

/* Задаём функции включения и отключения кнопок */

// функция Выключения кнопок
function btnOff() {
	// document.getElementById("open-btn").disabled = true;
	document.getElementsByTagName("button")[1].disabled = true;
	document.getElementsByTagName("button")[2].disabled = true;
	document.getElementsByTagName("button")[3].disabled = true;
	console.log("Кнопки отключены");
}
// функция Включения кнопок
function btnOn() {
	// document.getElementById("open-btn").disabled = false;
	document.getElementsByTagName("button")[1].disabled = false;
	document.getElementsByTagName("button")[2].disabled = false;
	document.getElementsByTagName("button")[3].disabled = false;
	console.log("Кнопки включены");
}

/* Тоже самое для полей ввода */

// функция Выключения полей ввода
function inputOff () {
	inputGoods_1.disabled = true;
	inputGoods_2.disabled = true;
	inputGoods_3.disabled = true;
	inputGoods_4.disabled = true;
	inputItems.disabled = true;
	inputBudget.disabled = true;
	inputEmployers_1.disabled = true;
	inputEmployers_2.disabled = true;
	inputEmployers_3.disabled = true;
}
// функция Включения полей ввода за исключением строки "Расчет бюджета" (по заданию)
function inputOn () {
	inputGoods_1.disabled = false;
	inputGoods_2.disabled = false;
	inputGoods_3.disabled = false;
	inputGoods_4.disabled = false;
	inputItems.disabled = false;
	// inputBudget.disabled = false;
	inputEmployers_1.disabled = false;
	inputEmployers_2.disabled = false;
	inputEmployers_3.disabled = false;
}

// На начальном этапе выключаем кнопки и поля ввода
btnOff();
inputOff();


// Событие по клику кнопки "Открыть Магазин" (заполнение полей ввода "Категории товаров")
open_btn.addEventListener('click', () => {

	credits = prompt("Ваш бюджет на месяц?", "70000");

	while(isNaN(credits) || credits == "" || credits == null) {credits = prompt("Ваш бюджет на месяц?", "70000");}
	console.log("Бюджет: " + credits);
	budget_value.textContent = credits;

	name_value.textContent = prompt("Название вашего магазина?", "shop_name").toUpperCase();
	console.log("Название магазина: " + name);
	inputOn();		// После того, как заполнили главную информацию - включаем поля ввода
});
// Событие по клику кнопки "Утвердить"
goods_btn.addEventListener('click', () => {
	for (var i=0;i<goods_item.length;i++) {
					let productName = goods_item[i].value;

					console.log("Output: " + productName);
					if ((typeof(productName)) === "string" || (typeof(productName)) === null || productName != '' || productName.length<50) {
						console.log("Всё верно!"  + "\nТип: " + typeof(productName));
						mainList.shopGoods[i] = productName;
						goods_value.textContent = mainList.shopGoods;
					} else {
						console.log("Не верно!");
						i = i - 1;
					}
				}
});
// Событие по изменению содержания полей ввода "Продукты"
choose_item.addEventListener('change', () => {
	let items = choose_item.value;

	if(isNaN(items) && items != ''){
				mainList.shopItems = items.split(", ");
				mainList.shopItems.sort();

				items_value.textContent = mainList.shopItems;
			}
});
// Событие по изменению содержания полей ввода "Сколько сейчас время?"
time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
					console.log("Время не может быть отрицательным!");
					mainList.open = false;
				} else if (time >= 0 && time < 8) {
					console.log("Простите.. Магазин ещё не открылся!");
					mainList.open = false;
				} else if (time > 8 && time < 20) {
					console.log("Время работать!");
					mainList.open = true;
				} else if (time > 20 && time < 24) {
					console.log("К сожалению, магазин уже закрыт...");
					mainList.open = false;
				}	else if (time > 24) {
					console.log("В сутках только 24 часа!");
					mainList.open = false;
				}

				if(mainList.open) {
					isopen_value.style.backgroundColor = 'green';
					btnOn();					// Включаем кнопки
				}	else {
					isopen_value.style.backgroundColor = 'red';
					btnOff();					// Отключаем кнопки
				}
});
// Событие для функционала Дисконтной системы
budget_btn.addEventListener('click', () => {
	count_budget_value.value = credits / 30;
});
// Событие по изменению содержания полей ввода "Имена сотрудников"
employers_btn.addEventListener('click', () => {
	for(let i = 0;i<hire_employers_item.length; i++){
		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;

		employers_value.textContent += mainList.employers[i] + ", ";
	}
});

// Реализация функции дисконтной системы
discount_value.addEventListener('change', () => {
	let price = discount_value.value;

	if (mainList.discount) {
					price = price * 0.80;
					discount_value.style.backgroundColor = 'green';
					console.log("Price: " + price);
				} else {
					discount_value.style.backgroundColor = 'red';
					console.log("Price: " + price);
				}
});

console.log(mainList); // Контрольный вывод всех значений mainList

