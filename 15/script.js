var myList = document.getElementById("list");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var ul = document.getElementById("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup");
var close = document.querySelector(".close");


console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);


function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}
function delItem(){
	myList.removeChild(story[0]);

	if(story.lenght == 0){
		popup.style.display = "block";
	}

}

function closePopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);