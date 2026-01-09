// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Activar enlace actual por pathname
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if (a.getAttribute('href') === location.pathname.split('/').pop()) {
      a.classList.add('active');
    }
  });

  // Enviar formulario (demo)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();

      const errors = {
        nombre: nombre.length ? '' : 'Por favor, escribe tu nombre.',
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Escribe un correo válido.',
        mensaje: mensaje.length ? '' : 'El mensaje no puede estar vacío.'
      };

      Object.entries(errors).forEach(([key, msg]) => {
        const el = form.querySelector(`[data-error-for="${key}"]`);
        if (el) el.textContent = msg;
      });

      if (!errors.nombre && !errors.email && !errors.mensaje) {
        const status = document.getElementById('formStatus');
        status.textContent = '¡Gracias! Tu mensaje ha sido registrado (demo).';
        form.reset();
        setTimeout(() => status.textContent = '', 3000);
      }
    });
  }
});
