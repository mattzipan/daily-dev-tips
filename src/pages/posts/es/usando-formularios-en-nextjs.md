---
layout: ../../layouts/Post.astro
title: 'Cómo usar formularios en Next.js'
metaTitle: 'Cómo usar formularios en Next.js, un tutorial [2022]'
metaDesc: 'Cómo aprovechar y usar formularios en una aplicación React Next.js'
image: /images/09-10-2021.jpg
date: 2024-07-01T00:00:00.000Z
modifiedDate: 2024-07-01T00:00:00.000Z
tags:
  - nextjs
---

Hoy vamos a ver otro elemento muy usado en las aplicaciones web: Formularios.
Y para ser precisos, **cómo usar formularios en Next.js**.

Queremos aprender cómo interceptar el formulario enviado para usar estos datos en una aplicación Next.js.

## Cómo crear formularios en Next.js

Para crear un formulario, podemos aprovechar los formularios estándar de HTML.

Abramos nuestra página `pages/contact.js` y añadamos un formulario básico de un campo:

```html
<div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
  <div className="px-6 py-4">
    <div className="mb-2 text-xl font-bold">Contact us</div>
    <form className="flex flex-col">
      <label htmlFor="name" className="mb-2 italic">Name</label>
      <input
        className="mb-4 border-b-2"
        id="name"
        name="name"
        type="text"
        autocomplete="name"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  </div>
</div>
```

Si ejecutamos nuestra aplicación con `npm run dev`, deberíamos ver el siguiente formulario de Next.js aparecer:

![Tutorial de formularios en Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1633003985796/hs2VtoPBk.png)

Pero si ahora enviamos este formulario, solo se publicará en la misma URL con algunos parámetros, lo cual no es lo que queremos.

## Manejo de formularios en Next.js

Para empezar a interceptar el formulario, podemos añadir un manejador `onSubmit` en el elemento form de la siguiente manera:

```html
<form className="flex flex-col" onSubmit="{submitContact}"></form>
```

Esto invocará la función `submitContact` una vez que enviemos el formulario.
Vamos a crear esta función en nuestra página de contacto.

```js
const submitContact = async (event) => {
  event.preventDefault();
  alert(`So your name is ${event.target.name.value}?`);
};
```

Detenemos el comportamiento predeterminado del formulario (que es enviarlo) y mostramos una alerta al usuario.

Esto se verá así:

![Alerta básica desde un formulario en Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1633004218771/l-VzDl6k4.png)

Bien, es un excelente comienzo, ya que hemos detenido el formulario y podemos controlarlo.

## Enviar datos del formulario de Next.js externamente

Pero no es muy útil solo mostrar una alerta. A menudo queremos enviar estos datos a algún lugar donde podamos utilizarlos.

Queremos usar estos datos y enviarlos a una API externa para averiguar la edad de alguien según su nombre.

> Sí, [hay una API para eso](https://agify.io/) 😂

```js
const submitContact = async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  const result = await res.json();
  alert(`Hi ${name} your age is most likely: ${result.age}`);
};
```

Como puedes ver, podemos realizar una solicitud fetch a esta API y pasar el nombre que el usuario nos dio como entrada.

Luego esperamos el resultado y alertamos al usuario con su edad predicha.

¡Bastante genial, si me lo preguntas!

Mi edad es bastante decepcionante, pero aquí tienes:

![API de edad en Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1633004713749/cLOCPA2qA.png)

## Usando la API de Next.js

En el ejemplo anterior, estamos enviando datos a una API externa. A menudo queremos aprovechar la API de Next.js.

Vamos a crear un nuevo endpoint de API añadiendo un archivo llamado `contact.js` en `pages/api`.

Dentro de este archivo, crea la siguiente función manejadora:

```js
export default function handler(req, res) {
  const body = req.body;
  if (!body.name) {
    return res.status(500).json({ msg: 'Name was not found' });
  }

  res.status(200).json({ name: `${body.name} Lastname` });
}
```

Esta función devolverá un código de estado 500 si no se proporciona un nombre y devolverá 'name Lastname' como respuesta.

No es realmente un gran caso de uso, pero probémoslo.

Modifica la función `submitContact` para que envíe datos a esta API interna.

```js
const submitContact = async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const res = await fetch('/api/contact', {
    body: JSON.stringify({
      name: name,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  const result = await res.json();
  alert(`Is this your full name: ${result.name}`);
};
```

Si decidimos llenar el formulario, obtenemos la siguiente alerta.

![Rutas de API de formularios en Next.js](https://cdn.hashnode.com/res/hashnode/image/upload/v1633005409045/epEuBj8jD.png)

¡Estoy muy emocionado por lo versátil que es Next.js con el uso de API internas y externas!

Puedes encontrar el código completo en [GitHub](https://github.com/rebelchris/next-tailwind/tree/form).

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
