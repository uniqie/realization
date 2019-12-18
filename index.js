'use strict'
var canvas = document.querySelector('.Mycanvas');
var con = document.querySelector('.container');
canvas.width = 0.5 * parseFloat(window.innerWidth);
canvas.height = 0.5 * parseFloat(window.innerHeight);
var temp = false;
var ctx = canvas.getContext("2d");
ctx.strkoStyle = "balck";
canvas.onmouseleave = canvas.onmouseup;
canvas.onmousemove = function move(e)                                       //鼠标滑动开始绘制
{
    if(temp){
        let x = parseFloat(e.clientX)-parseFloat(canvas.offsetLeft);
        let y = parseFloat(e.clientY)-parseFloat(canvas.offsetTop);
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
canvas.onmousedown = function(e)                                            //鼠标点击开始
{
    temp = true;
    let x = parseFloat(e.clientX)-parseFloat(canvas.offsetLeft);
    let y = parseFloat(e.clientY)-parseFloat(canvas.offsetTop);
    ctx.beginPath();
    ctx.strkoStyle = "balck";
    ctx.moveTo(x,y);
    console.log(x,y);
}
canvas.onmouseup = function(e)                                              //鼠标松开停止
{
    let x = parseFloat(e.clientX)-parseFloat(canvas.offsetLeft);
    let y = parseFloat(e.clientY)-parseFloat(canvas.offsetTop);
    ctx.lineTo(x,y);
    ctx.stroke();
    console.log('end',x,y);
    temp = false;
}
canvas.onmouseleave = canvas.onmouseup;