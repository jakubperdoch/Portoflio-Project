const getThemePreference = () => {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const setTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
};

document.addEventListener('DOMContentLoaded', () => {
    const theme = getThemePreference();
    setTheme(theme);

    updateToggleIcon(theme);
});

const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    updateToggleIcon(newTheme);
};

const updateToggleIcon = (theme) => {
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    if (sunIcon && moonIcon) {
        if (theme === 'dark') {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
        updateToggleIcon(e.matches ? 'dark' : 'light');
    }
});
