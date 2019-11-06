const itemOne = 999.99;
const itemTwo = 1399.99;
var itemOnecount = localStorage.getItem("itemOne-count");
let itemTwocount = localStorage.getItem("itemTwo-count");

console.log(itemOnecount);
console.log(itemTwocount);

 $(".itemOne-minus").on("click", function(){
 	if(itemOnecount > 1){
 		$("#itemOne-qty").html(--itemOnecount);
 		$("#itemOne-price").html(itemOne * itemOnecount.toFixed(2));
 		localStorage.setItem("itemOne-count", itemOnecount);
 	}
 	$(".total-price").html(((itemOnecount * itemOne)+(itemTwocount * itemTwo)).toFixed(2));
});


$(".itemOne-plus").on("click", function(){
	$("#itemOne-qty").html(++itemOnecount);
	$("#itemOne-price").html(itemOne * itemOnecount.toFixed(2));
	localStorage.setItem("itemOne-count", itemOnecount);
	$(".total-price").html(((itemOnecount * itemOne)+(itemTwocount * itemTwo)).toFixed(2));
});

 $(".itemTwo-minus").on("click", function(){
 	if(itemTwocount > 1){
		$("#itemTwo-qty").html(--itemTwocount);
		$("#itemTwo-price").html(itemTwo * itemTwocount.toFixed(2));
		localStorage.setItem("itemTwo-count", itemTwocount);
 	}
 	$(".total-price").html(((itemOnecount * itemOne)+(itemTwocount * itemTwo)).toFixed(2));
});

$(".itemTwo-plus").on("click", function(){
	$("#itemTwo-qty").html(++itemTwocount);
	$("#itemTwo-price").html(itemTwo * itemTwocount.toFixed(2));
	localStorage.setItem("itemTwo-count", itemTwocount);
	$(".total-price").html(((itemOnecount * itemOne)+(itemTwocount * itemTwo)).toFixed(2));
});






