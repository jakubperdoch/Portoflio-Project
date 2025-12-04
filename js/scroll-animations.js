// =============================================
// SCROLL ANIMATIONS
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initScrollAnimations();
        initParallax();
        initNavbarScroll();
        initSmoothReveal();
        initScrollProgress();
        initTiltEffect();
        initMagneticButtons();
        initCounterAnimation();
        console.log('✓ All scroll animations initialized');
    }, 100);
});

// =============================================
// 1. REVEAL ON SCROLL
// =============================================
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {threshold: 0.15, rootMargin: '0px 0px -50px 0px'});

    revealElements.forEach(el => observer.observe(el));
}

// =============================================
// 2. PARALLAX EFFECT
// =============================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    if (parallaxElements.length === 0) return;

    function updateParallax() {
        const scrollY = window.scrollY;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0.5;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }

    window.addEventListener('scroll', updateParallax, {passive: true});
    updateParallax();
}

// =============================================
// 3. NAVBAR HIDE/SHOW
// =============================================
function initNavbarScroll() {
    const navbarWrapper = document.querySelector('.fixed.top-6');
    if (!navbarWrapper) return;

    let lastScrollY = window.scrollY;
    const nav = navbarWrapper.querySelector('nav');
    navbarWrapper.style.transition = 'transform 0.3s ease';

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Background change on scroll
        if (currentScrollY > 100 && nav) {
            navbarWrapper.classList.add('scrolled');
        } else {
            navbarWrapper.classList.remove('scrolled');
        }

        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbarWrapper.style.transform = 'translateY(-150%)';
        } else {
            navbarWrapper.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    }, {passive: true});
}

// =============================================
// 4. STAGGER REVEAL
// =============================================
function initSmoothReveal() {
    const staggerContainers = document.querySelectorAll('.stagger-container');
    if (staggerContainers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const children = entry.target.querySelectorAll('.stagger-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('stagger-revealed');
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.2});

    staggerContainers.forEach(el => observer.observe(el));
}

// =============================================
// 5. SCROLL PROGRESS BAR
// =============================================
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${scrollPercent}%`;
    }, {passive: true});
}

// =============================================
// 6. TILT EFFECT ON CARDS
// =============================================
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('.tilt-card');
    if (tiltElements.length === 0) return;

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / 15;
            const rotateY = (rect.width / 2 - x) / 15;
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// =============================================
// 7. MAGNETIC BUTTONS
// =============================================
function initMagneticButtons() {
    const magneticElements = document.querySelectorAll('.magnetic');
    if (magneticElements.length === 0) return;

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
}

// =============================================
// 8. COUNTER ANIMATION
// =============================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target) || 0;
                const duration = 2000;
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    entry.target.textContent = Math.floor(easeOut * target);

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        entry.target.textContent = target;
                    }
                }

                requestAnimationFrame(update);
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});

    counters.forEach(el => observer.observe(el));
}