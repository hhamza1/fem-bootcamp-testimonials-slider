var slideIndex = 1;

showSlides(slideIndex);

document.onkeydown = checkKey;


function plusSlides(n) {
    showSlides(slideIndex += n)
}


function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slides");
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) { 
        slideIndex = slides.length
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "grid";
}

function checkKey(e) {
    e = e || window.event;
    if(e.keyCode == '37'){
        plusSlides(1)
    }
    else if(e.keyCode == '39'){
        plusSlides(-1)
    }
    else {
        return ;
    }
}