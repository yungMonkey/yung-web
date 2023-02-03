
/*document.querySelector("#join").addEventListener("click", function(){
  document.querySelector(".pop-up").classList.add("active");
});
document.querySelector(".pop-up, .close-btn").addEventListener("click", function(){
  document.querySelector(".pop-up").classList.remove("active");
});
document.querySelector(".bt").addEventListener("click", function()
{
  alert("I got clicked");
});*/



document.querySelector("#album").addEventListener("click", function(){
  alert("Stll work going on this :) ")
});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("nextPage");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var randomNumber1 = Math.floor((Math.random()*3)+1);

var randomDiceImage = "3."+ randomNumber1+" page.jpg";

var randomImageSource = "img/"+ randomDiceImage;

var image1 = document.querySelectorAll("img")[6];

image1.setAttribute("src", randomImageSource );


let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
  
  popup.classList.remove("open-popup")
}
function cutPopup(){
    popup.classList.remove("open-popup")
}



document.querySelector(".pp").addEventListener("click", function(){
  alert("Ye kya hota hai ? ")
});
