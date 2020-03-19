var a1 = 120; //背景图片切换时间轴
var tt = a1;
var bg_id = parseInt(Math.random() * (img_box.length - 0.0001)); //背景图片index
//记录轮播历史的数组：
var img_history = new Array(img_box.length);
var Err = false;
for (var i = 0; i < img_history.length; i++) {
    img_history[i] = img_history.length; //只有数据记录间隔到达一定长度才会再一次播放。
}
//只有数据记录间隔到达一定长度才会再一次播放：
function isCan(_a) {
    if (img_history[_a] >= img_box.length * 0.67) { //达到一定长度
        img_history[_a] = 1; //播放且记录
        for (var i = 0; i < img_history.length; i++) {
            if (i != _a) {
                img_history[i] += 1;
            } //除此图片外其他图片历史加一，无需上限。
        }
        return true;
    } else {
        return false;
    }
    
}
//根据轮播历史获取图片：
function getRandom() {
    var _b = 0;
    _b = parseInt(Math.random() * (img_box.length - 0.0001));
    while (!isCan(_b)) {
        _b = parseInt(Math.random() * (img_box.length - 0.0001));
    }
    return _b;
}

function changeBackground() {
    var im1 = document.getElementById("bg");
    var im2 = document.getElementById("bg-");
    if (a1 < tt) {
        im1.style.opacity = (tt - (a1)) / tt;
    }
    if (a1 == tt) {
        bg_id1 = bg_id;
        bg_id = getRandom();
        im1.src = img_box[bg_id1];
        im1.style.opacity = 1.0;
        im2.src = img_box[bg_id];
    }
    if (a1 > tt * change_speed) {
        a1 = 0;
    }
    a1++;
    var cut_box = document.getElementsByClassName("cut-box");
    var i;
    for (var i = 0; i < cut_box.length; i++) {
        try {
            cut_box[i].style.height = (document.body.clientWidth * 0.5625) + "px";
        } catch (e) {
            if (!Err) {
                alert("发现错误或你的浏览器不兼容，\n请进行反馈或更换浏览器以达到最佳体验。\n（建议使用谷歌浏览器）\nError: " + e);
                Err = true;
            }
        }
    }
} //切换背景图片动画步函数
function changeTime() {
    var time = document.getElementById("time");
    time.innerHTML = "&nbsp;" + Date.apply() + "&nbsp;";
}

