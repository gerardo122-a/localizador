document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement.classList.contains('expanded')) {
                // Si el párrafo está expandido, contraerlo
                targetElement.classList.remove('expanded');
                button.textContent = 'Mostrar más';
            } else {
                // Si el párrafo está contraído, expandirlo
                targetElement.classList.add('expanded');
                button.textContent = 'Mostrar menos';
            }
        });
    });
});

    // Simulación de envío del formulario (reemplazar con tu lógica real)
    const formulario = document.getElementById('formulario-contacto');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar envío real para el ejemplo

        // Aquí podrías agregar la lógica para enviar el formulario por AJAX o similar
        alert('Formulario enviado correctamente!');
        formulario.reset(); // Limpiar campos después de enviar
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


 // aparicion de el cuadrado de atras a adelante



 
 document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el contenedor principal
    const containerBox = document.querySelector(".container-box");

    // Calcula la posición del contenedor en relación con la parte inferior de la ventana
    function calculateDistanceToBottom() {
        const rect = containerBox.getBoundingClientRect();
        const distanceToBottom = window.innerHeight - rect.bottom;
        return distanceToBottom;
    }

    // Función para animar el contenedor cuando se acerca al fondo
    function animateOnScroll() {
        const distanceToBottom = calculateDistanceToBottom();

        // Si el contenedor está a menos de 200px del fondo de la ventana y no ha sido animado aún
        if (distanceToBottom < 200 && !containerBox.classList.contains("visible")) {
            containerBox.classList.add("visible");
        }
    }

    // Escucha el evento de scroll para activar la animación
    window.addEventListener("scroll", animateOnScroll);
});
