// Init AOS
AOS.init({ duration: 1000 });

// Typing effect
var typed = new Typed('#typed-text', {
    strings: ['Автоматизатор Тестирования', 'QA Specialist', 'Automation Expert'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Progress bars animation on view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        document.querySelectorAll('.progress').forEach(bar => {
            bar.style.width = bar.getAttribute('style').split('width: ')[1]; // Fill to predefined %
        });
    }
});
observer.observe(skillsSection);

// Demo test button - simulated animation
document.getElementById('demo-test-btn').addEventListener('click', () => {
    alert('Запуск демо-теста: Проверка логина... Успех! (Это симуляция JS для демонстрации навыков автоматизации)');
});

// Prism highlight
Prism.highlightAll();