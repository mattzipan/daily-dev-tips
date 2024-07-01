---
layout: ../../layouts/Post.astro
title: 'Elemento Vanilla JavaScript.scrollIntoView'
metaTitle: 'JS scrollIntoView con desplazamiento y encabezado fijo [Tutorial 2022]'
metaDesc: 'Aprende a implementar el desplazamiento suave a una sección sin que quede oculta bajo un encabezado fijo. Vea el código de ejemplo en Codepen.'
image: /images/28-04-2020.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - javascript
---

Estoy seguro de que has visto esto: haces clic en un botón y te desplazas suavemente a esa sección.

Hoy vamos a implementar un desplazamiento suave a la vista en `Vanilla JavaScript` usando la función `Element.scrollIntoView()`.

## Estructura HTML

Vamos a configurar una pequeña demostración para mostrar esto. El código de demostración tendrá un encabezado fijo con algunos botones y cuatro secciones a las que podemos desplazarnos.

```html
<header>
  <nav>
    <a href="#" data-target="section-1" class="btn-scroll-into">Sección 1</a>
    <a href="#" data-target="section-2" class="btn-scroll-into">Sección 2</a>
    <a href="#" data-target="section-3" class="btn-scroll-into">Sección 3</a>
    <a href="#" data-target="section-4" class="btn-scroll-into">Sección 4</a>
  </nav>
</header>
<section id="section-1">Sección 1</section>
<section id="section-2">Sección 2</section>
<section id="section-3">Sección 3</section>
<section id="section-4">Sección 4</section>
```

Como puedes ver, nada complicado. Nota que añadimos `data-target` `attributes` a nuestros elementos de navegación del encabezado y una clase de `btn-scroll-into`.
Lee más sobre [data-attributes](https://daily-dev-tips.com/posts/vanilla-javascript-data-attributes/).

## CSS para nuestra demostración de scrollIntoView

```css
body {
  padding-top: 50px;
}
header {
  position: fixed;
  height: 50px;
  background: #345995;
  width: 100%;
  top: 0;
}
header nav {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
header nav a {
  padding: 5px 10px;
  background: #03cea4;
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
}
section {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 32px;
  background: #ca1551;
}
section:nth-child(odd) {
  background: #fb4d3d;
}
```

Realmente nada especial aquí. Desplazamos nuestro cuerpo 50 píxeles ya que usamos un encabezado fijo que siempre estará en la parte superior de nuestra pantalla.
Y añadimos algunas secciones al 100% utilizando [unidades de viewport](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/) y [centrado con flex box](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/).

## JavaScript scrollIntoView

```js
document.addEventListener('click', function (event) {
  if (!event.target.matches('.btn-scroll-into')) return;

  event.preventDefault();

  const element = document.getElementById(event.target.dataset.target);

  element.scrollIntoView();
});
```

¡Sí, eso es todo! Añadimos un `event listener`, que se activará cada vez que hagamos clic; luego verificamos si el elemento en el que hacemos clic tiene la clase `btn-scroll-into`.
Luego definimos una variable de elemento usando `getElementById` y pasando el [`atributo dataset`](https://daily-dev-tips.com/posts/vanilla-javascript-data-attributes/) llamado target.

Luego, lo único que hacemos es decir `element.scrollIntoView();` esto pondrá el elemento que seleccionamos en la parte superior de nuestra página.

### Puedes ver el ejemplo en acción en este Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="ExVWJxg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Element.scrollIntoView">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExVWJxg">
  Vanilla JavaScript Element.scrollIntoView</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Opciones de ScrollIntoView

Esto ahora es un cambio fijo, pero permite opciones que son las siguientes:

- behavior: `auto` o `smooth`
- block: `start`, `center`, `end` o `nearest` (predeterminado: `start`)
- inline: `start`, `center`, `end` o `nearest` (predeterminado: `nearest`)

Así que hagámoslo desplazarse suavemente:

```js
element.scrollIntoView({ behavior: 'smooth' });
```

### Ve este ejemplo de desplazamiento suave en Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="KKdWYzP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Element.scrollIntoView Smooth">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKdWYzP">
  Vanilla JavaScript Element.scrollIntoView Smooth</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
