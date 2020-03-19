document.getElementById("testNet").onerror = (function() {
    document.write("网络连接不畅，请检查网络设置并刷新页面。");
});
setInterval("changeBackground();", 5);
changeTime();
setInterval("changeTime();", 1000);
function Place() {
    infor = infor.replace(/\n/g, "<br />");
    document.getElementById("infor").innerHTML = infor;
    
}
setTimeout("Place();", 10);

setInterval("topAni();", 5);
setInterval("clearAni();", 5);
document.getElementById("testNet").src = "https://www.baidu.com/img/bd_logo1.png";
