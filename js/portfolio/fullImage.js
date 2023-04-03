const images = document.querySelectorAll('.fullscreen-image');
const fullscreen = document.createElement('div');
fullscreen.classList.add('fullscreen');
const img = document.createElement('img');
let index = 0;

function showImage() {
  const image = images[index];
  img.src = image.src;
  img.alt = image.alt;
  fullscreen.appendChild(img);
  document.body.appendChild(fullscreen);
}

function hideImage() {
  fullscreen.removeChild(img);
  document.body.removeChild(fullscreen);
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

images.forEach((image, i) => {
  image.addEventListener('click', () => {
    index = i;
    showImage();
  });
});

fullscreen.addEventListener('click', hideImage);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideImage();
  } else if (event.key === 'ArrowLeft') {
    prevImage();
  } else if (event.key === 'ArrowRight') {
    nextImage();
  }
});
