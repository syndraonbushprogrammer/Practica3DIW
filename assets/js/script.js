// Selecciona el nav y calcula su altura
const nav = document.getElementById('nav');
const navHeight = nav.offsetHeight;

// Crea el botón flotante
const scrollButton = document.createElement('div');
scrollButton.className = 'scroll-to-top';
scrollButton.innerHTML = '<span></span>';
document.body.appendChild(scrollButton);

// Agrega un evento de scroll para mostrar/ocultar el botón
window.addEventListener('scroll', () => {
    if (window.scrollY > navHeight) {
        scrollButton.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
    }
});

// Agrega funcionalidad al botón para hacer scroll hacia el nav
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});