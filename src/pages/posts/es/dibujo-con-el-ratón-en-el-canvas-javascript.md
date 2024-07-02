---
layout: ../../layouts/Post.astro
title: 'Dibujo con el ratón en el canvas con JavaScript 👨‍🎨'
metaTitle: 'Dibuja en el canvas con el ratón - Tutorial de Vanilla JS [2022]'
metaDesc: 'Tutorial para aprender cómo rastrear el movimiento del ratón y luego dibujar en un canvas HTML con JavaScript. Ve el ejemplo en Codepen.'
image: /images/07-10-2020.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
  - canvas
---

Hoy quería seguir aprendiendo sobre el **elemento canvas de HTML**. Veamos cómo _dibujar en el canvas con nuestro ratón_.

¡Resulta que es bastante simple y fácil de implementar con _JavaScript_!

### Ejemplo de código en vivo en Codepen

Estaremos construyendo esta excelente aplicación de dibujo. Pruébalo y echa un vistazo al código.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="wvGbEVQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript mouse drawing on the canvas 👨‍🎨">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/wvGbEVQ">
  JavaScript mouse drawing on the canvas 👨‍🎨</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Estructura HTML

El `HTML` no podría ser más sencillo. Todo lo que necesitamos es un gran elemento canvas de HTML.

```html
<canvas id="canvas"></canvas>
```

## Estilo para la aplicación y el canvas

En cuanto a nuestro CSS para estilizar nuestro ejemplo de código, todo lo que necesitamos hacer es:

1. eliminar nuestro margen por defecto,
2. crear un genial [cursor de emoji](https://daily-dev-tips.com/posts/css-exploring-all-cursor-options/), y
3. establecer el ancho y alto del canvas para que sean del mismo tamaño que el [viewport](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/).

```css
* {
  margin: 0;
  padding: 0;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✍️</text></svg>")
      16 0, auto;
}
canvas {
  width: 100vw;
  height: 100vh;
}
```

## Dibujo en canvas con el ratón usando JavaScript

La parte divertida es el código de `JavaScript` para rastrear los movimientos del ratón para **dibujar en el canvas**.

Empecemos por definir nuestras variables de JS:

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let coord = { x: 0, y: 0 };
```

Necesitamos obtener el elemento canvas y recuperarlo basándonos en su ID.
Luego obtenemos el contexto del canvas (es donde dibujamos).

A continuación, definimos nuestras coordenadas base.

Vamos a adjuntar listeners de eventos para:

- mousedown (comenzar a registrar nuestro dibujo)
- mouseup (detener el dibujo)
- resize (redimensionar el canvas)

```js
document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);
window.addEventListener('resize', resize);
```

Comencemos con la función de redimensionar. Esta función de JS redimensionará el canvas según nuestro viewport del navegador. Hará que el tamaño del canvas sea del 100% o cambiará el ancho y alto del canvas.

También llamamos a esta función de inmediato.

```js
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

resize();
```

Definamos nuestra función de mousedown (comenzar).

```js
function start(event) {
  document.addEventListener('mousemove', draw);
  reposition(event);
}
```

Esta función invocará el listener para mousemove, así no tenemos que seguir escuchándolo.
Luego llamamos a nuestra función de reposicionamiento, que registrará la posición de nuestro ratón.

La función de reposicionamiento se verá así:

```js
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
```

Pasemos a la función de detener:

```js
function stop() {
  document.removeEventListener('mousemove', draw);
}
```

Solo necesitamos dejar de escuchar nuestra función de registrar mousemove.

La última función que haremos es la función de dibujar. La función **draw** _pintará líneas_ en el canvas.

```js
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#ACD3ED';
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}
```

Permíteme explicar el fragmento de código en orden:

- Comenzamos un nuevo camino.
- Establecemos el ancho de la línea a 5 píxeles.
- Cambiamos los extremos de la línea a redondeados.
- Establecemos el color a azul.
- Cambiamos nuestra posición a la posición inicial y movemos el punto del canvas a la posición movida.
- Luego, dibujamos una línea entre estos dos puntos.
- Por último, llamamos a stroke para colorearlo.

Eso es todo. Este código puede dibujar líneas en un canvas HTML con nuestro ratón.

Si quieres leer más sobre el elemento canvas, consulta estos artículos:

- [Comenzando con el canvas HTML](https://daily-dev-tips.com/posts/getting-started-with-the-html-canvas/)
- [Vanilla JavaScript guardar canvas como imagen](https://daily-dev-tips.com/posts/vanilla-javascript-save-canvas-as-an-image/)
- [Vanilla JavaScript coloreando nuestros elementos canvas 🌈](https://daily-dev-tips.com/posts/vanilla-javascript-colouring-our-canvas-elements/)
- [Vanilla JavaScript imágenes en canvas](https://daily-dev-tips.com/posts/vanilla-javascript-images-in-canvas/)
- [Vanilla JavaScript imágenes de canvas en blanco y negro](https://daily-dev-tips.com/posts/vanilla-javascript-canvas-images-to-black-and-white/)
- [Checkboxifica tus imágenes con JavaScript ✅](https://daily-dev-tips.com/posts/checkboxify-your-images-with-javascript/)

### ¡Gracias por leer y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)

Hoy quería seguir aprendiendo sobre el **elemento canvas de HTML**. Veamos cómo _dibujar en el canvas con nuestro ratón_.

¡Resulta que es bastante simple y fácil de implementar con _JavaScript_!

### Ejemplo de código en vivo en Codepen

Estaremos construyendo esta excelente aplicación de dibujo. Pruébalo y echa un vistazo al código.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="wvGbEVQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript mouse drawing on the canvas 👨‍🎨">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/wvGbEVQ">
  JavaScript mouse drawing on the canvas 👨‍🎨</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Estructura HTML

El `HTML` no podría ser más sencillo. Todo lo que necesitamos es un gran elemento canvas de HTML.

```html
<canvas id="canvas"></canvas>
```

## Estilo para la aplicación y el canvas

En cuanto a nuestro CSS para estilizar nuestro ejemplo de código, todo lo que necesitamos hacer es:

1. eliminar nuestro margen por defecto,
2. crear un genial [cursor de emoji](https://daily-dev-tips.com/posts/css-exploring-all-cursor-options/), y
3. establecer el ancho y alto del canvas para que sean del mismo tamaño que el [viewport](https://daily-dev-tips.com/posts/how-to-work-with-css-viewport-units/).

```css
* {
  margin: 0;
  padding: 0;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✍️</text></svg>")
      16 0, auto;
}
canvas {
  width: 100vw;
  height: 100vh;
}
```

## Dibujo en canvas con el ratón usando JavaScript

La parte divertida es el código de `JavaScript` para rastrear los movimientos del ratón para **dibujar en el canvas**.

Empecemos por definir nuestras variables de JS:

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let coord = { x: 0, y: 0 };
```

Necesitamos obtener el elemento canvas y recuperarlo basándonos en su ID.
Luego obtenemos el contexto del canvas (es donde dibujamos).

A continuación, definimos nuestras coordenadas base.

Vamos a adjuntar listeners de eventos para:

- mousedown (comenzar a registrar nuestro dibujo)
- mouseup (detener el dibujo)
- resize (redimensionar el canvas)

```js
document.addEventListener('mousedown', start);
document.addEventListener('mouseup', stop);
window.addEventListener('resize', resize);
```

Comencemos con la función de redimensionar. Esta función de JS redimensionará el canvas según nuestro viewport del navegador. Hará que el tamaño del canvas sea del 100% o cambiará el ancho y alto del canvas.

También llamamos a esta función de inmediato.

```js
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

resize();
```

Definamos nuestra función de mousedown (comenzar).

```js
function start(event) {
  document.addEventListener('mousemove', draw);
  reposition(event);
}
```

Esta función invocará el listener para mousemove, así no tenemos que seguir escuchándolo.
Luego llamamos a nuestra función de reposicionamiento, que registrará la posición de nuestro ratón.

La función de reposicionamiento se verá así:

```js
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
```

Pasemos a la función de detener:

```js
function stop() {
  document.removeEventListener('mousemove', draw);
}
```

Solo necesitamos dejar de escuchar nuestra función de registrar mousemove.

La última función que haremos es la función de dibujar. La función **draw** _pintará líneas_ en el canvas.

```js
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#ACD3ED';
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}
```

Permíteme explicar el fragmento de código en orden:

- Comenzamos un nuevo camino.
- Establecemos el ancho de la línea a 5 píxeles.
- Cambiamos los extremos de la línea a redondeados.
- Establecemos el color a azul.
- Cambiamos nuestra posición a la posición inicial y movemos el punto del canvas a la posición movida.
- Luego, dibujamos una línea entre estos dos puntos.
- Por último, llamamos a stroke para colorearlo.

Eso es todo. Este código puede dibujar líneas en un canvas HTML con nuestro ratón.

Si quieres leer más sobre el elemento canvas, consulta estos artículos:

- [Comenzando con el canvas HTML](https://daily-dev-tips.com/posts/getting-started-with-the-html-canvas/)
- [Vanilla JavaScript guardar canvas como imagen](https://daily-dev-tips.com/posts/vanilla-javascript-save-canvas-as-an-image/)
- [Vanilla JavaScript coloreando nuestros elementos canvas 🌈](https://daily-dev-tips.com/posts/vanilla-javascript-colouring-our-canvas-elements/)
- [Vanilla JavaScript imágenes en canvas](https://daily-dev-tips.com/posts/vanilla-javascript-images-in-canvas/)
- [Vanilla JavaScript imágenes de canvas en blanco y negro](https://daily-dev-tips.com/posts/vanilla-javascript-canvas-images-to-black-and-white/)
- [Checkboxifica tus imágenes con JavaScript ✅](https://daily-dev-tips.com/posts/checkboxify-your-images-with-javascript/)

### ¡Gracias por leer y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
