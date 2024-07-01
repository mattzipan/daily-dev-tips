---
layout: ../../layouts/Post.astro
title: 'Animar una ruta SVG con CSS'
metaTitle: 'Animar una ruta SVG con CSS'
metaDesc: 'Cómo animar una ruta SVG con CSS'
ogImage: /images/09-12-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/1264d601-88b9-4fb9-2250-3551c4adab00
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - css
---

Hace un tiempo, encontré este efecto súper genial que animaba una ruta SVG como si se dibujara en el lienzo.

Resulta que es bastante fácil crear esto con CSS, así que veamos cómo se hace.

## Animando una ruta SVG con CSS

La primera parte fue crear una línea SVG, y usé Sketch para dibujar un elemento con forma de triángulo.
Puedes dibujar lo que quieras o incluso usar [herramientas gratuitas en línea](https://editor.method.ac/).

Una vez que tu forma esté completa, agrégala a tu HTML. Como referencia, aquí está la mía.

```html
<?xml version="1.0" encoding="UTF-8"?>
<svg
  width="291px"
  height="260px"
  viewBox="0 0 291 260"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <title>Path</title>
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <path
      d="M273.097656,120.507813 C201.899566,163.577543 130.777516,213.94793 50.8398438,240.160156 C36.9248074,244.723012 17.4914196,262.184399 8.2265625,250.84375 C-1.53762975,238.89189 20.198756,222.272258 24.0078125,207.316406 C27.3670238,194.126823 28.5689142,180.441602 29.6132812,166.871094 C30.9603726,149.366986 31.1766739,131.782428 31.171875,114.226563 C31.1623478,79.3735161 8.15793288,37.1795952 29.5703125,9.6796875 C43.1473611,-7.75730878 67.7544299,32.013528 87.5742187,41.7890625 C105.639606,50.6992894 124.365537,58.2317755 143.085938,65.6679688 C150.003672,68.4158594 157.202901,70.4330349 164.40625,72.3085938 C177.173796,75.6329203 190.335014,77.4306133 202.960938,81.2578125 C220.824973,86.6728004 237.747783,94.999359 255.734375,99.9921875 C266.927708,103.099302 278.679688,103.638021 290.152344,105.460938"
      id="Path"
      stroke="#979797"
      stroke-width="10"
    ></path>
  </g>
</svg>
```

Ahora podemos pasar a animarlo, y como solo estoy usando un SVG, agregué el código al elemento SVG principal.

Lo primero que queremos hacer es establecer el array de guiones del trazo (stroke dash array) y su desplazamiento.

```css
svg {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  pointer-events: none;
}
```

El array de guiones se refiere al ancho del guion y el desplazamiento al punto de inicio. 1000 es más grande que nuestra línea actual, por lo que se dividirá en 1000 piezas.

Luego queremos agregar una animación que elimine el desplazamiento con el tiempo.

```css
svg {
  animation: animateDash 2s linear forwards infinite;
}
```

Luego podemos crear la animación para eliminar el desplazamiento, como se mencionó.

```css
@keyframes animateDash {
  to {
    stroke-dashoffset: 0;
  }
}
```

Y eso es todo. Nuestra animación ahora se ejecutará para mostrar el dibujo de la línea.

Incluso puedes jugar con esto y cambiar los tamaños del array y del desplazamiento, lo que impactará en cómo se ejecuta tu animación, y puedes hacer que parezca una animación de borde guionado.

Como referencia, puedes ver el resultado en este CodePen.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="KKexgBM" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/KKexgBM">
  Untitled</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
