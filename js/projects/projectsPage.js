import { header } from "../components/nav.js";
import { footer } from "../components/footer.js";
import { renderProjects } from "./renderProjects.js";

const hero = document.getElementById("projects-page-bg");

header(hero);
footer();

renderProjects();