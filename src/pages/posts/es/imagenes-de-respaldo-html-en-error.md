---
layout: ../../layouts/Post.astro
title: 'Imágenes de respaldo HTML en caso de error'
metaTitle: 'Imágenes de respaldo HTML en caso de error'
metaDesc: "Cómo mostrar una imagen de respaldo cuando la imagen no se carga"
ogImage: /images/06-08-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/d1c72ea8-80f8-4e8c-b020-6e21f4708700
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - html
---

El otro día encontré algunos problemas con las imágenes de fuentes externas que no se cargaban.

Guardé un enlace a la imagen de perfil de Twitter de alguien en este caso. Cuando el usuario cambia esta imagen, no se refleja automáticamente la nueva.

Así que decidí investigar sobre imágenes de respaldo.
Y sorprendentemente, es fácil.

Lo que queremos lograr:

- Cargar la imagen
- Si no se carga, mostrar la imagen de respaldo

> Nota: Alternativamente, podrías decidir eliminar la imagen

## Imágenes de respaldo en caso de error en HTML

Vamos a configurar un experimento HTML de muestra.

```html
<img
  src="https://images.pexels.com/photos/163822/color-umbrella-red-yellow-163822.jpeg"
/>
```

Esto cargará una [Foto de Pixabay de Pexels](https://www.pexels.com/photo/yellow-blue-red-pink-purple-green-multicolored-open-umbrellas-hanging-on-strings-under-blue-sky-163822/) (un sitio de imágenes de stock).

Esto funcionará perfectamente, pero ahora vamos a intentar destruirlo agregando algunos números aleatorios a la imagen.

```html
<img
  src="https://images.pexels.com/photos/163822/color-umbrella-red-yellow-00000.jpeg"
/>
```

Con esto, obtenemos la molesta imagen rota.

![Imagen rota](https://cdn.hashnode.com/res/hashnode/image/upload/v1658904232633/3hpuI-Kw4.png)

Entonces, ¿qué podemos hacer cuando esto sucede?
Podemos usar el atributo `onerror` en la imagen para establecer una imagen de respaldo.

Funciona así:

```html
<img
  src="https://images.pexels.com/photos/163822/color-umbrella-red-yellow-00000.jpeg"
  onerror="this.onerror=null; this.src='https://images.pexels.com/photos/159868/lost-cat-tree-sign-fun-159868.jpeg'"
/>
```

Usamos el `onerror` para establecer el error en null y cambiar el src de la imagen a una de respaldo.
En nuestro caso, una foto de un gato perdido.

> Nota: No es una buena práctica depender de imágenes externas. Idealmente, quieres tener la imagen de respaldo localmente en el sistema de archivos, para que sea una opción de respaldo confiable.

Puedes verlo en acción en el siguiente CodePen.
La primera imagen se carga, y la segunda está rota.

<p class="codepen" data-height="300" data-default-tab="js,result" data-slug-hash="VwXMMZo" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/VwXMMZo">
  Imágenes de respaldo HTML en caso de error</a> de Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
