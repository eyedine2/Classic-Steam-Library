// Old News redirect, by Xammand

if (document.URL.indexOf('/news') >= 0){

const newPath = window.location.href.replace('https://store.steampowered.com/news/', 'https://store.steampowered.com/oldnews/');

window.location.href = newPath;

};
