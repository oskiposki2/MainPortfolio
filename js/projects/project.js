import { header } from "../components/nav.js";
import { footer } from "../components/footer.js";
import { renderProject } from "./renderProject.js";

const headerContainer = document.getElementById("header");

header(headerContainer);
footer();
renderProject();