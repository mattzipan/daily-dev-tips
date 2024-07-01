---
layout: ../../layouts/Post.astro
title: 'Efecto parallax con Tailwind CSS'
metaTitle: 'Tutorial de efecto parallax con Tailwind CSS [2022]'
metaDesc: 'Aprende a crear un efecto parallax con una imagen de fondo utilizando solo Tailwind CSS. Mira el ejemplo de código en un Codepen en vivo.'
image: /images/18-12-2020.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - css
  - tailwind
---

Hoy vamos a crear un efecto parallax súper genial utilizando solo Tailwind CSS.

El único CSS personalizado que necesitamos es para una imagen de fondo. El resto se construirá usando clases de Tailwind.

He creado un [efecto parallax con CSS](https://daily-dev-tips.com/posts/css-only-parallax-scrolling/) completo antes, por si te interesa ver cómo funciona.

La idea principal es que una imagen de fondo se mantenga en una posición fija mientras te desplazas sobre ella.

En este ejemplo de Tailwind, lo usaremos para el encabezado y una sección en línea.

Puedes ver el resultado en el siguiente GIF:

![Efecto parallax con Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1607859453992/D9BXgFgGZ.gif)

## Encabezado parallax con Tailwind CSS

Comenzaremos creando el encabezado usando clases de Tailwind.

Primero, definamos nuestra estructura `HTML`.

```html
<header>
  <div>Welcome to my site!</div>
</header>
```

Usaremos la etiqueta header con un div dentro. El div contendrá algo de texto para mostrar mejor el efecto parallax.

Ahora queremos que este encabezado tenga toda la altura con una imagen de fondo que cubra el área. La imagen también debe estar centrada.

Publicaré la lista completa de clases y te guiaré a través de cada clase y para qué se utiliza.

```html
<header
  class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Welcome to my site!
  </div>
</header>
```

Las clases utilizadas para el header:

- `flex`: Añade un display flex para que podamos alinear el bloque de texto dentro
- `items-center`: Alinea el bloque de texto verticalmente
- `justify-center`: Alinea el bloque de texto horizontalmente
- `h-screen`: Esto añade una altura de 100vh, por lo que es 100% del viewport.
- `mb-12`: Añadimos un margen inferior bastante grande con esto (3rem)
- `bg-fixed`: Esta es la magia que hace el efecto parallax. El background-fixed asegura que el fondo permanezca donde se establece.
- `bg-center`: Esto asegura que el fondo esté centrado
- `bg-cover`: Asegura que el fondo cubra todo el elemento header
- `custom-img`: Clase personalizada para añadir nuestra imagen de fondo.

Luego, para nuestra caja de superposición, utilizamos lo siguiente:

- `p-5`: Añade un padding igual en cada lado (1.25rem)
- `text-2xl`: Hace que el texto sea grande y agradable (1.5rem)
- `text-white`: Hace que el texto sea blanco
- `bg-purple-300`: Un color púrpura bonito
- `bg-opacity-50`: Esto asegura que el fondo tenga una opacidad del 50%.
- `rounded-xl`: Añade bordes redondeados agradables

¡Eso es todo! Ahora tenemos nuestro efecto parallax con una imagen de fondo, que siempre es 100% de la altura del viewport.

## Sección parallax con Tailwind CSS

Todo eso está genial, pero ahora quieres un efecto parallax para el header y entre dos áreas de texto.

Es casi la misma configuración, excepto que en este caso, añadimos una clase `container` para que no sea 100% ancho. Con esto, también necesitamos añadir `m-auto`, que lo centrará horizontalmente.

```html
<section
  class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Parallax inline
  </div>
</section>
```

Como puedes ver, todas las otras clases son las mismas.
Todo el bloque de texto también utiliza las mismas clases que el bloque de encabezado.

Puedes encontrar esta demostración completa en este Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="VwKPzQm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind CSS parallax effect">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/VwKPzQm">
  Tailwind CSS parallax effect</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
