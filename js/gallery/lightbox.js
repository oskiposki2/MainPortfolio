import { photos } from "./photos.js";

export function openLightbox(photo) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  lightboxImage.src = `img/galleryFull/${photo.filename}`;

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
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
    }
  });
}
