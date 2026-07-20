import { header } from "../components/nav.js";
import { renderProjects } from "./renderProjects.js";
import { footer } from "../components/footer.js";

const nav = document.getElementById("projects-page-bg");

header(nav);
footer()
renderProjects()