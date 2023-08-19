// JavaScript for interactivity

const photos = document.querySelectorAll('.photo');
const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
const fullscreenImage = document.querySelector('.fullscreen-image');
const closeButton = document.querySelector('.close-button');

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        const imgSrc = photo.querySelector('img').src;
        fullscreenImage.src = imgSrc;
        fullscreenOverlay.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    fullscreenOverlay.style.display = 'none';
});
