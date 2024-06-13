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



let currentIndex = 6;
const images = [
    {src: 'image7.jpg', class: 'all church'},
    {src: 'image8.jpg', class: 'all bible'},
    {src: 'image9.jpg', class: 'all community'},
];

document.getElementById('loadMore').addEventListener('click', () => {
    const gallery = document.querySelector('.gallery');
    for (let i = 0; i < 3 && currentIndex < images.length; i++, currentIndex++) {
        const item = document.createElement('div');
        item.className = `gallery-item ${images[currentIndex].class}`;
        item.innerHTML = `<img src="${images[currentIndex].src}" alt="Gallery Image ${currentIndex + 1}">`;
        gallery.appendChild(item);
    }
    if (currentIndex >= images.length) {
        document.getElementById('loadMore').style.display = 'none';
    }
});

function filterSelection(category) {
    const items = document.querySelectorAll('.gallery-item');
    if (category === 'all') {
        items.forEach(item => item.style.display = 'block');
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-btn[onclick="filterSelection('${category}')"]`).classList.add('active');
}



















function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
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
