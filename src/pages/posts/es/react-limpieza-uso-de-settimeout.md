---
layout: ../../layouts/Post.astro
title: 'Uso limpio de setTimeout en React'
metaTitle: 'Uso limpio de setTimeout en React'
metaDesc: 'Creación de un hook personalizado para usar setTimeout y limpiarlo automáticamente'
ogImage: /images/15-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/33fec8a3-b245-4ab3-8741-5b8ea31f1900
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - react
---

Cuando trabajamos con `setTimeout`, generalmente no tenemos que preocuparnos por limpiar nuestros timeouts.

Sin embargo, introducirlo en React puede crear algunos casos extremos problemáticos.

Esto ocurre a menudo porque queremos manipular datos después de cierto tiempo.
Es posible que el componente ya esté desmontado para entonces, pero el timeout aún intenta activarse.

Podrías encontrarte con casos donde tus interacciones parecen revertirse.
Incluso podrías recibir mensajes de fuga de memoria en tu consola.

## ¡Limpia tus timeouts!

La regla general es mantener un seguimiento de los timeouts que creas en tu código y limpiarlos.

Para limpiar tus timeouts, podemos aprovechar la [función de limpieza de useEffect](https://daily-dev-tips.com/posts/react-useeffect-cleanup/).

Un ejemplo rápido podría verse así:

```js
export default function Test() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const test = window.setTimeout(() => {
      setShow(false);
    }, 1500);
    return () => {
      clearInterval(test);
    };
  }, []);

  return (
    <div>
      <h1>Loading...</h1>
      {show && <p>I'm fully loaded now</p>}
    </div>
  );
}
```

Sin embargo, prefiero usar una referencia para limpiar el intervalo.

```js
const timeoutRef = useRef();

useEffect(() => {
  timeoutRef.current = window.setTimeout(() => {
    setShow(false);
  }, 1500);
  return () => clearInterval(timeoutRef.current);
}, []);
```

Esto funcionará, pero es un poco engorroso recordar limpiar esto al desmontar, etc.

Entonces, ¿por qué no crear un pequeño hook para ello?

## Hook useTimeout en React

Podemos empezar introduciendo un hook `useTimeout`.
Este hook será nuestra versión en React de la función `setTimeout`.

Este hook debería tener las siguientes opciones:

- Recibir la función de callback (una acción que debería ocurrir después del timeout)
- Recibir el retardo (tiempo para que ocurra el timeout)
- Devolver una función que pueda ser invocada para iniciar el timeout

```js
import { useCallback, useEffect, useRef, useMemo } from 'react';

export default function useTimeout(callback, delay) {
  const timeoutRef = useRef();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  const memoizedCallback = useCallback(
    (args) => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
        callbackRef.current?.(args);
      }, delay);
    },
    [delay, timeoutRef, callbackRef]
  );

  return useMemo(() => [memoizedCallback], [memoizedCallback]);
}
```

Primero, vemos los parámetros pasados como `callback` y `delay`.
Luego agregamos dos referencias para llevar un seguimiento del timeout activo y del callback activo.

Luego necesitaremos dos `useEffects`, el primero para escuchar cambios en el callback en caso de que cambie después de renderizar (esto podría ocurrir si cambias algún estado dentro del callback).

El segundo se usa para manejar el efecto de limpieza para el timeout (cuando el componente se desmonta).

Después creamos un `useCallback`, donde primero limpiamos cualquier timeout existente en nuestra referencia.
Luego asignamos el nuevo timeout. Este callback completo escucha cambios en todas nuestras variables.

Y la última parte es devolver una función memoizada que escuchará cambios en su callback.

Este método puede parecer exagerado, pero ayudará a solidificar tus timeouts y mantener todo lo más limpio posible.

### Uso del hook

Para usar el hook, podemos introducir el siguiente código.

```js
import useTimeout from './useTimeout';

const [timeout] = useTimeout(() => {
  setShow(false);
}, 1500);

timeout();
```

### ¡Wow, mucho más limpio, ¿verdad?
Y ahora, solo tenemos un lugar para llevar un seguimiento de nuestros timeouts y asegurarnos de que se limpien constantemente.

### Gracias por leer, ¡y mantengámonos en contacto!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
