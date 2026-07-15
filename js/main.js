import { featuredPhotos } from "./featuredPhotos.js";
import { footer } from "./footer.js";
import { header } from "./header.js";

const featuredPhotosContainer = document.getElementById("featuredPhotosContainer");
const headerContainer = document.querySelector("header")

function loadFeaturedPhotos() {
    for (const photo of featuredPhotos) {
        const img = document.createElement("img");
        const a = document.createElement("a");
        const span = document.createElement("span");

        a.classList.add("featuredPhoto");
        a.href = "";

        span.textContent = `Visa i galleriet →`

        img.src = `img/galleryPreview/${photo.image}`;
        img.alt = photo.alt;

        a.appendChild(img);
        a.appendChild(span);

        featuredPhotosContainer.appendChild(a);
    }
}

footer();
header(headerContainer)

loadFeaturedPhotos();