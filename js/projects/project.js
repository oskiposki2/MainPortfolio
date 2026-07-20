import { header } from "../components/nav.js";
import { footer } from "../components/footer.js";
import { renderProject } from "./renderProject.js";

const hero = document.getElementById("project-hero");

header(hero);
footer();
renderProject();