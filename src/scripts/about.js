// scripts/About.js
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
  
    // Configuration de ScrollReveal pour les animations
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      reset: true
    });
  
    // Animation pour les éléments de la section About
    sr.reveal('.section-title', {
      origin: 'top',
      distance: '40px',
      delay: 100
    });
  
    sr.reveal('.about-wrapper__image', {
      delay: 300,
      rotate: { x: 0, y: 10, z: 0 }
    });
  
    sr.reveal('.about-wrapper__info', {
      delay: 400,
      scale: 0.9
    });
  
    // Effet de parallaxe pour l'image de profil
    const profileImage = document.querySelector('.about-wrapper__image img');
    if (profileImage) {
      window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        profileImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
      });
    }
  
    // Animation de texte fluide pour la description
    const aboutTexts = document.querySelectorAll('.about-wrapper__info-text');
    aboutTexts.forEach((text, index) => {
      text.style.opacity = '0';
      text.style.transition = `opacity 0.8s ease ${index * 0.3}s, transform 0.8s ease ${index * 0.3}s`;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(text);
    });
  
    // Effet de halo autour de l'image au survol
    if (profileImage) {
      profileImage.addEventListener('mouseenter', () => {
        profileImage.style.boxShadow = `0 0 30px rgba(255, 255, 255, 0.6)`;
        profileImage.style.transition = 'box-shadow 0.5s ease';
      });
      
      profileImage.addEventListener('mouseleave', () => {
        profileImage.style.boxShadow = 'none';
      });
    }
  
    // Animation du bouton "View Resume"
    const resumeBtn = document.querySelector('.cta-btn--resume');
    if (resumeBtn) {
      resumeBtn.addEventListener('mouseenter', () => {
        resumeBtn.style.transform = 'translateY(-5px)';
        resumeBtn.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      });
      
      resumeBtn.addEventListener('mouseleave', () => {
        resumeBtn.style.transform = 'translateY(0)';
        resumeBtn.style.boxShadow = 'none';
      });
      
      // Effet de pulsation douce
      setInterval(() => {
        resumeBtn.style.transform = 'scale(1.02)';
        setTimeout(() => {
          resumeBtn.style.transform = 'scale(1)';
        }, 800);
      }, 3000);
    }
  });
  
  // Export pour les modules si nécessaire
  export function initAboutAnimations() {
    // Vous pouvez ajouter ici d'autres initialisations si besoin
  }