---
layout: ../../layouts/Post.astro
title: 'Alojar imágenes a través de Google Drive'
metaTitle: 'Cómo alojar imágenes en Google Drive [2021 Tutorial]'
metaDesc: 'Aprende cómo alojar tus imágenes en Google Drive y crear URLs públicas para imágenes.'
image: /images/15-05-2021.jpg
date: 2024-07-02T00:00:00.000Z
modifiedDate: 2024-07-02T00:00:00.000Z
tags:
  - hosting
---

El otro día estaba jugando con algunos efectos de imagen y necesitaba un host para servirlas desde un lugar en línea.

No me malinterpretes. Sé que hay muchas herramientas y sitios web que hacen esto por ti.
Sin embargo, aprendí que Google Drive también podría ser un host de imágenes.

Como persona que tiene almacenamiento ilimitado en Google, valía la pena intentarlo.

## Alojar imágenes públicas en Google Drive

Hoy te mostraré cómo alojar imágenes en Google Drive y hacerlas disponibles para todos.

Primero, abre tu [Google Drive](https://drive.google.com/drive/u/0/my-drive) y sube una imagen.

Para este propósito, no importa si está en una carpeta o no.

![Imagen subida en Google Drive](https://cdn.hashnode.com/res/hashnode/image/upload/v1620712526448/QYjw87XYA.png)

Esa es la primera parte. Ahora, podemos hacer clic en la imagen y seleccionar la opción de compartir.

![Botón de compartir en Google Drive](https://cdn.hashnode.com/res/hashnode/image/upload/v1620712672796/k_YLwvGAG.png)

Cambié la opción a "cualquiera con el enlace" para estar seguro. Obtendrás un enlace como este:

```
https://drive.google.com/file/d/10YD7sJI_HHDXmQM4h96alvyGIU53nGYZ/view?usp=sharing
```

## Crear URL pública de imagen alojada en Google Drive

En el enlace, la parte después de /d/ es lo que estamos buscando, ya que es el ID único de la imagen.

Podemos copiar el ID único y crear la siguiente **URL de imagen**:

```
https://drive.google.com/uc?id={ID}
```

Entonces, en nuestro caso, obtenemos un enlace como este:

```
https://drive.google.com/uc?id=10YD7sJI_HHDXmQM4h96alvyGIU53nGYZ
```

Y podemos usar la imagen de esta manera:

![Imagen de sí, alojo en Google Drive](https://drive.google.com/uc?id=10YD7sJI_HHDXmQM4h96alvyGIU53nGYZ)

Y eso es todo. Ahora puedes usar tu Google Drive para alojar imágenes.

### ¡Gracias por leer y conectémonos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
