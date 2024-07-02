---
layout: ../../layouts/Post.astro
title: 'NextJS agregar atributo lang a la etiqueta HTML'
metaTitle: 'NextJS agregar atributo lang a la etiqueta HTML'
metaDesc: 'Cómo podemos agregar un atributo lang a un sitio web de Next.JS'
image: /images/29-05-2022.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - nextjs
---

Cuando trabajas en accesibilidad, un problema común que puedes encontrar es que tu etiqueta HTML no tiene un atributo lang.

El atributo lang le dice al usuario en qué idioma está escrita la página.

Algunos ejemplos de atributos lang válidos son:

```html
<!-- French content -->
<html lang="fr"></html>
```

> Nota: Encuentra [todos los códigos](https://www.w3schools.com/tags/ref_language_codes.asp) de idiomas aquí.

También podemos extender el caso de uso para definir versiones específicas de un idioma, por ejemplo, inglés británico.

```html
<html lang="en-gb"></html>
```

## Añadiendo este atributo lang en Next.js

En cualquier sitio web HTML simple, agregaríamos esta etiqueta al elemento HTML. Sin embargo, en el caso de Next.js, no tenemos acceso directo a él.

Así que para agregar esta etiqueta, necesitamos usar el archivo `next.config.js`.

```js
module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
```

Si tu sitio web admite varios idiomas, incluso puedes poner varios valores en el array `locales`.

Las locales predeterminadas se usan para establecer la actual.

Incluso puedes usar esta configuración para configurar dominios personalizados, pero eso lo podríamos tratar por separado.

## Método alternativo

Hay una forma alternativa de añadir una etiqueta HTML personalizada si quieres sobrescribir múltiples propiedades HTML.

Dentro de tu directorio `pages`, puedes agregar un archivo `_document.js`.

Esta página sobrescribirá el documento predeterminado de Next.js.
Dentro de él, agrega la siguiente estructura, y listo.

```js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

Y eso es todo, dos formas diferentes de añadir el atributo lang en Next.js.
Me gusta usar la forma de la configuración ya que es un poco más limpia y a prueba de futuro.

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
