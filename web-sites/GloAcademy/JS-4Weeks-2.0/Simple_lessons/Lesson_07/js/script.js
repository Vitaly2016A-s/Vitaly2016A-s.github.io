/*
* @Author: User
* @Date:   2018-06-18 05:19:57
* @Last Modified by:   User
* @Last Modified time: 2018-06-18 08:45:07
*/

window.addEventListener('DOMContentLoaded', function() {

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
});
console.log('DONE!');