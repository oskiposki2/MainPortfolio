const hero = document.querySelector("#start-page-bg");

const heroImages = [
    "img/heros/hero1.webp",
    "img/heros/hero2.webp",
    "img/heros/hero3.webp",
    "img/heros/hero4.webp",
    "img/heros/hero5.webp",
    "img/heros/hero6.webp",
    "img/heros/hero7.webp",
    "img/heros/hero8.webp"
];

let currentImage = 0;

const layerA = document.createElement("div");
const layerB = document.createElement("div");
layerA.classList.add("hero-bg-layer", "active");
layerB.classList.add("hero-bg-layer");

hero.prepend(layerB);
hero.prepend(layerA);

function setBackground(layer, src) {
    layer.style.backgroundImage = `
        linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.25)
        ),
        url("${src}")
    `;
}

setBackground(layerA, heroImages[currentImage]);

let activeLayer = layerA;
let nextLayer = layerB;

export function changeHero() {
    currentImage = (currentImage + 1) % heroImages.length;

    setBackground(nextLayer, heroImages[currentImage]);

    nextLayer.classList.add("active");
    activeLayer.classList.remove("active");

    [activeLayer, nextLayer] = [nextLayer, activeLayer];
}