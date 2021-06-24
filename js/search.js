var url_string = window.location.href; // specific url if needed
var url = new URL(url_string);
var s = url.searchParams.get("s");
console.log(s);
  // Declare variables
var input, filter, ul, li, a, i, txtValue;
input = s;  //document.getElementById('search');
if (s == ""){
	window.location.replace("index.html")
}
filter = input.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName('li');
notfound = document.getElementById('notfound');
var status = "NOT FOUND";

  // Loop through all list items, and hide those who don't match the search query
for (i = 0; i < li.length; i++) {
  a = li[i].getElementsByTagName("a")[0];
  txtValue = a.textContent || a.innerText;
  if (input == "#"){
  	console.log("test")
  }
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
    status = "FOUND";
  } else {
    li[i].style.display = "none";
  }
}
if (status == "FOUND"){
	console.log("IT WORKSSSSS");
} else {
	notfound.innerHTML = input + " is not found :(";
}