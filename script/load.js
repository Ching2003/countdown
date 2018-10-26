function load () {
	var loadBoard = this;  // 取得loadBoard
}
window.onload = function(){
	loadBoard.childNodes[1].style.opacity = "1";  // 取得loadBoard中的元素
	setTimeout(function(){  // 等三秒 transition 特效結束
		loadBoard.style.opacity = "0";
		setTimeout(function(){  // 等三秒 transition 特效結束
			loadBoard.style.display = "none";
		}, 3000);
		
	}, 3000);
}