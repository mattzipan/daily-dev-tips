---
layout: ../../layouts/Post.astro
title: 'Storybook - simulando llamadas API'
metaTitle: 'Storybook - simulando llamadas API'
metaDesc: 'Cómo simular llamadas API para tus componentes con el complemento MSW de Storybook'
ogImage: /images/26-11-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/62dcaddc-48fd-4243-8792-f3296ca41100
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - storybook
---

A veces, nuestros componentes pueden llamar a endpoints de API, lo que podría añadir una carga innecesaria a nuestro Storybook.

En esos casos, podríamos querer interceptar esas llamadas y simularlas en lugar de retornarlas.

Y por suerte para nosotros, Storybook tiene un addon de simulación que podemos usar para esto.

## Configurando el loader

Voy a añadir un cargador de datos muy simple al archivo de demostración `stories/Page.jsx`.

Es simplemente para demostrar el caso de uso, así que agregaré un mecanismo de obtención de datos de la siguiente manera:

```js
export const Page = () => {
  const [user, setUser] = React.useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((formattedData) => {
        setLoading(false);
        setData(formattedData);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) {
    return <p>cargando...</p>;
  }

  if (error) {
    return <p>Algo salió mal, inténtalo de nuevo más tarde</p>;
  }

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section>
        <h2>Páginas en Storybook</h2>
        <ul>
          {data.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </section>
    </article>
  );
};
```

Esto llamará a la API y mostrará una lista de títulos de publicaciones. Cuando falla, muestra un mensaje de error.

Como puedes ver, esto se llamaría cada vez que ejecutemos esta historia.

¡Así que veamos cómo podemos simular esto en su lugar!

## Instalando el addon MSW

Como se mencionó, usaremos el [addon MSW](https://github.com/mswjs/msw-storybook-addon), que significa: "Mock Service Worker". Este añade un service worker que interceptará y simulará nuestras solicitudes.

Para instalarlo, ejecuta el siguiente comando.

```bash
npm i msw msw-storybook-addon -D
```

Luego necesitaremos inicializar el service worker:

```bash
npx msw init public/
```

Ahora necesitarás dirigirte al archivo `.storybook/preview.js` y agregar las siguientes líneas.

```js
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
```

Y ahora podremos simular solicitudes específicas en nuestras historias.

## Simulación a nivel de componente

Comencemos simulando a nivel de componente. Esto es común ya que tendremos múltiples historias que necesitan la misma simulación.

Como aprendimos antes, podemos usar la [opción de parámetros](https://daily-dev-tips.com/posts/storybook-args-and-parameters/) y simular la llamada que tenemos.

```js
export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    msw: [
      rest.get(
        'https://jsonplaceholder.typicode.com/posts',
        (_req, res, ctx) => {
          return res(
            ctx.json([
              {
                userId: 1,
                id: 1,
                title:
                  'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
              },
            ])
          );
        }
      ),
    ],
  },
};
```

Si ejecutamos nuestra historia, podemos ver que el componente solo renderizará un ítem. Ese es siempre el que describimos aquí.

![Mocked API request](https://cdn.hashnode.com/res/hashnode/image/upload/v1668663447976/pqokUi2nN.png)

## Simulación de un fallo

También podríamos querer probar qué sucede cuando la API devuelve un error, y para esto, podemos usar una opción por historia.

Vamos a crear una nueva historia, para tenerla separada de las existentes.

```js
export const FailedResponse = Template.bind({});
FailedResponse.parameters = {
  msw: [
    rest.get('https://jsonplaceholder.typicode.com/posts', (_req, res, ctx) => {
      return res(ctx.delay(800), ctx.status(403));
    }),
  ],
};
```

Y si abrimos esa historia, veremos el texto de carga durante 800 milisegundos, después de lo cual se presenta el error.

![Mock error status](https://cdn.hashnode.com/res/hashnode/image/upload/v1668663558071/VVZNmV-WJ.png)

Como puedes ver, esta idea por historia sobrescribe la carga principal de nuestro componente.

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
