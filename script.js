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



// se hace el carrusel de imagenes marca gerardo sac xd

document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
  
    // Configuración de variables
    let counter = 1;
    const slideWidth = images[0].clientWidth; // Ancho de una imagen (todas deben tener el mismo ancho)
  
    // Inicia la transición del carrusel
    setInterval(() => {
      carouselSlide.style.transition = "transform 0.5s ease-in-out";
      carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  
      // Incrementa el contador para pasar a la siguiente imagen
      counter++;
  
      // Reinicia el carrusel al final de las imágenes
      if (counter === images.length) {
        setTimeout(() => {
          carouselSlide.style.transition = "none";
          carouselSlide.style.transform = `translateX(0)`;
          counter = 1;
        }, 1500); // Tiempo de espera antes de reiniciar el carrusel
      }
    }, 3000); // Intervalo de cambio de imagen (3000ms = 3 segundos)
  });


// Función para manejar el desplazamiento suave al hacer clic en los enlaces del menú
 // Obtén todos los enlaces del menú
var menuLinks = document.querySelectorAll('#menu ul a');

// Itera sobre cada enlace para agregar un evento de clic
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Desmarca el checkbox para cerrar el menú
        document.getElementById('check').checked = false;
    });
});



// funcion de buscar para el terminal de buses pagina desembarque


function buscarEmpresa() {
  const nombre = document.getElementById("busqueda").value.trim().toUpperCase();

  fetch('csvjson.json')
    .then(response => response.json())
    .then(data => {
      // Buscar todas las coincidencias
      const coincidencias = data.filter(item => item.Empresa.toUpperCase() === nombre);

      const contenedor = document.getElementById('resultado');
      contenedor.innerHTML = ''; // Limpiar contenido anterior

      if (coincidencias.length > 0) {
        // Crear tabla con todas las coincidencias
        let tablaHTML = `
          <table border="1" cellpadding="5">
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Origen</th>
                <th>Placa</th>
                <th>Fecha</th>
                <th>Entrada</th>
                <th>Salida</th>
              </tr>
            </thead>
            <tbody>
        `;

        coincidencias.forEach(item => {
          tablaHTML += `
            <tr>
              <td>${item.Empresa}</td>
              <td>${item.Origen}</td>
              <td>${item.Placa}</td>
              <td>${item.Fecha}</td>
              <td>${item.Entrada}</td>
              <td>${item.Salida}</td>
            </tr>
          `;
        });

        tablaHTML += `</tbody></table>`;
        contenedor.innerHTML = tablaHTML;
      } else {
        contenedor.innerHTML = '<p style="color: red;">Empresa no encontrada.</p>';
      }
    })
    .catch(error => {
      console.error('Error al cargar el JSON:', error);
    });
}



