---
layout: ../../layouts/Post.astro
title: 'Pegar texto desde el portapapeles en JavaScript'
metaTitle: 'Pegar texto desde el portapapeles en JavaScript'
metaDesc: 'Cómo pegar texto desde el portapapeles en JavaScript puro'
image: /images/30-01-2022.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - javascript
---

He escrito varios artículos sobre cómo copiar texto al portapapeles en JavaScript con la [Clipboard API](https://daily-dev-tips.com/posts/vanilla-javascript-copy-text-to-clipboard-with-clipboard-api/), o [execCommand](https://daily-dev-tips.com/posts/vanilla-javascript-copy-text-to-clipboard-with-document-execcommand/).

Pero nunca hemos visto cómo podríamos pegar información desde el portapapeles con el clic de un botón.

Alguien recientemente me preguntó cómo hacer esto en Twitter, así que aquí tienes, un artículo dedicado a pegar texto desde tu portapapeles.

## Pegar texto desde el portapapeles en JavaScript

El principal problema con esta función es que necesitamos el permiso del navegador para leer estos datos.

Así que en el primer intento, el usuario verá un popup como este.

![Permisos para leer el portapapeles](https://cdn.hashnode.com/res/hashnode/image/upload/v1642745993999/As4LqH_4S.png)

Vamos a tomar nuestro demo existente del portapapeles y hacer que el campo de pegado sea interactivo.

En nuestro demo, deberías poder hacer clic en el área de texto superior, lo que copiará el texto al portapapeles.

Una vez que el usuario haga clic en el campo inferior, debería pegarlo automáticamente.

Primero necesitaremos asignar este campo a una variable y adjuntar un manejador de clics.

```js
const paste = document.getElementById('paste');
paste.addEventListener('click', () => {
  // Do our action
});
```

Nuestra acción de pegado real es súper simple y se ve así:

```js
navigator.clipboard.readText().then((clipText) => (paste.innerText = clipText));
```

Usamos la Clipboard API e invocamos la función `readText`. Esto nos dará el valor actual que podemos establecer en nuestro campo de pegado.

Puedes probar esto en el siguiente CodePen.

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="XWeLzMG" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/XWeLzMG">
  Pegar texto desde el portapapeles en JavaScript</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Soporte del navegador para la Clipboard API

El soporte para la Clipboard API ha mejorado enormemente en los últimos meses, y todas las versiones más recientes parecen soportarla completamente.

<picture>
<source type="image/webp" srcset="https://caniuse.bitsofco.de/static/v1/mdn-api__Clipboard-1642746361576.webp" />
<source type="image/png" srcset="https://caniuse.bitsofco.de/static/v1/mdn-api__Clipboard-1642746361576.png" />
<img src="https://caniuse.bitsofco.de/static/v1/mdn-api__Clipboard-1642746361576.jpg" alt="Datos sobre el soporte para la función mdn-api__Clipboard en los principales navegadores según caniuse.com" />
</picture>

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
