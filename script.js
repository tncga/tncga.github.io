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
};

var id = getParameterByName("id");
var zid = getParameterByName("zid");
var stats = angular.module("csgostats", []);
stats.controller("ctrl", function ($scope) {
	$scope.curl = "http://csgo-stats.com/"+id;
	$scope.cpng = "http://csgo-stats.com/"+id+"/graphic.png";
	$scope.zurl = "http://rank.sunucuadresi.com/playerinfo/"+zid;
	$scope.zpng = "http://rank.sunucuadresi.com/sig/"+zid+"_9.png";	
});
