export function footer() {
    const container = document.querySelector(".footerContainer");

    const logo = document.createElement("div");
    logo.classList.add("footer-logo");

    const github = document.createElement("a");
    const instagram = document.createElement("a");
    const linkedIn = document.createElement("a");
    const email = document.createElement("p");
    const copyright = document.createElement("p");

    const links = document.createElement("div");

    logo.innerHTML = `<svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.46 378.02">
  <defs>
    <style>
      .cls-1 {
        font-size: 21.11px;
      }

      .cls-1, .cls-2, .cls-3, .cls-4 {
        fill: #fff;
      }

      .cls-1, .cls-4 {
        font-family: HelveticaNeue, 'Helvetica Neue';
      }

      .cls-2 {
        font-size: 290.41px;
      }

      .cls-2, .cls-3 {
        font-family: HelveticaNeue-Light, 'Helvetica Neue';
        font-weight: 300;
      }

      .cls-3 {
        font-size: 286.17px;
      }

      .cls-4 {
        font-size: 34.39px;
        letter-spacing: .15em;
      }
    </style>
  </defs>
  <text class="cls-4" transform="translate(2.26 329.61)"><tspan x="0" y="0">OSKAR BERNTSON</tspan></text>
  <text class="cls-1" transform="translate(27.39 367.86)"><tspan x="0" y="0">WEBBUTVECKLING • FOTOGRAFI</tspan></text>
  <text class="cls-2" transform="translate(0 248.88) scale(1.07 1)"><tspan x="0" y="0">O</tspan></text>
  <text class="cls-3" transform="translate(179.23 248.88) scale(1.07 1)"><tspan x="0" y="0">B</tspan></text>
</svg>`

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

    container.append(logo, links, email, copyright);
}