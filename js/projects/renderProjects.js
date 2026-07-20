import { projects } from "./projects.js";

export function renderProjects() {
    const container = document.querySelector(".projects-grid");

    for (const project of projects) {

        const article = document.createElement("article");
        article.className = "project-card";

        article.innerHTML = `
            <a href="project.html?id=${project.id}" class="project-link">

                <img
                    src="img/projectsPreview/${project.image}"
                    alt="${project.title}"
                    class="project-image">

                <div class="project-content">

                    <div class="project-header">
                        <h2>${project.title}</h2>
                        <span>${project.year}</span>
                    </div>

                    <p>${project.description}</p>

                    <div class="project-tech">

                        ${project.technologies
                            .map(tech => `<span>${tech}</span>`)
                            .join("")}

                    </div>

                    <div class="project-footer">

                        <span>${project.type}</span>

                        <span class="arrow">
                            Läs mer →
                        </span>

                    </div>

                </div>

            </a>
        `;

        container.append(article);
    }
}