var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})


var offerbar=document.querySelector(".offerbar")
var close=document.getElementById("close")

close.addEventListener("click",function(){
    offerbar.style.display="none"
})

// slider

currentslideId=1;
sliderElement = document.getElementById("slider");
totalSlides=sliderElement.childElementCount;
console.log(totalSlides)

function next() {
    if (currentslideId < totalSlides) {
        currentslideId++;
        showSlide();
    }
}
function prev(){
    if(currentslideId>1){
        currentslideId--;
        showSlide()
    }
}

function showSlide(){
    slides=document.getElementById("slider").getElementsByTagName("li")
    for(let index=0; index<totalSlides;index++){
        const element =slides[index];
        if(currentslideId==index+1){
            element.classList.remove("hidden")
        }
        else{
            element.classList.add("hidden")
        }
    }
}

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})
