var x = document.getElementById('a'),
y = document.getElementById('b');
const h = new Date(2019, 4, 18, 8, 20),
h2 = new Date(2019, 0, 25, 0, 0);
function o (a) {
	return (a < 10) ? "0" + a :a;
}
setInterval(timer1, 1000);
function timer1(){
	var n = new Date();
	var m = new Date (h - n);
	var r = Math.floor(m.getTime()/3600000/24);
	var rh = Math.floor(m.getTime()/3600000 - r * 24);
	x.innerHTML = "距離會考還有 " + r + "天 " + o(rh) + "小時 " + o(m.getMinutes()) + "分鐘 " + o(m.getSeconds()) + "秒";
	var n2 = new Date();
	var m2 = new Date (h2 - n2);
	var r2 = Math.floor(m2.getTime()/3600000/24);
	var rh2 = Math.floor(m2.getTime()/3600000 - r2 * 24);
	y.innerHTML = "距離學測還有 " + r2 + "天 " + o(rh2) + "小時 " + o(m.getMinutes()) + "分鐘 " + o(m.getSeconds()) + "秒";
}
document.getElementById("comment").addEventListener("click", function () {
	const tmp = document.createElement("script");
	tmp.src = "./script/disqus.js";
	document.body.appendChild(tmp);
});