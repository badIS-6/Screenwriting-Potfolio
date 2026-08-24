// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    
    // 1. IMAGE SLIDER LOGIC (Inspirations Page)
    
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
        const dots = slider.querySelectorAll('.dot');
        // Assuming you add multiple images inside the slider container later, this will find them. If you only have one image, it won't break.
        const images = slider.querySelectorAll('img'); 

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Remove 'active' class from all dots in this specific slider
                dots.forEach(d => d.classList.remove('active'));
                
                // Add 'active' class to the clicked dot
                dot.classList.add('active');

                // If you have multiple images stacked, this switches the visible one
                if (images.length > 1) {
                    images.forEach(img => img.style.display = 'none'); // Hide all
                    if (images[index]) {
                        images[index].style.display = 'block'; // Show matched image
                    }
                }
            });
        });
    });

    
    // 2. SMOOTH SCROLLING FOR ANCHOR LINKS
    
    // This makes links like <a href="#request-script"> scroll smoothly down the page instead of jumping instantly.
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent the default jump behavior
            e.preventDefault();

            const targetId = this.getAttribute('href');
            
            // Skip if it's just a placeholder "#" link
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    
    // 3. DROPDOWN TOUCH SUPPORT (Mobile)
    
    // Ensures the portfolio dropdown works correctly on touchscreens where there is no "hover" state.
    const dropdown = document.querySelector('.dropdown');
    
    if (dropdown) {
        dropdown.addEventListener('touchstart', (e) => {
            dropdown.classList.toggle('touch-active');
        });
    }

});
