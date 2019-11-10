/*
* @Author: User
* @Date:   2018-06-18 05:19:57
* @Last Modified by:   User
* @Last Modified time: 2018-06-25 21:19:50
*/

window.addEventListener('DOMContentLoaded', function() {

	

// Timer

	let deadline = '2018-06-18'; // устанавливаем дату крайнего срока

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60 ),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {

		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				function updateClock() {
					let t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					minutes.innerHTML = t.minutes;
					seconds.innerHTML = t.seconds;

					if (t.total > 0) {
						if (t.hours > 0 && t.hours < 10) {
							hours.innerHTML = '0' + t.hours;
						} else hours.innerHTML = t.hours;

						if (t.minutes > 0 && t.minutes < 10) {
							minutes.innerHTML = '0' + t.minutes;
						} else minutes.innerHTML = t.minutes;

						if (t.seconds > 0 && t.seconds < 10) {
							seconds.innerHTML = '0' + t.seconds;
						}	else seconds.innerHTML = t.seconds;

					} else {
						hours.innerHTML = '00';
						minutes.innerHTML = '00';
						seconds.innerHTML = '00';
					} 

					if (t.total <= 0) {
						clearInterval(timeInterval);
					}
				};

				updateClock();
				var timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadline);
	console.log("Clocks works!");

		let tab = document.getElementsByClassName("info-header-tab"),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

			function hideTabContent(a) {
				for (let i=a; i < tabContent.length; i++) {
					tabContent[i].classList.remove('show');
					tabContent[i].classList.add('hide');
				}
			}
			hideTabContent(1);

			function showTabContent(b) {
				if(tabContent[b].classList.contains('hide')) {
					hideTabContent(0);
					tabContent[b].classList.remove('hide');
					tabContent[b].classList.add('show');
				}
			}

			info.addEventListener('click', function(event) {
				let target = event.target;
				if(target.className == 'info-header-tab') {
					for (let i = 0; i < tab.length; i++) {
						if (target == tab[i]) {
							showTabContent(i);
							break;
						}
					}
				}
			});
	console.log('Tabs is DONE!');

// Modal window

let more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	description_btn = document.querySelectorAll('.description-btn'),
	close = document.querySelector('.popup-close');


for(let i=0;i<description_btn.length;i++) {

	description_btn[i].addEventListener('click', function () {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});

}

more.addEventListener('click', function() {
	this.classList.add('more-splash');
	overlay.style.display = "block";
	document.body.style.overflow = "hidden";
});

close.addEventListener('click', function() {
	overlay.style.display = "none";
	this.classList.remove('more-splash');
	document.body.style.overflow = '';
});

// Form

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

// Slider

let slideIndex = 1,
	slides = document.getElementsByClassName('slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider-dots'),
	dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};

		for (let i=0;i<slides.length;i++) {
			slides[i].style.display = 'none';
		};

		for (let i=0;i<dots.length;i++) {
			dots[i].classList.remove('dot-active');
		};

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides (n) {
		showSlides(slideIndex += n)
	}

	function currentSlide(n) {
		showSlides(slideIndex = n)
	}

	prev.addEventListener('click', function() {
		plusSlides(-1);
	});

	next.addEventListener('click', function() {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i=0;i<dots.length + 1;i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]){
				currentSlide(i);
			}
		}
	});

	// Calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function() {
				personsSum = +this.value;
				total = (daysSum + personsSum)*4000;
				if (restDays.value == '' || personsSum == '' || daysSum == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
				
			});

			persons.onkeyup = function(input){
				return this.value = this.value.replace(/[^\d]/g, '');
			}

			restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total = (daysSum + personsSum)*4000;
				if (persons.value == '' || personsSum == '' || daysSum == '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
				
			});

			restDays.onkeyup = function(input){
				return this.value = this.value.replace(/[^\d]/g, '');
			}

			place.addEventListener('change', function() {
				if (restDays.value == '' ||  persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
			});
});


