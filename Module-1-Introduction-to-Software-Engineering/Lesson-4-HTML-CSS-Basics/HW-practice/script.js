//ndex.html, styles.css & script.js
//Hook up the files together how do we test they are working?
//Create a square that when you click on it the website background color changes



document.addEventListener('DOMContentLoaded', function() {
    const myColorSqr = document.getElementById('myColorSqr');
    myColorSqr.addEventListener('click', function() {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    });
  });