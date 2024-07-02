---
layout: ../../layouts/Post.astro
title: 'Texto multicolor en CSS'
metaTitle: 'Texto multicolor en CSS'
metaDesc: 'Cómo crear y animar un efecto de texto de gradiente multicolor en CSS'
image: /images/31-08-2021.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - css
---

En este artículo, estaremos creando un efecto súper genial donde podemos tener texto multicolor en CSS.

Vi este efecto hace un tiempo en Twitter realizado por [Adam Argyle](https://twitter.com/argyleink/status/1409590647187656706) y quedé impresionado por lo fácil que puede lograrse en CSS.

A continuación se muestra una demostración de lo que estaremos creando hoy:

<p class="codepen" data-height="440" data-theme-id="dark" data-default-tab="js,result" data-slug-hash="ExXYzbg" data-user="rebelchris" style="height: 440px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/ExXYzbg">
  </a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Texto de gradiente multicolor en CSS

Para crear este efecto, primero comencemos con nuestra estructura HTML. ¡Es muy fácil ya que solo necesitamos un elemento!

```html
<h1>texto multicolor en css</h1>
```

Luego, nos dirigimos a nuestro archivo CSS para hacer un poco de magia 🪄.

Comencemos por definir nuestros cinco colores y nuestro ángulo inicial.

```css
:root {
  --color-1: #442288;
  --color-2: #6ca2ea;
  --color-3: #b5d33d;
  --color-4: #fed23f;
  --color-5: #eb7d5b;
  --angle: 0deg;
}
```

Usamos la raíz para definir variables, ya que esta es una sintaxis válida en CSS básico. No es necesario usar SCSS aquí.

Luego agreguemos estilos a nuestro cuerpo. Esto se utiliza para centrar nuestro texto y poner nuestro fondo en negro. El efecto funciona mejor en negro, pero también funcionará en diferentes colores.

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}
```

Luego comencemos a estilizar nuestro elemento `h1`.

Estoy dividiendo estos pasos en un par de partes para dar una mejor idea de lo que está sucediendo.

### 1. Estilización básica del encabezado

Para nuestra estilización básica, queremos un encabezado relativamente grande.

```css
h1 {
  color: #fff;
  text-align: center;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 6.5vw;
  font-weight: 900;
  line-height: 6vw;
  text-transform: uppercase;
}
```

Esto nos dará la siguiente salida.

![Estilo de encabezado](https://cdn.hashnode.com/res/hashnode/image/upload/v1629698862225/mJelzv5WB.png)

### 2. Cada palabra en su propia línea

Como puedes ver arriba, es solo una línea larga. Podemos usar el siguiente truco de CSS para poner cada palabra en su propia línea.

```css
word-spacing: 100vw;
```

Haciendo que cada palabra tenga su propio espacio en una sola línea.

![CSS Cada palabra en su propia línea](https://cdn.hashnode.com/res/hashnode/image/upload/v1629698977760/jKn1N700v.png)

### 3. Fondo de gradiente de texto en CSS

Ahora podemos pasar a agregar el efecto de gradiente. Comenzaremos dividiendo el gradiente en cinco pasos, lo que resultará en que cada palabra tenga un color.

```css
background: linear-gradient(
  var(--angle),
  var(--color-1) 19%,
  transparent 19%,
  transparent 20%,
  var(--color-2) 20%,
  var(--color-2) 39%,
  transparent 39%,
  transparent 40%,
  var(--color-3) 40%,
  var(--color-3) 59%,
  transparent 59%,
  transparent 60%,
  var(--color-4) 60%,
  var(--color-4) 79%,
  transparent 79%,
  transparent 80%,
  var(--color-5) 80%
);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
```

Aquí definimos los colores que tenemos en nuestra definición del elemento `:root`, así como el ángulo básico de 0.
Agregamos un borde transparente entre cada color para nuestra animación más adelante.
También configuramos el modo de recorte a texto.

![Efecto de gradiente multicolor en CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1629699790231/t2_xUUlq-.png)

## Animación de un gradiente de fondo lineal en CSS

Animar el gradiente es bastante complicado.
Aplicamos el truco principal definiendo la variable `--angle`.

Luego podemos agregar una animación a nuestro elemento `h1`.

```css
animation: 10s rotate linear infinite;
```

Esta animación se ve de la siguiente manera:

```css
@keyframes rotate {
  to {
    --angle: 360deg;
  }
}
```

Sin embargo, esto aún no hace mucho porque el navegador no reconoce `360deg` como un valor.
Podemos solucionarlo definiendo una `@property` para la variable `--angle`.

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}
```

> Nota: Esta idea fue tomada de este genial [artículo de CSS-Tricks](https://css-tricks.com/animating-a-css-gradient-border/).

¡Y ahí lo tenemos! Un efecto de animación de texto en CSS súper genial. Espero que hayas disfrutado este artículo.

### Gracias por leer, ¡y mantengámonos en contacto!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
