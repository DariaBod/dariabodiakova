// ... предыдущий код (AOS, Typed, Progress, Prism)

// Modal logic
const modal = document.getElementById('demo-modal');
const btn = document.getElementById('demo-test-btn');
const close = document.querySelector('.close');
const output = document.getElementById('test-output');
const progress = document.querySelector('#test-progress .progress');

btn.onclick = () => {
    modal.style.display = 'flex';
    simulateTest();
};

close.onclick = () => {
    modal.style.display = 'none';
    output.innerHTML = 'Инициализация теста...';
    progress.style.width = '0%';
};

function simulateTest() {
    let steps = [
        'Запуск браузера...',
        'Навигация на сайт...',
        'Заполнение формы логина...',
        'Проверка assertions...',
        'Тест пройден успешно! Coverage: 95%'
    ];
    let i = 0;
    progress.style.width = '0%';
    let interval = setInterval(() => {
        if (i < steps.length) {
            output.innerHTML += '\n' + steps[i];
            progress.style.width = ((i + 1) / steps.length * 100) + '%';
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}