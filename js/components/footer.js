export function footer() {
    const container = document.querySelector(".footerContainer");

    const name = document.createElement("h2");
    const text = document.createElement("p");
    const github = document.createElement("a");
    const instagram = document.createElement("a");
    const linkedIn = document.createElement("a");
    const email = document.createElement("p");
    const copyright = document.createElement("p");

    const links = document.createElement("div");

    name.textContent = "Oskar Berntson";
    text.textContent = "Webbutvecklarstudent • Naturfotograf";

    github.textContent = "Github";
    github.href = "https://github.com/oskiposki2";
    github.target = "_blank"

    instagram.textContent = "Instagram";
    instagram.href = "https://www.instagram.com/oskrom_/";
    instagram.target = "_blank";

    linkedIn.textContent = "LinkedIn";
    linkedIn.href = "https://www.linkedin.com/in/oskar-berntson-0b8b65374/";
    linkedIn.target = "_blank";

    email.textContent = "oskar.berntson@gmail.com";
    copyright.textContent = "© 2026 Oskar Berntson";

    links.append(github, instagram, linkedIn)

    container.append(name, text, links, email, copyright);
}