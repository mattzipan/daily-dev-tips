---
layout: ../../layouts/Post.astro
title: 'Zoom de imagen con Tailwind'
metaTitle: 'Tutorial de zoom de imagen de fondo con Tailwind [2022]'
metaDesc: 'En la guía de hoy, utilizaremos Tailwind CSS para hacer zoom en imágenes de fondo al pasar el ratón. ¡Vea los ejemplos de código en la demostración en vivo!'
image: /images/18-02-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - css
  - tailwind
---

Puede que estés familiarizado con este efecto de **zoom en el fondo**. Pasas el ratón sobre una tarjeta y la imagen se hace más grande.

Hoy, aprenderás cómo hacer un zoom en una imagen con Tailwind CSS.

¡El resultado se verá así:

![Imagen de fondo con zoom en Tailwind CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1613210086987/7MnvkyrCY.gif)

## Estructura HTML

Comencemos viendo el marcado HTML y cómo lo formatearíamos.

Necesitaremos tarjetas que tengan una imagen y algo de texto dentro. El HTML para cada tarjeta se verá así:

```html
<div class="card-zoom">
  <div class="card-zoom-image"></div>
  <h1 class="card-zoom-text">CAR</h1>
</div>
```

Como puedes ver, no estoy usando las clases en línea de Tailwind, ya que reutilizaremos estos bloques varias veces.

## Agregar una imagen de fondo personalizada en Tailwind CSS

Antes de continuar, veamos cómo podemos agregar imágenes de fondo personalizadas con Tailwind CSS.

Abre tu archivo de configuración de Tailwind y agrega una opción extendida para **imágenes de fondo**:

```css
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        beetle:
          "url('https://custom.image/name.jpg')"
      },
    },
  },
  variants: {},
  plugins: [],
}
```

Así es como podemos agregar una imagen de fondo personalizada al archivo de configuración de Tailwind. Luego, podemos usar las imágenes con la sub-clase `bg`.

```html
<div class="card-zoom-image bg-beetle"></div>
```

Usamos el prefijo `bg` con el nombre que ponemos en nuestro archivo de configuración de Tailwind.

## Estilizando las tarjetas

Ahora vamos a trabajar en agregar un estilo genérico a nuestras tarjetas.

Usaremos la regla `@apply` solo para utilizar las clases de Tailwind.

El primer elemento es la clase `card-zoom`. Es el contenedor principal para la imagen y el texto.

```css
.card-zoom {
  @apply relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-60 h-60 rounded-2xl;
}
```

Esto asegurará que todo dentro del div de `card-zoom` esté centrado y que la tarjeta tenga esquinas redondeadas con un bonito efecto de sombra.

El siguiente elemento será la **imagen de fondo**. Esta debe ser una clase absoluta ya que haremos un zoom en toda la imagen al pasar el ratón.

```css
.card-zoom-image {
  @apply absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover;
}
```

Como puedes ver, la hacemos absoluta y del tamaño completo del elemento padre. Luego agregamos una transición y una transformación para darle un bonito efecto animado más adelante.

Luego tenemos el texto a la izquierda. El texto tiene que ser un elemento absoluto ya que también lo animaremos.

```css
.card-zoom-text {
  @apply absolute text-5xl font-black transition-all duration-500 ease-in-out transform scale-150 text-gray-50 opacity-60;
}
```

## Efecto de zoom en la imagen con Tailwind al pasar el ratón

Una de las razones por las que usé clases separadas es porque queremos agregar el efecto de hover en la clase principal.

Así que, una vez que pasemos el ratón sobre la clase `card-zoom`, el elemento de imagen y texto interno debería comenzar la animación de zoom.

Para el zoom, agrega estas animaciones usando las siguientes clases:

```css
.card-zoom:hover .card-zoom-image {
  @apply scale-150;
}
.card-zoom:hover .card-zoom-text {
  @apply scale-100;
}
```

Estas animaciones de escala asegurarán que la imagen se haga más grande, y el texto se hará más pequeño al pasar el ratón sobre él, creando así un genial efecto de zoom en la imagen.

Consulta el código en la demostración completa aquí: [Tailwind CSS para hacer zoom en imágenes](https://play.tailwindcss.com/bJGtVPu4BT)

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de noticias por correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
