var search = document.getElementById('search');
var button = document.getElementById('btnSearch');

button.addEventListener("click", function (evt) {
 evt.preventDefault();
 window.location.replace("result.html?s=" + search.value);
 return false; 
});