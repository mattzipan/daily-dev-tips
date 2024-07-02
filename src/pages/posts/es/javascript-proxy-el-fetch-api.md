---
layout: ../../layouts/Post.astro
title: 'Proxy de JavaScript en la API Fetch'
metaTitle: 'Proxy JS con Fetch API [2024]'
metaDesc: "Tutorial del Objeto Proxy de JavaScript: Aprende a usar proxy para Fetch API en aplicaciones JS para una funcionalidad mejorada."
ogImage: /images/11-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/f86f933c-9854-4eea-ccd3-33f46bbebe00
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
---

Si buscas en Google **JavaScript Proxy**, verás muchos artículos explicando los conceptos básicos.

Pero hay algo poderoso que casi nadie te dice:

¡Puedes usar el <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank">objeto Proxy</a> para sobrescribir APIs existentes!

Puede extender cualquier objeto, array o función, por lo que es lógico.

Así que permíteme explicarte la solución con un ejemplo del mundo real en el que usé el objeto Proxy.

## Cómo extender la API Fetch de JavaScript con un Proxy

Has oído hablar de la [API Fetch](https://daily-dev-tips.com/posts/fetch-api-in-vanilla-javascript/): un envoltorio nativo para realizar solicitudes a URLs de manera eficiente.

Digamos que nuestra aplicación tiene un archivo que maneja todas las llamadas a la API, y todas usan la <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" target="_blank">API Fetch</a>.

Como ejemplo, digamos que tenemos la siguiente clase *TodoAPI* para manejar las llamadas a la API de todos:

```js
class TodoAPI {
  getTodos = async () =>
    await fetch('https://jsonplaceholder.typicode.com/todos');
  getTodo = async (id: number) =>
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}
```

Ahora para usarla, podemos usar el siguiente código.

```js
const API = new TodoAPI();

(async () => {
  await API.getTodos()
    .then((data) => data.json())
    .then((res) => console.log(res));
  console.log('Fetching single TODO');
  await API.getTodo(3)
    .then((data) => data.json())
    .then((res) => console.log(res));
})();
```

Nada loco todavía. Podemos llamar a nuestro middleware de API que usa la **solicitud fetch**.

Este código funciona perfectamente en nuestro sitio web, pero al introducirlo en una extensión de Chrome, rápidamente nos damos cuenta de que no podemos usar directamente la API fetch de JS debido a problemas de **CORS** con el navegador. El navegador bloquea las solicitudes ya que inyectamos el código JS en diferentes sitios web.

Debemos seguir aceptando todos los datos de la solicitud Fetch, pero en lugar de enviarlos directamente, enviarlos a través de un **service worker** en segundo plano.

Entonces, otra idea es crear una nueva función que imite la API Fetch, lo cual podría funcionar.

Pero, ¿qué pasa cuando la API Fetch cambia sus propiedades?

Una mejor manera de abordar el problema es aprovechar el <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank">objeto Proxy</a> en JavaScript.

Sí, podemos **proxi la API Fetch**.

En un ejemplo súper simple, el código se vería así:

```js
(async () => {
  const fetchHandler = {
    apply(target, thisArg, args) {
      console.log(args);
    },
  };

  const proxiedFetch = new Proxy(fetch, fetchHandler);

  await proxiedFetch('https://jsonplaceholder.typicode.com/todos/3')
    .then((data) => data.json())
    .then((res) => console.log(res));
})();
```

Veamos qué está pasando aquí:
- Creamos un **manejador proxy** que accede a la trampa apply.
- Luego, en lugar de realizar la solicitud a la API, registramos los argumentos.
- Luego **proximizamos la función fetch** y aplicamos nuestros manejadores.
- Finalmente, podemos usar el código como una API Fetch estándar proxiada.

La parte genial de esto es que todos los argumentos de Fetch se mantienen igual, por lo que no es necesario cambiar ningún formato de implementación existente.

Ahora, llevemos esto a nuestra función para que podamos alternar entre la **API fetch** regular y la **fetch proxiada**.

### Proxy de la API Fetch de JavaScript

Primero tenemos que introducir un **constructor** en nuestra clase que definirá qué método de fetch deberíamos usar.

```js
constructor(fetchMethod = (...args) => fetch(...args)) {
	this.fetchMethod = fetchMethod;
}
```

La función configurará el método fetch con todos sus argumentos. Por defecto, lo configuramos como `fetch`.

Luego podemos modificar nuestras llamadas existentes para usar el método de fetch preferido.

```js
getTodos = async () =>
  await this.fetchMethod('https://jsonplaceholder.typicode.com/todos');
```

Como puedes ver, no ha cambiado mucho. Movimos `fetch.` a `this.fetchMethod.` y todas nuestras propiedades y callbacks se mantienen igual.

Sin embargo, el ejemplo todavía usa la antigua API fetch regular.

Vamos a configurar una nueva versión para usar un **fetch proxy personalizado**.

```js
const proxyFetch = {
  apply(_, __, args) {
    console.log(args);
    return { message: 'proxy done' };
  },
};
const proxiedFetch = new Proxy(fetch, proxyFetch);

const API = new TodoAPI(proxiedFetch);

(async () => {
  await API.getTodos().then((res) => console.log(res));
  console.log('Fetching single TODO');
  await API.getTodo(3).then((res) => console.log(res));
})();
```

Creamos un nuevo fetch proxiado, que en nuestro caso registra todas las solicitudes en la consola y luego devuelve 'proxy done'.

Luego pasamos la versión de fetch proxiada a nuestra clase para que la use.

### Demostración
Siéntete libre de probarlo en este CodePen.

Puedes alternar entre pasar el fetch proxiado o dejarlo vacío y usar la API fetch regular.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="ExEarjV" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/ExEarjV">
  JavaScript Proxy the Fetch API</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Fetch con un service worker en segundo plano

Describí un service worker en segundo plano para el ejemplo de la extensión de Chrome.

Aquí simulamos la solicitud fetch para enviar todas las solicitudes que recibe a través de los mensajes del runtime del navegador.

El código se ve así:

```js
const proxyFetch = {
  apply(_, __, args) {
    browser.runtime.sendMessage({
      type: 'FETCH_REQUEST',
      url: args[0],
      args: args[1],
    });
    return null;
  },
};

export const proxiedFetch = new Proxy(fetch, proxyFetch);
```

Como puedes ver, es un concepto similar al que vimos al principio del artículo.

Proxiamos el método existente de la API fetch pero sobrescribimos lo que ejecuta.

En este ejemplo, luego enviamos un mensaje al runtime del navegador.

## Conclusión

Con el **objeto Proxy de JavaScript**, podemos proxiar APIs existentes como la API Fetch.

Esto es muy poderoso porque no tenemos que simular toda la función, sino proxiarla para hacer lo que necesitamos.

### ¡Gracias por leer y conectemos!

No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
