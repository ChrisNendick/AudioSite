// Function to toggle dark mode
document.getElementById('mode-toggle')?.addEventListener('click', function() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Check if dark mode is enabled
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Change the button icon based on dark mode state
    const modeToggleImg = this;
    modeToggleImg.src = isDarkMode ? 'sun.png' : 'moon.png'; // Change icon to moon for dark mode, sun for light mode

    // Change the top image based on dark mode state
    const topImage = document.getElementById('top-image');
    topImage.src = isDarkMode ? 'iconicondark6.png' : 'iconicon.png'; // Change the top image

    // Save the user's dark mode preference in localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
});

// Check if dark mode is enabled when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'; // Get saved preference

    // If dark mode is active, apply it
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        // Set moon icon for dark mode
        document.getElementById('mode-toggle').src = 'sun.png';
        // Set the dark mode top image
        document.getElementById('top-image').src = 'iconicondark6.png';
    } else {
        // Set sun icon for light mode
        document.getElementById('mode-toggle').src = 'moon.png';
        // Set the light mode top image
        document.getElementById('top-image').src = 'iconicon.png';
    }
});
