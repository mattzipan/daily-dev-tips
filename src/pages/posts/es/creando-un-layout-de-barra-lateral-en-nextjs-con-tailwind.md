---
layout: ../../layouts/Post.astro
title: 'Navegación en la Barra Lateral de Next JS con Tailwind CSS'
metaTitle: 'Crear una Navegación de Barra Lateral en Next.js con Tailwind [2024]'
metaDesc: 'Plantilla responsiva de barra lateral en Next.js: Un tutorial con Tailwind CSS para un componente de navegación de barra lateral elegante. Vea el código de ejemplo.'
image: /images/31-01-2022.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - nextjs
  - react
  - tailwind
---

En este tutorial crearemos una **navegación de barra lateral** para el layout de nuestro sitio web en **Next JS**. Usaremos **Tailwind CSS** para todo el estilo.

El objetivo principal es mostrarte cómo hacer un **componente reutilizable** para un layout de sitio. El componente de barra lateral permitirá al usuario navegar entre las páginas de la aplicación web.

## Demo de lo que construiremos
<!-- ![Creando un layout de barra lateral en Next.js con Tailwind](https://cdn.hashnode.com/res/hashnode/image/upload/v1642834367343/n1ByKldm0.gif) -->
<video class="w-full" autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1642834394/next-sidebar_kotys7.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1642834394/next-sidebar_lskuwp.mp4" type="video/mp4" />
</video>

Siéntete libre de revisar los archivos fuente y la demo <a href="https://stackblitz.com/~/github.com/dailydevtips/next-sidebar" target="_blank" >aquí en Stackblitz</a>.

## Cómo crear una navegación de barra lateral en Next JS con Tailwind
Primero, configuremos el proyecto de Next.js.
### Configuración del proyecto de barra lateral en Next.js
> Nota: Al momento de escribir esto, estoy usando Next JS v.12

  Abre tu terminal favorita y comienza un nuevo proyecto de Next.js con esta línea de código:

```bash
npx create-next-app next-sidebar
```

Luego, navegaremos dentro de la carpeta del proyecto a través del terminal y agregaremos Tailwind CSS.

### Instalar Tailwind CSS en el proyecto Next JS
Agregaremos la última versión de **Tailwind**.

Si quieres usar la versión 2 de Tailwind, revisa este artículo sobre [cómo instalar Tailwind en Next.js](https://daily-dev-tips.com/posts/setting-up-nextjs-with-tailwind-css/).


```bash
# Install all the dependencies
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# Initialise tailwind
npx tailwindcss init -p
```

Luego, agrega los siguientes archivos a la opción `content`.

```js
content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
```

Y el último paso es agregar las hojas de estilo de Tailwind a nuestro archivo `styles/global.scss`.

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

Eso es todo. Estamos listos para comenzar a crear la aplicación web.

### Crear Páginas para la Navegación

Para este tutorial, construiremos tres páginas:

- Página principal
- Acerca de
- Contacto

Primero hagamos la página principal.

Puedes eliminar todo lo que está dentro del archivo `index.js` y reemplazarlo con el siguiente código:

```js
export default function Home() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Home</h1>
      <span className='text-7xl'>🏡</span>
    </div>
  );
}
```

Luego agregue un nuevo archivo llamado `about.js` dentro del directorio `pages` y agregue el siguiente código:

```js
export default function About() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>About</h1>
      <span className='text-7xl'>💬</span>
    </div>
  );
}
```

Luego, de la misma manera, agregue un archivo `contact.js`:

```js
export default function Contact() {
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Contact</h1>
      <span className='text-7xl'>📞</span>
    </div>
  );
}
```

Ahora, tenemos todas nuestras páginas creadas en el proyecto de Next JS y estamos listos para codificar la **navegación de la barra lateral**.


### Agregar navegación de barra lateral en Next.js

Usaremos un [layout de Next.js](https://daily-dev-tips.com/posts/creating-a-reusable-layout-in-nextjs/).

Este archivo de plantilla de layout será nuestro elemento principal envolvente. Cada página se renderizará como un elemento hijo.

Entonces, primero, crea un directorio `components` en tu proyecto y dentro agrega un archivo `layout.js`.

La estructura global para este archivo se ve así:

```js
export default function Layout({ children }) {
  return (
    // Todo
  );
}
```

Ahora agrega el componente de layout en tu archivo `_app.js` para que se ejecute en el sitio web:

```js
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

Ahora definamos nuestros elementos de navegación. Queremos un **header**, **aside** y una sección **main**.

```html
<div className="min-h-screen flex flex-col">
  <header
    className="bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase"
  >
    Menú de barra lateral en Next.js
  </header>
  <div className="flex flex-col md:flex-row flex-1">
    <aside className="bg-fuchsia-100 w-full md:w-60"></aside>
    <main className="flex-1">{children}</main>
  </div>
</div>
```

Con esos elementos HTML creamos la estructura necesaria para la **barra lateral**.

Ahora, todo lo que necesitamos agregar es el **menú de navegación** dentro de la etiqueta aside.

Para esto, vamos a introducir un array de las páginas a las que queremos navegar:

```js
const menuItems = [
  {
    href: '/',
    title: 'Homepage',
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];
```

Dentro de nuestro elemento aside, podemos iterar sobre estos elementos y agregar el enlace href a cada página.

```html
<aside className='bg-fuchsia-100 w-full md:w-60'>
  <nav>
    <ul>
      {menuItems.map(({ href, title }) => (
        <li className='m-2' key={title}>
          <Link href={href}>
            <a
              className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer`}
            >
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</aside>
```

> Nota: No olvides importar `import Link from 'next/link';`

Finalmente, queremos agregar una *página activa*. Una página activa debería verse ligeramente diferente, para que el usuario vea en qué página está.

Para crear la página activa, importemos el router y definamos una variable de router.

```js
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  // Nuestro código
}
```

Luego, dentro de nuestras clases `a href`, podemos agregar una verificación dinámica para ver si la ruta actual es la página activa.

```html
${router.asPath === href && 'bg-fuchsia-600 text-white'}
```

¡Y eso es todo! ¡Hemos creado una navegación de barra lateral dinámica en Next.js!

Revisa el código que escribimos y [mira la navegación en vivo aquí](https://stackblitz.com/~/github.com/dailydevtips/next-sidebar)

La barra lateral es responsiva y pudimos estilizarla rápidamente con Tailwind.
Puedes usar este layout como una plantilla inicial para tu próximo proyecto.

Encuentra el código completo aquí en [GitHub](https://github.com/dailydevtips/next-sidebar).

### ¡Gracias por leer, y conectémonos!

Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
