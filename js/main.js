document.addEventListener('DOMContentLoaded', () => {

    // 1. IMAGE SLIDER LOGIC
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach(slider => {
        const dots = slider.querySelectorAll('.dot');
        const images = slider.querySelectorAll('img'); 

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                dots.forEach(d => d.classList.remove('active'));
                
                dot.classList.add('active');

                if (images.length > 1) {
                    images.forEach(img => img.style.display = 'none');  
                    if (images[index]) {
                        images[index].style.display = 'block';  
                    }
                }
            });
        });
    });

    
    // 2. SMOOTH SCROLLING FOR ANCHOR LINKS
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
    const dropdown = document.querySelector('.dropdown');
    
    if (dropdown) {
        dropdown.addEventListener('touchstart', (e) => {
            dropdown.classList.toggle('touch-active');
        });
    }


    // 4. CINEMATIC CAROUSEL ARROWS 
    document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
        const carousel = wrapper.querySelector('.image-carousel');
        const prevBtn = wrapper.querySelector('.prev');
        const nextBtn = wrapper.querySelector('.next');

        if (!carousel) return;

        // Scroll right
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
        });

        // Scroll left
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
        });
    });

});
