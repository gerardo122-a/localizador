document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.service-toggle');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            // Toggle 'active' class to show/hide content
            content.classList.toggle('active');
            
            // Hide other contents
            toggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    otherToggle.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
});