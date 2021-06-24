var search = document.getElementById('search');
var button = document.getElementById('btnSearch');
var txtName = document.getElementById('txtName');
var txtDescription = document.getElementById('txtDescription');
var image = document.getElementById('image');
var url_string = window.location.href; // specific url if needed
var url = new URL(url_string);
var p = url.searchParams.get("p");
console.log(p);

if(p == "xerox 700"){
	txtDescription.innerHTML = "XEROX 700"
	txtName.innerHTML = p;
	image.src = "../assets/xerox700.jpg"
}
button.addEventListener("click", function (evt) {
 evt.preventDefault();
 window.location.replace("../result.html?s=" + search.value);
 return false; 
});