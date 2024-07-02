---
layout: ../../layouts/Post.astro
title: 'Imagen de cabecera en pantalla completa con Tailwind CSS'
metaTitle: 'Imagen de cabecera en pantalla completa con Tailwind CSS'
metaDesc: 'Cómo hacer que una imagen ocupe toda la pantalla con Tailwind CSS'
image: /images/19-09-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - css
  - tailwind
---

Las imágenes de cabecera en pantalla completa son un tema de moda en el desarrollo web. Me gusta bastante el efecto de tener una sección a pantalla completa que muestra una gran imagen.

En este artículo, veremos cómo crear los siguientes dos efectos en Tailwind CSS.

1. Etiqueta de imagen a pantalla completa
2. Imagen de fondo a pantalla completa

Y el resultado se verá como en el CodePen a continuación. (Ejemplo 1 = etiqueta de imagen (hojas), y el inferior es la imagen de fondo (dunas))

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="LYLLpRx" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/LYLLpRx">
  </a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 1. Imagen de cabecera a pantalla completa en Tailwind

Comencemos con la imagen. A veces prefieres tener una imagen real en lugar de una imagen de fondo.
Este método puede ser complicado, pero veamos qué podemos hacer para que funcione.

```html
<section class="w-full h-screen">
  <img
    src="your_image.jpg"
    class="object-cover w-full h-full"
    alt="Image alt text"
  />
</section>
```

Bien, veamos qué está pasando aquí.
Creamos una sección que definirá el tamaño de nuestra cabecera. En nuestro caso, ocupa todo el ancho de la pantalla y la altura del viewport.

Luego, dentro de eso, renderizamos la imagen, y lo que hace que esto funcione es el ancho/alto del 100% y la clase object-cover.

La clase object-cover asegurará que la imagen se estire manteniendo su tamaño óptimo.

## 2. Imagen de fondo a pantalla completa en Tailwind

La forma más sencilla pero menos accesible es usar una imagen de fondo.
Este efecto será mejor en pantallas más pequeñas ya que el posicionamiento es mejor.

Para que esto funcione en Tailwind tienes que añadir la imagen en tu archivo `tailwind.config.js` así:

```js
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        dunes: "url('/dunes.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Puedes usar esta imagen como `bg-dunes`.

Así que veamos cómo podemos hacer una cabecera a pantalla completa en Tailwind CSS.

```html
<section class="w-full h-screen bg-center bg-cover bg-dunes"></section>
```

¡Y eso es todo! Estas son dos formas de crear imágenes de cabecera a pantalla completa en Tailwind.

Espero que hayas disfrutado el artículo. Si tienes alguna pregunta, no dudes en contactarme.

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
