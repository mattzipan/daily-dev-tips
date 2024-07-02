---
layout: ../../layouts/Post.astro
title: 'Creando una línea de ola animada con Tailwind CSS'
metaTitle: 'Creando una línea de ola animada con Tailwind CSS'
metaDesc: 'Cómo crear un subrayado ondulado y animarlo utilizando solo Tailwind CSS'
image: /images/10-03-2022.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - css
  - tailwind
---

En este artículo, exploraremos lo poderoso que puede ser Tailwind. 
No solo creamos un efecto animado muy genial, sino que también utilizamos solo clases de Tailwind para lograrlo.

Vamos a crear este efecto de subrayado ondulado, que incluso se anima cuando pasamos el ratón sobre él.

Puedes ver el resultado en el siguiente GIF, y al final del artículo, he enlazado el CodePen donde puedes probarlo.

<!-- ![Creating an animated wave line with Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1646114464010/x7ui4Gbyt.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1646114503/wave_fnxudp.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1646114503/wave_azhlun.mp4" type="video/mp4" />
</video>

## Configurando la estructura

Primero debemos considerar cómo funciona y qué elementos necesitamos para crear este efecto.

Por supuesto, necesitaremos un elemento de texto general que se vea bastante grande, así que comencemos con eso:

```html
<h1 class="text-7xl">Pasa el ratón y ondea 🌊</h1>
```

Desde aquí, podríamos optar por agregar el subrayado ondulado y dar por terminado el día de esta manera:

```html
<h1
  class="underline text-7xl underline-offset-8 decoration-wavy decoration-sky-400"
>
  Pasa el ratón y ondea 🌊
</h1>
```

Esto resultará en la siguiente salida, la línea ondulada con un aspecto muy genial.

![Línea ondulada en Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1646113292081/4phS2_f4O.png)

Si no deseas animarlo, puedes detenerte aquí con este efecto de subrayado tan genial.

## Agregando pseudoondas

Tenemos que crear un [pseudoelemento](https://daily-dev-tips.com/posts/tailwind-css-pseudo-elements/).
Desafortunadamente, el subrayado no tiene una forma fácil de animarlo de izquierda a derecha.

Esto significa que debemos encontrar otra manera de agregar una capa de animación.
Opto por duplicar la línea en un elemento `before`. De esta manera, tenemos más libertad de animación.

La única desventaja de usar el efecto de subrayado es que necesita tener texto para volverse visible.
Entonces necesitamos encontrar una forma de imitar el texto original.

Agreguemos un atributo `data-text` a nuestro elemento `h1`.

```html
<h1 data-text="Pasa el ratón y ondea 🌊" class="..."></h1>
```

Asegúrate de que este atributo esté alineado con el texto que estás utilizando.
Dado que queremos animarlo en el eje horizontal, debemos asegurarnos de que se represente lo suficientemente largo.

Afortunadamente, la clase `content` de Tailwind nos permite agregar múltiples elementos.

```html
<h1
  data-text="..."
  class="... before:content-[attr(data-text)attr(data-text)]"
></h1>
```

Esto agrega un elemento `before`, con el contenido del doble del atributo `data-text`.

Quedando así:

![Atributo de contenido de Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1646113628756/r8JnaHSpW.png)

Perfecto, exactamente lo que estamos buscando.

Ahora podemos modificar todas las clases `underline` para que solo se vean afectadas por el selector `before:` de esta manera.

```html
<h1
  data-text="..."
  class="... before:underline before:underline-offset-8 before:decoration-wavy before:decoration-sky-400"
></h1>
```

Sin embargo, esto nos dará tres veces el texto, con dos teniendo el efecto de subrayado.

No es realmente lo que queremos.

Para resolver esto, podemos hacer que el elemento principal sea `relative` y el elemento `before` sea `absolute`.

```html
<h1 data-text="..." class="... relative before:absolute"></h1>
```

![Línea ondulada en Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1646113879227/MbweMX0XG.png)

Está más cerca, pero todavía vemos el elemento dos veces, y de todas formas debería mostrarse en una sola línea...

Corrijamos esos dos problemas:

```html
<h1
  data-text="..."
  class="... overflow-hidden pb-8 before:whitespace-nowrap"
></h1>
```

El padding inferior (`pb-8`) debe coincidir con el desplazamiento que usaste para el subrayado.
Además, ten en cuenta `whitespace-nowrap` para asegurar que el texto permanezca en una sola línea.

Tenemos nuestra línea ondulada existente de vuelta, así que es hora de animarla.

## Agregar una animación de subrayado ondulado en Tailwind CSS

Primero, tendremos que agregar esta animación en la configuración de Tailwind. Lo que queremos es una animación de `margin-left`. Esta animación no está disponible directamente en Tailwind.

Abre tu archivo `tailwind.config.js` y extiende las keyframes y la animación para que se vea así:

```js
tailwind.config = {
  theme: {
    extend: {
      keyframes: {
        wave: {
          to: {
            'margin-left': '-51%',
          },
        },
      },
    },
    animation: {
      wave: 'wave 1.5s ease-in-out infinite',
    },
  },
};
```

Esto crea una nueva animación de onda llamada keyframe animation.
La keyframe animation animará el elemento a `margin-left: -51%`.

He elegido 51% porque coincide con el punto de inicio de la línea visualmente.

Luego se repetirá infinitamente, por lo que se seguirá reproduciendo.

Para agregar esta animación, solo al pasar el ratón sobre ella, podemos agregar la siguiente clase:

```html
<h1 data-text="..." class="... hover:before:animate-wave"></h1>
```

Si ahora pasamos el ratón sobre el elemento, podemos ver todo el texto moviéndose.
Lo cual no es exactamente lo que queríamos. Solo queremos animar el efecto de subrayado.

Para lograr esto, hagamos que el texto sea transparente.

```html
<h1 data-text="..." class="... before:text-transparent"></h1>
```

Y aquí lo tienes:

Hemos creado un subrayado ondulado animado en Tailwind CSS.
Espero que hayas disfrutado este artículo. Puedes jugar con él en este CodePen.

<div class="codepen" data-height="300" data-default-tab="result" data-slug-hash="MWOzWwP" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/MWOzWwP">
  Untitled</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</div>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
