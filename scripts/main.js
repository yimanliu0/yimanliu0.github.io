let myImage = document.getElementById("pic1");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/switss3.jpg") {
        myImage.setAttribute("src","images/switss2.jpg");
    } else if (mySrc === "images/switss2.jpg") {
        myImage.setAttribute("src","images/switss4.jpg");
    } else if (mySrc === "images/switss4.jpg") {
        myImage.setAttribute("src","images/switss3.jpg");
    }
};

let myImage2 = document.getElementById("pic2");

myImage2.onclick = function() {
    let mySrc2 = myImage2.getAttribute("src");
    if(mySrc2 === "images/hawaii2.jpg") {
        myImage2.setAttribute("src","images/hawaii1.jpg");
    } else if (mySrc2 === "images/hawaii1.jpg") {
        myImage2.setAttribute("src","images/hawaii3.jpg");
    } else if (mySrc2 === "images/hawaii3.jpg") {
        myImage2.setAttribute("src","images/hawaii2.jpg");
    }
};

let myImage3 = document.getElementById("pic3");

myImage3.onclick = function() {
    let mySrc3 = myImage3.getAttribute("src");
    if(mySrc3 === "images/thailand2.jpg") {
        myImage3.setAttribute("src","images/thailand1.jpg");
    } else if (mySrc3 === "images/thailand1.jpg") {
        myImage3.setAttribute("src","images/thailand3.jpg");
    } else if (mySrc3 === "images/thailand3.jpg") {
        myImage3.setAttribute("src","images/thailand2.jpg");
    }
};