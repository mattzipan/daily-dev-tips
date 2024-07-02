---
layout: ../../layouts/Post.astro
title: 'Columnas de altura igual con Tailwind CSS'
metaTitle: 'Columnas de altura igual con Tailwind CSS'
metaDesc: 'Cómo hacer columnas de altura igual con Tailwind CSS'
image: /images/24-06-2021.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
- css
- tailwind
---

Hace un tiempo, te mostré cómo crear [columnas de igual altura con CSS](https://daily-dev-tips.com/posts/css-equal-height-columns/), y hoy es el momento de revisarlo en Tailwind CSS.

Me encanta explorar Tailwind y ver lo fácil que se han vuelto las cosas.

La idea principal para hoy es que tendremos tres columnas que tienen textos de diferentes alturas.
Estas columnas, sin embargo, deben abarcar el mismo tamaño (como la columna más grande).

El objetivo final debería verse así:

![Columnas de igual altura con Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1624170337435/YJwMzWJUQ.png)

## Columnas de igual altura con Tailwind CSS

Deberíamos empezar con un contenedor para nuestras tres columnas para lograr estas columnas. Este contenedor puede ser un solo div con una clase flex.

```html
<div class="flex">
  <!-- Nuestras tres columnas -->
</div>
```

Entonces, echemos un vistazo a cómo debería verse nuestra columna.

```html
<div class="w-1/3 p-6 bg-gray-100 flex flex-col">
  <h3 class="text-2xl mb-2">Título 1</h3>
  <p class="flex-1">Contenido</p>
  <a href="#" class="bg-purple-500 mt-2 text-center p-4 text-white">Botón</a>
</div>
```

Déjame explicar lo que está pasando aquí.

El div envolvente es una de nuestras columnas y tiene las siguientes clases.

- `w-1/3`: Lo que lo hace un tercio de nuestro div contenedor
- `p-6`: Agrega algo de padding a este div
- `bg-gray-100`: Agrega un fondo gris claro
- `flex`: Esto hace que este elemento sea un elemento flex. Esto es una parte importante ya que haremos magia usando el elemento `p`
- `flex-col`: Asegúrate de que el flujo flex sea vertical

Luego agregamos algunos estilos básicos para el título y el botón, pero la verdadera magia viene de la clase `p`.

La clase `flex-1` asegura que este elemento abarque el espacio restante para esa columna, por lo que si tiene menos texto que las otras, obligará a que sea más grande.

Lo que resulta en el siguiente Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="ZEeZKYG" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind CSS equal height columns">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/ZEeZKYG">
  Columnas de igual altura con Tailwind CSS</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
