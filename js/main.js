import { featuredPhotos } from "./featuredPhotos.js";
import { footer } from "./components/footer.js";
import { header } from "./components/nav.js";
import { openLightbox, closeLightbox } from "./gallery/lightbox.js";
import { photos } from "./gallery/photos.js";

const featuredPhotosContainer = document.getElementById(
  "featuredPhotosContainer",
);
const headerContainer = document.querySelector("header");

function loadFeaturedPhotos() {
  for (const photo of featuredPhotos) {
    const img = document.createElement("img");
    const a = document.createElement("a");
    const span = document.createElement("span");

    a.classList.add("featuredPhoto");

    img.src = `img/galleryPreview/${photo.image}`;
    img.alt = photo.alt;

    a.appendChild(img);
    a.appendChild(span);

    featuredPhotosContainer.appendChild(a);

    a.addEventListener("click", (event) => {
      event.preventDefault();

      const fullPhoto = photos.find((p) => p.filename === photo.image);

      openLightbox(fullPhoto);
    });
  }
}

footer();
header(headerContainer);

loadFeaturedPhotos();
closeLightbox();