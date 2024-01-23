<!-- div style="color:red; border:10px; font-size:48px">Test</div -->
<!-- style> .addon-details-segment { background: black !important; } </style -->

[![Video](https://user-images.githubusercontent.com/65731940/125979354-e86bb0ec-40d1-45af-b755-45e70f8cf844.png)](https://www.youtube.com/watch?v=IoKg5fYlZLs)
<div class ="intro">
Returns the Steam library to it's 2010-era look with CSS tweaks instead of reverting it.
<br>
This is a large scale and somewhat messy project that has taken place over the course of several years. Things are not perfect here, but you probably aren't here for that.
</div>
<br>
<br>
<br>
<div class="a-container">
    <div class="image-gradient" id="left">
        <img src="https://i.imgur.com/9dRmkpO.png" alt="Friends">
    </div>
    <div id="right">
        <h2>A Complete Rework</h2>
        <p>Almost every panel has been given a complete makeover, looking more in line with the Steam we used to know. Every part of the library, friends list, and even some parts of the Store and Community pages have been touched in some way.</p>
    </div>
</div>
<br>
<br>
<br>
<div class="image-gradient" id="left">
    <img src="https://i.imgur.com/PO8RHyN.png">
</div>
<br>

## Trimming the Fat
Poorly performing and visually noisy areas of the vanilla client have been smoothed over. No longer will your system be assaulted by achievement spam! Certain "Problem games" (Such as PAYDAY 2) used to add thousands of elements to facilitate poorly thought out community features. All of this has been removed. Everything is repositioned to maximize both space and content on screen in a sensible way. Gone are the distracting game banners that hide crucial features for aesthetic purposes. Everything unnecessary is out of the way or straight up gone — as they should be.
<br>
<br>
<br>
<div class="image-gradient" id="left">
    <img src="https://i.imgur.com/3C485lX.png">
</div>
<br>

## The Activity Feed, Rethought!
What was once a hub of useless spam is now a re-envisioned version of the old "News" panel. All of your game's updates, now in one place! I mean, it's not like you actually use the "What's New" shelf... right?
<br>
<br>
<br>
## Installation
Installation differs slightly between Millennium and SFP. For SFP, drop the theme in the `steamui` folder or the `skins` folder inside steamui with SFP left patching. 
<br>
<br>
For Millennium, open the Millennium Community page and drop the theme onto Millennium. Then enable in your interface settings.
<br>
<br>
For Manual Installation in Millennium, drop the theme in your `steamui > skins` Folder.
<br>
<br>
<div class="naii-kofi"><a href="https://ko-fi.com/N4N1KXPVY"><img src="https://ko-fi.com/img/githubbutton_sm.svg"></img></a></div>
<script>
const element = document.getElementById("dot");
element.addEventListener("click", currentSlide(1));
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
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
}
</script>
<!-- Slideshow container -->
<div class="slideshow-container">
<!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
        <div class="numbertext">1 / 3</div>
        <img src="https://i.imgur.com/PO8RHyN.png" style="width:100%">
        <div class="text">Caption Text</div>
    </div>
    <div class="mySlides fade">
        <div class="numbertext">2 / 3</div>
        <img src="https://i.imgur.com/PO8RHyN.png" style="width:100%">
        <div class="text">Caption Two</div>
    </div>
    <div class="mySlides fade">
        <div class="numbertext">3 / 3</div>
        <img src="https://i.imgur.com/PO8RHyN.png" style="width:100%">
        <div class="text">Caption Three</div>
    </div>
<!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>
<!-- The dots/circles -->
<div style="text-align:center">
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
</div> 
