---
layout: ../../layouts/Post.astro
title: 'Recuperación automática con React Query'
metaTitle: 'Recuperación automática con React Query'
metaDesc: 'Añadiendo una opción a React Query para recuperar datos automáticamente'
image: /images/07-02-2022.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - react
---

Una característica súper genial de React Query es que podemos volver a recuperar datos automáticamente en un intervalo especificado.

Esto podría ser útil si cambias rápidamente datos que necesitan ser verificados cada minuto.

En nuestro ejemplo, llamaremos a un endpoint de API aleatorio, lo que significa que cada solicitud tiene nuevos datos, y mostraremos lo que sea que esté en esa nueva recuperación.

Se verá así:

<!-- ![Recuperación automática con React Query](https://cdn.hashnode.com/res/hashnode/image/upload/v1643438032817/xuVmzD3br.gif) -->
<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643438043/refetch_mqqzwl.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/v1643438042/refetch_xklxcm.mp4" type="video/mp4" />
</video>

## Usando la recuperación automática en React Query

Para usar el modo de recuperación automática, puedes pasar un parámetro opcional al hook de React Query llamado `refetchInterval`. El valor está en milisegundos.

```js
const { isLoading, data } = useQuery(
  'vehicle',
  async () => {
    const { data } = await axios.get(
      'https://random-data-api.com/api/vehicle/random_vehicle'
    );
    return data;
  },
  {
    refetchInterval: 6000,
  }
);
```

El ejemplo anterior consultará la API de datos aleatorios y pedirá un vehículo aleatorio.
Esta llamada volverá a recuperar los datos cada 6000 milisegundos.

Al implementar código como este, ten en cuenta que esto puede ser pesado para tu API, y se debe ser prudente sobre cuándo usar este enfoque.

## Otras opciones de recuperación

React Query viene con más funciones de recuperación que podemos aprovechar.

Por defecto, se volverá a recuperar automáticamente cada vez que la ventana se enfoque. Por ejemplo, echemos un vistazo a las otras opciones disponibles:

- `refetchInterval`: Ver el ejemplo anterior
- `refetchIntervalInBackground`: Cuando se establece en true, la función anterior se ejecutará incluso cuando la pestaña esté en segundo plano
- `refetchOnMount`: Puedes establecer esto en false para no hacer la carga inicial al montar
- `refetchOnWindowFocus`: Volverá a recuperar cada vez que la ventana se enfoque. Puedes establecer esto en false
- `refetchOnReconnect`: Volverá a recuperar una vez que se haya restablecido una conexión

Entre todas estas opciones, puedes mezclar cuándo se deben cargar los datos.

Puedes probar la recuperación en este Sandbox.

<iframe src="https://codesandbox.io/embed/gifted-flower-opr8x?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="gifted-flower-opr8x"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
   
### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
