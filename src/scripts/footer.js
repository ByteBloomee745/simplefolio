// footer.js
document.addEventListener('DOMContentLoaded', function() {
  // Effet parallaxe sur la vague
  const initWaveParallax = () => {
    const wave = document.querySelector('.footer__wave');
    if (wave) {
      window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        wave.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      });
    }
  };

  // Back to top intelligent
  const initBackToTop = () => {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;

    const toggleVisibility = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosition > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.pointerEvents = 'auto';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.pointerEvents = 'none';
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };

  // Effets 3D sur les cartes sociales
  const initSocialCards = () => {
    const socialCards = document.querySelectorAll('.social-card');
    
    socialCards.forEach(card => {
      const link = card.querySelector('.social-card__link');
      if (!link) return;
      
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;
        
        link.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(20px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        link.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
      });
    });
  };

  // Effet de particules dynamiques
  const initParticles = () => {
    const particlesContainer = document.querySelector('.signature__particles');
    if (!particlesContainer) return;
    
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Position aléatoire
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Taille aléatoire
      const size = Math.random() * 3 + 1;
      
      // Durée d'animation aléatoire
      const duration = Math.random() * 15 + 10;
      
      // Délai aléatoire
      const delay = Math.random() * -20;
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        top: ${posY}%;
        left: ${posX}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      
      particlesContainer.appendChild(particle);
    }
  };

  // Effet de lumière qui suit la souris
  const initMouseLightEffect = () => {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    footer.addEventListener('mousemove', (e) => {
      const x = e.clientX / window.innerWidth * 100;
      const y = e.clientY / window.innerHeight * 100;
      
      footer.style.background = `
        radial-gradient(
          circle at ${x}% ${y}%, 
          rgba(108, 99, 255, 0.1) 0%, 
          #1a1a2e 70%
        )
      `;
    });
  };

  // Initialisation de tous les composants
  const initFooter = () => {
    initWaveParallax();
    initBackToTop();
    initSocialCards();
    initParticles();
    initMouseLightEffect();
  };

  initFooter();
});
