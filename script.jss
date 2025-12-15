document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const symbol = document.getElementById('konoha-symbol');

    // Simple reveal animation on load
    heroContent.style.opacity = 0;
    symbol.style.opacity = 0;
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        symbol.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        symbol.style.opacity = 1;
        symbol.style.transform = 'scale(1)';
    }, 500);


    // Optional: Add a simple flicker effect to the symbol's glow
    setInterval(() => {
        const currentShadow = symbol.style.boxShadow;
        if (currentShadow.includes('30px')) {
             symbol.style.boxShadow = '0 0 10px var(--color-accent-primary)';
        } else {
             symbol.style.boxShadow = '0 0 10px var(--color-accent-primary), 0 0 35px rgba(255, 87, 34, 0.8)';
        }
    }, 2000); // Toggles the glow every 2 seconds for a subtle "chakra" effect

});
