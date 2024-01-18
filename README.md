<!-- div style="color:red; border:10px; font-size:48px">Test</div -->
<!-- style> .addon-details-segment { background: black !important; } </style -->

[![Video](https://user-images.githubusercontent.com/65731940/125979354-e86bb0ec-40d1-45af-b755-45e70f8cf844.png)](https://www.youtube.com/watch?v=IoKg5fYlZLs)

Returns the Steam library to it's 2010-era look with CSS tweaks instead of reverting it.

This is a large scale and somewhat messy project that has taken place over the course of several years. Things are not perfect here, but you probably aren't here for that.
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
Poorly performing and visually noisy areas of the vanilla client have been smoothed over. No longer will your system be assaulted by achievement spam! Certain "Problem games" (Such as PAYDAY 2) used to add thousands of elements to facilitate poorly thought out community features. All of this has been removed.

Everything is repositioned to maximize both space and content on screen in a sensible way. Gone are the distracting game banners that hide crucial features for aesthetic purposes. Everything unnecessary is out of the way or straight up gone — as they should be.
<br>
<br>
<br>
<div class="image-gradient" id="left">
    <img src="https://i.imgur.com/3C485lX.png">
</div>
<br>
## The Activity Feed, Rethought!
What was once a hub of useless spam is now a re-envisioned version of the old "News" panel. All of your game's updates, now in one place!

I mean, it's not like you actually use the "What's New" shelf... right?
<br>
<br>
<br>
## Installation
Installation differs slightly between Millennium and SFP. For SFP, drop the theme in the `steamui` folder or the `skins` folder inside steamui with SFP left patching. 

For Millennium, open the Millennium Community page and drop the theme onto Millennium. Then enable in your interface settings.

For Manual Installation in Millennium, drop the theme in your `steamui > skins` Folder.


[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/N4N1KXPVY)

<style>
  
  /* These are styles for the theme page on Millennium. You can see this on github */

#left.image-gradient img {
    -webkit-mask-image: linear-gradient(to left, transparent 0px, #0000001f 10px, #00000045 20px, #000000a3 40px, black 75px);
}

#right.image-gradient img {
    -webkit-mask-image: linear-gradient(to right, transparent 0px, #0000001f 10px, #00000045 20px, #000000a3 40px, black 75px);
}

.a-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-flow: row;
}

#left, #right {
    flex: 1;
}
  
.addon-details-segment {
    background: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    border-radius: 0 !important;
}

.markdown-body h1, .markdown-body h2 {
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
}

.addon-backdrop {
    opacity: 1 !important;
    -webkit-mask: none !important;
    height: 720px !important;
    width: 100% !important;
    object-position: bottom left !important;
}

footer#section-footer {
    background: black !important;
}
    
body {
    background: black !important;
    font-family: Arial, Helvetica, sans-serif !important;
}
    
#navbar {
    background: url(https://i.imgur.com/ihujOpD.jpg) !important;
    height: 104px !important;
    border-bottom: 1px solid #4D4B48 !important;
}

    
.nav-item {
    font-weight: normal !important;
    font-size: 14px !important;
    text-transform: uppercase;
}

    
</style>
