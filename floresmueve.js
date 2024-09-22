const flowersContainer = document.getElementById('flowers');
const butterfliesContainer = document.getElementById('butterflies');
const title = document.getElementById('title');

const messages = [
    "Hola mi amor, Thali",
    "lista bueno aqui comienza",
    "sé que somos conservadores de las plantas, así que en vez de lastimar una...",
    "Te he creado tu propio jardín de flores amarillas.",
    "¡Feliz día de las flores amarillas amor!"
];

let currentIndex = 0;

function changeTitle() {
    title.style.opacity = 0; // Desvanece el texto actual

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length; // Cambia al siguiente mensaje
        title.textContent = messages[currentIndex];
        title.style.opacity = 1; // Vuelve a mostrar el texto
    }, 500); // Tiempo de espera para el desvanecimiento
}

setInterval(changeTitle, 4000); // Cambia el mensaje cada 4 segundos

function createFlower(x) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = `${x}px`;
    flower.style.top = `100vh`; // Comienza desde abajo
    flower.style.animationDuration = `${Math.random() * 5 + 5}s`;
    flower.style.animationDelay = `${Math.random() * 2}s`;

    flower.addEventListener('click', () => {
        flower.style.transform = 'scale(1.2)';
        setTimeout(() => {
            flower.style.transform = 'scale(1)';
        }, 300);
    });

    flowersContainer.appendChild(flower);
}

function createButterfly(x) {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.style.left = `${x}px`;
    butterfly.style.top = `100vh`; // Comienza desde abajo
    butterfly.style.animationDuration = `${Math.random() * 5 + 5}s`;
    butterfly.style.animationDelay = `${Math.random() * 2}s`;

    butterfliesContainer.appendChild(butterfly);
}

function generateFlowers(num) {
    for (let i = 0; i < num; i++) {
        const x = Math.random() * (window.innerWidth - 40);
        createFlower(x);
    }
}

function generateButterflies(num) {
    for (let i = 0; i < num; i++) {
        const x = Math.random() * (window.innerWidth - 50);
        createButterfly(x);
    }
}

generateFlowers(15); // Generar 15 flores
generateButterflies(10); // Generar 10 mariposas