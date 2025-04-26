import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import contact from "./scripts/contact";
import about from "./scripts/about";
import { initCursor } from "./scripts/footer";
// Dans index.js
import footer from './scripts/footer';

document.addEventListener('DOMContentLoaded', () => {
  initAboutAnimations();
  // Vos autres initialisations...
});

import { initDarkMode } from './scripts/DarkMode';
import initAboutSection from './scripts/about';

// Initialisation des composants
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initAboutSection();
});
