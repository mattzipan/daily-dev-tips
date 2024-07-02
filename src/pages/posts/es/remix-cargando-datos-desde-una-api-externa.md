---
layout: ../../layouts/Post.astro
title: 'Remix cargando datos desde una API externa'
metaTitle: 'Remix cargando datos desde una API externa'
metaDesc: 'Cargando datos desde la API de Pokemon en Remix'
image: /images/05-05-2022.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - remix
---

Hasta ahora, hemos explorado [cargar datos estáticos](https://daily-dev-tips.com/posts/remix-and-data-loading/) y [cargar datos desde nuestra base de datos](https://daily-dev-tips.com/posts/adding-prisma-to-remix/), pero otro método ampliamente utilizado es cargar desde una API externa.

En nuestro caso, consultaremos la API de Pokémon para obtener una lista de todos los Pokémon. Podremos visualizar una imagen relevante haciendo clic en cada uno.

Utilizaré el proyecto que hemos configurado hasta ahora.
Si deseas codificar conmigo, comienza con este [repositorio en GitHub](https://github.com/rebelchris/remix-starter/tree/error-handling).

## Creando las llamadas a la API de Pokémon

Lo primero que queremos hacer es agregar un nuevo archivo de servidor. En nuestro caso, este archivo será bastante sencillo, pero es posible que deseemos reutilizar algunas de estas llamadas más adelante.

Crea el archivo `pokemon.server.ts` dentro de tu directorio `app/models`.

Aquí necesitaremos dos funciones, una para obtener la lista principal de todos los Pokémon y otra para obtener los detalles de un Pokémon específico basado en su nombre.

La primera función es la más sencilla:

```js
export async function getPokemons() {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  ).then((res) => res.json());

  return res.results;
}
```

Técnicamente también podríamos retornar el hook `await fetch`, pero como solo estamos interesados en los resultados, los retornamos directamente.

> Nota: La API de Pokémon devuelve un resultado paginado. Por eso necesitamos acceder a `res.results` aquí.

La segunda parte consiste en recuperar el Pokémon por su nombre.

```js
export async function getPokemon(name: string | undefined) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
    (res) => res.json()
  );

  return {
    name: name,
    img: res.sprites.front_default,
  };
}
```

Aquí aplicamos el mismo truco de solo retornar lo que necesitamos. Puedes agregar tantos campos como desees del objeto de respuesta.

## Creando la lista general de Pokémon

Ahora que tenemos acceso a los datos, podemos comenzar a utilizarlos.
Crea una carpeta `Pokemon` dentro de tu directorio `app/routes`.

Y dentro de esta carpeta crea el archivo `index.tsx`, que será nuestro archivo de vista general.

Luego podemos aprovechar TypeScript para agregar el cargador de una manera segura en cuanto a tipos.

```js
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPokemons } from "~/models/pokemon.server";

type LoaderData = {
  data: Awaited<ReturnType<typeof getPokemons>>;
};

export const loader = async () => {
  return json<LoaderData>({
    data: await getPokemons(),
  });
};

export default function Posts() {
  const { data } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        Which Pokémon do you want to catch?</h1>
      <ul className='mx-auto text-center'>
        {data.map((pokemon) => (
          <li key={pokemon.name}>
            <Link
              to={pokemon.name}
              className="text-blue-600 underline"
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

Los principales puntos a tener en cuenta son la función `loader` real y la llamada a esta función dentro del componente.

Esto consultará nuestro archivo de servidor recién creado y solicitará todos los Pokémon.

Luego los renderizamos en una lista, lo que resulta en lo siguiente:

![Lista de Pokémon en Remix](https://cdn.hashnode.com/res/hashnode/image/upload/v1650864196915/CCmV7Z9vQ.png)

También observa que usamos el componente de enlace para enlazar a cada Pokémon según su nombre.
Utilizaremos esta información en la siguiente parte.

## Renderizando páginas individuales de Pokémon

Como mencionamos antes, enlazamos a cada Pokémon y esto generará una URL como esta: `/pokemon/${name}`.
Al aprovechar esto, podemos agregar un archivo `$name.tsx` en nuestro directorio `pokemon`.

Nota que `$name` es el parámetro que queremos leer más adelante.

La configuración de este archivo es muy similar a la página de vista general, pero utiliza una función diferente.

```js
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPokemon } from "~/models/pokemon.server";

type LoaderData = {
  pokemon: Awaited<ReturnType<typeof getPokemon>>;
};

export const loader: LoaderFunction = async ({params,}) => {
  return json({
    pokemon: await getPokemon(params.name),
  });
};

export default function PostSlug() {
  const { pokemon } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        You caught: {pokemon.name}
      </h1>
      <img className='mx-auto' src={pokemon.img} />
    </main>
  );
}
```

Y ahora, al hacer clic en nuestro Pokémon, obtenemos la siguiente página.

![Pokémon individual en el sitio web de Remix](https://cdn.hashnode.com/res/hashnode/image/upload/v1650864456616/8tKzDIszf.png)

Esta es la forma más detallada de cargar datos desde una API externa. Siempre podrías optar por usar los endpoints directamente en las funciones de carga de tus archivos.
Sin embargo, al extraerlos, te estarás preparando para el futuro.

Puedes encontrar el código completo en [GitHub](https://github.com/rebelchris/remix-starter/tree/pokemon-api).

### ¡Gracias por leer y conectémonos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
