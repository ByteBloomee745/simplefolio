document.addEventListener('DOMContentLoaded', function() {
     // Par défaut, masquer soft skills au chargement
     document.querySelector('.soft-skills').style.display = 'none';
    // Filtrage des compétences
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    const softSkills = document.querySelectorAll('.soft-skill-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Active le bouton cliqué
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filtre les compétences
             if (filter === 'hard') {
                document.querySelector('.hard-skills').style.display = 'block';
                document.querySelector('.soft-skills').style.display = 'none';
            } else if (filter === 'soft') {
                document.querySelector('.hard-skills').style.display = 'none';
                document.querySelector('.soft-skills').style.display = 'block';
            }
        });
    });
    
    // Animation au scroll
    const animateOnScroll = () => {
        const elements = [...skillCards, ...softSkills];
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initialisation
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Pour les éléments déjà visibles au chargement
});