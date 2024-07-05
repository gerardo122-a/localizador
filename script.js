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

 //linea de codigo para el cambio9 de nombre de freelancer

    document.addEventListener('DOMContentLoaded', function () {
        // Espera a que el DOM esté completamente cargado
    
        // Selecciona el elemento span dentro de #portada
        const spanElement = document.querySelector('#portada span');
    
        // Define un array de textos que quieres mostrar
        const texts = ['Freelance Designer', 'Desarrollador Web', 'Experto en UX/UI'];
    
        let index = 0;
    
        function changeText() {
            // Cambia el texto del span por el texto en la posición actual de texts
            spanElement.textContent = texts[index];
            index = (index + 1) % texts.length;
        }
    
        // Ejecuta la función changeText cada 3 segundos (3000 milisegundos)
        setInterval(changeText, 2000);
    });
