---
layout: ../../layouts/Post.astro
title: 'Cómo usar React icons en Next.js'
metaTitle: 'Cómo usar React icons en Next.js'
metaDesc: 'Cómo cargar iconos en una aplicación React Next.js'
ogImage: /images/05-10-2021.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/bb476ec0-ae6d-4e72-4821-a434a395ff00
date: 2024-07-01T00:00:00.000Z
modifiedDate: 2024-07-01T00:00:00.000Z
top: true
tags:
  - nextjs
  - react
  - íconos
---

Los iconos son una gran parte de la mayoría de los sitios web/aplicaciones. Así que echemos un vistazo a cómo podemos usar React icons en un proyecto de Next.js.

React icons es una de las bibliotecas de iconos más populares para proyectos basados en React.
¡Utiliza importaciones ES6, lo que significa que solo cargamos los iconos que usamos!

## Cargando React icons en Next.js

Primero tenemos que agregar el paquete a nuestro proyecto ejecutando el siguiente comando en tu carpeta de proyecto para comenzar.

```bash
npm i react-icons
```

Luego podemos comenzar importando los iconos.
Dirígete al [sitio web de React icons](https://react-icons.github.io/react-icons) y encuentra el icono que te gustaría usar (usa la búsqueda en el lado izquierdo).

Luego, en el componente en el que queremos usar el icono, podemos importarlo así:

```jsx
import { BsGrid3X3GapFill } from 'react-icons/bs';

<button>
  <BsGrid3X3GapFill />
</button>;
```

Pongamos eso en práctica y modifiquemos el [toggle de vista de cuadrícula/lista](https://daily-dev-tips.com/posts/nextjs-toggle-between-grid-and-list-view/) que acabamos de crear.

## Cargando múltiples React icons en Next.js

Necesitaremos dos iconos: un icono de cuadrícula y un icono de lista.
He elegido ambos del mismo conjunto de iconos ([bootstrap](https://react-icons.github.io/react-icons/icons?name=bs)).

Carguemos ambos iconos:

```js
import { BsGrid3X3GapFill, BsList } from 'react-icons/bs';
```

Y luego, en lugar del texto simple que teníamos, cambiemos eso para que contenga nuestros iconos.

```jsx
<div className='flex justify-end p-5'>
  <button
    className='px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'
    onClick={() => setToggleViewMode(!toggleViewMode)}
  >
    {toggleViewMode ? <BsGrid3X3GapFill /> : <BsList />}
  </button>
</div>
```

Y eso es todo. Ahora tenemos nuestros React icons configurados en una aplicación de Next.js.

Puedes encontrar el ejemplo de código completo en [GitHub](https://github.com/rebelchris/next-tailwind/tree/icons).

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
