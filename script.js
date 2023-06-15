/*OLIVIA PAIT*/
// single line comment

function showHide(){
      let paragraph=document.getElementById("more");  
      let link=document.getElementById("link");
      if(paragraph.classList.contains("hidden")){
      link.innerHTML="See Less";
      paragraph.classList.remove("hidden");
}else {paragraph.classList.add("hidden");
      link.innerHTML="See More";
}}


function showHide(){
      let paragraph=document.getElementById("mores"); 
      let link=document.getElementById("links");
      if(paragraph.classList.contains("hidden")){
      link.innerHTML="See Less";
      paragraph.classList.remove("hidden");
}else {paragraph.classList.add("hidden");
      link.innerHTML="See More";
}}


/*
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
  let slides = document.getElementsByClassName("mySlides");
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
} */
    
function changeSlides(){
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let slide3 = document.getElementById("slide3");
    let slide4 = document.getElementById("slide4");
    
    if(!slide1.classList.contains("hidden")){
        slide1.classList.add("hidden");
        slide2.classList.remove("hidden");
    }
  else if(!slide2.classList.contains("hidden")){
        slide2.classList.add("hidden");
        slide3.classList.remove("hidden");
    }
     else if(!slide3.classList.contains("hidden")){
        slide3.classList.add("hidden");
        slide4.classList.remove("hidden");
    }
     else if(!slide4.classList.contains("hidden")){
        slide4.classList.add("hidden");
        slide1.classList.remove("hidden");
    }
}


setInterval(changeSlides, 2000);