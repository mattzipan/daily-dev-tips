---
layout: ../../layouts/Post.astro
title: 'Jest test vs it'
metaTitle: 'Jest test vs it'
metaDesc: 'Cuál es la diferencia entre test e it en Jest'
image: /images/10-04-2022.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - testing
---

Cuando trabajas en casos de prueba de Jest, puedes encontrarte con dos enfoques diferentes, como puedes ver a continuación.

```js
test('if this function succeeds', () => {
  expect(1).toBeTruthy();
});

it('should test if this function succeeds', () => {
  expect(1).toBeTruthy();
});
```

Como puedes ver, las pruebas anteriores son prácticamente la misma función. Sin embargo, el nombre es diferente.

## La diferencia entre test e it en Jest

Básicamente, `it` es un alias para `test`, por lo que son funcionalmente lo mismo.

Entonces, ¿qué los hace diferentes?

Este alias se crea para hacer que tus pruebas sean más legibles desde el punto de vista del resultado de la prueba.

Realmente puede ayudar a hacer que tus pruebas sean más legibles desde el punto de vista de la legibilidad.

Imagina la segunda prueba usando la función `test`.

```js
test('should test if this function succeeds', () => {
  expect(1).toBeTruthy();
});
```

Esto suena un poco raro, ¿verdad?

Y estos resultados definitivamente se ven extraños en tus resultados de prueba, así que intenta hacer que se vean lo más parecido posible a oraciones en inglés.

## ¿Cuál gana?

Esto depende totalmente del caso de uso.

Personalmente, uso más `it` para verificaciones de renderizado. A menudo tiene más sentido.

- "debería tener un botón."
- "debería navegar a x."

Sin embargo, depende totalmente de ti cuál tiene más sentido para casos de uso específicos.

¿Cuál prefieres tú?

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
