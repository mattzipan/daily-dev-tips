---
layout: ../../layouts/Post.astro
title: 'Pasar className a componentes en React'
metaTitle: 'Pasar className a componentes en React'
metaDesc: 'Cómo pasar un className a un componente hijo en React'
ogImage: /images/25-10-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/8c3319a4-a800-4c44-1d26-1a4e1e566b00
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - react
---

En React, estamos familiarizados con los conceptos de un `className` en componentes. Es la forma en que React agrega el atributo class a un elemento.
Se ve así:

```html
<div className="bg-red-200"></div>
```

Sin embargo, ¿qué pasa si queremos que nuestros componentes personalizados tengan la opción de permitir classNames dinámicos?

Para darte un ejemplo, digamos que tenemos un `CustomComponent` que puede tomar un className desde donde sea que se importe.

```jsx
<CustomComponent className='bg-red-200` />
```

Si ejecutamos esto en React, obtendríamos un error ya que el `CustomComponent` no sabe qué es un `className`.
Así que vamos a arreglar eso.

## Pasando Classnames como props en React

Honestamente, probablemente lo hice sonar como si fuera a ser muy complicado, ¿verdad?

Bueno, no te preocupes, no es tan aterrador, ¡ya que podemos pasar el `className` como una prop!

Entonces, en tu componente hijo, estructuramos su recepción de esta manera.

```js
export default Child = ({ className }) => {
  return (
    <div className={className}>
      <h2>Soy el componente hijo</h2>
    </div>
  );
};
```

Y ahora, podemos usar este componente así.

```js
<Child className='bg-red' />
```

Y eso es todo. Nuestro componente ahora renderizará este classname en su div principal.

## Mezclando clases

También quería tomarme un segundo para ver qué pasa si tu componente hijo siempre tiene ciertas clases y quieres agregar clases adicionales.

En ese caso, las props siguen siendo las mismas. Sin embargo, podemos renderizarlas dinámicamente así.

```js
<div className={`existing-class ${className}`}>
```

Nuestro componente siempre renderizará `existing-class` como una clase pero agregará lo que establezcamos en él.

Entonces, si lo usamos así:

```js
<Child className='bg-red' />
```

Nuestro resultado será un div así.

```html
<div class="existing-class bg-red"></div>
```

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
