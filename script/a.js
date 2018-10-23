var $name = document.querySelector("#name"),
	step = 0,
	nav = document.querySelector("#h");
$name.addEventListener("click", fn);
function fn () {
	step++;
	if (step === 6){
		step = 0;
		nav.style.width = "100%";
	}
}
function closeNav () {
	nav.style.width = "0%";
}