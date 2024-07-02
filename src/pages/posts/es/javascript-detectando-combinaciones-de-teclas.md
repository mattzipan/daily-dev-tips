---
layout: ../../layouts/Post.astro
title: 'Detectando combinaciones de teclas en JavaScript'
metaTitle: 'Detectando combinaciones de teclas en JavaScript'
metaDesc: 'Cómo detectar la combinación de pulsaciones de teclas en JavaScript puro'
image: /images/16-04-2021.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - javascript
---

El otro día construimos esta herramienta genial para [detectar qué tecla fue presionada](https://daily-dev-tips.com/posts/javascript-detecting-which-key-is-pressed/).
Y como habrás visto, solo podía registrar una tecla a la vez.

Hoy quiero ver cómo podemos capturar algunas combinaciones de teclas.

Esta versión se basará solo en teclas modificadoras y una tecla específica.

Las teclas modificadoras que obtenemos son:

- `metaKey`
- `ctrlKey`
- `altKey`
- `shiftKey`

Aunque no podemos combinar las letras regulares, podemos hacer una combinación de estas teclas modificadoras.

Por ejemplo: `metaKey` + `altKey` + `d`

## Detectar combinaciones de teclas en JavaScript

No necesitamos cambiar mucho en nuestra base de código existente del ejemplo estándar de detección de teclas.

En el KeyBoardEvent, obtenemos datos específicos, incluido el estado booleano de las cuatro teclas modificadoras.

Mira este ejemplo donde presioné `Shift` + `Meta` + `f`.

![Meta key combination](https://cdn.hashnode.com/res/hashnode/image/upload/v1618294734993/aB6LjQKw1.png)

Así que primero convirtamos nuestro HTML para tener todas las opciones disponibles.

```html
<body class="mx-auto my-auto bg-gray-100">
  <div class="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg">
    <div>
      <p class="text-gray-600" id="info">
        Presiona una combinación de teclas para ver la magia 🪄
      </p>
      <div id="keys" class="flex hidden">
        <div id="meta" class="hidden p-2 mx-2 border-2">Meta</div>
        <div id="ctrl" class="hidden p-2 mx-2 border-2">Ctrl</div>
        <div id="shift" class="hidden p-2 mx-2 border-2">Shift</div>
        <div id="alt" class="hidden p-2 mx-2 border-2">Alt</div>
        <div id="key" class="p-2 mx-2 border-2">Key</div>
      </div>
    </div>
  </div>
</body>
```

Como puedes ver, decidí añadir todas las opciones y una tecla, pero inicialmente estaban todas ocultas.

Luego, necesitamos definir todas estas variables en JavaScript.

```js
const key = document.getElementById('key'),
  keys = document.getElementById('keys'),
  info = document.getElementById('info'),
  meta = document.getElementById('meta'),
  ctrl = document.getElementById('ctrl'),
  shift = document.getElementById('shift'),
  alt = document.getElementById('alt');
```

Y como antes, queremos escuchar el evento `keyDown`.

```js
document.onkeydown = function (e) {
  // Function here
});
```

Queremos verificar que sea una llamada de combinación, no solo la primera pulsación en una de las teclas modificadoras.

```js
if (
  (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) ||
  e.key === 'Meta' ||
  e.key === 'Shift' ||
  e.key === 'Control' ||
  e.key === 'alt'
) {
  return;
}
```

Si ese es el caso, devolvemos la función para detenerla.

Si no, tenemos una combinación de teclas y podemos mostrar las teclas apropiadas.

```js
e.altKey ? alt.classList.remove('hidden') : alt.classList.add('hidden');
e.shiftKey ? shift.classList.remove('hidden') : shift.classList.add('hidden');
e.metaKey ? meta.classList.remove('hidden') : meta.classList.add('hidden');
e.ctrlKey ? ctrl.classList.remove('hidden') : ctrl.classList.add('hidden');
info.classList.add('hidden');
keys.classList.remove('hidden');
key.innerHTML = e.keyCode;
```

La sección anterior mostrará u ocultará las teclas modificadoras, y eventualmente agregaremos la tecla específica.

Puedes ver en la demostración a continuación que aparecerá como un carácter extraño si tienes ciertas combinaciones. ¡El código de la tecla, sin embargo, siempre será el mismo!

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="rebelchris" data-slug-hash="NWdYgbQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript detecting key combinations">
  <span>Ve el Pen <a href="https://codepen.io/rebelchris/pen/NWdYgbQ">
  Detectando combinaciones de teclas en JavaScript</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
