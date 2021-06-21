var url_string = window.location.href; // specific url if needed
var url = new URL(url_string);
var s = url.searchParams.get("s");
console.log(s);
  // Declare variables
var input, filter, ul, li, a, i, txtValue;
input = s  //document.getElementById('search');
filter = input.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
for (i = 0; i < li.length; i++) {
  a = li[i].getElementsByTagName("a")[0];
  txtValue = a.textContent || a.innerText;
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
  } else {
    li[i].style.display = "none";
  }
}