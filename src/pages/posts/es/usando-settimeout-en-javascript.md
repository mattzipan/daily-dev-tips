---
layout: ../../layouts/Post.astro
title: 'Usando setTimeout en JavaScript'
metaTitle: 'Usando setTimeout en JavaScript'
metaDesc: 'Cómo usar la función setTimeout de JavaScript [tutorial 2022]'
image: /images/28-01-2022.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
  - programación
---

Cuando trabajas con JavaScript, llegará un momento en el que querrás esperar una cierta cantidad de tiempo para ejecutar una función.

Esto puede ser para animar algo después de un tiempo específico, por ejemplo.

Por ejemplo, en este [script para copiar texto al portapapeles](https://daily-dev-tips.com/posts/vanilla-javascript-copy-text-to-clipboard-with-clipboard-api/), usamos un timeout para cambiar el texto de vuelta a lo que era antes.

## Función JavaScript setTimeout

En su forma más básica, la función se ve así:

```js
setTimeout(() => {
  // Run after 100 milliseconds
}, 100);
```

El número `100` se refiere a los milisegundos que esperará para ejecutarse.

Como puedes ver, el ejemplo básico usa un array de funciones flecha que serán invocadas.
También puedes pasar tu función de la siguiente manera.

```js
const coolFunc = () => {
  console.log('do a trick');
};

setTimeout(coolFunc, 200);
```

Y nuevamente, esto hará lo mismo que el anterior.

Pero digamos que tu función toma parámetros. Incluso podemos hacer eso con esta configuración.

```js
const coolFunc = (name, age) => {
  console.log(`Hola ${name} ¿tienes ${age} años?`);
};

setTimeout(coolFunc, 200, 'Chris', 32);
```

Como puedes ver, las props se pasan después del parámetro de timeout.

¡Te veo pensando!
¿Qué pasará cuando configuremos el tiempo a 0?

Buena pregunta, y se ejecutará inmediatamente.

¡Pero! Esto solo se invocará después de que todas las otras funciones terminen, incluso si vienen más tarde en el script.

```js
setTimeout(() => {
  console.log('zero wait timeout');
}, 0);

console.log('first');

const otherFunction = () => {
  console.log('The other function');
};

otherFunction();
```

Esto resultará en:

- primero
- La otra función
- tiempo de espera cero

Así que como puedes ver, el setTimeout, aunque tenga cero milisegundos, solo se activará al final.

## Cancelar la función setTimeout

En ocasiones, podrías querer abortar el timeout que habías planeado.

Podemos definir el timeout como una función, lo que nos da la opción de cancelarlo.

```js
const timer = setTimeout(() => {
  console.log(`¡Voy a explotar! 💣`);
}, 2000);

clearTimeout(timer);
```

¡Uf, por suerte esta bomba no explotó! 👀

Y ahí lo tienes, cubrimos todos los conceptos básicos de la función setTimeout.

Si estás interesado en ver algunos ejemplos del mundo real, aquí hay una lista de artículos que los usan.

- [Doble clic para dar like al estilo Instagram](https://daily-dev-tips.com/posts/double-click-to-like-instagram-effect-in-javascript/)
- [Cómo está cargando tu año](https://daily-dev-tips.com/posts/how-is-your-year-loading/)
- [Redirigir una página web](https://daily-dev-tips.com/posts/redirecting-a-web-page/)

O puedes revisar este CodePen y jugar con él.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="oNGORyN" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/oNGORyN">
  Usando setTimeout en JavaScript</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
