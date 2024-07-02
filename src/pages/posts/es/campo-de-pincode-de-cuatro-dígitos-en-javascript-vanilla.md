---
layout: ../../layouts/Post.astro
title: 'Campo de pincode de cuatro dígitos en JavaScript vanilla'
metaTitle: 'Campo de pincode de cuatro dígitos en JavaScript vanilla'
metaDesc: 'Creando un campo de entrada de pincode personalizado con JavaScript puro'
image: /images/02-12-2020.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
---

En el artículo de hoy, quería construir algo que ha estado en mi mente desde hace un tiempo.

Un campo de pincode completamente en HTML, lo que significa que tendremos cuatro campos de contraseña separados y obtendremos un pincode una vez que ingresemos el último.

La parte interesante es que saltamos automáticamente al siguiente campo de entrada. Además, si no comenzamos en el primero, se nos obliga a hacerlo.

El resultado final funcionará de la siguiente manera.

![Entrada de pincode de 4 dígitos en JavaScript](https://cdn.hashnode.com/res/hashnode/image/upload/v1606460989482/NvD_UOP_n.gif)

## Estructura HTML

Comencemos definiendo nuestra estructura HTML. Como puedes imaginar, necesitamos un formulario, cuatro campos de entrada y, en nuestro caso, un elemento para mostrar el resultado.

```html
<div>
  <form>
    <input type="password" maxlength="1" />
    <input type="password" maxlength="1" />
    <input type="password" maxlength="1" />
    <input type="password" maxlength="1" />
  </form>
  <div id="code-block" class="hidden special">
    Wait your special code is <span id="code"></span>?
    <br />
    <i onclick="reset()">Reset </i>
  </div>
</div>
```

Esta última parte solo es necesaria para este propósito de demostración. Normalmente, intentaríamos realmente iniciar sesión con el usuario.

## CSS Pincode

La parte principal de esto es usar [flexbox para centrar](https://daily-dev-tips.com/posts/css-flexbox-most-easy-center-vertical-and-horizontal/) nuestros elementos.

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
}

form {
  display: flex;
  justify-content: center;
}
```

La siguiente parte es que queremos darle a los campos de entrada más un aspecto de código.

```css
input {
  margin: 0 0.5rem;
  padding: 0.5rem;
  border: 1px solid #333;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 3rem;
}
```

Y la última parte es agregar el estilo para nuestra caja de respuesta de demostración.

```css
.special {
  margin-top: 2rem;
  font-size: 2rem;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease;
}
.special i {
  font-size: 1rem;
  cursor: pointer;
}
.special.hidden {
  opacity: 0;
  visibility: hidden;
}
```

## Entrada de pincode de cuatro dígitos en JavaScript

Ok, cómo convertimos ahora esto en un campo funcional de entrada de pincode.

Comencemos definiendo todas las variables que necesitamos.

```js
const inputs = document.querySelectorAll('input');
const codeBlock = document.getElementById('code-block');
const code = document.getElementById('code');
const form = document.querySelector('form');
```

Como puedes ver, obtenemos los campos de entrada basados en el selector de entrada, el div codeBlock, el elemento de código real y el formulario.

Ahora necesitamos iterar sobre cada entrada para vincular algunas funciones a ellas.

```js
inputs.forEach((input, key) => {
  // Code here
});
```

Estamos utilizando el método `forEach` para iterar sobre ellos, obteniendo el elemento y la clave.

Usamos la clave para definir si es el primer o último elemento.

```js
inputs.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener('click', function () {
      inputs[0].focus();
    });
  }
});
```

Comenzamos verificando si la clave no es la primera. En ese caso, necesitamos vincular un escucha de clics a ellos.
Este clic forzará el enfoque al primer campo de entrada.

```js
inputs.forEach((input, key) => {
  input.addEventListener('keyup', function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userCode = [...inputs].map((input) => input.value).join('');
        codeBlock.classList.remove('hidden');
        code.innerText = userCode;
      } else {
        inputs[key + 1].focus();
      }
    }
  });
});
```

La siguiente parte es agregar un escucha de eventos keyup a cada entrada.

Allí, primero verificamos si tenemos un valor.

La siguiente verificación es para ver si es la última tecla (3).
Hemos llegado al final, así que usamos el [método map de Array](https://daily-dev-tips.com/posts/javascript-map-method/) para obtener una salida de cadena.
Y mostramos nuestro código al usuario.

Si tenemos entrada y no es el último campo, ponemos el foco en el siguiente campo disponible.

Eso es todo, ahora podemos ingresar a través de los campos de código y obtener el resultado en nuestro elemento `codeBlock`.

La última pieza del rompecabezas para esta demostración es una función de reinicio.
Ya hemos adjuntado esta función al restablecer el `HTML`.

```html
<i onclick="reset()">Reset</i>
```

La función se verá así:

```js
const reset = () => {
  form.reset();
  codeBlock.classList.add('hidden');
  code.innerText = '';
};
```

Aquí restablecemos el formulario, lo que hará que todos los campos de entrada vuelvan a estar vacíos.
Luego eliminamos el `codeBlock` y vaciamos el código anterior también.

Puedes encontrar esta demo completa en el siguiente Codepen.

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="bGwGvxg" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Campo de pincode de cuatro dígitos en JavaScript vanilla">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/bGwGvxg">
  Campo de pincode de cuatro dígitos en JavaScript vanilla</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer y vamos a conectar!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
