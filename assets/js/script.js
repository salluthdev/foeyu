// let waktu = 15;
// waktu = localStorage.getItem('waktu');
// document.getElementById('waktu').innerHTML = waktu;
// setInterval(function() {
// 	waktu--;
// 	if(waktu < 1) {
// 		waktu = 15;
// 	} else {
// 		document.getElementById('waktu').innerHTML = waktu;
// 	}
// 	localStorage.setItem('waktu', waktu)
// }, 1000);

var countDownDate = new Date("June 01, 2024").getTime();

var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var days = Math.floor((distance % (1000 * 15 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));

	document.getElementById("waktu").innerHTML = days;

	if (distance < 0) {
	clearInterval(x);
	document.getElementById("waktu").innerHTML = "x";
	}
});