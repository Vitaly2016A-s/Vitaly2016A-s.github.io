/*
* @Author: User
* @Date:   2018-06-09 20:05:58
* @Last Modified by:   User
* @Last Modified time: 2018-06-12 21:59:00
*/

let list = document.getElementsByClassName("menu-item"),
	adver = document.getElementsByClassName("adv")[0];

let wordSecond = document.createTextNode("Второй пункт"),
	wordThird  = document.createTextNode("Третий пункт");

list[1].innerText = '';
list[2].innerText = '';

list[1].appendChild(wordSecond);
list[2].appendChild(wordThird);

adver.parentNode.removeChild(adver);

document.body.style.background = "url(./img/apple_true.jpg)";

title.textContent = "Мы продаем только подлинную технику Apple";

let appleQuestion = prompt("Как вы относитесь к технике apple?");
console.log("Ответ: " + appleQuestion);