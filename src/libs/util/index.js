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
