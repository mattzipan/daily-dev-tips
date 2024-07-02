---
layout: ../../layouts/Post.astro
title: 'JavaScript coincidir valores en dos arreglos'
metaTitle: 'JavaScript coincidir valores en dos arreglos'
metaDesc: 'Cómo encontrar coincidencias entre dos arreglos en JavaScript Vanilla'
image: /images/01-12-2020.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
  - programación
  - desarrollo
---

No sé tú, pero a menudo necesito un código simple que pueda encontrar los iguales en dos arreglos.

O, por ese motivo, encontrar los no iguales.

Lo que esto básicamente significa es que necesitamos comparar dos arreglos y obtener una salida que indique qué elementos coinciden.

Para este propósito específico, vamos a usar el [método `filter()` de Array](https://daily-dev-tips.com/posts/javascript-filter-method/).

El resultado final se comportará de la siguiente manera:

![JavaScript coincidir valores en dos arreglos](https://cdn.hashnode.com/res/hashnode/image/upload/v1606372948652/zm6suBpIO.gif)

## JavaScript encontrar valores coincidentes en dos arreglos

Así que comencemos creando nuestros dos arreglos.

```js
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
```

Como puedes ver, tenemos números coincidentes del 1 al 6 y el segundo arreglo tiene tres números adicionales 7, 8, 9.

Nuestro objetivo final aquí es obtener un arreglo que indique los números del 1 al 6.

En este caso, podemos hacer un excelente uso del método filter de Array.

```js
const output = array2.filter(function (obj) {
  return array1.indexOf(obj) !== -1;
});
console.log(output);
```

Lo que hacemos aquí es definir una nueva salida que obtendrá un arreglo nuevo.
Luego, específicamente queremos filtrar el segundo arreglo, dentro de la función de filtro verificamos si este elemento es parte del primer arreglo.

En este caso, indexOf devolverá una posición o -1 si no se encuentra.

La salida:

```js
[1, 2, 3, 4, 5, 6];
```

Tadaa 🥳 Encontramos coincidencias entre dos arreglos.

## JavaScript encontrar valores no coincidentes en dos arreglos

Pero, ¿qué pasa si necesitamos encontrar los valores que están solo en uno de los arreglos?

Este caso es ligeramente diferente porque solo funcionará en un sentido.

Lo que haremos es revertir la verificación, por lo que en lugar de verificar si indexOf NO es -1, queremos esos valores de -1.

El código se verá así.

```js
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const output = array2.filter(function (obj) {
  return array1.indexOf(obj) === -1;
});
console.log(output);
```

Y en este caso, la salida será:

```js
[7, 8, 9];
```

Como se mencionó, esto solo funciona en un sentido.
Así que si agregas un número no coincidente en array1, este no será devuelto con este método.

Espero que hayas encontrado útil esta coincidencia de arreglos. Aparece más a menudo de lo que piensas.

## Haciéndolo más pequeño

Como siempre, podemos usar la versión abreviada para el método filter.

```js
const output = array2.filter((obj) => array1.indexOf(obj) !== -1);
```

Podemos omitir la parte de la función real y no necesitamos especificar los valores de retorno.

Tiendo a escribir las funciones completas porque es más fácil para los principiantes entender lo que sucede.

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
