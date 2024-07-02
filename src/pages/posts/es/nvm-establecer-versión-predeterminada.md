---
layout: ../../layouts/Post.astro
title: 'NVM establecer versión predeterminada'
metaTitle: 'NVM establecer versión predeterminada'
metaDesc: 'Cómo cambiar la versión predeterminada de NVM Node'
ogImage: /images/20-07-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/19659e78-260b-4790-7dd2-d2edc2ff9500
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - javascript
  - nodejs
---

En un artículo anterior, aprendimos sobre [NVM, una excelente manera de gestionar múltiples versiones de Node en tu máquina](https://daily-dev-tips.com/posts/managing-multiple-node-versions-with-nvm/).

Sin embargo, es posible que la mayoría de tus proyectos se ejecuten en una versión específica de Node.
En ese caso, establecer tu versión predeterminada de NVM a esta versión de Node podría tener sentido.

## Configuración de una versión predeterminada de NVM

Para configurar la versión predeterminada de NVM, primero debes asegurarte de que esa versión esté instalada en NVM.

Como recordatorio, puedes instalar una versión así:

```bash
nvm install 16
```

Podemos luego ejecutar el siguiente comando para establecer esto como nuestra versión predeterminada.

```bash
nvm alias default 16
```

Recuerda, esta es una consulta específica sobre un tipo de versión que puedes instalar.
Algunas alternativas válidas son:

```bash
nvm alias default 16

nvm alias default lts

nvm alias default 12.14.3
```

Puedes verificar qué versiones tienes instaladas ejecutando el siguiente comando.

```bash
nvm ls
```

Esto devolverá una lista de todas las versiones que ya tienes instaladas.

## Volver a la versión del sistema

Quizás en algún momento, quieras cambiar a la versión que usa tu sistema.

Podemos ejecutar el siguiente comando para hacerlo:

```bash
nvm alias default system
```

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
