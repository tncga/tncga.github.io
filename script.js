function searchQuery(input) {
	if (input=="google") {
		window.location.href="https://www.google.com.tr/search?q="+document.getElementById('q_google').value;
	} else if (input=="youtube") {
		window.location.href="https://www.youtube.com/results?search_query="+document.getElementById('q_youtube').value;
	} else if (input=="soundcloud") {
		window.location.href="https://soundcloud.com/search?q="+document.getElementById('q_soundcloud').value;	
	}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
window.onload = function() {
var png="http://csgo-stats.com/" + getParameterByName("id") + "/graphic.png";
document.getElementById('csimg').src = png;
var link="http://csgo-stats.com/" + getParameterByName("id");
document.getElementById('cslink').href = link;
}