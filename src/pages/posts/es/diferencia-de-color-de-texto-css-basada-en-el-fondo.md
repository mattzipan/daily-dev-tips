---
layout: ../../layouts/Post.astro
title: 'Diferencia de color de texto CSS basada en el fondo'
metaTitle: 'Diferencia de color de texto CSS basada en el fondo'
metaDesc: 'Cómo usar CSS mix-blend-mode para crear diferencia de color basada en el fondo'
image: /images/31-03-2020.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - css
---

El `CSS` tradicional es bastante limitado; solo nos permite establecer un color para el texto. Pero al ver que creamos más y más elementos flotantes y fijos, podríamos querer tener un `text-color` dinámico.

## Cómo crear un color de texto basado en la diferencia en CSS

Empecemos marcando el HTML:

```html
<div class="text-container">
  <h1>Diferencia</h1>
</div>
<section></section>
<section></section>
```

Luego queremos incluir dos fondos aleatorios para las secciones. Hagámoslo.

```css
section {
  width: 100vw;
  height: 100vh;
  background: #000;
  &:nth-child(odd) {
    background: #fff;
  }
}
```

¡Y asegúrate de que el div de texto esté flotando sobre todo!

```css
.text-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  mix-blend-mode: difference;
  h1 {
    font-size: 150px;
  }
}
```

Incluimos `mix-blend-mode: difference;` esto hace que el color se mezcle según el fondo.

¡Genial, verdad?! 🤩

> ¡Esto también funciona en fondos de imágenes/videos y lo que sea!

Mira una demo aquí:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="rebelchris" data-slug-hash="dyoaWRa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Text color difference based on background">
  <span>Ve el Pen <a href="https://codepen.io/rebelchris/pen/dyoaWRa">
  CSS Text color difference based on background</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Soporte de navegador

¡Desafortunadamente no es compatible con IE, pero aún tiene un buen soporte general!
Utilizo esta opción mucho para hacer esa pequeña diferencia.

![Soporte de navegador para CSS Mix-blend-mode](https://caniuse.bitsofco.de/image/css-mixblendmode.png)

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
