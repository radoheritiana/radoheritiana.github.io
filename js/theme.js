/**
 * Theme Toggler
 */

(function () {
    'use strict';

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    
    // Check for saved theme preference, otherwise use system preference
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateIcon(theme);
    };

    const updateIcon = (theme) => {
        if (!themeIcon) return;
        if (theme === 'dark') {
            themeIcon.classList.remove('ti-moon');
            themeIcon.classList.add('ti-sun');
        } else {
            themeIcon.classList.remove('ti-sun');
            themeIcon.classList.add('ti-moon');
        }
    };

    // Initialize theme
    const currentTheme = getPreferredTheme();
    setTheme(currentTheme);

    // Event listener for toggle button
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
})();
