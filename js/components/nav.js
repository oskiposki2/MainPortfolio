export function header(container) {
  const nav = document.createElement("nav");
  const navBar = document.createElement("div");
  navBar.id = "navBar";

  const navList = document.createElement("ul");

  const links = [
    { text: "HEM", href: "index.html" },
    { text: "FOTO", href: "gallery.html" },
    { text: "PROJEKT", href: "projects.html" },
    { text: "OM MIG", href: "about.html" },
    { text: "KONTAKT", href: "about.html#contact" },
  ];

  for (const link of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = link.text;
    a.href = link.href;

    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    if (link.href === currentPage) {
      a.classList.add("active");
    }

    li.appendChild(a);
    navList.appendChild(li);
  }

  navBar.appendChild(navList);
  nav.appendChild(navBar);

  container.prepend(nav);
}
