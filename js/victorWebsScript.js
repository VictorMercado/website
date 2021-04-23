const headSize = 100;
document.addEventListener("keydown", function(event){
	if(event.keyCode == 13) {
		document.getElementById("field2").value = document.getElementById("field1").value;
 	}
});
let headerFlexContainer = document.querySelector('.header-flex-container');
headerFlexContainer.children[0].style.backgroundColor = "black";
let aValue = headerFlexContainer.childNodes;
console.log("hi" + aValue[0].text);
console.log(headerFlexContainer);

let windowWidth = window.innerWidth
|| window.documentElement.clientWidth
|| window.body.clientWidth;

let windowHeight = window.innerHeight
|| window.documentElement.clientHeight
|| window.body.clientHeight;
let widthBtn = document.querySelector('.button');
widthBtn.addEventListener("click", () => {
	alert(windowHeight);

});
let navMenu = document.querySelector('.navMenu');
navMenu.style.height = windowHeight + "px";
navMenu.addEventListener('click', () => {
	alert(windowWidth);
});
let windoww = window;
let header = document.querySelector(".header");
header.style.height = headSize + "px";
let subBody = document.querySelector(".subBody");
subBody.style.height = windowHeight - headSize + "px";

let party = document.querySelector(".party");
windoww.addEventListener("scroll", ()=> {
	console.log(windoww.scrollTop);
});
//to slide in the top secret heading
// var toi = 90;
// $win.on('click', function () {
//   console.log("hi");
//
// 	toi += 45;
// 	console.log(toi);
// 	$magic.css('transform', 'rotate(' + toi + 'deg)');
// });
//
// var $magic2 = $('.magic2');
// var $win2 = $(window);
//
// $win2.on('scroll', function () {
// 	var topp = $win2.scrollTop() / 2;
// 	$magic2.css('transform', 'rotate(' + topp + 'deg)');
//
// });
