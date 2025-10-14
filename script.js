// Инициализация AOS для анимаций
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// Анимация progress bars при скролле
const skillsSection = document.getElementById('skills');
const progressObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        document.querySelectorAll('.progress').forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
        progressObserver.unobserve(skillsSection);
    }
}, { threshold: 0.5 });

if (skillsSection) {
    progressObserver.observe(skillsSection);
}

// Подсветка кода
Prism.highlightAll();

// Smooth scroll для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});