---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS divs cuadrados responsivos'
metaTitle: 'Tailwind CSS divs cuadrados responsivos'
metaDesc: 'Creación de divs cuadrados responsivos en Tailwind CSS'
image: /images/15-09-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - css
  - tailwind
---

Es posible que te hayas encontrado con una situación en la que necesitabas un div cuadrado completamente responsivo.

En mi caso, estaba trabajando en un diseño de portafolio responsivo, y pronto me di cuenta de que es bastante difícil obtener un cuadrado responsivo basado en el ancho.

Sin embargo, encontré la solución perfecta y te mostraré cómo lograrlo en CSS e incluso en Tailwind.

Echemos un vistazo al resultado:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/square_vph4ps.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/square_sqnvh2.mp4" type="video/mp4" />
</video>

## CSS Div cuadrado responsivo

Primero veamos cómo lograríamos este efecto en CSS puro antes de pasar a Tailwind.

El concepto general es bastante simple. Queremos crear un div basado en el ancho porcentual y usar el mismo porcentaje para nuestro padding-bottom.

Veámoslo en acción:

```html
<div class="square"></div>
```

Y luego para el CSS:

```css
.square {
  width: 50%;
  padding-bottom: 50%;
  background-color: teal;
}
```

Y esto resultará en un div que es el 50% del padre.
La altura reflejará esto también.

Puedes probar esto en CodePen para verlo en acción. (Intenta redimensionar tu pantalla)

<p class="codepen" data-height="330" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="BaZpZMj" data-user="rebelchris" style="height: 330px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/BaZpZMj">
  CSS Square DIV</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Tailwind div cuadrado responsivo

Ahora, tomando este concepto, podemos lograr el mismo efecto en Tailwind. Sin embargo, necesitaremos hacer una adición a nuestra configuración.

Comencemos con lo básico:

```html
<div class="w-1/2 bg-purple-300"></div>
```

Sin embargo, no vemos nada con el código anterior ya que no tenemos la opción de padding.
Y las opciones de padding en Tailwind no tienen un valor basado en porcentaje.

Pero, no te preocupes, podemos solucionarlo.
Abre tu archivo `tailwind.config.js` y extiende la sección de padding.

En nuestro caso estamos usando un div del 50% (`w-1/2`), así que necesitamos un padding del 50% también:

```js
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Como puedes ver, puedes añadir múltiples versiones para el tamaño que necesites.

Ahora agreguemos esta clase a nuestro div también para ver el resultado:

```html
<div class="w-1/2 pb-1/2 bg-purple-300"></div>
```

¡Y eso nos da un cuadrado perfecto en Tailwind!

He creado un playground de Tailwind para que veas esto en acción:

[Visita el Tailwind playground](https://play.tailwindcss.com/KiXGVqfKix)

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
