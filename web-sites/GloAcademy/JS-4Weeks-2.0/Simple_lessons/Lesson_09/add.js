/*
* @Author: User
* @Date:   2018-06-20 21:49:54
* @Last Modified by:   User
* @Last Modified time: 2018-06-20 22:05:50
*/

let age = document.getElementById("age");

function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.age.value);
}
 
showUser("Пупкин","вася");

/* Выведите на экран правильное сообщение, которое берет значение из input */