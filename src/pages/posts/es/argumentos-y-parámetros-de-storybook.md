---
layout: ../../layouts/Post.astro
title: 'Storybook - Args, and Parameters'
metaTitle: 'Storybook - Args, and Parameters'
metaDesc: 'Trabajando con args y parámetros en historias de Storybook'
ogImage: /images/21-11-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/efba6bfd-c961-4d8a-b2a2-e89896c60800
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - storybook
---

Ahora que hemos [escrito nuestra primera historia](https://daily-dev-tips.com/posts/storybook-writing-stories/), que renderiza un componente relativamente estático, veamos cómo podemos hacerlo un poco más interactivo.

Para esto, tenemos dos elementos para examinar más de cerca, uno de ellos son los `args` y el otro son los `parámetros`.

## Args de Storybook

Los args son un conjunto de argumentos que definen cómo debe renderizarse el componente. Los args son la forma en que Storybook describe estos argumentos. Lo interesante es que podemos cambiarlos sobre la marcha dentro de Storybook.

Veamos cómo podemos agregar algunos args al componente de botón, por ejemplo.

Lo primero que tenemos que hacer es agregar una plantilla. Esta es nuestra componente con los args añadidos.

```js
const Template = (args) => <Button {...args} />;
```

Podemos comenzar añadiendo la primera historia, donde podemos agregar estos args.

```js
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
```

Y ahora, al ejecutar nuestro Storybook, verás el componente renderizado con estos argumentos, pero en la parte inferior, tenemos la opción de cambiarlos.

![Storybook args](https://cdn.hashnode.com/res/hashnode/image/upload/v1668230911672/p4pNBNRcj.png)

Podemos reutilizar estos para cualquier otra historia en este archivo.

```js
export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  primary: false,
};
```

Esto renderizará el mismo componente con la etiqueta, pero el valor predeterminado de primary ahora será falso.

Como alternativa, puedes definir los args a nivel de componente de esta manera.

```js
export default {
  title: 'Button',
  component: Button,
  args: {
    primary: true,
    label: 'Button',
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
};
```

Y en este ejemplo, cada historia que definimos comenzará con el estado primario. En el caso secundario, sobrescribimos ese valor.

## Parámetros de Storybook

Además de los args, también obtenemos parámetros, que dicen algo sobre el entorno de la historia.

Un ejemplo típico sería el tema.

Nuevamente, podemos añadirlo a una historia singular de esta manera.

```js
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};
```

Esto ahora aparecerá en el menú superior de Storybook de esta manera.

![Parámetros de historia en Storybook](https://cdn.hashnode.com/res/hashnode/image/upload/v1668231420107/FTViKAYUk.png)

Sin embargo, lo más común probablemente sería configurarlo para toda la historia de esta manera.

```js
export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
};
```

Además de estos métodos, también tenemos la opción de configurar estos elementos para todos los componentes.

Podemos crear un archivo `preview.js` en nuestro directorio `.storybook` y añadirlo de esta manera.

```js
export const parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};
```

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
