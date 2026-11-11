# Wireframe · Marca sombrilla RappiPay

Wireframe navegable para mostrar al equipo cómo se organiza la información del sitio unificado www.rappipay.co. Solo incluye el menú principal y el hero de cada página. No es un sitio oficial: los textos son borradores y las cifras son variables de ejemplo.

## Qué muestra

- **Menú principal en tres niveles:** audiencia (Para ti, Para tu negocio, Para tu empresa, Tu mejor decisión) › producto o grupo de uso (RappiCuenta, Maneja tu dinero, Ayuda y seguridad…) › productos y funcionalidades. "Somos RappiPay" va en la barra superior y el footer, y "Pérdida o robo" es un botón secundario siempre visible. En desktop es un menú desplegable; en móvil, un menú por niveles.
- **Un hero distinto por nivel:** home de la sombrilla, audiencia, necesidad, producto, funcionalidad, servicio y categoría del blog. Cada hero lleva una anotación con su nivel y su URL (se oculta con "Mostrar anotaciones").
- **Reglas del documento de especificaciones:** CTA según el producto, entidad responsable visible, breadcrumbs según la URL, páginas de servicio con selector por entidad y cifras como datos del CMS (`{{variable}}`).

## Cómo verlo

Es HTML, CSS y JavaScript sin compilación. Abre `index.html` en el navegador o publícalo con GitHub Pages (Settings › Pages › Deploy from a branch › `main` / root).

## Archivos

- `data.js`: árbol de navegación y contenidos. Es lo único que hay que editar para cambiar el menú o los textos.
- `app.js`: menú, router y heroes por nivel.
- `styles.css`: estilos del wireframe.

Las URLs marcadas como "URL propuesta" no están definidas todavía en el documento de especificaciones.
