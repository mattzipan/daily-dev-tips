---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS: Fondo de Video'
metaTitle: 'Fondo de Video con Tailwind CSS Tutorial [2024]'
metaDesc: 'Crea un encabezado de fondo de video a pantalla completa con Tailwind CSS - Tutorial para integrar videos como fondo con demostración en Codepen.'
image: /images/19-12-2020.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - css
  - tailwind
---

Llámame a la vieja escuela, pero me encanta ver encabezados de **video de fondo** en CSS.

Raramente uso esos estilos en mi sitio web personal, pero me encanta implementar un **encabezado de video** para fondos en sitios de clientes para impresionar al espectador con videos.

En este tutorial de CSS quiero enseñarte cómo implementar un **video de fondo a pantalla completa**. Solo utilizaremos las clases de [Tailwind CSS](https://daily-dev-tips.com/posts/my-first-experiences-with-tailwind-css/).

El resultado es un impresionante elemento de video de fondo a pantalla completa usando solo Tailwind CSS:

![video-header.gif](https://cdn.hashnode.com/res/hashnode/image/upload/v1607940108457/esNeCkquB.gif)

## Cómo crear un fondo de video con Tailwind CSS

Para crear este **reproductor de video** como fondo, estamos aprovechando el código de ayer del tutorial sobre un [encabezado parallax con Tailwind](https://daily-dev-tips.com/posts/tailwind-css-parallax-effect/).

El elemento de encabezado tiene una configuración muy similar, por lo que lo reutilizaremos para el efecto de video de fondo.

La estructura básica de `HTML` se verá así:

```html
<header>
  <div>¡Bienvenido a mi sitio!</div>
  <video autoplay loop muted>
    <source src="video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</header>
```

Puedes ver que usamos una etiqueta de encabezado HTML. Ahí, tenemos un elemento `div` que contendrá un bloque que se ubicará encima de la etiqueta `video`.

Para tu información, la etiqueta `video` puede contener un archivo de video, pero también otros formatos de archivo.

Ahora escribiré la estructura final de `HTML` con CSS y explicaré la importancia de cada clase de Tailwind.

```html
<header
  class="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
>
  <div
    class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
  >
    Welcome to my site!
  </div>
  <video
    autoplay
    loop
    muted
    class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</header>
```

Las clases de CSS utilizadas para el fondo de video:

- `relative`: Hace que el elemento de encabezado sea relativo. Haremos que el video sea absoluto para posicionarlo.
- `flex`: Agrega un display flex para que podamos alinear el bloque de texto dentro.
- `items-center`: Alinea el bloque de texto verticalmente.
- `justify-center`: Alinea el bloque de texto horizontalmente.
- `h-screen`: La clase h-screen agrega una altura de 100vh, por lo que el video se escala al 100% de la altura del viewport.
- `mb-12`: Añadimos un gran margen inferior con esta clase (3rem).
- `overflow-hidden`: El video será ligeramente más grande que nuestro encabezado, por lo que no queremos mostrar el desbordamiento.

Luego, para nuestro bloque de texto superpuesto, usamos las siguientes clases:

- `relative`: Necesitamos hacer esto relativo para colocarlo sobre la inserción de video.
- `z-30`: Esto necesita tener un z-index más alto que el del video.
- `p-5`: Agrega un padding igual en cada lado (1.25rem).
- `text-2xl`: Hace que el texto sea agradable y grande (1.5rem).
- `text-white`: Hace que el texto sea blanco.
- `bg-purple-300`: Un bonito color púrpura.
- `bg-opacity-50`: Esto asegura que el fondo tenga una opacidad del 50%.
- `rounded-xl`: Añade bordes redondeados agradables.

Y por último, pero no menos importante, podemos agregar las clases para nuestro elemento de video:

- `absolute`: El video es un elemento posicionado de forma absoluta.
- `z-10`: Le damos al video un z-index más bajo que nuestro bloque de texto para mantener el **video como fondo**.
- `w-auto`: El ancho puede ser automático para que se ajuste.
- `min-w-full`: Necesitamos hacer que el ancho mínimo sea del 100%.
- `min-h-full`: Lo mismo para la altura mínima.
- `max-w-none`: Elimina el ancho máximo predeterminado.

Con esto, tenemos todas nuestras clases en su lugar para crear un efecto de fondo de video en CSS.

El estilo nos da un bonito efecto de pantalla completa para la etiqueta de encabezado de video, usando solo clases de Tailwind CSS.

### Ver el ejemplo de código en este Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="dypNrog" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind CSS video header">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/dypNrog">
  Encabezado de video con Tailwind CSS</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
