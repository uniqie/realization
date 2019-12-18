var sm = document.querySelector(".small");
var tool = document.querySelector(".tool");
var big = document.querySelector(".big img");
var temp = false;
console.log(sm);
sm.onmousedown = function display(e)
{
    tool.style.display = 'block';
    big.style.display = 'block';
    big.x
    let x = e.clientX - 50;
    let y = e.clientY - 50;
    tool.style.left = x + "px";
    tool.style.top =  y + "px";
    big.style.left = -2 * x + 'px';
    big.style.top = -2 * y + 'px';
    temp = true;
}
document.onmouseup = function hide(e)
{
    temp = false;
    tool.style.display = 'none';
    big.style.display = 'none';
}
document.onmousemove = function move(e)
{
    if (temp)
    {
        let x = e.clientX - 50;
        let y = e.clientY - 50;
        tool.style.left = x + "px";
        tool.style.top =  y + "px";
        big.style.left = -2 * x + 'px';
        big.style.top = -2 * y + 'px';
    }
}
big.onload = function init()
{
    big.width = 2 * sm.offsetWidth;
    big.height =2 * sm.offsetHeight;
    console.log (sm.offsetWidth);
}