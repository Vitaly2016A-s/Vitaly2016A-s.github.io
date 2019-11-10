/*
* @Author: User
* @Date:   2018-06-26 18:05:17
* @Last Modified by:   User
* @Last Modified time: 2018-06-26 20:44:36
*/

function timer() {
	let deadline = '2018-06-29'; // устанавливаем дату крайнего срока

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
						if (t.hours >= 0 && t.hours < 10) {
							hours.innerHTML = '0' + t.hours;
						} else hours.innerHTML = t.hours;

						if (t.minutes >= 0 && t.minutes < 10) {
							minutes.innerHTML = '0' + t.minutes;
						} else minutes.innerHTML = t.minutes;

						if (t.seconds >= 0 && t.seconds < 10) {
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
}

module.exports = timer;