import { header } from "../components/nav.js";
import { renderGallery } from "./renderGallery.js";
import { photos } from "./photos.js";
import { closeLightbox } from "./lightbox.js";

const nav = document.querySelector("#gallery-page-bg");

header(nav);
renderGallery();
closeLightbox();