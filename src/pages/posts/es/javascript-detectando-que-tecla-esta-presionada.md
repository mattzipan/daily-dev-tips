---
layout: ../../layouts/Post.astro
title: 'JavaScript detectando qué tecla está presionada'
metaTitle: 'JavaScript detectando qué tecla está presionada'
metaDesc: 'Detectar qué tecla está presionada con Vanilla JavaScript'
image: /images/13-04-2021.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - javascript
  - js
---

Puede que te encuentres en una situación donde ciertas pulsaciones de teclas hagan algo para tu aplicación o juego.

Hoy vamos a ver cómo detectar qué tecla se presiona en JavaScript.

El resultado es este pequeño y genial playground:

![JavaScript detectar pulsación de tecla](https://cdn.hashnode.com/res/hashnode/image/upload/v1617951849345/d-f651Yu_.gif)

## Detectar teclas en JavaScript

Comencemos con lo básico. Necesitaremos una manera para que JavaScript sepa que se ha presionado una tecla.

```js
document.onkeydown = function (e) {
  console.log('key down');
  console.log(e);
};
```

Esto registrará todos los eventos de key-down, que es lo que estamos buscando.

La variable `e` contendrá el evento KeyBoardEvent real y tiene bastante información dentro.

![Registro de KeyBoardEvent](https://cdn.hashnode.com/res/hashnode/image/upload/v1617950084879/qhTg11Mu-.png)

Hay un par de cosas que podemos usar y que son útiles ahí.

- key: Una representación en cadena de la tecla presionada
- keyCode: El número asociado con la tecla. Esto se usa principalmente para identificar teclas en el código
- code: Una combinación para identificar de qué lado se presionó una tecla (leftMeta/rightMeta)

Sabiendo eso, hagamos una excelente herramienta visual que mostrará estos tres elementos al usuario.

## Estructura HTML

Voy a usar Tailwind para hacer una aplicación rápidamente estilizada. La configuración principal será:

```html
<body class="mx-auto my-auto bg-gray-100">
  <div class="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg">
    <div class="flex justify-center hidden -mt-16">
      <div
        class="flex items-center justify-center object-cover w-20 h-20 text-3xl bg-white border-2 border-indigo-500 rounded-full"
        id="keyCodeLarge"
      ></div>
    </div>
    <div>
      <p class="text-gray-600" id="info">Press any key to see the magic 🪄</p>
      <p class="hidden mt-4 text-gray-600">key: <span id="key"></span></p>
      <p class="hidden mt-2 text-gray-600">code: <span id="code"></span></p>
      <p class="hidden mt-2 text-gray-600">
        keyCode: <span id="keyCode"></span>
      </p>
    </div>
  </div>
</body>
```

Como habrás notado, he agregado algunos ids basados en los cuales agregaremos el valor representado con JavaScript.

También he agregado un párrafo de información para cuando aún no tenemos ninguna pulsación de tecla.

## Asignando la pulsación de tecla a nuestro front-end

Comenzamos definiendo las variables que vamos a necesitar.

```js
const key = document.getElementById('key'),
  code = document.getElementById('code'),
  keyCode = document.getElementById('keyCode'),
  keyCodeLarge = document.getElementById('keyCodeLarge'),
  info = document.getElementById('info'),
  hiddenElements = document.querySelectorAll('.hidden');
```

Esto mezcla la información de la tecla que colocaremos y los campos ocultos que necesitamos mostrar.

Ahora, en nuestra función keyDown, podemos actuar sobre esto y colocar la información correcta.

```js
document.onkeydown = function (e) {
  [].forEach.call(hiddenElements, function (el) {
    el.classList.remove('hidden');
  });
  info.classList.add('hidden');
  key.innerHTML = e.key;
  code.innerHTML = e.code;
  keyCode.innerHTML = e.keyCode;
  keyCodeLarge.innerHTML = e.keyCode;
};
```

¡Así de simple!

Puedes probarlo en este Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="eYgePZZ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript detecting which key is pressed">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/eYgePZZ">
  JavaScript detecting which key is pressed</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
