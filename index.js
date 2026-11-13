//offer
var offer = document.getElementById("offer")
var closeBtn = document.getElementById("offer-close")

closeBtn.addEventListener("click", function () {
    offer.style.display = "none";

})

//side Navbar
var sidenav = document.getElementById("sidenav")
var menuico = document.getElementById("menuico")
var close = document.getElementById("closenav")

menuico.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

//image Slider

let currentSlide = 0;
const slidesWrapper = document.getElementById("slides-wrapper");
const totalSlides = slidesWrapper.children.length;

function changeSlide(direction) {
    currentSlide += direction;

    // Last image thaanduna 1st image-ku return aagum
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } 
    // 1st image-la irundhu left click panna last image-ku pogum
    else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}












