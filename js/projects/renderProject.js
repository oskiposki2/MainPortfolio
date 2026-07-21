import { projects } from "./projects.js";

export function renderProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const project = projects.find((project) => project.id === id);

  if (!project) {
    document.querySelector("main").innerHTML = `
            <h1>Projektet kunde inte hittas.</h1>
        `;

    return;
  }

  renderHero(project);
  console.log(project);
  renderContent(project);
}

function renderHero(project) {
  const hero = document.querySelector("#project-hero");

  hero.innerHTML = `
        <img
            src="img/projects/${project.hero}"
            alt="${project.title}">

                <a href="projects.html" class="back-link">
        ← Tillbaka till projekt
    </a>

        <div class="hero-content">

            <span>${project.type}</span>

            <h1>${project.title}</h1>

            <p>${project.description}</p>

        </div>
    `;
}

function renderContent(project) {
  const container = document.querySelector("#project-content");

  container.innerHTML = `

    <section class="project-section">

        <h2>Om projektet</h2>

        <p>${project.about}</p>

    </section>

    <section class="project-info">

        <div class="info-item">
            <span>Typ</span>
            <strong>${project.type}</strong>
        </div>

        <div class="info-item">
            <span>År</span>
            <strong>${project.year}</strong>
        </div>

        <div class="info-item">
            <span>Responsivitet</span>
            <strong>${project.responsive}</strong>
        </div>

    </section>

    <section class="project-section">

        <h2>Funktioner</h2>

        <ul class="feature-list">

            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}

        </ul>

    </section>

    <section class="project-section">

        <h2>Tekniker</h2>

        <div class="tech-list">

            ${project.technologies
              .map((tech) => `<span>${tech}</span>`)
              .join("")}

        </div>

    </section>

    <section class="project-section">

        <h2>Utmaningar</h2>

        <p>${project.challenge}</p>

    </section>

    <section class="project-section">

        <h2>Vad jag lärde mig</h2>

        <p>${project.learned}</p>

    </section>

`;

  renderLinks(project, container);
}

function renderLinks(project, container) {
  const links = document.createElement("section");

  links.className = "project-links";

  links.innerHTML = `
        <h2>Länkar</h2>

        <div class="project-buttons">

            <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer">

                GitHub

            </a>

            ${
              project.demo
                ? `
                    <a
                        href="${project.demo}"
                        target="_blank"
                        rel="noopener noreferrer">

                        Live-demo

                    </a>
                    `
                : ""
            }

        </div>
    `;

  container.append(links);
}
