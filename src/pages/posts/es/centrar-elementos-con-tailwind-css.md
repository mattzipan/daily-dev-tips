---
layout: ../../layouts/Post.astro
title: 'Cómo centrar un elemento Div con Tailwind CSS'
metaTitle: 'Tailwind CSS: Centrar Div vertical y horizontalmente [2024]'
metaDesc: 'Aprende a centrar un div en el medio de la pantalla vertical y horizontalmente. Consulta ejemplos de CSS Flexbox o CSS Grid para la alineación con Tailwind en la demostración de Codepen.'
ogImage: /images/25-06-2021.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/7debb9c6-2996-44d6-fe31-25ccc58c1200
date: 2024-06-30T03:00:00.000Z
modifiedDate: 2024-06-30T03:00:00.000Z
top: true
tags:
  - css
  - tailwind
---

Hoy en día, elijo **Tailwind CSS** como mi marco de trabajo CSS preferido.
Y hoy, te mostraré **cómo centrar elementos div** con Tailwind CSS rápidamente.

Aprenderemos **cómo centrar un div en el medio de la pantalla** usando dos métodos:
1. centrar un elemento div con Tailwind usando **Flexbox CSS**
2. usar **CSS Grid** para centrar un elemento

No hay una elección claramente correcta o incorrecta entre estos dos métodos. Generalmente, CSS Grid debería usarse para el diseño de alto nivel y Flexbox CSS para elementos HTML de nivel inferior, como detalles.

En la [**demostración de Codepen**](./#demo-tailwind-grid-center) a continuación, usaremos la misma estructura CSS, para que puedas ver la diferencia entre el [**centro de la cuadrícula de Tailwind**](./#demo-tailwind-grid-center) y el [**centro de Flexbox de Tailwind**](./#example-tailwind-flex-center).

## 1. Tailwind centrar div con CSS Grid

Comenzaremos utilizando _grid center_ para hacer que un elemento div esté horizontal y verticalmente centrado en una página.

```html
<div class="grid h-screen place-items-center">Centrado usando Tailwind Grid</div>
```

¿Puedes creer que estas clases de Tailwind son todo lo que necesitamos para centrar vertical y horizontalmente?

Vamos a explorar las **clases**.

- `grid`: Le da al elemento una propiedad css **display: grid**
- `place-items-center`: Le da el valor **center** en la propiedad **place-items**, centrando
- `h-screen`: Establece la altura al 100vh (altura de la pantalla)

### Demostración de centrar con Tailwind Grid
Este código CSS centrará perfectamente el elemento div horizontal y verticalmente en la página:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="xxqeQRJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Grid center using Tailwind CSS">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/xxqeQRJ">
  Contenido centrado con Tailwind CSS Grid</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

> ¿Buscas una versión [centrada con CSS Grid](https://daily-dev-tips.com/posts/css-grid-most-easy-center-vertical-and-horizontal/)?

## 2. Tailwind centrar div con CSS Flexbox

Una segunda opción para centrar en Tailwind es usar CSS Flexbox para el elemento HTML.
El método es bastante similar, pero tenemos que especificar la alineación horizontal y vertical con Flexbox.

Veamos cómo se ve centrar con Flexbox:

```html
<div class="flex items-center justify-center h-screen">
  Centrado usando Tailwind Flex
</div>
```
Como puedes ver, la alineación del div se ve similar al primer ejemplo, pero con una variable adicional.

- `flex`: Añade la propiedad CSS display: flex
- `justify-center`: Esto centra el div horizontalmente
- `items-center`: Esto centra el contenido verticalmente
- `h-screen`: Establece la altura al 100vh (altura de la pantalla)

El código CSS final se verá como el siguiente:

### Ejemplo de centrar con Tailwind Flex

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="WNpWYpG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flex center using Tailwind CSS">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/WNpWYpG">
  Centrado con Flex usando Tailwind CSS</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

> ¿Buscas el [artículo sobre centrar con CSS Flex](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/)?

### ¡Gracias por leer el tutorial, conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
