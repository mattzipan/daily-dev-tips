---
layout: ../../layouts/Post.astro
title: 'Usar una fuente de Google en Tailwind CSS'
metaTitle: 'Cómo usar Google Fonts en Tailwind CSS [2024]'
metaDesc: 'Tutorial para enseñarte cómo agregar una fuente de Google a Tailwind con demostración en vivo. Agrega una familia de fuentes personalizada a través del CDN de googleapis.'
image: /images/28-02-2021.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - css
  - tailwind
---

Muchos editores aprovechan **Google Fonts** para introducir fuentes excelentes y personalizadas a un sitio web.

...¡Y las fuentes pueden hacer o deshacer tu sitio web!

Así que, echemos un vistazo a **cómo podemos añadir Google Fonts a Tailwind** con el [starter de HTML simple con Tailwind](https://daily-dev-tips.com/posts/plain-html-starter-with-tailwind-css/) 
que hicimos ayer.

> Si estás buscando usar una fuente de Google en cualquier proyecto, consulta [cómo usar Google Fonts](https://daily-dev-tips.com/posts/how-to-use-google-fonts/)

Con **Tailwind**, el proceso es similar, pero necesitaremos algunas características de la configuración de Tailwind CSS.

El resultado con **fuente personalizada** se verá así:

![Fuente personalizada de Google en Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1614061248074/YW0J-X1g2.png)

## Cómo añadir Google Fonts a Tailwind

1. Dirígete a [Google Fonts](https://fonts.google.com/) y encuentra una **familia de fuentes** que quieras usar.

Abre la fuente y haz clic en el botón "Select this style" para cada estilo que te guste:

![Seleccionar estilo de fuente de Google](https://cdn.hashnode.com/res/hashnode/image/upload/v1614060531226/KCKUtaP8N.png)

Con la fuente seleccionada, obtendrás una barra lateral a la derecha que muestra la etiqueta `<link>` para añadir al HEAD de nuestro sitio web.
Copia todas las etiquetas de enlace. Nota el atributo href que hace referencia al CDN *fonts.googleapis.com*.

2. Vuelve a tu proyecto y abre el archivo `index.html` - luego añade las etiquetas de importación de fuentes de Google por encima de la etiqueta de enlace de styles.css.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- other stuff -->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
</html>
```

> Nota: El segundo enlace especifica nuestra fuente personalizada.

## Usar fuente de Google en Tailwind

Ahora vamos a [personalizar nuestro tema de Tailwind con fuentes de Google](https://tailwindcss.com/docs/font-family#customizing-your-theme).

Abre el archivo `tailwind.config.js` y extiéndelo con la opción `fontFamily`.

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
};
```

Si tu fuente, como en este ejemplo, utiliza espacios, es mejor usar el doble escape `'"` - esto asegurará que la fuente se recoja correctamente.

Ahora podemos usar la fuente de Google como una clase CSS llamada `font-press-start` en Tailwind.

Por ejemplo, podemos añadir la familia de fuentes a nuestro encabezado en la página de inicio de esta manera:

```html
<h1 class="text-6xl font-press-start">Welcome</h1>
```

El código de Tailwind renderizará lo siguiente:

![Fuente de Google añadida en Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1614061094307/2RwZtsAH_.png)

Puedes encontrar el código completo en este [repositorio de GitHub](https://github.com/rebelchris/HTML-Tailwind-Starter/tree/google-fonts).

Adelante, échale un vistazo e intenta añadir otras familias de fuentes populares de Google, como [Poppins](https://fonts.google.com/specimen/Poppins).

### ¡Gracias por leer, y conectémonos!

Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).

