import { photos } from "./photos.js";

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

let currentIndex = 0;

export function openLightbox(photo) {
  currentIndex = photos.findIndex((p) => p.id === photo.id);

  showPhoto();

  lightbox.classList.add("open");
}

export function closeLightbox() {
  const closeButton = document.getElementById("close");
  const lightbox = document.getElementById("lightbox");

  closeButton.addEventListener("click", () => {
    lightbox.classList.remove("open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      lightbox.classList.remove("open");
    }

    if (event.key === "ArrowRight") {
      nextPhoto();
    }

    if (event.key === "ArrowLeft") {
      previousPhoto();
    }
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
    }
  });

  next.addEventListener("click", () => {
    nextPhoto();
  });

  previous.addEventListener("click", () => {
    previousPhoto();
  });
}

function showPhoto() {
  const photo = photos[currentIndex];

  lightboxImage.src = `img/galleryFull/${photo.filename}`;
  lightboxImage.alt = photo.alt;
}

function nextPhoto() {
  currentIndex++;

  if (currentIndex >= photos.length) {
    currentIndex = 0;
  }

  showPhoto();
}

function previousPhoto() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = photos.length - 1;
  }

  showPhoto();
}
