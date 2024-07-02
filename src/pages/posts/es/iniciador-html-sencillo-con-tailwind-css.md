---
layout: ../../layouts/Post.astro
title: 'Iniciador HTML sencillo con Tailwind CSS'
metaTitle: 'Iniciador HTML sencillo con Tailwind CSS'
metaDesc: 'Una plantilla de inicio HTML con Tailwind CSS que no necesita marco.'
image: /images/27-02-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - css
  - tailwind
---

¿Alguna vez necesitaste un simple inicio en HTML, pero con el poder de [Tailwind CSS](https://daily-dev-tips.com/posts/my-honest-opinion-on-tailwind-css/)?

Podemos, por supuesto, cargar Tailwind desde un CDN, pero eso va en contra del poder de Tailwind. Cargaría cada elemento de estilo, de los cuales el 90% no se usa en nuestro proyecto.

Tampoco podríamos agregar extensiones.

Así que decidí buscar si había un iniciador simple en HTML. No necesito un framework sofisticado como React, Vue, o cualquier otro. HTML básico será suficiente.

Y al principio no pude encontrarlo, así que aquí vamos. ¡Hagamos nuestro propio iniciador de Tailwind en HTML!

> TL;DR: Puedes encontrar el [iniciador de Tailwind en HTML en GitHub](https://github.com/rebelchris/HTML-Tailwind-Starter)

## Creando la estructura

Primero empecemos creando la estructura.

```bash
mkdir html-tailwind-starter
cd html-tailwind-starter
```

Esto creará una carpeta llamada `html-tailwind-starter` y nos moveremos a ella.

Allí, podemos inicializar NPM para aprovechar Tailwind

```bash
npm init -y
```

> Nota: La bandera -y responderá sí a todas las preguntas.

Ahora agreguemos Tailwind desde el paquete npm.

```bash
npm install tailwindcss
```

Ahora creemos un archivo styles.css y agreguemos los elementos de Tailwind.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Procesando el Tailwind CSS

Necesitamos una forma de procesar el [Tailwind CSS](https://daily-dev-tips.com/posts/my-honest-opinion-on-tailwind-css/). Usualmente, un framework sería útil para nosotros, pero la mayoría de ellos usan postCSS. Así que agreguémoslo nosotros mismos.

```bash
npm install postcss-cli autoprefixer
```

Luego podemos crear un archivo `postcss.config.js` que se encargará de lo que necesita suceder con cada archivo CSS.

```js
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
```

Ahora podemos agregar el comando de compilación real para convertir el Tailwind básico en nuestro archivo CSS final.

Abre tu `package.json` y agrega un script de compilación.

```json
"build": "postcss styles.css -o src/styles.css"
```

En tu terminal, ahora puedes ejecutar el siguiente comando. Convertirá el archivo CSS de entrada en styles.css ubicado en la carpeta src.

```bash
npm run build
```

## Agregando el archivo HTML

Ahora que tenemos nuestro Tailwind convertido en nuestra carpeta `src`, voy a agregar el archivo `index.html` en la carpeta `src`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Basic HTML/Tailwind starter</title>
    <meta name="description" content="Basic HTML/Tailwind starter" />
    <meta name="author" content="Daily Dev Tips" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="flex items-center w-screen h-screen bg-red-200 align-center">
      Bienvenido
    </div>
  </body>
</html>
```

Técnicamente, ahora puedes abrir el archivo `index.html` en un navegador y ver el resultado.

![Iniciador de Tailwind HTML](https://cdn.hashnode.com/res/hashnode/image/upload/v1613974728160/8v9AJS8tq.png)

Sin embargo, también podemos agregar un servidor en vivo para facilitarnos un poco la vida.

```bash
npm install -g live-server
```

Y luego agregar un script personalizado en nuestro `package.json` nuevamente.

```json
"dev": "npm run build && live-server src --port=8080"
```

Esto servirá el servidor en vivo en la carpeta src.

Puedes ejecutarlo con:

```bash
npm run dev
```

Y debería ejecutar nuestro postcss y iniciar el servidor en `localhost:8080`.

## Agregando un archivo de configuración de Tailwind

Una cosa que considero imprescindible es la configuración de Tailwind. Podemos extender ciertos elementos, pero lo más importante es que podemos usar la opción de purga.

Podemos agregar el archivo ejecutando el siguiente comando.

```bash
npx tailwindcss init
```

Vamos a añadir primero un color personalizado a él.

```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': '#F89283',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Ahora podemos usar este color en nuestro `index.html`.

```html
<div
  class="flex items-center justify-center w-screen h-screen bg-daily-dev-tips"
>
  Bienvenido
</div>
```

Vuelve a ejecutar el comando `npm run dev`.

![Color personalizado en Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1613975718293/3A6IsmmcH.png)

¡Y ahí lo tenemos, un color personalizado en nuestro Tailwind!

## Agregando la opción purge al archivo de configuración de Tailwind

Como se mencionó, queremos aprovechar la opción purge. Veamos el archivo inicial que se creó ahora.

![Archivo style.css de 4MB, bastante grande](https://cdn.hashnode.com/res/hashnode/image/upload/v1613975795349/ArnwA8KPo.png)

El archivo CSS inicial tiene 4MB. ¡Guau, y solo usamos un div hasta ahora!
¡Sí, tenemos todas las clases de Tailwind ahí!

Entonces, ¿cómo podemos solucionarlo?

Abre el archivo `tailwind.config.js` y modifica la regla de purge para que se vea así:

```js
module.exports = {
  purge: {
    enabled: true,
    content: ['src/*.html'],
  },
  // Other stuff
};
```

Esto habilitará la purga y solo utilizará las clases en la carpeta `src` para los archivos HTML.

Ahora, al volver a ejecutar el comando de desarrollo, obtendremos el siguiente resultado.

![Tailwind CSS purgado](https://cdn.hashnode.com/res/hashnode/image/upload/v1613975926280/kRkB4hU1k.png)

11KB es mucho mejor que los 4MB. ¡Así que estoy muy contento con esa victoria!

Ahora puedes comenzar a construir tu proyecto Tailwind basado solo en el archivo HTML en el directorio `src`.

También puedes encontrar el proyecto completo en [GitHub](https://github.com/rebelchris/HTML-Tailwind-Starter).

### ¡Gracias por leer, y mantengámonos conectados!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
