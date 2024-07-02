---
layout: ../../layouts/Post.astro
title: 'Sección fija y desplazable de Tailwind CSS'
metaTitle: 'Sección fija y desplazable de Tailwind CSS'
metaDesc: 'Creando un diseño de Tailwind CSS con un área desplazable y fija.'
image: /images/26-02-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - css
  - tailwind
  - diseño
---

Trabajé en mi sitio web de bodas (más información sobre eso más adelante) y encontré este efecto genial que quería compartir con ustedes.

Podemos tener un sitio web seccionado donde el lado izquierdo está fijo, por lo que siempre será visible, y el lado derecho es nuestro lado de contenido, que tendrá áreas desplazables.

El resultado se verá así:

![Sección fija y desplazable de Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1613929868846/nO_kmRPDI.gif)

En dispositivos móviles, todo debería apilarse como áreas de altura de la ventana gráfica. Explicaré cómo podemos lograr eso.

## Sección fija de Tailwind CSS

Comencemos construyendo la sección fija. Es el primer elemento natural que veremos tanto en el escritorio como en el móvil.

Antes de construir eso, necesitamos un contenedor más grande para nuestras dos partes.

Esto puede ser un div, con la clase `relative`.

```html
<div class="relative">
  <!-- fixed section -->
  <!-- scrollable sections -->
</div>
```

Haremos ambas secciones allí, así que comencemos agregando la sección fija.

```html
<div class="relative inset-0 w-full min-h-screen md:fixed md:w-7/12"></div>
```

Lo tenemos como un elemento relativo en la primera carga. Esto será para nuestro diseño móvil.
En dispositivos de tamaño mediano, hacemos que el elemento sea fijo. Esto es lo que hace que se adhiera a su posición.
Luego decimos que debe ser de ancho completo en móviles y 7/12 columnas en dispositivos medianos.
La altura es la altura de la pantalla, y usamos la clase `inset-0` para establecerla en cada lado.

Con eso, tenemos nuestro contenedor. Allí agregaremos una imagen y algo de texto encima de la imagen.

```html
<h1 class="absolute bottom-0 left-0 p-20 text-white text-8xl">
  Benny<br />El cachorro
</h1>
<img src="http://img.com" class="object-cover w-full h-full" />
```

El texto está absolutamente posicionado para superponerse a la imagen. Lo alineamos en la parte inferior de nuestro contenedor.
Luego, para la imagen, usamos `object-cover` para hacer que abarque todo el elemento.

Y eso es todo. Ahora tenemos la parte fija hecha, vamos a las secciones desplazables.

## Secciones desplazables de Tailwind CSS

En cuanto a las secciones desplazables, también vienen dentro del contenedor `relative`.

```html
<div class="w-full ml-auto md:w-5/12">
  <div class="flex flex-col items-center justify-center h-screen bg-red-200">
    <h2 class="mb-5 text-4xl">Conozca a Benny</h2>
    <p class="mb-5">Nací el 20 de mayo de 2020</p>
  </div>
  <!-- repeat above -->
</div>
```

Esto también es de ancho completo en móviles y 5/12 columnas en dispositivos medianos. Agregué el `ml-auto` para desplazarlo hacia el lado derecho de la pantalla para los dispositivos medianos.

Dentro de eso, podemos definir nuestras secciones.
Utilizo una sección simple de 100vh con un color de fondo para mostrar el elemento desplazable.
Esto hará que el elemento tenga exactamente la altura de la pantalla al agregar la clase `h-screen`.
Luego usamos flex para centrar todo dentro.

Ahora puedes copiar y pegar estas secciones y hacer que se vean ligeramente diferentes.

## Demo

Espero que hayas disfrutado de este artículo y puedas ver el potencial de esta fantástica opción de diseño.

Yo sí lo hice, y estén atentos a nuestro sitio web de bodas 🤩.

Puedes encontrar la demo en Codepen.

<p class="codepen" data-height="602" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="wvorKJv" style="height: 602px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind CSS fixed and scrollable section">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/wvorKJv">
  Tailwind CSS fixed and scrollable section</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
