document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on page load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        toggle.textContent = currentTheme === 'dark-mode' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    toggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Update the button text and save the preference
        if (body.classList.contains('dark-mode')) {
            toggle.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark-mode');
        } else {
            toggle.textContent = 'Switch to Dark Mode';
            localStorage.removeItem('theme');
        }
    });
});
