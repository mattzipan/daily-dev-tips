---
layout: ../../layouts/Post.astro
title: 'Guardar Canvas como una imagen en JavaScript Vanilla'
metaTitle: 'Guardar Canvas como una imagen - Tutorial de JavaScript Vanilla [2022]'
metaDesc: 'Guía que explica cómo exportar nuestro dibujo en Canvas como una imagen para descargar. Prueba el Codepen para verlo tú mismo.'
image: /images/15-09-2020.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
---

Ayer, comenzamos nuestro curso introductorio de [canvas](https://daily-dev-tips.com/posts/getting-started-with-the-html-canvas/).

En este tutorial de JavaScript, aprenderemos _cómo guardar el canvas como una imagen_ y descargarla.

Entonces, ¿cómo convertimos el canvas para exportarlo como una **imagen**?

Hay dos formas de hacer esto. Y exploraremos ambas.

### Ejemplo en vivo en Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="rNevrXg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript save canvas as image ">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/rNevrXg">
  Vanilla JavaScript save canvas as image </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## 1. Canvas a Imagen con clic derecho para guardar

Todos conocen esta opción, podemos **hacer clic derecho** en el canvas para **guardarlo como una imagen**.

Esto solo funcionará en navegadores específicos. Por eso no es la forma correcta de guardar la imagen.

![Guardar canvas como imagen con clic derecho](https://cdn.hashnode.com/res/hashnode/image/upload/v1599918970840/G1-S4b4nq.png)

> Nota: ¡Tengan en cuenta que el canvas no tiene fondo!

## 2. Descargar el botón para guardar una imagen del canvas

La segunda solución es agregar un **botón de descarga** a nuestra página. El botón exportará el contenido del canvas y abrirá la imagen base64 en otra pestaña. Desde allí, puedes descargar la imagen.

Agrega el botón de descarga.

```html
<canvas id="canvas" height="200"></canvas>
<br />
<button id="download">Descargar</button>
```

Ahora agreguemos la variable del botón a nuestro código `JavaScript`:

```js
const download = document.getElementById('download');
```

Genial. Necesitamos agregar un `eventListener` y escuchar el comando de clic.

```js
download.addEventListener('click', function (e) {
  const link = document.createElement('a');
  link.download = 'download.png';
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
});
```

Creamos un enlace temporal `href` en el que colocaremos la URL de datos del canvas y luego hacemos clic en él.

Estamos usando la función `toDataURL`, que devuelve una cadena de imagen base64 que se ve algo así:

```js
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

## Compatibilidad del Navegador

El elemento canvas está bien soportado hoy en día y es definitivamente una buena opción si quieres dibujar vectores en la pantalla.

![Compatibilidad del navegador con HTML canvas](https://caniuse.bitsofco.de/static/v1/mdn-html__elements__canvas-1599916182087.png)

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
