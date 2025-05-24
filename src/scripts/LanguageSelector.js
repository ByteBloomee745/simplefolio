const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    downloadCV: "Télécharger CV"
  },
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    downloadCV: "Download CV"
  }
};

export function initLanguageSelector() {
  const selector = document.createElement('div');
  selector.className = 'language-selector';
  selector.innerHTML = `
    <button class="lang-btn" data-lang="fr">FR</button>
    <button class="lang-btn" data-lang="en">EN</button>
  `;
  
  document.body.appendChild(selector);
  
  const buttons = selector.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      changeLanguage(lang);
      localStorage.setItem('language', lang);
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  // Charger la langue sauvegardée ou par défaut
  const savedLang = localStorage.getItem('language') || 'fr';
  changeLanguage(savedLang);
  selector.querySelector(`[data-lang="${savedLang}"]`).classList.add('active');
}

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.dataset.translate;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
}