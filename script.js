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

 // este codigo es lo de rota los nombres de freelancer
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('animatedText');
    const texts = ['[youtuber]', '[bloggero]','[Programador]'];
    let index = 0;
  
    function changeText() {
      textElement.textContent = texts[index];
      index = (index + 1) % texts.length;
    }
  
    setInterval(changeText, 3000); // Cambia el texto cada 5 segundos (5000 milisegundos)
  });

