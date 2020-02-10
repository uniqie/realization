var imgUrls = {
    urls: [
        { "url": "../images/Love is War_1.png", "name": "Love is War_1.png" },
        { "url": "../images/Love is War_2.jpeg", "name": "Love is War_2.jpeg" },
        { "url": "../images/Love is War_3.png", "name": "Love is War_3.png" },
        { "url": "../images/Love is War_4.jpeg", "name": "Love is War_4.jpeg" },
        { "url": "../images/Bunny Girl.png", "name": "Bunny Girl.png" },
        { "url": "../images/Darling in the FranXX.png", "name": "Darling in the FranXX.png" },
        { "url": "../images/Fujiwara Chika.jpeg", "name": "Fujiwara Chika.jpeg" },
        { "url": "../images/Quintessential.png", "name": "Quintessential.png" },
        { "url": "../images/Naruto.png", "name": "Naruto.png" },
        { "url": "../images/kawaii.png", "name": "kawaii.png" },
        { "url": "../images/Love is War.jpeg", "name": "Love is War.jpeg" },
        { "url": "../images/Violet Evergarden.jpeg", "name": "Violet Evergarden.jpeg" },
        { "url": "../images/m001.jpg", "name": "001.jpg" },
        { "url": "../images/m002.jpg", "name": "002.jpg" },
        { "url": "../images/m003.jpg", "name": "003.jpg" },
        { "url": "../images/m004.jpg", "name": "004.jpg" },
        { "url": "../images/Anime001.png", "name": "Anime001.png" },
        { "url": "../images/Anime002.jpeg", "name": "Anime002.jpeg" },
        { "url": "../images/Anime003.png", "name": "Anime003.png" },
        { "url": "../images/Anime004.jpeg", "name": "Anime004.jpeg" },
        { "url": "../images/Boku001.jpeg", "name": "Boku001.jpeg" },
        { "url": "../images/Date001.png", "name": "Date001.png" },
        { "url": "../images/Demon001.jpeg", "name": "Demon001.jpeg" },
        { "url": "../images/Demon002.png", "name": "Demon002.png" },
        { "url": "../images/Fujiwara001.jpeg", "name": "Fujiwara001.jpeg" },
        { "url": "../images/Himiko001.png", "name": "Himiko001.png" },
        { "url": "../images/Fujiwara Chika.jpeg", "name": "Fujiwara Chika.jpeg" },
        { "url": "../images/Kaguya001.jpeg", "name": "Kaguya001.jpeg" },
        { "url": "../images/Violet001.jpeg", "name": "Violet001.jpeg" },
    ],
}

var main_part = document.querySelector("#main-part");           //获取main-part
var images;                                                     //定义全局变量images
var imgWidth;                                                   //定义全局变量图片宽度
var imgHeight = [20, 20, 20, 20];                                  //每列图片的初始top值
var div_con = document.querySelector("#imgView");
var viewImg = div_con.children[0];
var screenRatio = window.innerWidth/ window.innerHeight; 

var temp = setInterval(function ()                               //等待main_part载入
{
    if (document.querySelector("#main-part") != null) {
        main_part = document.querySelector("#main-part");
        imgWidth = (parseFloat(screen.availWidth) - 150) / 4;
        clearInterval(temp);
        next();
    }
}, 50)
function next()                                                //创建main_part下的img标签，并赋值images
{
    for (let i = 0; i < imgUrls.urls.length; i++) {
        let imgs = document.createElement("img");
        main_part.appendChild(imgs);
    }
    images = main_part.children;
    let i = 0;
    Load(i);
}
function imgLoad(img, y, i, callback) {                           //定时查询图片加载，调用onLoad
    var timer = setInterval(function () {
        if (img.complete) {
            callback(img);
            clearInterval(timer);
            onLoad(y, i);
        }
    }, 50)
}
function Load(i)                                                //给图片定位，调用imgLoad等待图片加载完成
{
    if (i >= imgUrls.urls.length) { test();return; }
    else {
        images[i].src = imgUrls.urls[i].url;
        images[i].alt = imgUrls.urls[i].name;
        images[i].style.width = imgWidth + "px";
        let x = parseFloat(imgHeight[0]);
        let y = 0;
        for (let m = 1; m < imgHeight.length; m++)
            if (x > imgHeight[m]) {
                x = imgHeight[m];
                y = m;
            }
        images[i].style.top = x + "px";
        images[i].style.left = 4 + y * (imgWidth + 40) + "px";
        imgLoad(images[i], y, i, function () {
        })
    }
}
function onLoad(y, i)                                            //计入加载完成后图片的高度，并调用Load加载下一个图片
{
    imgHeight[y] += parseFloat(images[i].offsetHeight) + 20;
    Load(i + 1);
}

function test() {
    for (let j = 0; j < imgUrls.urls.length; j++) {
        images[j].onclick = (e) => {
            div_con.style.display = "block";
            document.body.style.overflow = "hidden";
            viewImg.src = e.srcElement.src;
            let ratio = e.srcElement.width / e.srcElement.height;
            if(ratio >= screenRatio) {
                viewImg.style.width = window.innerWidth - 100 + "px";
            }else{
                viewImg.style.height =  window.innerHeight+ "px";
            }
        }
    }
}

div_con.onclick = () => {
    div_con.style.display = "none";
    document.body.style.overflow = "auto";
}