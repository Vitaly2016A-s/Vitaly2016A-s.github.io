/*
* @Author: User
* @Date:   2018-06-18 05:46:43
* @Last Modified by:   User
* @Last Modified time: 2018-06-18 07:34:04
*/

let start_btn = document.getElementById("start-btn");

start_btn.addEventListener('click', () => {
	let timerId = setTimeout(function startTimer() {
		    var my_timer = document.getElementById("my_timer");
		    var time = my_timer.innerHTML;
		    var arr = time.split(":");
		    var h = arr[0];
		    var m = arr[1];
		    var s = arr[2];
		    if (s == 0) {
		      if (m == 0) {
		        if (h == 0) {
		          alert("Время вышло");
		          window.location.reload();
		          return;
		        }
		        h--;
		        m = 60;
		        if (h < 10) h = "0" + h;
		      }
		      m--;
		      if (m < 10) m = "0" + m;
		      s = 59;
		    }
		    else s--;
		    if (s < 10) s = "0" + s;
		    document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
		    timerId = setTimeout(startTimer, 1000);
		  },1000)  
	 });
