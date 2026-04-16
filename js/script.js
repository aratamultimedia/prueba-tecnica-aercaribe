// boton barra de navegación
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navegacion = document.querySelector('nav');

    if (menuToggle && navegacion) {
        menuToggle.addEventListener('click', () => {
            navegacion.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }
});

//validacion del formulario

const form = document.querySelector('.quote-form');
const mensaje = document.getElementById('mensajeForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const servicio = document.getElementById('servicio').value;
    const mensajeTexto = document.getElementById('mensaje').value.trim();


    if (!nombre || !email || !servicio || !mensajeTexto) {
        mensaje.style.display = 'block';
        mensaje.className = 'mensaje-form error';
        mensaje.textContent = 'Por favor completa todos los campos obligatorios.';
        return;
    }


    mensaje.style.display = 'block';
    mensaje.className = 'mensaje-form exito';
    mensaje.textContent = '¡Solicitud enviada con éxito!';

    form.reset(); 
});
