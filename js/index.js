"use strict"
//contain的高度适应
var contain = document.querySelector(".contain");
//高度适应
var menu = document.querySelector(".menu-left img");
var list = document.querySelector(".menu-list");
var main_con = document.querySelector(".main-con");

contain.style.height = window.innerHeight - 60 + 'px';

var iframeOBJ = {
    "urls" : [
        {"url" : "./pages/first.html" }, 
        {"url" : "./pages/second.html"},
        {"url" : "./pages/third.html"},
        {"url" : "./pages/fouth.html"}
    ]
}

//选择
var nav = document.querySelectorAll(".menu-list nav");
var iframe = document.querySelector(".main-con iframe");
//选中事件
window.onload = function () {
    let page = localStorage.page;
    if(page >= 0 && page <4 )
    {
        console.log(page);
        iframe.src = iframeOBJ.urls[page].url;
        nav[page].style.boxShadow = "inset -1px -1px 1px white";
        nav[page].style.color = "ghostwhite";
    }else{
        iframe.src = iframeOBJ.urls[0].url;
        localStorage.page = 0;
        nav[0].style.boxShadow = "inset -1px -1px 1px white";
        nav[0].style.color = "ghostwhite";
    }
}

for(let i = 0; i < nav.length; i++)
{
    nav[i].onclick = function () {
        IFRA(nav[i],i);
    }
}

var IFRA = function (obj,i) { 
    let x = iframe.src;
    let y = iframeOBJ.urls[i].url;
    x = x.substring(x.length - y.length + 1, x.length);
    y = y.substring(1, y.length);
    if(x == y) return;
    else iframe.src = iframeOBJ.urls[i].url;
    for(let j = 0 ; j < nav.length ; j++){
        nav[j].style.boxShadow = "grey -2px -2px 2.5px inset";
        nav[j].style.color = "rgb(155, 155, 155)";
    }
    obj.style.boxShadow = "inset -2px -2px 2.5px white";
    obj.style.color = "ghostwhite";
    localStorage.page = i;
}