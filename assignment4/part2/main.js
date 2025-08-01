/*
        Name: Ryker Dickson
        Student Number: 100912565
        File: main.js
        Date: 31-07-2025
        Description: assignment 4 part 2 tutorial file javascript
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg',
    'pic5.jpg'
];
/* Declaring the alternative text for each image file */
const imageAlts = [
    'Closeup of a human eye',
    'Rock that looks like a wave',
    'Purple and white pansies',
    'Section of wall from a pharaoh\'s tomb',
    'Large moth on a leaf'
];
/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageFilenames[i]);
    newImage.setAttribute('alt', imageAlts[i]);
    thumbBar.appendChild(newImage);
}

