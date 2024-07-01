---
layout: ../../layouts/Post.astro
title: 'Cuadrícula responsiva de 4 columnas en Tailwind'
metaTitle: 'Cuadrícula responsiva de 4 columnas en Tailwind - Daily Dev Tips'
metaDesc: 'Creando un diseño de cuadrícula de 4 columnas responsiva en Tailwind'
image: /images/24-04-2021.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - css
  - tailwind
  - cuadrícula
  - diseño responsivo
---

Cuando se trata de **layouts con Tailwind CSS** tenemos dos opciones principales:

- Flexbox
- Grid

Si me conoces, sabes que uso CSS Flexbox para muchas cosas. Es una de esas herramientas con las que comienzas y terminas usando para muchos elementos.

Sin embargo, quiero explorar un poco la acción de CSS Grid en Tailwind y ver qué tan fácil puede ser.

Crearemos un layout de bloques de 4 columnas responsivo para dispositivos grandes. En tamaño de tablet, deberían apilarse 2-2, y en móviles, debería ser un layout de 1 columna.

El resultado es el siguiente:

![Tailwind grid responsivo](https://cdn.hashnode.com/res/hashnode/image/upload/v1618986443272/IjQSRq7cs.gif)

## Tailwind grid: Layout de 4 Columnas

Empecemos con nuestra estructura básica de HTML y estilizémosla desde allí.

```html
<div>
  <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</div>
```

Como puedes ver, elijo un doble wrapper, el div superior será nuestro contenedor, y el interior será la cuadrícula real.

Agreguemos algunos estilos básicos para los contenedores primero.

```html
<div class="container mx-auto">
  <div class="grid grid-cols-4 gap-6">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</div>
```

Esto ya nos dará un buen espacio de columnas.

![Layout básico de Tailwind CSS Grid](https://cdn.hashnode.com/res/hashnode/image/upload/v1618986077359/OwuEEURMW.png)

Agreguemos rápidamente algo de estilo a nuestro ejemplo de grid también:

```html
<div class="container mx-auto">
  <div class="grid grid-cols-4 gap-6">
    <div
      class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
    >
      1
    </div>
    <div
      class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
    >
      2
    </div>
    <div
      class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
    >
      3
    </div>
    <div
      class="flex justify-center p-6 text-6xl bg-gray-100 border-2 border-gray-300 rounded-xl"
    >
      4
    </div>
  </div>
</div>
```

![Bloques estilizados con Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1618986144693/fdfLmWpXd.png)

Sólido, ¿verdad?

Sin embargo, esto aún no es responsivo. Afortunadamente para nosotros, el **grid de Tailwind** es súper fácil de hacer responsivo.

Para obtener una cuadrícula responsiva, todo lo que tenemos que hacer es agregar los puntos de interrupción en nuestro elemento de cuadrícula.

> Recuerda: Tailwind es mobile-first, lo que significa que la vista móvil será la predeterminada.

```html
<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"></div>
```

Puedes encontrar la demo completa y el ejemplo de grid de Tailwind en este Codepen:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="rebelchris" data-slug-hash="MWJPdOp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tailwind grid responsive 4 column blocks">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/MWJPdOp">
  Tailwind grid responsive 4 column blocks</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)

