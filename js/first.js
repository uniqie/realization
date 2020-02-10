var body = document.querySelector("body");
var bodyWidth = body.clientWidth;
var bodyHeight = body.clientHeight;
const bgcImg = document.querySelector("#bgcImg img");
let rat = bodyWidth / bodyHeight;
let imgRat = bgcImg.naturalWidth / bgcImg.naturalHeight;
if(imgRat > rat){
    bgcImg.height = bodyHeight;
    bgcImg.left = - (bodyHeight * imgRat - bodyWidth) / 2 + 'px';
}else{
    bgcImg.width = bodyWidth;
    bgcImg.top = - (bodyWidth / rat - bodyHeight) /2 + 'px';
}
