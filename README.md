
# Sitio de la Materia de Tecnologías — UVM

Este repositorio contiene un sitio académico independiente, multi-página, con tema claro/oscuro, animaciones CSS3 y diseño responsivo.

## Estructura

```
uvm-tecnologias-site/
  index.html
  proyectos.html
  acerca.html
  contacto.html
  blog.html
  assets/
    css/styles.css
    js/main.js
    img/
      pattern-light.svg
      pattern-dark.svg
      lince-light.svg
      lince-dark.svg
```

## Cómo usar

1. Abre `index.html` en tu navegador para previsualizar.
2. Edita el correo y WhatsApp en `footer` (todas las páginas) y en `main.js` (línea mailto) para tu contacto institucional.
3. Reemplaza las imágenes *placeholder* del lince por imágenes oficiales si lo deseas (`assets/img/`).

## Publicar gratis en GitHub Pages

1. Crea un repositorio en GitHub llamado `uvm-tecnologias-site`.
2. Sube estos archivos.
3. Ve a **Settings → Pages**, selecciona **Deploy from a branch** y elige la rama `main` y carpeta `/root`.
4. Guarda y espera a que se publique tu sitio. La URL será `https://tuusuario.github.io/uvm-tecnologias-site/`.

## Accesibilidad y rendimiento

- HTML5 semántico (`header`, `nav`, `main`, `section`, `footer`).
- Contraste alto, enfoque visible `:focus`, navegación por teclado.
- Imágenes con `alt`, `loading="lazy"`.
- `IntersectionObserver` para carga/animaciones eficientes.
- CSS y JS organizados, transiciones suaves, barra fija con animación al hacer scroll.

## Personalización rápida

- Colores en `:root` y `html[data-theme="dark"]` dentro de `assets/css/styles.css`.
- Menú: rojo obscuro (`--color-primary-dark`) y footer en grises.
- Íconos del menú son SVG inline para evitar dependencias externas.

