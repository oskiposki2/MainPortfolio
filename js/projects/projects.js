export const projects = [
  {
    id: "portfolio",
    title: "Portfolio",
    year: "2026",
    type: "Personligt projekt",

    image: "portfolio.webp",
    hero: "portfolio.webp",

    responsive: "Responsiv",

    description:
      "En personlig portfolio utvecklad för att samla mina webbprojekt och fotografier.",

    about:
      "Syftet med projektet var att skapa en modern portfolio där jag kan visa upp både mina webbutvecklingsprojekt och min fotografering. Webbplatsen är byggd med fokus på återanvändbara komponenter, responsiv design och god prestanda. Projektet har resulterat i en bra bas som jag kan vidareutveckla framåt.",

    features: [
      "Responsiv design",
      "Dynamiskt projektgalleri",
      "Fotogalleri med lightbox",
      "Återanvändbara JavaScript-moduler",
      "Optimerade WebP-bilder",
    ],

    technologies: ["HTML", "CSS", "JavaScript", "Git"],

    challenge:
      "Den största utmaningen var att skapa en modulär struktur där navigation, footer, projekt och bildgalleri återanvänds mellan flera sidor. Även att hantera en större mängd bilder där filstorleken är viktig att ta hänsyn till samtidigt som god bildkvalité är viktigt.",

    learned:
      "Projektet gav mig större förståelse för modulär JavaScript, DOM-manipulation och hur man organiserar ett större frontendprojekt. Även hur man snabbt och smidigt konverterar en större mängd bilder på samma gång och användandet av filformatet WebP för bilder.",

    github: "https://github.com/oskiposki2/MainPortfolio",
  },

  {
    id: "touristguide",
    title: "Turistguide Småland",
    year: "2026",
    type: "Grupprojekt",

    image: "tourist.webp",
    hero: "tourist.webp",

    responsive: "Responsiv",

    description:
      "En webbplats som hjälper besökare att upptäcka sevärdheter och aktiviteter i Småland och på Öland.",

    about:
      `Projektet utvecklades i grupp och hade som mål att skapa en inspirerande turistguide där användaren enkelt kan hitta besöksmål, aktiviteter och information om regionen. Projektet baserades till stor grad på att arbeta med REST API, mer specifikt <a href="https://smapi.lnu.se/" target="_blank">SMAPI</a>.`,

    features: [
      "Interaktiv karta med Leaflet",
      "API",
      "Responsiv design",
      "Information om sevärdheter",
      "Filtrering av innehåll",
      "Personligt anpassat innehåll",
    ],

    technologies: ["HTML", "CSS", "JavaScript", "Leaflet", "Git"],

    challenge:
      "En stor utmaning var att samarbeta i grupp och kombinera flera olika funktioner i samma webbplats. Att få samspelet mellan samtliga gruppmedlemmar att fungera med kod som ska implementeras från olika håll var en utmaning i början av arbetet.",

    learned:
      "Jag utvecklade mina kunskaper inom Git, grupparbete och hur man bygger större webbprojekt tillsammans med andra. Även hur man arbetar med API:er på en större skala.",

    github: "https://github.com/LordStickyNote/Projektkurs-inhemsk-turism",

    demo: "https://aquamarine-khapse-de2135.netlify.app/",
  },

  {
    id: "timeline",
    title: "Interaktiv tidslinje",
    year: "2025",
    type: "Kursprojekt",

    image: "tidslinje.webp",
    hero: "tidslinje.webp",

    responsive: "Endast desktop",

    description:
      "En interaktiv tidslinje som berättar historien om Norrmalmstorgsdramat 1973.",

    about:
      "Projektet kombinerar text, illustrationer, ljud och animationer för att presentera en historisk händelse på ett mer engagerande sätt.",

    features: [
      "Interaktiv tidslinje",
      "Illustrationer och grafik",
      "Ljud och multimedia",
      "Responsiv layout",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Photoshop",
      "Illustrator",
      "Audacity",
    ],

    challenge:
      "Att kombinera flera olika medietyper och samtidigt skapa en tydlig och lättnavigerad användarupplevelse. Då allt innehåll är producerat av mig tvingades jag att lära mig nya saker och experimentera med nya tekniker.",

    learned:
      "Projektet gav mig erfarenhet av att arbeta med interaktiv storytelling och multimedia på webben.",

    github: "https://github.com/oskiposki2/Multimedia_U4",

    demo: "https://digitalamedieru4.netlify.app/#start",
  },

  {
    id: "webbteknik3",
    title: "Webbteknik 3 – Kursprojekt",
    year: "2026",
    type: "Kursprojekt",

    image: "webbteknik3.webp",
    hero: "webbteknik3.webp",

    responsive: "Endast desktop",

    description:
      "En samling JavaScript-projekt utvecklade under kursen Webbteknik 3.",

    about:
      "Projektet består av flera mindre webbapplikationer där fokus låg på JavaScript, DOM-manipulation och problemlösning. Bland uppgifterna finns bland annat en produktvisning, en turneringsgenerator och Spökhusbyrån.",

    features: [
      "Flera JavaScript-applikationer",
      "DOM-manipulation",
      "Responsiv design",
      "Interaktiva användargränssnitt",
    ],

    technologies: ["HTML", "CSS", "JavaScript"],

    challenge:
      "Varje uppgift hade olika krav och innebar nya typer av problem att lösa med JavaScript.",

    learned:
      "Jag fick betydligt bättre förståelse för DOM-manipulation, moduler, händelsehantering och hur man strukturerar JavaScript-kod.",

    github: "https://github.com/oskiposki2/1me323-assignments",

    demo: "https://oskiposki2.github.io/1me323-assignments/",
  },
];
