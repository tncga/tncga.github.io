var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

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
	//$scope.zurl = "http://rank.sunucuadresi.com/playerinfo/"+zid;
	//$scope.zpng = "http://rank.sunucuadresi.com/sig/"+zid+"_9.png";	
});

var client = getParameterByName("client_id")

function spotifyCode() {
window.open("https://accounts.spotify.com/authorize/?client_id=b1e7787ac8764ebb8f78c3881bbb9094&response_type=code&redirect_uri=https://tncga.github.io/youtify.html?id=ok&state=3f5Dd5as", "_blank", "width=400,height=500")
}

function spotifyToken(code) {
var http = new XMLHttpRequest();
var url = "https://accounts.spotify.com/api/token";
http.open("POST", url, true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Authorization", "Basic " + client);

http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send("grant_type=authorization_code&code=" + code + "&redirect_uri=https://tncga.github.io/youtify.html?id=ok");
}
