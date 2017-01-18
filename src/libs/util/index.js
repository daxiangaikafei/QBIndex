export function setCookie(name, value, mode="cookie") {
  if(mode == "cookie") {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    return true;
  } else if(mode == "storage") {
    var _localStorage = window.localStorage;
    if (_localStorage) {
      _localStorage.setItem(name, value);
      return true;
    }
    return false;
  }

}

export function getCookie(name, mode="cookie") {
  if(mode == "cookie") {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    }
    else {
      return null;
    }
  } else if(mode == "storage") {
    var _localStorage = window.localStorage;
    if (_localStorage) {
      return _localStorage.getItem(name);
    }
    else
      return null;
  }
}

export function delCookie(name, mode="cookie") {
  if(mode == "cookie") {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
      document.cookie = name + '=' + cval + ";expires=" + exp.toGMTString();
    }
  } else if(mode == "storage") {
    var _localStorage = window.localStorage;
    if (_localStorage) {
      _localStorage.removeItem(name);
    }
  }
}

export function priceFormat(price, n) {
  n = n >= 0 && n <= 20 ? n : 2;
  price = parseFloat((price + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  var l = price.split(".")[0].split("").reverse(), r = price.split(".")[1];
  var t = "";
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  }
  if(n==0){
    return t.split("").reverse().join("");
  } else {
    return t.split("").reverse().join("") + "." + r;
  }
}

export function tagStrFormat(str, num) {
  return /(\d+)(\D+)/ig.exec(str)[num]
}

export function createCORSRequest(method, url){
  let cors_api_host = 'finiyang.com:8080'
  let cors_api_url = 'http://' + cors_api_host + '/'
  let slice = [].slice
  let origin = window.location.protocol + '//' + window.location.host
  let open = XMLHttpRequest.prototype.open
  XMLHttpRequest.prototype.open = function() {
    let args = slice.call(arguments)
    let targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1])
    if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
        targetOrigin[1] !== cors_api_host) {
        args[1] = cors_api_url + args[1]
    }
    return open.apply(this, args)
  }
  let xhr = new XMLHttpRequest()
  if ("withCredentials" in xhr){
      xhr.open(method, url, true)
  } else {
      xhr = null
  }
  return xhr
}
