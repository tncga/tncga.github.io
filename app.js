window.onload = function() {
  var themes = ["./css/green.theme.css", "./css/old.theme.css"]

  if (themes.includes(getCookie("theme")) == true) {
    document.getElementById('color-theme').href=getCookie("theme")
  } else {
    document.getElementById('color-theme').href=themes[0]
  }
  document.getElementById('theme-selecter').addEventListener('click', function() {
    var colorTheme = document.getElementById('color-theme').href
    var currentTheme="./css/" + colorTheme.match("css\/(.*?)$")[1]
    var nextTheme = themes[(themes.indexOf(currentTheme)+1) % themes.length]
    document.getElementById('color-theme').href=nextTheme
    setCookie("theme", nextTheme)
  })
  load()
}


function load() {
  fetch('data.txt', {
    method: 'GET'
  }).then(function(res) {
    if (res.ok) {
      return res.text()
    }
  }).then(function(r) {
    var parsed = JSON.parse(r)
    var keys = []
    for (var key in parsed) {
      keys.push(key)
    }
    var html = ""
    var mainsq = ""
    var subsq = ""
    keys.map(function(k) {
      parsed[k].map(function(l) {
        let title = htmlBuild("sub-square-title", l.title)
        console.log(l)
        let text = htmlBuild("sub-square-text", l.text)
        let button = ""
        l.buttons.map((b) => {
          button += htmlBuild("button", b.text, b.url) + "\r\n"
        })
        subsq += htmlBuild("sub-square", "\r\n" + title + "\r\n" + text + "\r\n" + button + "\r\n") +"\r\n"

      })
      mainsq += htmlBuild("main-square", htmlBuild("main-square-title", k) + "\r\n" + subsq) + "\r\n"
      subsq = ""
    })

    document.getElementById("content").innerHTML = mainsq
    console.log("Content loaded!");
  }).catch(function(err) {
    console.log(err)
  })
}


function delta(container, ...args) {
  if (args.length != 1) {
    args.map((x) => {
      if (typeof x == "object") {
        delta(container, x)
      } else {
        container.push(x)
      }
    })
  } else {
    args[0].map((x) => {
      if (typeof x == "object") {
        delta(container, x)
      } else {
        container.push(x)
      }
    })
  }
}

function htmlBuild(classname, ...keys) {
  switch (classname) {
    case 'button':
      return '<button class="button" onclick="javascript:window.open(\'' + keys[1] + '\',\'_blank\')">' + keys[0] + '</button>'
    case 'sub-square-text':
      var textContainer = []
      delta(textContainer, keys)
      var text = ''
      textContainer.map((d) => text += d + "<br>")
      text = text.substring(0, text.length -4)
      return '<div class="sub-square-text">\r\n' + text + '\r\n</div>'
    case 'sub-square-title':
      return '<div class="sub-square-title">' + keys[0] + '</div>'
    case 'sub-square':
      return '<div class="sub-square">\r\n' + keys[0] + '\r\n</div>'
    case 'main-square':
      return '<div class="main-square">\r\n' + keys[0] + '\r\n</div>'
    case 'main-square-title':
      return '<div class="main-square-title">\r\n' + keys[0] + '\r\n</div>'
    default:
      return 'error'
  }
}

// https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    document.cookie = cname + "=" + cvalue +  ";path=/";
}

// https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
