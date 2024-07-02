---
layout: ../../layouts/Post.astro
title: 'Probando si un componente React no existe con Jest'
metaTitle: 'Probando si un componente React no existe con Jest'
metaDesc: 'Cómo podemos probar si un elemento no existe en React con Jest'
image: /images/11-04-2022.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - testing
  - react
  - pruebas
---

A veces queremos escribir pruebas para verificar si ciertos elementos **no** se renderizan.

Por ejemplo, podríamos tener un parámetro para deshabilitar una sección hasta que el usuario tenga un nivel o acción específicos.

Hay varias formas de probar esto, así que veamos algunos ejemplos.

## Consultar el elemento

Lo más importante a tener en cuenta al probar la no existencia es que tendrás que consultar los elementos.

Al buscar un elemento, es posible que hayas usado `getBy` o `getAllBy` seguido de algo. Esto funciona bien si sabemos que el elemento existe, pero Jest lanzará un error cuando estos no se encuentren.

Para estar seguros con elementos no renderizados, tenemos que usar las alternativas de consulta: `queryBy` y `queryAllBy`.

Vamos a esbozar el siguiente componente para trabajar con él.

```js
function App({ firstTime = false }) {
  return (
    <div className='App'>
      <strong>Bienvenido a nuestra aplicación</strong>
      {firstTime && <p>¡Veo que es tu primera vez!</p>}
    </div>
  );
}
```

Como puedes ver, esto podría renderizar dos líneas, pero tenemos que establecer la variable `firstTime` en true para que la segunda oración aparezca.

Ahora podemos escribir algunos casos de prueba para probar esto.

```js
it('debería renderizar el texto de bienvenida', async () => {
  render(<App />);
  expect(screen.getByText('Bienvenido a nuestra aplicación')).toBeInTheDocument();
});
```

La prueba anterior probará la misma aparición de nuestro texto de bienvenida, que siempre se renderiza.

Lo siguiente que podríamos probar es que la segunda línea aparece cuando establecemos la variable en true.

```js
it('debería renderizar el texto de primera vez cuando esté configurado', async () => {
  render(<App firstTime={true} />);
  expect(
    screen.getByText('¡Veo que es tu primera vez!')
  ).toBeInTheDocument();
});
```

Como puedes ver, establezco la variable `firstTime` en true, lo que hará que la línea aparezca. Así que lo anterior seguirá teniendo éxito.

Pero ahora, veamos cómo podemos probar que no existe. Primero, veamos qué sucede cuando usamos la misma sintaxis pero con una llamada a `.not`.

```js
it('no debería renderizar el texto de primera vez cuando esté configurado', async () => {
  render(<App />);
  expect(
    screen.getByText('¡Veo que es tu primera vez!')
  ).not.toBeInTheDocument();
});
```

Nos encontraremos con el siguiente error al ejecutar la prueba anterior.

![Error de Jest no encontrado](https://cdn.hashnode.com/res/hashnode/image/upload/v1648791682803/rWfAXXB3P.png)

Y esto es realmente esperado ya que usamos `getBy`. Podemos simplemente arreglar esto usando `queryBy`.

```js
it('debería renderizar el texto de primera vez cuando esté configurado', async () => {
  render(<App firstTime={true} />);
  expect(
    screen.queryByText('¡Veo que es tu primera vez!')
  ).not.toBeInTheDocument();
});
```

Y así es como podemos verificar la no existencia de elementos de una manera segura.

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
