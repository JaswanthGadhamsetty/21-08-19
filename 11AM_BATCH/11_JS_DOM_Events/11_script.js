// changeWishMessage
let changeWishMessage = (message,color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.background = `linear-gradient(45deg,darkslategray,${color})`;
    h1Tag.style.color = 'white';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};

// Change Image
let changeImage = (imageName) => {
    let imageTag = document.querySelector('#laptop-image');
    imageTag.setAttribute('src',`../img/${imageName}`);
};

// DOM Events listeners
/*
1) Get the html element
2) add the event listener
3) add the functionality
 */

let changeMessage = (message,color) => {
    let h1Tag = document.querySelector('#msg-2');
    h1Tag.innerText = message;
    h1Tag.style.background = `linear-gradient(45deg,darkslategray,${color})`;
    h1Tag.style.color = 'white';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};

// Good Morning Button
let goodMorningButton = document.querySelector('#gm-btn');
goodMorningButton.addEventListener('click',function() {
    changeMessage('Good Morning', 'yellow');
});

// Good Afternoon Button
let goodAfternoonButton = document.querySelector('#ga-btn');
goodAfternoonButton.addEventListener('click',function() {
    changeMessage('Good Afternoon', 'blueviolet');
});

// Good Evening Button
let goodEveningButton = document.querySelector('#ge-btn');
goodEveningButton.addEventListener('click',function() {
    changeMessage('Good Evening', 'orange');
});

// Good Night Button
let goodNightButton = document.querySelector('#gn-btn');
goodNightButton.addEventListener('click',function() {
    changeMessage('Good Night', 'purple');
});