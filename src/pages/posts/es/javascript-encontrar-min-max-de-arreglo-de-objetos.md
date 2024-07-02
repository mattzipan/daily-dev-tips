---
layout: ../../layouts/Post.astro
title: 'JavaScript encontrar min/max de arreglo de objetos'
metaTitle: 'JavaScript encontrar min/max de arreglo de objetos'
metaDesc: 'Cómo encontrar el valor mínimo o máximo de un arreglo de objetos'
ogImage: /images/17-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/1175c07f-870c-4343-a52b-988575671100
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
---

En el artículo anterior, vimos cómo [encontrar el min/max en un array de arrays](https://daily-dev-tips.com/posts/javascript-find-min-max-from-array-of-arrays/). Veamos cómo podemos hacer lo mismo con un array de objetos.

Nuestro array se verá así:

```js
const users = [
  { name: 'Nicole', age: 31 },
  { name: 'Chris', age: 33 },
  { name: 'Yaatree', age: 2 },
  { name: 'Sanne', age: 29 },
];
```

Con este array, queremos encontrar a los usuarios con la mayor y menor edad.
Pero no solo devolver la edad, sino todo el objeto.

Veamos cómo podemos lograrlo.

## Encontrar el valor más alto de un array de objetos

Usaremos el método [`reduce`](https://daily-dev-tips.com/posts/javascript-reduce-method/) para extraer un elemento del array. Lo bueno del reduce es que el valor inicial es opcional, así que podemos omitirlo por ahora.

```js
const highest = users.reduce((previous, current) => {
  return current.age > previous.age ? current : previous;
});

console.log('highest', highest);
// { name: 'Chris', age: 33 }
```

Dentro de este método reduce, iteramos sobre cada uno de nuestros elementos. Para cada elemento, evaluamos si la propiedad age del elemento actual es mayor que la que teníamos previamente.
Si ese es el caso, devolveremos el nuevo. De lo contrario, seguimos devolviendo el antiguo.

En nuestro bucle, funciona así:

- actual = Nicole, no existe nada, así que Nicole se convierte en la mayor
- actual = Chris, la edad de Chris es mayor que la de Nicole, así que Chris se convertirá en el valor devuelto
- actual = Yaatree, Chris es mayor, así que seguimos devolviendo a Chris como el mayor
- actual = Sanne, Chris sigue siendo mayor, así que mantenemos a Chris

Terminamos con Chris siendo el valor más alto.

## Encontrar el valor más bajo de un array de objetos

Podemos usar el mismo enfoque para encontrar a la persona con la menor edad.

Para que eso suceda, debemos transformar la flecha `<` en una flecha `>`.

```js
const lowest = users.reduce((previous, current) => {
  return current.age < previous.age ? current : previous;
});

console.log('lowest', lowest);
// { name: 'Yaatree', age: 2 }
```

Nuevamente, para explicarlo más verbalmente, este es el flujo de acción:

- actual = Nicole, no existe nada, así que Nicole se convierte en la menor
- actual = Chris, Nicole es menor, así que seguimos devolviendo a Nicole como la menor
- actual = Yaatree, Yaatree es menor, así que devolvemos a Yaatree
- actual = Sanne, Yaatree es menor, así que devolvemos a Yaatree

El resultado es que devolvemos a Yaatree como la menor.

## Escribir las funciones en forma abreviada

Somos muy explícitos con los ejemplos anteriores al usar las llaves y devolver el objeto.

Sin embargo, al ver que solo tenemos una línea, podemos escribirlo como una función abreviada así.

```js
const highest = users.reduce((prev, cur) => (cur.age > prev.age ? cur : prev));

const lowest = users.reduce((prev, cur) => (cur.age < prev.age ? cur : prev));
```

Mucho más corto, ¿verdad? Pero se pierde algo de legibilidad en el proceso.

## Tratar con un array vacío

¿Qué pasa si pasamos un array vacío?

Se nos mostrará el siguiente error: `TypeError: Reduce of empty array with no initial value`.

Esto sucede porque omitimos el valor inicial del reduce.
Para solucionarlo, podemos volver a incluir el valor inicial.

En nuestro caso, querríamos establecerlo como `null` para que no devuelva un objeto vacío.

```js
const users = [];

const highest = users.reduce((previous, current) => {
  return previous?.age > current.age ? previous : current;
}, null);

console.log('highest', highest);
// null

// Or the shorthand:

const highest = users.reduce(
  (prev, cur) => (prev?.age > cur.age ? prev : cur),
  null
);
```

Es posible que también hayas notado que para que esto funcione, tuvimos que intercambiar la comprobación anterior/actual.
Esto es necesario para que el otro valor sea siempre el actual.

He creado una demo en CodePen donde puedes jugar a encontrar el min/max de un array de objetos.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="JjLGmGQ" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/JjLGmGQ">
  JavaScript find min/max from array of arrays</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
