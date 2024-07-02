---
layout: ../../layouts/Post.astro
title: 'Consultas dependientes en React Query'
metaTitle: 'Consultas dependientes en React Query'
metaDesc: 'Veamos cómo podemos hacer consultas dependientes con React Query'
image: /images/12-02-2022.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - react
---

En algunos casos, puede que solo necesites ejecutar una consulta una vez que se cumpla una condición específica.

Algunos ejemplos de esto son:

- Esperar la entrada del usuario
- Esperar a que la consulta principal devuelva el ID de usuario
- Todavía estamos recuperando un ID desde el almacenamiento
- Esperar una consulta de búsqueda

Y así sucesivamente.

Usando la entrada del usuario en este ejemplo, te mostraré cómo hacer que esto suceda en React Query.

Puedes ver el resultado en el video a continuación. Solo comenzamos a utilizar la consulta una vez que tenemos una entrada válida.
Ponemos la consulta en modo inactivo mientras no exista.

<!-- ![Dependent queries in React Query](https://cdn.hashnode.com/res/hashnode/image/upload/v1643866043645/0xTgpKRQS.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643866080/dependent_z8ykz4.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643866080/dependent_yve5mj.mp4" type="video/mp4" />
</video>

## Consultas dependientes en React Query

Podemos aprovechar la propiedad `enabled` para hacer que las consultas dependan de una variable.
Esto le indica a React Query si esta consulta debe estar habilitada o no, y puede aceptar cualquier cosa que se calcule como un booleano.

Puedes usarlo de esta manera:

```js
const { isIdle, data } = useQuery('your-key', yourQueryFn, {
  enabled: conditionIsTrue,
});
```

Vamos a probarlo y crear una entrada de usuario. Solo cuando esta entrada de usuario sea mayor que cero, debería realizar alguna consulta.

Este código estará basado en la [aplicación React Query Pokemon](https://daily-dev-tips.com/posts/a-first-look-at-react-query/) que construimos anteriormente.

El input se colocará en el componente `App`.

```js
function App() {
  const [number, setNumber] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <input
        type='number'
        value={number}
        max='10220'
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setNumber(0)}>reset</button>
      <PokemonList number={number} />
    </QueryClientProvider>
  );
}
```

Llevamos un seguimiento de un número de estado y actualizamos este estado cuando cambia.
Este estado se pasa a nuestro componente `PokemonList`.

Veamos cómo el componente `PokemonList` puede recibir este número y cómo podemos hacer que nuestra consulta dependa de él.

```js
function PokemonList({ number }) {
  const { isIdle, data, isLoading } = useQuery(
    ['pokemon', number],
    () => fetchPokemon({ number }),
    {
      enabled: number > 0,
    }
  );

  return <></>;
}
```

Recibimos el número y lo asignamos a una clave única específica, como puedes ver arriba.
Luego invocamos la función `fetchPokemon` y pasamos este número a la función.
La dependencia entra en juego en la propiedad `enabled`, donde indicamos a React Query que solo lo habilite cuando sea mayor que cero.

Echemos un vistazo a cómo se ve nuestra función `fetchPokemon` ahora:

```js
const fetchPokemon = async ({ number }) => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
  return await request.json();
};
```

Y luego solo queda corregir el retorno real en el componente.
Agregaremos algunos datos para este Pokémon y llevaremos un seguimiento de nuestros estados `isIdle` y `isLoading` para que el usuario sepa qué está sucediendo.

```js
function PokemonList({ number }) {
  const { isIdle, data, isLoading } = useQuery(
    ['pokemon', number],
    () => fetchPokemon({ number }),
    {
      enabled: number > 0,
    }
  );

  return (
    <div className='App'>
      {isIdle ? (
        <p>Está inactivo...</p>
      ) : isLoading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          <li>
            <strong>Nombre</strong>: {data.name}
          </li>
          <li>
            <strong>Peso</strong>: {data.weight}
          </li>
          <li>
            <strong>Imagen</strong>:
          </li>
          <li>
            <img
              src={data.sprites?.front_shiny ?? data.sprites?.front_default}
              alt={data.name}
            />
          </li>
        </ul>
      )}
    </div>
  );
}
```

¡Y eso es todo!
Hemos creado nuestra primera función de consulta React dependiente.

Puedes probarlo en este Code Sandbox:

<iframe src="https://codesandbox.io/embed/pedantic-lalande-s7y35?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="pedantic-lalande-s7y35"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### ¡Gracias por leer y mantengámonos conectados!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
