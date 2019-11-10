/*
* @Author: User
* @Date:   2018-06-03 20:41:23
* @Last Modified by:   User
* @Last Modified time: 2018-06-03 21:06:36
*/
let num = 33721;						// Создаём переменную num со значением 33721
// let num = prompt("Введите число: ", 33721);
let sumOne = num.toString();
console.log("Исходное число: " + sumOne); 
let sumTwo = sumOne.charAt(0)*sumOne.charAt(1)*sumOne.charAt(2)*sumOne.charAt(3)*sumOne.charAt(4);
console.log("Произведение цифр числа " + sumOne + ": " + sumTwo);      // Выводим в консоль произведение цифр этого числа
let sumThree = sumTwo**3;			   // Возводим в степень 3, используя только 1 оператор
console.log("Возведение " + sumTwo + " в степень 3: " + sumThree);
let total = sumThree.toString();
console.log("Первые две цифры полученного числа: " + total.charAt(0) + total.charAt(1));
alert("Первые две цифры: " + total.charAt(0) + total.charAt(1)); // Выводим на экран первые 2 цифры полученного числа