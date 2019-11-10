/*
* @Author: User
* @Date:   2018-06-26 18:04:17
* @Last Modified by:   User
* @Last Modified time: 2018-06-26 18:08:26
*/

function form() {
let message = new Object();
message.loading = "Загрузка...";
message.success = "Спасибо, скоро мы с вами свяжемся!";
message.failure = "Что-то пошло не так. Попробуйте повторить попытку позднее..";

let form = document.getElementsByClassName("main-form")[0],
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
	// statusMessage.classList.add('status');

	//Задаем событие для модального окна

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		// Ajax

		let request = new XMLHttpRequest();
		request.open("POST", "server.php");

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData(form);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.success;
					// Добавляем контент на страницу
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}
		}

		for (let i=0;i<input.length;i++){
			input[i].value = '';
			//Очищаем поля ввода
		}

	});

	// Задаем событие для контактной формы

	let contact = document.getElementById('form'),
    email = contact.getElementsByTagName('input')[0],
    tel = contact.getElementsByTagName('input')[1],
    statusContact = document.createElement('div');
    statusContact.classList.add('status');

    contact.addEventListener('submit', function(event) {
      event.preventDefault();
      contact.appendChild(statusContact);

      let request = new XMLHttpRequest();
      request.open("POST", "server.php")
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      let formData = new FormData(contact);

      request.send(formData);

      request.onreadystatechange = function() {
          if (request.readyState < 4) {
              statusContact.innerHTML = message.loading;
          } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                  statusContact.innerHTML = message.success;
                 //Добавляем контент на страницу
              }
          } else {
              statusContact.innerHTML = message.failure;
          }
      }
        
      email.value = '';
      tel.value = '';
      //Очищаем поля ввода
	});
}

module.exports = form;