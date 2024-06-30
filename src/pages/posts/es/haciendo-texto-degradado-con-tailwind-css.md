---
layout: ../../layouts/Post.astro
title: 'Tailwind CSS: Color de Texto con Degradado'
metaTitle: 'Tailwind CSS: Tutorial de Color de Texto con Degradado [2024]'
metaDesc: 'Aprende cómo agregar un generador de degradado lineal como color de texto con Tailwind CSS. Prueba el ejemplo demo en CodePen.'
image: /images/26-06-2021.jpg
date: 2024-06-30T03:00:00.000Z
modifiedDate: 2024-06-30T03:00:00.000Z
tags:
  - css
  - tailwind
---

El texto con degradado en CSS es súper genial.

Me encanta la vibra que da, y antes hice este [tutorial de texto con degradado en CSS puro](https://daily-dev-tips.com/posts/css-gradient-text-effect/).

Por lo tanto, en este tutorial aprenderás cómo crear un **texto con degradado en Tailwind CSS** 👀.

Mira el ejemplo:

![Ejemplo de texto con degradado en Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1643118038139/2fikdgdXE6.png)

¡Así que, vamos a empezar!

## Cómo crear un color de texto con degradado en Tailwind

Comencemos creando nuestro titular y agreguemos las clases de Tailwind CSS que necesitamos:

```html
<h1
  class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
>
  Tailwind CSS
</h1>
```

Esas clases de CSS serán todo lo que necesitamos para crear un **color de texto con degradado** genial.

Pero primero, veamos qué hacen realmente esas **propiedades CSS** de Tailwind.

Estos estilos a continuación solo realizan el estilo general, no son necesarios para el efecto de degradado lineal en sí:

- `text-8xl`: Hace que el tamaño de la fuente sea de 6rem - bastante grande
- `font-extrabold`: Crea un mayor peso de fuente, por lo que el efecto visual resalta más

Ahora, estas clases son las necesarias para agregar el **generador de degradado** al texto:

- `text-transparent`: Esto hace que el texto real sea transparente y muestre el fondo (que tiene el degradado)
- `bg-clip-text`: Esto hace que el fondo degradado solo se muestre en el contorno del texto
- `bg-gradient-to-{flow}`: Esto se usa para indicar la dirección del flujo del degradado lineal: ([Todas las direcciones](https://tailwindcss.com/docs/background-image))
- `from-{color}`: Establece el color inicial para el generador de degradado - en nuestro caso "purple-400"
- `to-{color}`: Esto establece el color final del degradado - en nuestro caso "pink-600"

En el CodePen a continuación, puedes cambiar las clases de Tailwind CSS en el HTML y experimentar con el estilo:

## Demo
<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="NWpmEJg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Making gradient text with Tailwind CSS">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/NWpmEJg">
  Making gradient text with Tailwind CSS</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectemos!

No dudes en suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)


