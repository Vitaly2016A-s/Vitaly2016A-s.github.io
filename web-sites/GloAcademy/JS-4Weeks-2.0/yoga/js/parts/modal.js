/*
* @Author: User
* @Date:   2018-06-26 18:04:17
* @Last Modified by:   User
* @Last Modified time: 2018-06-26 18:07:03
*/

function modal() {
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

}

module.exports = modal;