let currentTranslations = {};

async function loadLanguage(lang) {
    try {
        const response = await fetch(`./assets/lang/${lang}.json`);
        currentTranslations = await response.json();
        applyTranslations();
        localStorage.setItem('lang', lang);
    } catch (error) {
        console.error(`Could not load ${lang}.json`, error);
    }
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (currentTranslations[key]) {
            el.textContent = currentTranslations[key];
        }
    });
}

// Load saved language or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    loadLanguage(savedLang);
});