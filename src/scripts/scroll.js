document.addEventListener('DOMContentLoaded', function() {
    // Effet de dactylographie
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        const text = typedText.textContent;
        typedText.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                typedText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
    
    // Animation du bouton "En savoir plus"
    const btnMore = document.querySelector('.btn-more');
    if (btnMore) {
        btnMore.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
});
// Fonction pour basculer entre les thèmes
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Vérifier le thème au chargement
function checkTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Appeler cette fonction au chargement de la page
document.addEventListener('DOMContentLoaded', checkTheme);