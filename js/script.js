const slide = document.querySelector('.image-slide')
const button1 = document.querySelector('#button1')
const Seta = document.querySelector('.botao-seta')
var img = document.querySelector('#image1');


function Image1(){
  img.src = '/media/img/image-1.png';
}
function Image2(){
  img.src = '/media/img/image-2.png';
}
function Image3(){
  img.src = '/media/img/image-3.png';
}
function Image4(){
  img.src = '/media/img/image-4.png';
}
function Image5(){
  img.src = '/media/img/image-5.png';
}


let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".image-slide img")
    max = images.length



function nextImage(){

  images[currentImageIndex].classList.remove("selected")
  
  currentImageIndex++

  if(currentImageIndex >= max)
    currentImageIndex = 0


  images[currentImageIndex]
    .classList.add("selected")


}

function start(){
  setInterval(() => {
    nextImage();
  }, time)
}


window.addEventListener("load", start)

