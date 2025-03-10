const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altObj = ['Closeup of a human eye', 'bed fold', 'hibiscus flowers', 'ancient egypt', 'butterfly on flower'];

/* Looping through images */
for (let i = 0; i < imgArray.length; i++) {

    // create the img element
    const newImage = document.createElement('img');

    // set the image source
    newImage.setAttribute('src', `images/${imgArray[i]}`);

    // set the image alt text
    newImage.setAttribute('alt', altObj[i]);

    thumbBar.appendChild(newImage);
    
    // add a click event to trigger the display of the image and the alternative text
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', newImage.src);
        displayedImage.setAttribute('alt', newImage.alt);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (e) => {
    if ( btn.getAttribute("class") == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Light";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Dark";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
    
});