window.sr = ScrollReveal();
let distancia = 2000; // Tiempo entre animaciones
let distanciaCorta = 1500; // Menor tiempo entre animaciones más cercanas
let time = 500; // Tiempo inicial para el primer delay

// Animación 1
sr.reveal('.animacion-1', {
    delay: time,
    duration: 5000, // Duración extendida para hacerlo más lento
    origin: 'left',
    distance: '-1000px' // Distancia del movimiento
});
time += distancia; // Incremento del tiempo para la siguiente animación

// Animación 2
sr.reveal('.animacion-2', {
    delay: time,
    duration: 5000, // Ajuste de duración
    origin: 'right',
    distance: '-700px' // Distancia ajustada
});
time += distancia; 

// Animación 3
sr.reveal('.animacion-3', {
    delay: time,
    duration: 3000, // Ajuste de duración para hacerlo más lento
    origin: 'top',
    distance: '-200px'
});
time += distancia;

// Animación 4
sr.reveal('.animacion-4', {
    delay: time,
    duration: 3000,
    origin: 'top',
    distance: '-200px'
});
time += distancia;

// Animación 5
sr.reveal('.animacion-5', {
    delay: time,
    duration: 3000,
    origin: 'bottom',
    distance: '-50px'
});
time += distanciaCorta;

// Animación 6
sr.reveal('.animacion-6', {
    delay: time,
    duration: 3000,
    origin: 'bottom',
    distance: '-50px'
});
time += distanciaCorta;

// Animación 7
sr.reveal('.animacion-7', {
    delay: time,
    duration: 3000,
    origin: 'bottom',
    distance: '-50px'
});
time += distanciaCorta;

// Animación 8
sr.reveal('.animacion-8', {
    delay: time,
    duration: 3000,
    origin: 'bottom',
    distance: '-50px'
});
