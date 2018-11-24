var x = document.getElementById('a'),
y = document.getElementById('b');
const h = new Date(2019, 4, 18, 8, 20),
h2 = new Date(2019, 0, 25, 9, 15);
function o (a) {
	return (a < 10) ? "0" + a :a;
}
setInterval(timer, 1000, h, "距離會考還有 ", x);
setInterval(timer, 1000, h2, "距離學測還有 ", y);
function timer (h, name, target){
	var n = new Date();
	var m = new Date (h - n);
	var r = Math.floor(m.getTime()/3600000/24);
	var rh = Math.floor(m.getTime()/3600000 - r * 24);
	target.innerHTML = name + r + "天 " + o(rh) + "小時 " + o(m.getMinutes()) + "分鐘 " + o(m.getSeconds()) + "秒";
}

document.getElementById("comment").addEventListener("click", function () {
	const tmp = document.createElement("script");
	tmp.src = "./script/disqus.js";
	document.body.appendChild(tmp);
});

/* 
if (location.hash == "#comment") {
	document.getElementById("comment").click();
}
 */