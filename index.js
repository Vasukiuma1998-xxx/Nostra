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

var likeButtons = document.querySelectorAll(".like");

        likeButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                this.classList.toggle("liked");
                this.classList.toggle("fa-solid");
                this.classList.toggle("fa-regular");
            });
        });
