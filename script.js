// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show welcome alert (keeping original functionality)
    alert('Welcome To My Website Nyoba Nyoba');
    
    // Log to console (keeping original functionality)
    console.log('MASIH PEMULA PUUH SEPUHHHHHH');
    for (let i = 0; i < 25; i++) {
        console.log("MASIH PEMULA PUUH SEPUHHHHHH " + (i + 1));
    }
    
    // Get DOM elements
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const menuIcon = document.querySelector('.menu');
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        if (htmlElement.classList.contains('dark-mode')) {
            // Switch to light mode
            htmlElement.classList.remove('dark-mode');
            htmlElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            showToast('Light Mode Activated');
        } else {
            // Switch to dark mode
            htmlElement.classList.remove('light-mode');
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            showToast('Dark Mode Activated');
        }
        
        // Add transition effect
        document.body.classList.add('theme-transition');
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 500);
    });
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        htmlElement.classList.remove('dark-mode');
        htmlElement.classList.add('light-mode');
    }
    
    // Music toggle functionality
    let isPlaying = false;
    
    // Try to play music automatically (may be blocked by browser)
    backgroundMusic.volume = 0.5; // Set volume to 50%
    
    // Function to play music
    function playMusic() {
        backgroundMusic.play().then(() => {
            isPlaying = true;
            musicToggle.classList.add('playing');
        }).catch(error => {
            // Auto-play was prevented by the browser
            console.log("Autoplay prevented:", error);
            isPlaying = false;
            musicToggle.classList.remove('playing');
        });
    }
    
    // Try to autoplay (keeping original functionality)
    playMusic();
    
    // Toggle music on/off when clicking the music icon
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            isPlaying = false;
            musicToggle.classList.remove('playing');
        } else {
            playMusic();
        }
    });
    
    // Create a toast notification function
    function showToast(message, duration = 3000) {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // Add to body
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Hide and remove toast after duration
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, duration);
    }
    
    // Menu icon click event
    menuIcon.addEventListener('click', function() {
        showToast('Menu coming soon!');
    });
    
    // Add hover effects to social media icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add subtle animation to the card
    const card = document.querySelector('.card');
    
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        
        card.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) translateY(-5px)`;
    });
    
    document.addEventListener('mouseleave', function() {
        card.style.transform = 'translateY(-5px)';
    });
});