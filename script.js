// Инициализация AOS для анимаций на скролле (fade, zoom и т.д.)
AOS.init({
    duration: 1000,  // Длительность анимации в мс
    easing: 'ease-in-out',  // Тип easing
    once: true  // Анимировать только один раз при скролле
});

// Typing effect в hero (Typed.js)
var typed = new Typed('#typed-text', {
    strings: ['Автоматизатор Тестирования', 'QA Specialist', 'Automation Expert'],
    typeSpeed: 50,  // Скорость печати
    backSpeed: 30,  // Скорость стирания
    loop: true  // Зациклить
});

// Анимация progress bars в секции навыков (заполнение при появлении на экране)
const skillsSection = document.getElementById('skills');
const progressObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        document.querySelectorAll('.progress').forEach(bar => {
            // Получаем целевую ширину из inline-style (например, width: 90%) и анимируем
            const targetWidth = bar.style.width;
            bar.style.width = '0';  // Сброс для анимации
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);  // Небольшая задержка для плавности
        });
        progressObserver.unobserve(skillsSection);  // Отписаться после первой анимации
    }
}, { threshold: 0.5 });  // Триггер когда 50% секции видно

progressObserver.observe(skillsSection);

// Подсветка кода в проектах (Prism.js)
Prism.highlightAll();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});