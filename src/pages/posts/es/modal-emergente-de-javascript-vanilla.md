---
layout: ../../layouts/Post.astro
title: 'Cuadro Modal Emergente de JavaScript Vanilla'
metaTitle: 'Cómo hacer un Modal Emergente con Vanilla JS [2022]'
metaDesc: '¡Aprende lo fácil que es crear tu propio Modal de JavaScript! En este tutorial, crearemos un cuadro emergente para mostrar información importante al usuario.'
image: /images/17-08-2020.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
  - modal
  - emergente
---

En el tutorial de hoy, veremos otra característica famosa que se puede hacer fácilmente por uno mismo: el **modal emergente** - y lo construiremos en JavaScript Vanilla.

Una vez que haces clic en un botón o enlace, aparece un cuadro emergente con texto o una imagen.

Esto es fácil de codificar con algo de `CSS` y `JavaScript`.

## Estructura HTML

```html
<div class="container">
  <a data-modal="modal-one">Abrir Modal</a>
</div>

<div class="modal" id="modal-one">
  <div class="modal-bg modal-exit"></div>
  <div class="modal-container">
    <h1>Modal Asombroso</h1>
    <h2>Puro JavaScript Vanilla</h2>
    <button class="modal-close modal-exit">X</button>
  </div>
</div>
```

En cuanto a nuestro `HTML`, solo tenemos el botón del modal visible y nuestro modal en nuestra estructura.

## CSS Modal emergente

El `CSS` no es nuestro enfoque principal, pero vamos a revisarlo.

```css
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &.open {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
  }
  &-bg {
    position: absolute;
    background: teal;
    width: 100%;
    height: 100%;
  }
  &-container {
    border-radius: 10px;
    background: #fff;
    position: relative;
    padding: 30px;
  }
  &-close {
    position: absolute;
    right: 15px;
    top: 15px;
    outline: none;
    appearance: none;
    color: red;
    background: none;
    border: 0px;
    font-weight: bold;
    cursor: pointer;
  }
}
```

Como puedes ver, nada extraordinario, algunos estilos básicos. Lo único que vale la pena mencionar es que el modal, por defecto, no es visible y tiene una opacidad cero.

Una vez que el modal emergente obtiene la clase open, configuramos la visibilidad y lo hacemos completamente opaco. Luego, el modal aparece.

## Ejemplo de Código de Popup en JS Vanilla

La parte más asombrosa es el ejemplo de código en `JavaScript` para nuestro popup.

```js
const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});
```

Lo que estamos haciendo es seleccionar todos los elementos con atributos `data-modal` y recorrerlos. Estos son nuestros desencadenantes, por lo que necesitamos agregar un `eventListener` para el desencadenante de clic.
Una vez que se activa el clic, encontramos el modal basado en el dataset y le agregamos la clase open.
Luego buscamos todas las clases modal-exit dentro del modal.
Que son el fondo y el botón de cierre.

Ahí lo tienes, un simple popup en JavaScript Vanilla que puedes personalizar y estilizar como desees. No hay grandes bibliotecas, ni código extraño que no entiendas.

> Nota: Este código no es accesible, pero muestra el código en JavaScript Vanilla. Para hacerlo accesible, puedes usar un plugin como [Details Dialog](https://github.com/github/details-dialog-element)

## Ver el ejemplo y el código para el modal emergente en Codepen

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="rebelchris" data-slug-hash="MWyyLXR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vanilla JavaScript Modal Pop-up">
  <span>See the Pen <a href="https://codepen.io/rebelchris/pen/MWyyLXR">
  Vanilla JavaScript Modal Pop-up</a> by Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
