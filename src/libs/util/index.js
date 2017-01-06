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
  return /(\d+)(\D)/ig.exec(str)[num]
}
