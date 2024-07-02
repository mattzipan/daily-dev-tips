---
layout: ../../layouts/Post.astro
title: "Conceptos básicos de Git: Ayuda, mis cambios en nombres de archivos sensibles a mayúsculas no se comiten"
metaTitle: "Conceptos básicos de Git: Ayuda, mis cambios en nombres de archivos sensibles a mayúsculas no se comiten"
metaDesc: 'Cómo commitar cambios sensibles a mayúsculas en Git'
image: /images/22-11-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - git
  - control de versiones
---

Hemos creado un archivo llamado `timezone.js` y lo hemos subido a Git. Todo bien.

![Archivo agregado a Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1636608305170/AocvoV9oC.png)

Pero luego nos dimos cuenta de que todo el repositorio usaba "time zone" con un espacio.

> Aparentemente, hay tres formas correctas de escribir timezone: timezone, time zone y time-zone.

Con esto en mente, podríamos querer uniformar nuestro sistema de archivos y renombrar este archivo a `timeZone.js`. Vamos a hacer ese cambio.

![Archivo cambiado a git change](https://cdn.hashnode.com/res/hashnode/image/upload/v1636608448886/ZHwTJEZyy.png)

Renombré el archivo en la imagen de arriba, pero solo cambié la sensibilidad de mayúsculas.
Git no lo detecta.

Entonces, ¿cómo podemos subir este cambio de nombre de archivo?

## Subiendo un solo cambio de nombre de archivo

Si es solo un archivo, ejecutar el siguiente comando es la forma más fácil de hacerlo.

```bash
git mv timezone.js timeZone.js
```

Esto significa `move` y se puede usar para mover o renombrar un archivo.

![Cambio detectado en git](https://cdn.hashnode.com/res/hashnode/image/upload/v1636608602476/wdxvFeHF3.png)

Ahora puedes subir y enviar este cambio, y también se reflejará en Git.

## Manejo de múltiples cambios de nombre sensibles a mayúsculas

Si haces cambios en más de un archivo, puedes usar la opción uno para hacerlos todos manualmente.

O puedes seguir los siguientes pasos.

1. Eliminar toda la caché de git

```bash
git rm -r --cached .
```

Este comando eliminará la versión en caché de Git de todos los archivos/carpetas en este directorio.
Verás todos los archivos en tus cambios de git, pero no te preocupes. El siguiente paso lo solucionará.

![Eliminar caché de git](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609080967/CNJjyme_5F.png)

2. Volver a añadir el estado actual

```bash
git add --all .
```

Este comando vuelve a añadir todos los archivos, haciendo que solo aparezcan aquellos con cambios.

![Archivo sensible a mayúsculas subido a git](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609143536/iFN7mgFst.png)

Ahora puedes proceder a subir y enviar este cambio para que se refleje en Git.

![Archivo sensible a mayúsculas subido](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609214613/-xa9Wsw8q.png)

## ¿Y qué pasa con las carpetas?

He agregado una carpeta llamada `folder` a mi repositorio de git.

![Carpeta subida a Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609324779/-EKvAikfP.png)

Y ahora vamos a renombrarla a `Folder`.

Nuevamente, este cambio no es detectado por Git, como vimos con el archivo.

Así que probemos la opción uno:

```bash
git mv folder Folder
```

Esto nos da el siguiente mensaje:

```
fatal: renaming 'folder' failed: Invalid argument
```

> Esto solo ocurre en sistemas insensibles a mayúsculas como Mac.

Como solución para esta opción, podríamos ejecutar el siguiente comando.

```bash
git mv folder tmpFolder && mv tmpFolder Folder
```

Esto funcionará ya que primero lo renombramos a algo completamente diferente.
Luego lo renombramos nuevamente pero con la correcta sensibilidad de mayúsculas.

Pero probemos la opción dos para ver qué pasa.

```bash
git rm -r --cached .
git add --all .
```

![Carpeta en mayúsculas](https://cdn.hashnode.com/res/hashnode/image/upload/v1636609864331/Q9IMtb2_d.png)

¡Y funcionó! Entonces, la opción más segura siempre es usar la función de eliminar caché.

Hay algunas otras formas de hacer esto también.
¿Cuál es tu forma preferida de renombrar un archivo/carpeta sensible a mayúsculas en Git?

Puedes encontrar mi prueba en el siguiente [repositorio de GitHub](https://github.com/rebelchris/git-test/tree/timezone).

### ¡Gracias por leer y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
