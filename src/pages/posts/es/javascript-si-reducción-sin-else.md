---
layout: ../../layouts/Post.astro
title: 'JavaScript si abreviado sin else'
metaTitle: 'JavaScript si abreviado sin else'
metaDesc: "Vamos a ver algunas variaciones sobre cómo escribir la declaración if else de JavaScript sin la parte else"
ogImage: /images/01-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/fb08f192-e1dd-436a-bd47-235382738d00
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - javascript
---

En algún momento de tu carrera, te encontrarás usando mucho el [operador ternario en JavaScript](https://daily-dev-tips.com/posts/javascript-basics-if-else-statement/#javascript-ternary-operator).

Es una forma elegante de referirse a la versión abreviada de if...else.

Revisemos el ejemplo.

```js
// Full if else

let result = '';
if (our_value) {
  result = 'we got a value';
} else {
  result = 'no value';
}

// Ternary
result = our_value ? 'we got a value' : 'no value';
```

Así que ese ya es un ejemplo funcional.

## Si sin el else

Sin embargo, a veces podríamos querer ejecutar o establecer algo si se cumple una condición específica.

Veamos el siguiente ejemplo.

```js
if (our_value) {
  alert('I have the value');
}
```

Este fragmento de código debería alertar al usuario si la condición `our_value` es verdadera.

No hay un else involucrado.

Podríamos escribirlo así:

```js
our_value ? alert('I have the value') : null;
```

Sin embargo, no necesitamos el valor `null` ya que no hace nada, por lo que podemos cambiar a usar el operador `&&`.

```js
our_value && alert('I have the value');
```

Mucho más limpio, le decimos al script que si tenemos este valor verdadero, deberíamos alertar al usuario.

## Valor por defecto nullish

En algunos casos, podrías tener una función que devuelve algún valor, pero podrías querer devolver un valor por defecto si el objeto es nullish.

```js
const name = null;
const user = {
  username: name ? name : 'John Doe',
};

console.log(user);
// { username: 'John Doe' }
```

Ese ejemplo funciona perfectamente. Sin embargo, está un poco duplicado nuevamente. Podemos aprovechar el operador `??` para establecer un valor de retorno predeterminado.

Este operador `??` se llama [operador lógico nullish](https://daily-dev-tips.com/posts/javascript-optional-chaining-to-the-rescue/#returning-something-better-than-undefined).

```js
const user = {
  username: name ?? 'John Doe',
};
```

Esto devolverá el valor de `name`, y si no existe, devolverá `John Doe`.

> Nota: Ten cuidado cuando el valor pueda ser `false`, ya que en ese caso devolverá false.

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
