button = document.getElementById('btnSearch');
search = document.getElementById('search');

button.addEventListener("click", function (evt) {
 evt.preventDefault();
 window.location.replace("../result.html?s=" + search.value);
 return false; 
});