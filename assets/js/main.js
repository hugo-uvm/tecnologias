
/* UVM Tecnologías — main.js */
(function () {
  const html = document.documentElement;
  const nav = document.querySelector('.nav');
  const menu = document.getElementById('menu');
  const toggle = document.querySelector('.nav__toggle');
  const themeBtn = document.getElementById('theme-toggle');
  const backToTop = document.getElementById('back-to-top');
  const yearEl = document.getElementById('year');

  // Persist theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) html.setAttribute('data-theme', savedTheme);

  function setTheme(next) {
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  themeBtn && themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme') || 'light';
    setTheme(current === 'light' ? 'dark' : 'light');
  });

  // Mobile menu toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open');
    });
  }

  // Close menu on link click (mobile)
  menu && menu.addEventListener('click', (e) => {
    if (e.target.closest('.nav__link')) {
      menu.classList.remove('open');
      toggle && toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Nav animation on scroll
  const onScroll = () => {
    const s = window.scrollY || document.documentElement.scrollTop;
    if (s > 10) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
    // Back to top visibility
    if (backToTop) backToTop.classList.toggle('show', s > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Back to top behavior
  backToTop && backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Reveal on scroll via IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));

  // Footer dynamic year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form basic validation
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    if (nombre.length < 2) { status.textContent = 'Por favor, ingresa tu nombre.'; return; }
    if (!isValidEmail(email)) { status.textContent = 'Ingresa un email válido.'; return; }
    if (mensaje.length < 10) { status.textContent = 'El mensaje debe tener al menos 10 caracteres.'; return; }
    status.textContent = '¡Gracias! Tu mensaje fue validado en el navegador.';
    // Opcional: enviar por mailto
    const mailto = 'mailto:hugo_contrerasr@my.uvm.edu.mx' + '?subject=' + encodeURIComponent('Contacto desde sitio UVM-TI') + '&body=' + encodeURIComponent(`Nombre: ${nombre}
Email: ${email}

${mensaje}`);
    window.location.href = mailto;
  });
})();
