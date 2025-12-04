document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('scramble-name');
    const originalText = element.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    let iterations = 0;

    element.innerHTML = originalText
        .split('')
        .map(char => `<span class="inline-block text-center" style="width: 0.54em">${char}</span>`)
        .join('');

    const spans = element.querySelectorAll('span');

    const interval = setInterval(() => {
        spans.forEach((span, index) => {
            const char = originalText[index];
            if (index < iterations) {
                span.textContent = char;
            } else if (char === ' ') {
                span.textContent = ' ';
            } else {
                span.textContent = chars[Math.floor(Math.random() * chars.length)];
            }
        });

        iterations += 1 / 3;

        if (iterations >= originalText.length) {
            clearInterval(interval);
            element.textContent = originalText;
        }
    }, 30);
});