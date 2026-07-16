import { photos } from "./photos.js";
import { openLightbox, closeLightbox } from "./lightbox.js";

export function renderGallery() {
  const container = document.getElementById("gallery");

  for (const photo of photos) {
    const img = document.createElement("img");
    const a = document.createElement("a");

    a.classList.add("photo-card");

    img.src = `img/galleryPreview/${photo.filename}`;
    img.alt = photo.alt;

    a.appendChild(img);

    container.appendChild(a);

    a.addEventListener("click", () => {
        openLightbox(photo);
    })
  }
}
