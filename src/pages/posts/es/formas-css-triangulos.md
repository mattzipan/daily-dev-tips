---
layout: ../../layouts/Post.astro
title: 'Formas CSS - Triángulos'
metaTitle: 'Formas CSS - Triángulos'
metaDesc: 'Creación de todo tipo de triángulos utilizando CSS'
image: /images/24-03-2021.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - css
--- 

Ayer tuvimos nuestra primera [introducción a las Formas CSS](https://daily-dev-tips.com/posts/css-shapes-the-basics/) y comenzamos con las formas básicas.

Hoy quiero explorar una forma muy útil y un tanto peculiar.
El triángulo tiene muchas formas de ser creado, pero la mayoría de las personas utilizan el truco del borde para hacerlos.

## Creando triángulos en CSS

Vamos a crear una flecha básica hacia abajo.

```html
<div class="triangle-down"></div>
```

Con fines demostrativos, añadí algunos colores para ver qué es lo que realmente hace que parezca un triángulo.

```css
.triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid red;
  border-right: 50px solid purple;
  border-top: 100px solid blue;
}
```

La parte mágica real es el `border-top`. Veremos que es lo que veremos, pero estamos desplazando hacia la izquierda y hacia la derecha por la mitad de ello.
En el ejemplo, he añadido un color rojo y morado.

Esto resultará en lo siguiente:

![Triángulo CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616224807082/1_ZjpStkC.jpeg)

Como puedes ver, el resultado se parece a un triángulo.
Para perfeccionarlo, necesitamos establecer los lados como `transparentes`.

```css
.triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 100px solid blue;
}
```

![Triángulo hacia abajo en CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616224895194/lWAAOt_Dm.png)

Digamos que queremos que la flecha apunte hacia arriba en lugar de hacia abajo.
Simplemente podemos cambiar `border-top` por `border-bottom`.

```css
.triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid blue;
}
```

![Flecha CSS hacia arriba](https://cdn.hashnode.com/res/hashnode/image/upload/v1616225026563/lCNey7kIB.png)

Lo mismo se puede aplicar para crear flechas hacia la izquierda y hacia la derecha:

```css
.triangle-left {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 100px solid blue;
  border-bottom: 50px solid transparent;
}
.triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid blue;
  border-bottom: 50px solid transparent;
}
```

Esto es básicamente el mismo concepto, pero cambiamos definiendo el top y bottom y usando left y right como desplazamientos con un color.

![Flechas hacia la izquierda y hacia la derecha en CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616225174062/c4Nu5rjpS.png)

Incluso puedes desplazar triángulos para que apunten a una esquina específica.
Por ejemplo, apuntando hacia la esquina inferior izquierda:

```css
.triangle-left-bottom {
  width: 0;
  height: 0;
  border-bottom: 100px solid blue;
  border-right: 100px solid transparent;
}
```

![Triángulo en la esquina inferior izquierda en CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1616225288854/Ek9gR-jF0.png)

¿Puedes descubrir cómo crear los otros vértices?

Siempre puedes experimentar con esto en Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="RwoXobj" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Formas CSS - Triángulos">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/RwoXobj">
  Formas CSS - Triángulos</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
