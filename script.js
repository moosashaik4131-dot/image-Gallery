let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openLightbox(img.src);
  });
});

function openLightbox(src) {
  lightbox.style.display = 'block';
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery .filter');
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'inline-block';
    } else {
      img.style.display = 'none';
    }
  });
}
