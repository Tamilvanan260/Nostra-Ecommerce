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

menuico.addEventListener("click", function () {
    sidenav.style.left = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})





//SORTby
var sortdropdown = document.getElementById("sort-dropdown")
var cilcksort = document.getElementById("cilck-sort")
var sortbox = document.getElementById("sort-box")

sortdropdown.addEventListener("mouseenter", function () {
    cilcksort.style.display = "block"
    sortbox.style.borderBottomColor = "transparent"

})

sortdropdown.addEventListener("mouseleave", function () {
    cilcksort.style.display = "none"
    sortbox.style.borderBottomColor = ""
})



// clearfilters

// var clear_btn = document.getElementById("clear-filters")
// var aside = document.querySelector("aside")

// aside.addEventListener("change",function(){
//     if(document.querySelectorAll(".filter-input:checked")){
//         clear_btn.style.display ="block"
//     }else{
//         clear_btn.style.display ="none"
//     }
// });


// clear_btn.addEventListener("click",function(){
//     aside.querySelectorAll(".filter-input").forEach(checkbox => {
//         checkbox.checked = false

//     });
//     clear_btn.style.display="none"  
// });



// select dress section
var clear_btn = document.getElementById("clear-filters");
var aside = document.querySelector("aside");
var cards = document.querySelectorAll(".product-card");

// Navbar Links
var navMen = document.getElementById("nav-men");
var navWomen = document.getElementById("nav-women");
var navKids = document.getElementById("nav-kids");

// 1. 1st 16 images visible
function showFirst12Only() {
    cards.forEach(function (card, index) {
        if (index < 16) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}

// 16 images show first 
showFirst12Only();

// 2. Filter Function
function applyFilters() {
    var checkedInputs = aside.querySelectorAll(".filter-input:checked");

    if (checkedInputs.length > 0) {
        clear_btn.style.display = "block";
    } else {
        clear_btn.style.display = "none";
        showFirst12Only();
        return;
    }

    var selectedCategory = document.querySelector('input[name="category"]:checked')?.value;
    var selectedOccasions = Array.from(aside.querySelectorAll('.occasion-box:checked')).map(cb => cb.value);
    var selectedColors = Array.from(aside.querySelectorAll('.color-box:checked')).map(cb => cb.value);
    var selectedArrivals = Array.from(aside.querySelectorAll('.arrival-box:checked')).map(cb => cb.value);

    cards.forEach(function (card) {
        var category = card.dataset.category;
        var occasion = card.dataset.occasion;
        var color = card.dataset.color;
        var arrival = card.dataset.arrival;

        var categoryMatch = !selectedCategory || category === selectedCategory;
        var occasionMatch = selectedOccasions.length === 0 || selectedOccasions.includes(occasion);
        var colorMatch = selectedColors.length === 0 || selectedColors.includes(color);
        var arrivalMatch = selectedArrivals.length === 0 || selectedArrivals.includes(arrival);

        if (categoryMatch && occasionMatch && colorMatch && arrivalMatch) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}

// 3. Sidebar change 
aside.addEventListener("change", applyFilters);

// 4. Navbar Clicks (Direct Radio Check  Filter )
if (navMen) {
    navMen.addEventListener("click", function () {
        var radio = document.querySelector('input[name="category"][value="men"]');
        if (radio) { radio.checked = true; applyFilters(); }
    });
}

if (navWomen) {
    navWomen.addEventListener("click", function () {
        var radio = document.querySelector('input[name="category"][value="women"]');
        if (radio) { radio.checked = true; applyFilters(); }
    });
}

if (navKids) {
    navKids.addEventListener("click", function () {
        var radio = document.querySelector('input[name="category"][value="kids"]');
        if (radio) { radio.checked = true; applyFilters(); }
    });
}

// 5. Clear All Click Event
clear_btn.addEventListener("click", function () {
    aside.querySelectorAll(".filter-input").forEach(function (checkbox) {
        checkbox.checked = false;
    });

    clear_btn.style.display = "none";
    showFirst12Only();
});













//search Bar Method 1 using Foreach

// var search = document.getElementById("search")
// var cards = document.querySelectorAll(".product-card");

// search.addEventListener("keyup", function (event) { //keyup means-->user is typing keyboard press value
//     var enteredValue = event.target.value.toUpperCase()

//     cards.forEach(function (card) {
//         // card-ல இருக்கும் brand name text (p tag)
//         var brandName = card.querySelector("p").textContent.toUpperCase();

//         if (brandName.indexOf(enteredValue) < 0) {
//             card.style.display = "none";   // full card hide
//         } else {
//             card.style.display = "block";  // full card show
//         }
//     });
// });


//search Bar Method 2 using For loop
var search = document.getElementById("search")
var cards = document.querySelectorAll(".product-card");
// var plist = document.querySelectorAll("p")

search.addEventListener("keyup", function (event) { 
    var enteredValue = event.target.value.toUpperCase()

    for (i = 0; i < cards.length; i++) { 
        var brandName = cards[i].querySelector("p").textContent.toUpperCase();
         if (brandName.indexOf(enteredValue)< 0) { 
            cards[i].style.display = "none"
        } else {
            cards[i].style.display = "block"
        }
    }
})



//search Bar phone Method 2 using For loop
var search_int = document.getElementById("search-int")
var cards = document.querySelectorAll(".product-card");
// var plist = document.querySelectorAll("p")

search_int.addEventListener("keyup", function (event) { 
    var enteredValue = event.target.value.toUpperCase()

    for (i = 0; i < cards.length; i++) { 
        var brandName = cards[i].querySelector("p").textContent.toUpperCase();
         if (brandName.indexOf(enteredValue)< 0) { 
            cards[i].style.display = "none"
        } else {
            cards[i].style.display = "block"
        }

    }

})















//reveal
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0 });

reveals.forEach((section) => observer.observe(section));










// URL-il irukkum category (men / women / kids) check panrom
var urlParams = new URLSearchParams(window.location.search);
var categoryFromUrl = urlParams.get('category');

if (categoryFromUrl) {
    var radioToSelect = document.querySelector('input[name="category"][value="' + categoryFromUrl + '"]');
    if (radioToSelect) {
        radioToSelect.checked = true; // Radio button auto-select aagum

        // Filter-ai trigger panrom
        var event = new Event('change', { bubbles: true });
        aside.dispatchEvent(event);
    }
}