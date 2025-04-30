document.addEventListener('DOMContentLoaded', function() {
  // 1. Fée interactive
  const initFairyButton = () => {
    const fairyButton = document.querySelector('.fairy-button');
    if (!fairyButton) return;

    window.addEventListener('scroll', () => {
      fairyButton.style.opacity = window.pageYOffset > 300 ? '1' : '0';
      fairyButton.style.pointerEvents = window.pageYOffset > 300 ? 'auto' : 'none';
    });

    fairyButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    setInterval(() => Math.random() > 0.7 && createFairyDust(), 1000);
  };

  const createFairyDust = () => {
    const fairy = document.querySelector('.fairy');
    if (!fairy) return;

    const dust = document.createElement('div');
    dust.className = 'fairy-dust-particle';
    Object.assign(dust.style, {
      left: `${Math.random() * 60}px`,
      top: `${Math.random() * 60}px`
    });
    fairy.appendChild(dust);
    setTimeout(() => dust.remove(), 2000);
  };

  // 2. Fruits interactifs
  const initSocialFruits = () => {
    document.querySelectorAll('.social-fruit').forEach(fruit => {
      fruit.addEventListener('mousemove', (e) => {
        const rect = fruit.getBoundingClientRect();
        fruit.style.transform = `
          rotateX(${(e.clientY - rect.top - rect.height/2)/10}deg)
          rotateY(${(rect.width/2 - e.clientX + rect.left)/10}deg)
        `;
      });
      fruit.addEventListener('mouseleave', () => {
        fruit.style.transform = 'rotateX(0) rotateY(0)';
      });
    });
  };

  // 3. Feux follets
  const initFireflies = () => {
    const container = document.querySelector('.fireflies');
    if (!container) return;

    for (let i = 0; i < 5; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';
      Object.assign(firefly.style, {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random()
      });
      container.appendChild(firefly);
    }
  };

  // 4. Flèche magique
  const initMagicArrow = () => {
    const arrow = document.querySelector('.magic-scroll-top');
    if (!arrow) return;

    window.addEventListener('scroll', () => {
      arrow.style.opacity = window.pageYOffset > 300 ? '1' : '0';
      arrow.style.pointerEvents = window.pageYOffset > 300 ? 'auto' : 'none';
    });

    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    setInterval(() => {
      if (Math.random() > 0.8 && arrow.matches(':hover')) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        Object.assign(sparkle.style, {
          left: `${Math.random() * 50 + 25}%`,
          top: `${Math.random() * 30 + 50}%`
        });
        document.querySelector('.magic-sparkles')?.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
      }
    }, 500);
  };

  // Initialisation unique
  (function init() {
    initFairyButton();
    initSocialFruits();
    initFireflies();
    initMagicArrow();
  })();
});