---
layout: ../../layouts/Post.astro
title: 'Eliminando un archivo .env del historial de Git'
metaTitle: 'Eliminando un archivo .env del historial de Git'
metaDesc: 'Cómo eliminar un archivo del historial de git por completo'
image: /images/10-11-2021.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - git
---
Estoy seguro de que esto le pasa a todos a veces. Accidentalmente subiste un archivo con secretos o una contraseña que no debería haber entrado en el historial de Git.

En el siguiente ejemplo, "accidentalmente" subí mi archivo `.env` a Git simplemente porque olvidé [agregarlo a mi archivo `.gitignore`](https://daily-dev-tips.com/posts/git-basics-ignore-files-from-being-committed/).

![Eliminando un archivo secreto del historial de Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635576880897/T3V0EKt1o.png)

> Nota: ¡Si accidentalmente subiste claves secretas a un repositorio, siempre debes revocarlas y generar nuevas claves!

## Eliminar el archivo de inmediato

Lo mejor que se puede hacer ahora es eliminar el archivo de inmediato y agregarlo a tu archivo `.gitignore`.

En mi caso, añadí lo siguiente al `.gitignore`.

```
# Archivo secreto
.env
```

Vamos a intentar subirlo para ver qué pasa.

![Gitignore no funciona en archivos existentes](https://cdn.hashnode.com/res/hashnode/image/upload/v1635577020667/RI8Em9uCt.png)

Sí, el archivo `.gitignore` no deshace los cambios ya comprometidos. ¿Cómo podemos solucionar esto ahora?

## Eliminar un archivo solo de Git

Puedes eliminar un archivo de Git ejecutando el siguiente comando.

```bash
git rm -r --cached .env
```

Si luego subimos este cambio, verás que el archivo ha desaparecido en GitHub.

![Eliminando un archivo de Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635577175978/MPGXB39KG.png)

Sin embargo, esto no resolvió completamente nuestro problema. Si miramos nuestro historial de Git, todavía podemos encontrar el archivo y exponer los secretos.

![Exponiendo secretos a través del historial de Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635577465128/VVukCpfUd.png)

## Eliminar completamente un archivo del historial de Git

Para eliminar el archivo por completo, podemos usar el siguiente comando.

```bash
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env" HEAD
```

Recibirás algunas advertencias sobre esto, ya que alterará tu historial al recorrer todo tu historial y eliminar al 100% su ocurrencia.

Para subir esto, tienes que ejecutar el siguiente comando.

```bash
git push --force
```

Si miramos nuestro historial, aún podemos ver los commits que incluyen este archivo `.env`, pero el contenido está vacío.

![Archivo completamente eliminado en Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635577747098/p840Qj48P.png)

¡Uf, gracias por apoyarnos Git!

Puedes encontrar el repositorio en el que probé esto en [GitHub](https://github.com/rebelchris/git-test).

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
