---
layout: ../../layouts/Post.astro
title: 'Obtener valores únicos de un arreglo JavaScript usando Set'
metaTitle: 'Obtener valores únicos de un arreglo JavaScript usando Set'
metaDesc: 'Cómo usar el método Set de JavaScript para obtener valores únicos de un arreglo'
image: /images/17-08-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
---

A menudo queremos obtener valores únicos de un arreglo. Afortunadamente, esto es relativamente fácil en el JavaScript moderno.

Para darte un breve resumen de cómo se haría esto con un bucle manual y el método push en JavaScript.

```js
original = ['Pizza', 'Chicken', 'Pizza', 'Fish', 'Quinoa'];

output = [];
original.forEach((item) => {
  if (output.indexOf(item) === -1) {
    output.push(item);
  }
});

// [ 'Pizza', 'Chicken', 'Fish', 'Quinoa' ]
```

Como puedes ver, esto elimina el valor duplicado de Pizza.

## JavaScript Set al rescate

Esto es algo en lo que Set es realmente bueno.

Digamos que necesitamos recorrer estos datos primero porque necesitamos filtrar según otras condiciones.

```js
output = new Set();
original.forEach((item) => {
  output.add(item);
});

// Set(4) { 'Pizza', 'Chicken', 'Fish', 'Quinoa' }
```

Como puedes ver en este ejemplo, no tenemos que verificar si el valor existe, ya que el set de JavaScript solo acepta valores únicos.

Sin embargo, ahora obtenemos un objeto Set en lugar de un arreglo.
Esto no siempre es útil.

Podemos convertir este objeto Set a un arreglo usando el operador de propagación (spread operator) de JavaScript.

```js
output = [...output];
```

¡Esto toma el objeto Set y lo convierte en un arreglo plano!

## Conjunto de valores únicos en una línea

Si no necesitas realizar otras condiciones de filtro en un bucle for (o método de arreglo), podemos usar una sola línea para convertir un arreglo en un arreglo de valores únicos.

```js
original = ['Pizza', 'Chicken', 'Pizza', 'Fish', 'Quinoa'];
output = [...new Set(original)];

// [ 'Pizza', 'Chicken', 'Fish', 'Quinoa' ]
```

También he creado este Codepen, donde puedes ver los registros de la consola para ver lo que sucede.

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="gOgYMPy" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/gOgYMPy">
  Vanilla JavaScript date toLocaleString</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
