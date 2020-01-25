//contain的高度适应
var contain = document.querySelector(".contain")
//高度适应
var menu = document.querySelector(".menu-left img");
var list = document.querySelector(".list");
var main_con = document.querySelector(".main-con");

contain.style.height = window.innerHeight - 60 + 'px';

menu.onclick = function () 
{
    if (list.style.display == "block") {
        list.style.display = "none";
        main_con.style.width = "100%";
    }
    else {
        list.style.display = "block";
        main_con.style.width = "85%";
    }
} 


//选择
var nav = document.querySelectorAll(".list nav");
var iframe = document.querySelectorAll(".main-con iframe")
//选中事件
for(let i = 0 ; i < nav.length ; i++)
{
    nav[i].onclick = function () {
        for(let j = 0 ; j < nav.length ; j++)
            nav[j].style.boxShadow = "grey -1px -1px 1px inset";
        this.style.boxShadow = "inset -1px -1px 1px white";
        for(let x = 0 ; x < iframe.length ; x++)
            iframe[x].style.display = "none";
        let w = 0;
        for(let z = 0; z < iframe.length; z++)
            if(nav[z].style.boxShadow != "grey -1px -1px 1px inset"){
                w = z;
                break;
            }
        iframe[w].style.display = "block";
    }
}

