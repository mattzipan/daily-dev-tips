---
layout: ../../layouts/Post.astro
title: 'Añadiendo un perfil de usuario a nuestro usuario de Supabase'
metaTitle: 'Añadiendo un perfil de usuario a nuestro usuario de Supabase'
metaDesc: 'Extendiendo un perfil de usuario en Next.js utilizando perfiles de autenticación de Supabase'
image: /images/09-12-2021.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - nextjs
---

Ahora que nos hemos [conectado con nuestro enlace mágico](https://daily-dev-tips.com/posts/authenticating-nextjs-with-supabase-auth-magic-links/), es posible que tengamos un usuario en Supabase, pero aún no podemos agregar detalles a este usuario.

Observa la siguiente imagen para encontrar a tus usuarios autenticados en Supabase.

![Usuario autenticado en Supabase](https://cdn.hashnode.com/res/hashnode/image/upload/v1638079425306/QsQhKrqg_.png)

## Añadiendo una tabla de perfil

Lo primero que necesitamos hacer es añadir una tabla de perfil a nuestra base de datos de Supabase.

Afortunadamente, Supabase tiene una excelente plantilla de inicio para esto.

![Plantilla de inicio de autenticación de Supabase](https://cdn.hashnode.com/res/hashnode/image/upload/v1638079514815/KESVEf5Ev.png)

Una vez que hagas clic en esto, presiona el botón "Run" a la derecha y deberías obtener una tabla de perfil de usuario.

![Tabla de perfil en Supabase](https://cdn.hashnode.com/res/hashnode/image/upload/v1638079668537/wK0ERCmTu.png)

Esta tabla, por defecto, incluye `username`, `avatar_url` y `website`.

Veamos cómo podemos hacer que el usuario establezca su nombre de usuario.

## Modificar el componente de perfil

Hasta ahora solo hemos utilizado los datos de sesión para recuperar la dirección de correo electrónico.
Necesitamos añadir una función para verificar si existe una fila en la tabla de perfil.

Abre el archivo `components/Profile.js` y añade la siguiente función.

```js
async function getProfile() {
  try {
    const user = supabase.auth.user();
    let { data, error, status } = await supabase
      .from('profiles')
      .select(`username`)
      .eq('id', user.id)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      setUsername(data.username);
    }
  } catch (error) {
    alert(error.message);
  }
}
```

Esta función consultará nuestra tabla de perfiles y buscará a alguien con el ID de usuario.

En primera instancia, fallará porque aún no lo tenemos configurado.

Pero vamos a renderizar un campo de formulario para que el usuario pueda establecer su nombre de usuario.

```jsx
<input className='my-4 border-2 border-gray-500 rounded-xl p-4 w-full' type='username' placeholder='Enter a username' value={username} onChange={(e) => setUsername(e.target.value)} />
<button onClick={(e) => { e.preventDefault(); updateProfile();}} className='w-full mt-4 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300'>
    <span>Actualizar perfil</span>
</button>
```

Una vez que el usuario haga clic en este botón, invocamos el método `updateProfile`, así que procedamos a crearlo.

```js
async function updateProfile() {
  try {
    const user = supabase.auth.user();
    const updates = {
      id: user.id,
      username,
      updated_at: new Date(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
}
```

Esta función actualizará la tabla de perfiles con nuestro ID de usuario (basado en la sesión) y el nombre de usuario elegido por el usuario.

La próxima vez que regresemos, deberíamos ver nuestro nombre de usuario ya completado, ya que ahora existe en la base de datos.

![Nombre de usuario establecido en Supabase](https://cdn.hashnode.com/res/hashnode/image/upload/v1638080735048/lMftdxTF3.png)

También puedes encontrar este ejemplo de código completo en [GitHub](https://github.com/rebelchris/next-supabase/tree/supabase-profile).

### ¡Gracias por leer y conectémonos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
