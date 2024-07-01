---
layout: ../../layouts/Post.astro
title: 'CSS Grid centrar vertical y horizontal de la manera más fácil'
metaTitle: 'CSS Grid centrar vertical y horizontal [Tutorial 2022]'
metaDesc: 'Guía para enseñarte cómo centrar un elemento HTML horizontal y verticalmente usando CSS Grid'
image: /images/07-12-2020.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - css
---

Como continuación del [artículo sobre centrar con CSS Flex](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/), que he utilizado en casi todos mis artículos que incluyen una demostración, es hora de mostrarte el mismo principio.
En este tutorial, usaremos **CSS Grid para centrar horizontal y verticalmente**.

Al igual que Flexbox, es muy fácil centrar un elemento HTML usando CSS Grid.

Para centrar completamente un elemento con CSS Grid, todo el código CSS que necesitamos es:

```css
.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
```

La propiedad min-height es opcional. En este caso, es necesaria para darle al lienzo HTML una altura vertical.

El código anterior para alinear un elemento horizontal y verticalmente con CSS Grid resultará en el siguiente ejemplo de CodePen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="WNGQxxB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid most easy center vertical and horizontal">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/WNGQxxB">
  CSS Grid most easy center vertical and horizontal</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS Grid centrar horizontalmente

Si, por ejemplo, solo quieres **centrar un elemento horizontalmente** puedes usar el siguiente código de CSS Grid:

```css
.container {
  display: grid;
  justify-content: center;
  min-height: 100vh;
}
```

Podemos usar la propiedad `justify-content` y pasar el valor `center` para centrarlo horizontalmente.

> Nota: esto es lo mismo que para [`display: flex`](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/#heading-css-flexbox-horizontal-center).

Este código da como resultado el siguiente Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="GRjpqjX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid most easy center horizontal">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/GRjpqjX">
  CSS Grid most easy center horizontal</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## CSS Grid centrar verticalmente

Por otro lado, tal vez estés buscando solo **centrar un elemento verticalmente**.

En CSS Grid, puedes usar el siguiente código para lograrlo:

```css
.container {
  display: grid;
  align-items: center;
  min-height: 100vh;
}
```

Usamos `align-items` con un valor de `center` para obtener la alineación vertical del elemento.

> Nota: Esta es también la misma funcionalidad que hemos visto en [`CSS Flex`](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/#heading-css-flexbox-vertical-center)

Mira el código de ejemplo en el siguiente Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="VwKvjmQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Grid most easy center vertical">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VwKvjmQ">
  CSS Grid most easy center vertical</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

¡Ahí lo tienes! Ahora aprendimos otra manera súper fácil de centrar elementos horizontalmente, verticalmente o ambos usando `CSS Grid`.

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
