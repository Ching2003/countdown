const container = document.getElementById('container');
function o (a) {
	return (a < 10) ? "0" + a : a;
}

c(new Date(2019, 4, 18, 8, 20).getTime(), '會考', new Date(2019, 4, 19, 12, 50).getTime());
c(new Date(2019, 0, 25, 9, 15).getTime(), '學測', new Date(2019, 0, 26, 16, 50).getTime());

function c (time, text, end) {
    const target = document.createElement('h1');
    container.appendChild(target);
    count(time, text, target);
    setInterval(count, 1000, time, text, target, end);
}

function count (time, text, target, end) {
    const now = new Date().getTime();
    if (now < time){
        const r = time - now;
        const day = Math.floor(r / 86400000),
            hour = Math.floor(r % 86400000 / 3600000),
            minute = Math.floor(r % 3600000 / 60000),
            second = Math.floor(r % 60000 / 1000);
        target.innerHTML = `距離${text}還有 ${day}天 ${hour}小時 ${o(minute)}分鐘 ${o(second)}秒`;
    } else if (now > end){
        const r = now - time;
        const day = Math.floor(r / 86400000),
            hour = Math.floor(r % 86400000 / 3600000),
            minute = Math.floor(r % 3600000 / 60000),
            second = Math.floor(r % 60000 / 1000);
        target.innerHTML = `距離${text}已過 ${day}天 ${hour}小時 ${o(minute)}分鐘 ${o(second)}秒`;
    } else {
        target.innerHTML = `${text}進行中`;
    }
}



document.getElementById("comment").addEventListener("click", function () {
	const tmp = document.createElement("script");
	tmp.src = "./script/disqus.js";
	document.body.appendChild(tmp);
});

if (location.hash !== "#nocomment") {
	window.onload = function () {document.getElementById("comment").click();}
} else {
    document.getElementById("comment").style.display = 'none';
    document.getElementById("nav").style.display = 'none';
    document.getElementById("name").style.display = 'none';
}