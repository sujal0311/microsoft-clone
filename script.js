// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

// hamburger menu
var c=0;
menu=document.querySelector(".menu-enter")
hamburg=document.querySelector(".hamburger")
cancel=document.querySelector(".cancel-btn")
menu.addEventListener("click",function(){
    if(c==0){
    hamburg.style.display="block";
    menu.style.display="none";
    cancel.style.display="block";
    c=1;
    }
})
cancel.addEventListener("click",function(){
    if(c==1){
        hamburg.style.display="none";
        cancel.style.display="none";
        menu.style.display="block";
        c=0;
    }
})

var search=document.querySelector(".search");
var input=document.querySelector(".search-in");
var features=document.querySelector(".features");
var ch=document.querySelector(".cancel");
var logo=document.querySelector(".logo");
search.addEventListener("click",function(){
    search.style.display="none";
    input.style.display="flex";
    features.style.display="none";
    input.style.border="none";
    menu.style.display="none";
    if(tablet.matches)
    logo.style.display="none";

    // input.style.display="flex";
    // ch.style.display="hidden";
})
ch.addEventListener("click",function(){
    input.style.display="none";
    search.style.display="flex";
    input.style.border="block";
    features.style.display="flex";
    if(tablet.matches){
    menu.style.display="block";
   logo.style.display="block";}
})

// image slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".dot");

function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

function goToSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    currentSlide = slideIndex;

    updateDots();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}
var imgtext1=document.querySelector(".imgtext1")
var imgtext2=document.querySelector(".imgtext2")
var electronics=document.querySelector(".electronics")
var business=document.querySelector(".business")
var phone = window.matchMedia("(max-width: 700px)")
var tablet = window.matchMedia("(max-width: 1024px)")
if(tablet.matches){
    electronics.style.flexDirection="column"
    business.style.flexDirection="column"
}
var count=0;
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        goToSlide(index);
        if(phone.matches && count==0){
        imgtext1.style.display="none";
        imgtext2.style.display="block";
        count=1;
        }
        else if(count==1){
            imgtext1.style.display="block";
            imgtext2.style.display="none";
            count=0;
        }
    });
});

// Initialize the first dot as active
updateDots();

// script.js
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".ri-search-line");
    const searchInput = document.querySelector(".searchbar");
    const cancelBtn = document.querySelector(".cancel1");
    const menu=document.querySelector(".menu")
    const cart=document.querySelector(".cart")
    const sign=document.querySelector(".sign")
    searchIcon.addEventListener("click", function () {
        searchInput.classList.remove("hidden");
        if(tablet.matches){
        menu.style.display="none"
        cart.style.display="none"
        }
    });

    cancelBtn.addEventListener("click", function () {
        searchInput.classList.add("hidden");
        if(tablet.matches){
        menu.style.display="block"
        cart.style.display="block"
        }
    });
});

// image change
const myImage = document.querySelector('.bing');
const myImage1 = document.querySelector('.slide1');
const myImage2 = document.querySelector('.slide2');
const myImage3 = document.querySelector('.ai');


// Define the media query
const mediaQuery = window.matchMedia("(max-width: 1024px)");

// Function to change the image source
function changeImageSource(matches) {
  if (matches) {
    myImage.src = "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Bing-AI-Open-Preview:VP2-859x540"; // Change the source for the specified condition
   
  } else {
    myImage.src = "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Bing-AI-Open-Preview:VP5-1596x600"; // Revert to the default image source    
  }
}

// Initial check and attach a listener for changes
changeImageSource(mediaQuery.matches);

mediaQuery.addListener(changeImageSource);

const mediaQuery1 = window.matchMedia("(max-width: 480px)");

// Function to change the image source
function changeImageSource1(matches) {
  if (matches) {
    myImage1.src = "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-M365-Anthem-Attract-Image-Create:VP2-859x540"; // Change the source for the specified condition
    myImage2.src = "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP2-859x540"; // Change the source for the specified condition
   
  } else {
    myImage1.src = "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Slim-Multi-Canvas-M365-Anthem-Attract-Image-Create:VP5-1920x600"; // Revert to the default image source    
    myImage2.src = "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP5-1920x600"; // Revert to the default image source    
  }
}

// Initial check and attach a listener for changes
changeImageSource1(mediaQuery1.matches);

mediaQuery.addListener(changeImageSource1);

const mediaQuery2 = window.matchMedia("(max-width: 1024px)");

function changeImageSource3(matches) {
    if (matches) {
      myImage3.src = "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Microsoft-Responsible-AI:VP2-859x540"; // Change the source for the specified condition
     
    } else {
      myImage3.src = "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Microsoft-Responsible-AI:VP5-1596x600";
  }
}
changeImageSource3(mediaQuery2.matches);

mediaQuery.addListener(changeImageSource3);

// software menu
sm=document.querySelector(".software-menu");
software=document.querySelector(".software");
us=document.querySelector(".us-arrow");
ds=document.querySelector(".ds-arrow");
var s=0
software.addEventListener("click",function(){
    if(s==0){
    sm.style.display="flex";
    ds.style.display="none"
    us.style.display="inline-block"
    s=1;
    }
    else{
        sm.style.display="none";
        us.style.display="none"
        ds.style.display="inline-block"
    s=0; 
    }
})

// pc and devices
pcm=document.querySelector(".pc-menu");
pc=document.querySelector(".pc");
us1=document.querySelector(".us1-arrow");
ds1=document.querySelector(".ds1-arrow");
var p=0
pc.addEventListener("click",function(){
    if(p==0){
    pcm.style.display="flex";
    ds1.style.display="none"
    us1.style.display="inline-block"
    p=1;
    }
    else{
        pcm.style.display="none";
        us1.style.display="none"
        ds1.style.display="inline-block"
    p=0; 
    }
})
// entertainment
em=document.querySelector(".entertainment-menu");
entertainment=document.querySelector(".entertainment");
us2=document.querySelector(".us2-arrow");
ds2=document.querySelector(".ds2-arrow");
var e=0
entertainment.addEventListener("click",function(){
    if(e==0){
    em.style.display="flex";
    ds2.style.display="none"
    us2.style.display="inline-block"
    e=1;
    }
    else{
        em.style.display="none";
        us2.style.display="none"
        ds2.style.display="inline-block"
    e=0; 
    }
})
// business
bm=document.querySelector(".business-menu");
business=document.querySelector(".business");
us3=document.querySelector(".us3-arrow");
ds3=document.querySelector(".ds3-arrow");
var b=0
business.addEventListener("click",function(){
    if(b==0){
    bm.style.display="flex";
    ds3.style.display="none"
    us3.style.display="inline-block"
    b=1;
    }
    else{
        bm.style.display="none";
        us3.style.display="none"
        ds3.style.display="inline-block"
    b=0; 
    }
})
// developer and it
dm=document.querySelector(".developer-menu");
developer=document.querySelector(".developer");
us4=document.querySelector(".us4-arrow");
ds4=document.querySelector(".ds4-arrow");
var d=0
developer.addEventListener("click",function(){
    if(d==0){
    dm.style.display="flex";
    ds4.style.display="none"
    us4.style.display="inline-block"
    d=1;
    }
    else{
        dm.style.display="none";
        us4.style.display="none"
        ds4.style.display="inline-block"
    d=0; 
    }
})
// others
om=document.querySelector(".others-menu");
others=document.querySelector(".others");
us5=document.querySelector(".us5-arrow");
ds5=document.querySelector(".ds5-arrow");
var o=0
others.addEventListener("click",function(){
    if(o==0){
    om.style.display="flex";
    ds5.style.display="none"
    us5.style.display="inline-block"
    o=1;
    }
    else{
        om.style.display="none";
        us5.style.display="none"
        ds5.style.display="inline-block"
    o=0; 
    }
})


