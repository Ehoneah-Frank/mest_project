// Select all slides
const slides = document.querySelectorAll('.slide');
// Current slide index
let currentSlide = 0;
// Total number of slides 
const totalSlides = slides.length;

// Function to change slide
function changeSlide() {
    // Remove active class from the current slide
    slides[currentSlide].classList.remove('active');
    // Update current slide index
    currentSlide = (currentSlide + 1) % totalSlides;
    // Add active class to the new current slide
    slides[currentSlide].classList.add('active');
}

// Set interval for changing slides every 5 seconds
setInterval(changeSlide, 5000);



// Initialize the index of the current image being displayed
let currentIndex = 6;
// Array of image objects with their source and class names
const images = [
    {src: 'image7.jpg', class: 'all church'},
    {src: 'image8.jpg', class: 'all bible'},
    {src: 'image9.jpg', class: 'all community'},
];
// Add an event listener to the "loadMore" button to execute the function when clicked
document.getElementById('loadMore').addEventListener('click', () => {
    // Get the gallery element where new images will be appended
    const gallery = document.querySelector('.gallery');
    // Loop to add up to 3 images or until the end of the image array is reached
    for (let i = 0; i < 3 && currentIndex < images.length; i++, currentIndex++) {
        // Create a new div element for the gallery item
        const item = document.createElement('div');
          // Set the class for the new gallery item
        item.className = `gallery-item ${images[currentIndex].class}`;
          // Set the inner HTML of the new item to include an image element
        item.innerHTML = `<img src="${images[currentIndex].src}" alt="Gallery Image ${currentIndex + 1}">`;
         // Append the new item to the gallery
        gallery.appendChild(item);
    }
    // If all images have been loaded, hide the "loadMore" button
    if (currentIndex >= images.length) {
        document.getElementById('loadMore').style.display = 'none';
    }
});

// Function to filter the displayed gallery items based on the selected category
function filterSelection(category) {
    // Get all gallery items
    const items = document.querySelectorAll('.gallery-item');
     // If the category is "all", display all items
    if (category === 'all') {
        items.forEach(item => item.style.display = 'block');
    } else {
        // Otherwise, display only items that match the selected category
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
     // Remove the "active" class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
     // Add the "active" class to the clicked filter button
    document.querySelector(`.filter-btn[onclick="filterSelection('${category}')"]`).classList.add('active');
}








function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

