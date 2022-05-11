var waktu = 14;
setInterval(function() {
	waktu--;
	if(waktu < 1) {
		waktu = 15;
	} else {
		document.getElementById("waktu").innerHTML = waktu;
	}
}, 1000 * 60 * 60 * 24);