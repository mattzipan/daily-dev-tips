---
layout: ../../layouts/Post.astro
title: 'Construye un deslizador vertical con Tailwind y Eleventy'
metaTitle: 'Tutorial de deslizador vertical con Tailwind y scroll snap [2022]'
metaDesc: 'Aprende a construir un deslizador vertical con Tailwind. Implementaremos CSS scroll-snap y construiremos un carrusel en pantalla completa.'
image: /images/31-01-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - tailwind
  - eleventy
  - deslizador
  - scroll-snap
---

En este tutorial, aprenderemos **cómo construir un deslizador vertical desplazable usando Tailwind CSS** y Eleventy. También vendrá con un bonito efecto de _scroll-snap_ en CSS.

Este ejemplo se convertirá en la página de inicio de mi blog de estilo de vida. El resultado del artículo de hoy se verá así:

![Tailwind full-page homepage scroll sections](https://cdn.hashnode.com/res/hashnode/image/upload/v1611646193043/RIOddbcKp.gif)

## Construir un deslizador vertical en Tailwind CSS

Comenzaremos codificando nuestro contenedor principal y las secciones de pantalla completa dentro.

Tenemos un total de cinco secciones deslizables para la página de inicio:

```html
<main>
  <section class="w-full h-screen bg-red-200">Section 1</section>
  <section class="w-full h-screen bg-blue-200">Section 2</section>
  <section class="w-full h-screen bg-green-200">Section 3</section>
  <section class="w-full h-screen bg-indigo-200">Section 4</section>
  <section class="w-full h-screen bg-yellow-200">Section 5</section>
</main>
```

Este código nos da el siguiente resultado:

![Tailwind full-screen slider](https://cdn.hashnode.com/res/hashnode/image/upload/v1611641079716/6ObvYevmM.gif)

Como puedes ver, cada sección del deslizador vertical tiene exactamente el ancho/alto de nuestra pantalla.
Incluso si redimensionamos, el deslizador seguirá ocupando toda la pantalla.

Pero solo podemos desplazarnos a cada sección. ¿Cómo podemos hacer que las secciones se _encajen_ durante el desplazamiento?

## Deslizador de Tailwind con Scroll-snap

Hay una propiedad de CSS muy interesante llamada **scroll-snap**. Nos puede ayudar a crear este comportamiento de "encaje de desplazamiento" en el deslizador sin JavaScript personalizado.

Sin embargo, a Tailwind CSS le falta la función de scroll-snap. Así que comencemos extendiendo las utilidades de Tailwind.

Abre el archivo `global.css` y agrega el siguiente código:

```css
@layer utilities {
  .snap {
    scroll-snap-type: var(--scroll-snap-direction) var(--scroll-snap-constraint);
  }
  .snap-y {
    --scroll-snap-direction: y;
  }
  .snap-mandatory {
    --scroll-snap-constraint: mandatory;
  }
  .snap-start {
    scroll-snap-align: start;
  }
}
```

Esto extenderá Tailwind y añadirá las clases CSS que necesitamos para scroll-snap.

> Nota: Solo agregué las clases reales que necesitamos, no todos los tipos de scroll-snap.

Ahora agreguemos estas clases a nuestros elementos HTML, comenzando con el elemento `<main>`.

```html
<main class="max-h-screen overflow-y-scroll snap snap-y snap-mandatory"></main>
```

Primero, nos aseguraremos de que el elemento tenga una altura máxima en la pantalla y el desbordamiento vertical esté configurado para desplazarse.
Luego añadimos nuestras clases de encaje recién creadas, lo que se traducirá en lo siguiente:

```css
scroll-snap-type: y mandatory;
```

Ahora solo necesitamos indicar a nuestras secciones del deslizador dónde deben encajar.

```html
<section class="w-full h-screen bg-red-200 snap-start"></section>
```

Añadimos la clase `snap-start` a cada sección, que ahora se comportará como puedes ver en el GIF a continuación.

![Tailwind slider with scroll snapping](https://cdn.hashnode.com/res/hashnode/image/upload/v1611642046686/VhpdCo0Ez.gif)

¿Bastante genial, verdad?

## Estilo final del deslizador vertical

Cada una de nuestras diapositivas tendrá su propio estilo único. La primera sección es una imagen de fondo a pantalla completa con el logotipo en el medio.

He colocado las imágenes directamente en la carpeta `src/images`.

Primero, necesitamos agregar una **imagen de fondo** personalizada en nuestro archivo `tailwind.config.js`. Nos permitirá usar la imagen de fondo como una clase fácilmente.

```js
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      // Other extends
      backgroundImage: {
        'home-1': "url('images/home-intro.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Ahora podemos usar esta imagen de fondo usando la siguiente clase.

```html
class="bg-home-1"
```

El HTML para esta sección se verá así:

```html
<section
  class="flex items-center justify-center w-full h-screen bg-center bg-cover snap-start bg-home-1"
>
  <img alt="The todoist logo" title="The Todoist Logo" src="images/logo.png" />
</section>
```

Esto nos dará el siguiente resultado:

![Homepage section one](https://cdn.hashnode.com/res/hashnode/image/upload/v1611642940879/fem_DYqqT.png)

La segunda sección es la sección de la página sobre nosotros que muestra una imagen con un texto desplazado encima de ella.

Usaremos [Tailwind CSS Grid](https://daily-dev-tips.com/posts/creating-a-newsletter-layout-with-tailwind/) como lo hicimos en el diseño del boletín.

```html
<section class="flex items-center justify-center w-full h-screen snap-start">
  <div class="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
    <div
      class="z-10 flex flex-col justify-center col-span-3 col-start-2 row-start-1"
    >
      <h1 class="font-black text-purple">Acerca de Todoist</h1>
      <h3 class="text-pink">Café, adrenalina y un montón de locuras</h3>
    </div>
    <div class="flex flex-col items-end col-span-6 col-start-3 row-start-1">
      <img src="https://thetodoist.com/static/media/home_about.104e3ad7.jpg" />
      <a href="/about" class="mt-2 text-xs underline">Más información &rarr;</a>
    </div>
  </div>
</section>
```

Uso el mismo truco de start-row y start-col en esta sección para superponer los elementos.

Luego utilizo [CSS Flex](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) para alinear los elementos en la posición correcta.

El resultado para esta sección:

![Section two styling](https://cdn.hashnode.com/res/hashnode/image/upload/v1611643996904/efw-MmxxG.png)

> Como puedes ver, es un elemento desplazado. Así fue diseñado. Podrías centrarlo ajustando la posición de col-start.

La tercera sección es una sección extensa que muestra el post destacado.

Para este ejemplo, codificaremos el artículo manualmente, y en una etapa posterior, lo conectaremos a nuestra tienda de datos.

```html
<section
  class="flex items-center justify-center w-full h-screen text-white bg-purple snap-start"
>
  <div class="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
    <div class="col-span-5 col-start-2">
      <img
        src="https://thetodoist.com/img/blog/forgotten-punctuation/overview.jpg"
      />
    </div>
    <div class="flex flex-col justify-center col-span-3 col-start-8">
      <h2 class="font-black">Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing, sed diam, sed diam.
      </p>
      <a href="#" class="mt-2 text-xs underline">Leer más &rarr;</a>
    </div>
  </div>
</section>
```

Esta es nuevamente una sección donde utilicé principalmente CSS Grid para crear los elementos uno al lado del otro y flex para alinearlos.

El resultado para esta sección:

![Tailwind CSS Section styling](https://cdn.hashnode.com/res/hashnode/image/upload/v1611644836640/hsl2UtoVM.png)

La cuarta sección es muy similar a la anterior. Muestra un elemento del blog, sin embargo, se enfoca en la imagen de fondo, como en la sección uno.

Dado que estos datos se poblarán a partir del elemento real del blog, necesitamos usar una imagen de fondo en línea.

Luego podemos usar un div con un área de texto estrecha.

El HTML completo para esta sección se verá así:

```html
<section
  class="flex items-center w-full h-screen bg-indigo-200 bg-center bg-cover text-purple snap-start"
  style="background-image: url(https://thetodoist.com/img/blog/beach-workouts/running.jpg)"
>
  <div class="w-1/12">&nbsp;</div>
  <div class="w-3/12">
    <div class="relative">
      <span
        class="absolute flex w-full h-0.5 -ml-4 bg-purple -left-full top-1/2"
      ></span
      >Health
    </div>
    <a href="#">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing, sed diam, sed diam.
      </p>
    </a>
    <a href="#" class="mt-2 text-xs underline">Leer más &rarr;</a>
  </div>
</section>
```

Y esto nos dará el siguiente resultado:

![Full-screen slider section in Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1611645479919/Menj524h3.png)

La última diapositiva es la sección de contacto.
Cambiaré un poco el diseño, así que ya no tendremos el formulario.

La parte complicada aquí es habilitar el patrón de fondo para esta sección.

Primero agreguemos este patrón a nuestro archivo tailwind.config.

```js
backgroundImage: {
  "home-1": "url('images/home-intro.jpg')",
  "pattern-striped": "url('images/pattern-striped.png')",
},
```

Ahora podemos usar esto en nuestra diapositiva:

```html
<section class="w-full h-screen bg-pattern-striped snap-start"></section>
```

El resto del bloque usa una cuadrícula y flex para alinear los elementos.

```html
<section class="flex items-center justify-center w-full h-screen bg-pattern-striped snap-start">
  <div class="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
    <div class="col-span-10 col-start-2">
    <h2 class="font-black">¿Café? Claro, hagámoslo.</h2>
    <strong class="flex w-1/2">Siempre dispuesto a conocer gente nueva, aprender cosas y probar cosas nuevas, así que por favor contáctame si quieres ponerte en contacto.</strong>

    <div class="flex mt-8">
      <div class="w-1/2">
        <h4>Ponte en contacto conmigo</h4>
        <p>Envíeme un correo electrónico a <a class="underline" href="mailto:info@thetodoist.com">info@thetodoist.com</a></p>
      </div>
      <div class="w-1/2">
        <h4>Actualmente en</h4>
        <p>Ciudad del Cabo, Sudáfrica</p>
      </div>
    </div>
  </div>
</section>
```

Esto se traducirá en el siguiente resultado.

![slide with contact section](https://cdn.hashnode.com/res/hashnode/image/upload/v1611646060342/8hQgMx-d2.png)

Ahí lo tenemos. Ahora tenemos nuestro deslizador de página de inicio vertical y desplazable en Tailwind y Eleventy.

Puedes encontrar el ejemplo de código de hoy en [GitHub](https://github.com/rebelchris/eleventy-todoist/tree/part9).

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
