var $name = document.querySelector("#name"),
	step = 0,
	nav = document.querySelector("#h");
$name.addEventListener("click", fn);
function fn () {
	step++;
	if (step === 6){  // 點 6下之後打開 navBar
		step = 0;
		nav.style.width = "100%";
	}
}
function closeNav () {  // close navBar
	nav.style.width = "0%";
}

nav.children[1].addEventListener("click", password);
function password () {
	var psw = prompt("Enter Passcode", "");
	if (psw !== "" && psw != null) {  // 把完整網址加入 a 的 href
		nav.children[0].href += psw;
		nav.children[1].removeEventListener("click", password);
	}
}