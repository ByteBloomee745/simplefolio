document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.getElementById('contact');
    const contactLinks = document.querySelectorAll('.contact-links a');
    const contactHeading = document.querySelector('.contact-wrapper__heading');
    
    // Animation d'entrée de la section
    function animateContactSection() {
      if (isInViewport(contactSection)) {
        contactSection.style.opacity = '1';
        contactSection.style.transform = 'translateY(0)';
        
        // Animation des liens un par un
        contactLinks.forEach((link, index) => {
          setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
          }, 200 * index);
        });
      }
    }
    
    // Vérifie si l'élément est dans le viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
    
    // Effet de vague au survol des liens
    contactLinks.forEach(link => {
      link.addEventListener('mousemove', (e) => {
        const rect = link.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        link.style.setProperty('--mouse-x', `${x}px`);
        link.style.setProperty('--mouse-y', `${y}px`);
      });
      
      // Effet de clic
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Animation de clic
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
          link.style.transform = 'scale(1) translateY(0)';
          // Redirection après l'animation
          setTimeout(() => {
            window.location.href = link.href;
          }, 300);
        }, 200);
      });
    });
    
    // Animation du titre
    if (contactHeading) {
      const text = contactHeading.textContent;
      contactHeading.textContent = '';
      
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          const span = document.createElement('span');
          span.textContent = text[i];
          span.style.opacity = '0';
          span.style.transform = 'translateY(20px)';
          span.style.display = 'inline-block';
          contactHeading.appendChild(span);
          
          setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
            span.style.transition = 'all 0.3s ease';
          }, 50);
        }, 100 * i);
      }
    }
    
    // Style initial pour les animations
    contactSection.style.opacity = '0';
    contactSection.style.transform = 'translateY(50px)';
    contactSection.style.transition = 'all 0.8s ease';
    
    contactLinks.forEach(link => {
      link.style.opacity = '0';
      link.style.transform = 'translateY(20px)';
      link.style.transition = 'all 0.5s ease, background 0.3s ease';
      link.style.setProperty('--mouse-x', '0px');
      link.style.setProperty('--mouse-y', '0px');
    });
    
    // Écouteur pour l'animation au scroll
    window.addEventListener('scroll', animateContactSection);
    animateContactSection(); // Déclenche au chargement si déjà visible
  });