---
layout: ../../layouts/Post.astro
title: 'Console.log en Chrome para iOS'
metaTitle: '¿Cómo ver un console.log en Chrome para iOS? | Tutorial'
metaDesc: 'Aprende cómo ver cualquier console.log directamente en tu dispositivo móvil iOS utilizando el navegador Chrome.'
image: /images/11-02-2021.jpg
date: 2024-07-01T00:00:00.000Z
modifiedDate: 2024-07-01T00:00:00.000Z
tags:
  - chrome
  - consola
  - log
  - ios
---

¿Sabías que es posible ver console.logs en Chrome para iOS?

Al principio me sorprendió, pero puede ser realmente útil para depurar console.logs que colocaste directamente desde un dispositivo móvil iOS.

Por supuesto, ya puedes depurar iOS en Safari, pero Safari tiene su propio renderizado y podría comportarse de manera diferente. ¡El equipo de Chrome decidió integrar un registrador para todas las pestañas incluso!

Cómo funciona:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/chrome-ios_zmwyqh.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/chrome-ios_afqouj.mp4" type="video/mp4" />
</video>

## Console.log en Chrome para iOS

Para habilitar esta función, abre Chrome en tu dispositivo móvil y escribe la siguiente URL:

```bash
chrome://inspect
```

Esto abrirá una pestaña que se verá así. Luego puedes tocar el botón "start logging".

![Pestaña de inspección de Chrome en iOS](https://cdn.hashnode.com/res/hashnode/image/upload/v1612624974716/gjdFmdlV4.png)

> Nota: El sitio no es responsive. Por eso se ve tan pequeño.

Es importante no cerrar esta pestaña, así que abre una nueva pestaña con el sitio web que deseas inspeccionar para los console logs.

En mi ejemplo, uso un Codepen, que siempre devuelve solo un console.log.

Los resultados se verán así:

![Resultado de console.log en Chrome para iOS](https://cdn.hashnode.com/res/hashnode/image/upload/v1612625017613/mtdHjv8vF.png)

Y ahí lo tienes, una forma súper simple pero efectiva de hacer console.log en Chrome en tu teléfono o iPad con iOS.

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
