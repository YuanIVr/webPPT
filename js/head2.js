function clearInput() {
    var input = document.getElementById("input");
    input.value = "";
    input.focus();
}
function inScience(s) {
    var _ss = ["#", "&", "\\+", "\\\/", "\\\\", "=", "\\?", "\\.", ":"];
    var _st = ["%23", "%26", "%2B", "%2F", "%5C", "%3D", "%3F", "%2E", "%3A"];
    for (var i=0; i<_ss.length; i++) {
        var re = RegExp(_ss[i], "g");
        s = s.replace(re, _st[i]);
    }
    return s;
}
function searchInput() {
    var input = document.getElementById("input");
    var value = input.value;
    var baidu = "https://cn.bing.com/search?q=";
    var a1;
    try {
        switch (value) {
            case "":
                a1 = "https://bilibili.com/";
                break;
            case "github":
                a1 = "https://github.com/";
                break;
            case "w3cschool":
                a1 = "https://www.w3cschool.cn/";
                break;
            default:
                a1 = baidu + inScience(value);
        }
    } catch (e) {
        alert(e);
    }
    window.open(a1);
}
function key() {
    if (event.keyCode == 13) {
        searchInput();
    }
}
var first = true;
function firstClick() {
    if (first) {
        clearInput();
        first = false;
    }
}
