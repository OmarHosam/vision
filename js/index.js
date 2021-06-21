var search = document.getElementById('search');
var button = document.getElementById('btnSearch');

function redirect(val) {
	window.location.href = "file:///root/Full-set-website/Vision/" + val;
}

button.addEventListener("click", function (evt) {
 evt.preventDefault();
 window.location.replace("result.html?s=" + search.value);
 return false; 
});

/*button.addEventListener('click', function() {
	var url = "result.html?s=" + search.value;
	redirect(url);
});

function test(){
	document.location.href = "file:///root/Full-set-website/Vision/result.html?s=" + search.value;	
}*/