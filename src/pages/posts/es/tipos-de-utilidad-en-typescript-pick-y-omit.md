---
layout: ../../layouts/Post.astro
title: 'Tipos de utilidad en TypeScript: Pick y Omit'
metaTitle: 'TypeScript | Tipos de utilidad Pick y Omit [Guía 2022]'
metaDesc: 'Pick y Omit pueden usarse como tipos de utilidad en TypeScript para modificar tipos o interfaces existentes'
image: /images/20-02-2022.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
  - typescript
  - tipos de utilidad
---

En el artículo anterior, primero vimos [Tipos de utilidad en TypeScript: Partial y Required](https://daily-dev-tips.com/posts/typescript-utility-types-partial-and-required/).
Este artículo profundizará en los tipos de utilidad **`Pick`** y **`Omit`** de TypeScript.

Estos se utilizan para crear un nuevo tipo con solo un conjunto de opciones del tipo original.

Sin embargo, ambos funcionan de manera ligeramente diferente. Veamos la diferencia a alto nivel.

- `Pick` solo toma los elementos que defines que quieres
- `Omit` tomará todos los elementos que no defines para omitir

Entonces, el resultado de ambos es muy similar, dependiendo de tus necesidades, cuál te podría gustar más.

## El tipo de utilidad Pick de TypeScript

Me apegaré al mismo ejemplo que usamos antes: una interfaz de usuario.

```js
interface User {
  id?: number;
  firstname: string;
  lastname?: string;
  age: number;
  telephone?: number;
  twitter?: string;
}
```

Ahora digamos que queremos un tipo separado que solo pueda pasar el nombre completo, ¿entonces no necesita ningún otro campo?

Podemos definir un nuevo tipo para definir los campos que nos gustaría usar.

```js
type UserFullname = Pick<User, 'firstname' | 'lastname'>;

const userName: UserFullname = {
  firstname: 'Chris',
  lastname: 'Bongers',
};
```

Nuestra variable username ahora se usa para asegurar que solo esos dos campos estén establecidos.
Es posible que hayas notado el delimitador `|`. Se usa como un separador y seleccionará ambos campos.

A menudo necesitarás esta manipulación cuando uses diferentes tipos de retorno, donde podrías querer excluir campos específicos.
Pero también puedes pensar en componentes hijos que solo toman campos específicos de un objeto más grande.

## El tipo de utilidad Omit de TypeScript

Al igual que el tipo `Pick`, el `Omit` se puede usar para modificar una interfaz o tipo existente.
Sin embargo, este funciona al revés.

Eliminará los campos que definiste.
Queremos eliminar el campo `id` de nuestro objeto usuario cuando queremos crear un usuario.

```js
type UserPost = Omit<User, 'id'>;

const updateUser: UserPost = {
  firstname: 'Chris',
  lastname: 'Bongers',
  age: 32,
};
```

¡Aunque nuestro `id` ya era un campo condicional, ahora está completamente eliminado del tipo, así que ni siquiera podemos pasarlo!

![Tipo de utilidad Omit de TypeScript](https://cdn.hashnode.com/res/hashnode/image/upload/v1644556786814/XEgUklhHB.png)

Y ahí lo tienes, los casos de uso para `Pick` y `Omit` en el siguiente artículo. Profundizaremos más en detalle sobre lo poderosos que son cuando se combinan.

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
