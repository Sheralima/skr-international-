// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const updateCounter=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}

};

updateCounter();

});


// Image Slider

const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(){

slides.forEach(slide=>{

slide.classList.remove("active");

});

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

}

setInterval(showSlide,3000);
