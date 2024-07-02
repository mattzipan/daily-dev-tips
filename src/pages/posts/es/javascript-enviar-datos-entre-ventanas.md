---
layout: ../../layouts/Post.astro
title: 'JavaScript enviar datos entre ventanas'
metaTitle: 'JavaScript enviar datos entre ventanas'
metaDesc: 'Enviar datos entre dos ventanas en JavaScript'
ogImage: /images/09-09-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/5c5be80f-1fe8-4e92-77a4-ac26196a2700
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
---

Recientemente trabajé en un sistema que necesitaba abrir una ventana emergente. Se podía realizar una acción específica en la ventana emergente y la ventana original que invocó la ventana emergente necesitaba recibir la elección.

Esto puede sonar un poco loco de construir, pero es más fácil de lo que piensas.

En este artículo, crearemos nuestra página principal. Al hacer clic, puede abrir una nueva ventana emergente.
Otro botón puede enviar un mensaje estático a esta ventana.

Dentro de esta ventana emergente, el usuario puede elegir entre tres opciones y enviar la seleccionada de vuelta al origen.

Puedes ver una demostración de esto en el video a continuación.

<!-- ![JavaScript enviar datos entre ventanas](https://cdn.hashnode.com/res/hashnode/image/upload/v1661841738094/iTiYivn1B.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1661841780/messages_z1bdmx.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1661841779/messages_ccdqpx.mp4" type="video/mp4" />
</video>

## Configurando la estructura

Decidí crear una configuración muy sencilla para este proyecto.
Empieza creando una nueva carpeta y dentro crea un archivo `index.html`, `sub.html`, y `index.js`.

Empecemos por hacer el contenido de `index.html`.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Enviando mensajes</title>
  </head>
  <body>
    <p>Bienvenido. Puedes hacer clic en el botón de abajo para abrir una nueva pestaña</p>
    <button onclick="openNewWindow()">Abrir nueva pestaña</button>
    <button onclick="sendMessage()">Enviar mensaje</button>
    <p id="response"></p>
    <script src="index.js"></script>
  </body>
</html>
```

Pasemos a la página `sub.html`, que será muy similar a la index.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Enviando mensajes</title>
  </head>
  <body>
    <p>Soy la subpágina</p>
    <p id="response"></p>
    <p>Elige tu respuesta</p>
    <button onclick="closeWindow(`That's amazing`)">Eso es increíble</button>
    <button onclick="closeWindow(`Pretty cool`)">Muy guay</button>
    <button onclick="closeWindow(`Meh, could be cooler`)">
      Meh, podría ser mejor
    </button>
    <script src="index.js"></script>
  </body>
</html>
```

## Enviando mensajes entre ventanas con JavaScript

Para este artículo en particular, decidí usar un archivo JavaScript genérico. Sin embargo, también puedes dividirlo en dos archivos.

Abramos el archivo `index.js`.
Lo primero que queremos agregar es la apertura real de la ventana.

```js
let newWindow;

const openNewWindow = () => {
  const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=300,height=300`;
  newWindow = window.open('sub.html', 'sub', params);
};
```

Paso varios parámetros a la función `window.open`.

- `sub.html`: La página que queremos abrir
- `sub`: Nombre de la página que queremos abrir (puede ser cualquier cosa)
- `params`: Opciones para esta nueva ventana

También habrás notado que configuré esta nueva ventana como una variable. Hemos visto esto para enviar datos con el otro botón.

Para enviar los datos a esta nueva ventana emergente, necesitamos crear la función `sendMessage`.

```js
const sendMessage = () => {
  newWindow.postMessage({ foo: 'bar' }, '*');
};
```

Esto enviará un nuevo mensaje a la ventana que contiene un objeto con valores `foo: bar`.

Ahora podemos trabajar en el lado receptor. Ya que usamos la función `postMessage`, podemos suscribirnos a mensajes para la ventana actual.

Para hacer eso, crea el siguiente oyente.

```js
const response = document.getElementById('response');

window.addEventListener('message', (event) => {
  if (event.data?.foo) {
    response.innerText = event.data.foo;
  }
});
```

Esta función escuchará todos los mensajes, y si llega uno con el objeto `foo`, establecerá el texto de respuesta a ese valor.

La siguiente parte es sobre enviar datos de vuelta a la ventana original. Creamos tres botones en nuestro archivo `sub.html` que invocan una función `closeWindow`.
Vamos a agregar esa función.

```js
const closeWindow = (message) => {
  window.opener.postMessage({ msg: message }, '*');
  window.close();
};
```

Y nuevamente, podemos aprovechar la función `postMessage`, pero esta vez la invocamos en el `opener`, que se refiere a la ventana original.

Ahora vamos a modificar nuestro oyente de eventos para que también maneje este mensaje específico.

```js
window.addEventListener('message', (event) => {
  if (event.data?.foo) {
    response.innerText = event.data.foo;
  }
  if (event.data?.msg) {
    response.innerText = event.data.msg;
  }
});
```

Y voila, ahora puedes enviar mensajes entre dos ventanas en JavaScript.

Si deseas ver el código fuente, lo he subido a [GitHub](https://github.com/rebelchris/javascript-messages).

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
