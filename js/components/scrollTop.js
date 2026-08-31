export function scrollTop() {
    const button = document.querySelector("#scrollTop");

    if (!button) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            button.classList.add("visible");
        } else {
            button.classList.remove("visible");
        }
    });

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}