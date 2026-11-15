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



var contact_form = document.getElementById("contact_form")
var form_success = document.getElementById("form_success")

contact_form.addEventListener("submit",(event)=>{
    event.preventDefault()
    form_success.style.display="block"
    setTimeout(() => {
        form_success.style.display="none"
    }, 2000);
    contact_form.reset()
})























