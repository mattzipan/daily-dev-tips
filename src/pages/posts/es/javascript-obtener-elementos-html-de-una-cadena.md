---
layout: ../../layouts/Post.astro
title: 'JavaScript obtener elementos HTML de una cadena'
metaTitle: 'JavaScript obtener elementos HTML de una cadena'
metaDesc: 'Cómo obtener elementos HTML de una cadena en JavaScript Vanilla'
image: /images/22-12-2020.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - javascript
---

Recientemente tuve una cadena con contenido de un editor WYSIWYG (Lo que ves es lo que obtienes). En ella, necesitaba encontrar todos los elementos href.

Pero este enfoque específico puede funcionar para muchas cosas.

Mi enfoque consiste en usar el `DOMParser`, uno también podría usar una expresión regular para encontrar todos los enlaces en un texto, pero necesitaba una salida `HTML` de nuevo, así que para mí, esto funcionó mejor.

## Usar JavaScript para obtener elementos HTML de una cadena

Para empezar, definamos primero nuestro `HTML`.
Usaremos una variable, que puedes considerar que proviene de nuestro `CMS`.

```js
const text = `<p>Some text</p><br /><a href="https://daily-dev-tips.com/">My website</a><hr /><a href="https://google.com">Another link</a>`;
```

Como puedes ver, tenemos dos enlaces allí. Digamos que queremos analizar cada enlace para agregar un `target="_blank"`.

Podemos aprovechar el `DOMParser` para convertir esta cadena en un elemento DOM.

```js
let parser = new DOMParser();
const doc = parser.parseFromString(text, 'text/html');
console.log(doc);
```

Este console.log devolverá el siguiente objeto.

![Resultado de DOMParser](https://cdn.hashnode.com/res/hashnode/image/upload/v1608185614501/vPK5tTm-Z.png)

Como puedes ver, esto es un documento completo.

Para obtener todos los enlaces, podemos usar consultas regulares en este doc const.

```js
links = doc.getElementsByTagName('a');
console.log(links);

// HTMLCollection(2) [a, a]
```

Genial, obtuvimos nuestros dos enlaces. Podemos iterar sobre estos dos enlaces y manipularlos. Esto se ajustará en nuestra variable doc.

```js
[...links].forEach((link) => {
  link.setAttribute('target', '_blank');
});
```

Aquí [iteramos sobre los resultados de getElementsByTagName](https://daily-dev-tips.com/posts/javascript-loop-queryselectorall-results/) y establecemos el target a una página en blanco.

Ahora, si registramos el estado actual:

```js
console.log(doc);
```

Obtenemos el siguiente resultado. Puedes ver que los enlaces ahora tienen un target blank.

![Screenshot 2020-12-17 at 08.18.41.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1608185946881/hXS424pRM.png)

## Usar la salida de un JavaScript DOMParser

Tomemos también un momento para mostrar los cambios y verlos en la acción `HTML`.

Agreguemos dos divs a nuestro `HTML`.

```html
<div id="original"></div>
<div id="output"></div>
```

Primero, tenemos nuestra variable de texto básica.

```js
const text = `<p>Some text</p><br /><a href="https://daily-dev-tips.com/">My website</a><hr /><a href="https://google.com">Another link</a>`;
```

A continuación, obtendremos los dos elementos div.

```js
const original = document.getElementById('original');
const output = document.getElementById('output');
```

Para el original, podemos agregar la salida tal como está.

```js
original.innerHTML = text;
```

Y para la salida, hacemos nuestras modificaciones como se vio anteriormente.

```js
let parser = new DOMParser();
const doc = parser.parseFromString(text, 'text/html');

links = doc.getElementsByTagName('a');
console.log(links);
[...links].forEach((link) => {
  link.setAttribute('target', '_blank');
});

output.innerHTML = doc.documentElement.innerHTML;
```

Eso es todo. Ahora tenemos dos divs, uno con enlaces que se abren en la misma pestaña y otro que se abre en una pestaña en blanco.

Pruébalo usando el siguiente Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="MWjmGYE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript get HTML elements from a string">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWjmGYE">
  JavaScript get HTML elements from a string</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
