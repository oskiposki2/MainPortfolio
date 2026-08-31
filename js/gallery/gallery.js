import { header } from "../components/nav.js";
import { renderGallery } from "./renderGallery.js";
import { photos } from "./photos.js";
import { closeLightbox, openLightbox } from "./lightbox.js";
import { footer } from "../components/footer.js";
import { scrollTop } from "../components/scrollTop.js";

const nav = document.querySelector("#gallery-page-bg");

header(nav);
renderGallery();
closeLightbox();
footer();
scrollTop();