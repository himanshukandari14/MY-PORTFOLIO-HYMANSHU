const body= document.querySelector("#body");
const librarieshead=document.querySelector('#librarieshead');
const librariesbody=document.querySelector('#librariesbody');
const librariesdown=document.querySelector('#librariesdown');

const languageshead=document.querySelector('#languageshead');
const languagesbody=document.querySelector('#languagesbody');
const languagesdown=document.querySelector('#languagesdown');
const slides = document.querySelectorAll('.slide');
const smallmenuwindow=document.querySelector('#smallmenuwindow');
const smallmenubtn=document.querySelector('#smallmenubtn');
const darmodebtn1=document.querySelector('#darmodebtn1');
const darmodebtn2=document.querySelector('#darmodebtn2');
const navbar2=document.querySelector('#navbar2')
const Hymanshu=document.querySelector('#Hymanshu')

const lightmodebtn1=document.querySelector('#lightmodebtn1')
const totalSlides = slides.length;
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
}

function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
}

// Automatically advance the slides every 2 seconds
const slideInterval = setInterval(nextSlide, 2000);

// Handle the "Previous" button click
document.getElementById('prev-button').addEventListener('click', () => {
    clearInterval(slideInterval); // Stop the automatic slide change when the user interacts with the slider
    previousSlide();
});

// Handle the "Next" button click
document.getElementById('next-button').addEventListener('click', () => {
    clearInterval(slideInterval); // Stop the automatic slide change when the user interacts with the slider
    nextSlide();
});


// ------------------------------------------------------------------------



const dynamicText = document.querySelector("h1 span");
const words = ["Developer", "Coder", "Programmer","Problem solver"];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();


// func to make card 2 expand
var flagcard2=0;
librarieshead.addEventListener('click',()=>{
    if (flagcard2==0) {
        console.log("libraries body extended ");
    librariesbody.style.display="block"
    librariesdown.classList.toggle('rotated');  //for rotation logic is in css
    flagcard2=1
    }
    else{
        console.log("libraries body reduced ");
        librariesbody.style.display="none";
        flagcard2=0;
       librariesdown.classList.toggle('rotated'); 
    }
})

// func to make card 1 expand
var flagcard1=1;
languageshead.addEventListener('click',()=>{
    if (flagcard1==0) {
        console.log("libraries body extended ");
    languagesbody.style.display="block"
    languagesdown.classList.toggle('rotated');
    flagcard1=1
    }
    else{
        console.log("libraries body reduced ");
        languagesbody.style.display="none";
        flagcard1=0;
       languagesdown.classList.toggle('rotated'); 
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const radios = document.querySelectorAll('input[type="radio"]');
    let currentSlide = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % radios.length;
        radios[currentSlide].checked = true;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000); // Change slide every 2 seconds

    radios.forEach((radio, index) => {
        radio.addEventListener("change", () => showSlide(index));
    });
});

// nav bar 2 small menu
var menuCounter=0;
smallmenubtn.addEventListener('click',()=>{
    if (menuCounter==0) {
        smallmenuwindow.style.display="block"
        console.log('Menu bar opened');
        menuCounter=1;
    }
    else{
        smallmenuwindow.style.display="none"
        console.log('Menu bar closed');
        menuCounter=0;
    }
})

// darmode by btn 1
var darkmodeCounter = 0;
darmodebtn1.addEventListener('click', () => {
  body.classList.add("darkmode");
  darmodebtn1.style.display = "none";
  lightmodebtn1.style.display = "block";
  console.log("dark mode Enabled");
  darkmodeCounter = 1;
});

lightmodebtn1.addEventListener('click', () => {
  body.classList.remove("darkmode");
  darmodebtn1.style.display = "block";
  lightmodebtn1.style.display = "none";
  console.log("dark mode Disabled");
  darkmodeCounter = 0;
});


// darmode by btn 2
var darkmodeCounter = 0;
darmodebtn2.addEventListener('click', () => {
  body.classList.add("darkmode");
  navbar2.style.backgroundColor="#191627"
  darmodebtn2.style.display = "none";
  lightmodebtn2.style.display = "block";
 
  console.log("dark mode Enabled");
  darkmodeCounter = 1;
});

lightmodebtn2.addEventListener('click', () => {
  body.classList.remove("darkmode");
  darmodebtn2.style.display = "block";
   navbar2.style.backgroundColor="white"
  lightmodebtn2.style.display = "none";
  console.log("dark mode Disabled");
  darkmodeCounter = 0;
});
