var vtop = 0;
var up_down = false;
function topAni() {
    var speed = 4;
    vtop += up_down ? (speed * 1.6) : (-speed * 0.6);
    var extra = document.documentElement.scrollHeight - document.body.clientHeight;
    if (vtop > extra) {
        vtop = extra;
    }
    if (vtop < 0) {
        vtop = 0;
    }
    document.body.scrollTop = vtop;
    document.documentElement.scrollTop = vtop;
}
var vopa = 0;
var s_n = false;
function clearAni() {
    var clear = document.getElementById("clear");
    var input = document.getElementById("input");
    var speed = 0.02;
    vopa += s_n ? (speed * 2.5) : -speed;
    if (vopa > 1) {
        vopa = 1;
    }
    if (vopa < 0) {
        vopa = 0;
        clear.style.width = "0px";
        input.style.width = "420px";
    }
    if (vopa > 0) {
        clear.style.width = "30px";
        input.style.width = "390px";
    }
    clear.style.opacity = vopa;
    input.style.opacity = (0.5 + vopa / 2) + "";
}
var vopa = 0;
var s_n = false;