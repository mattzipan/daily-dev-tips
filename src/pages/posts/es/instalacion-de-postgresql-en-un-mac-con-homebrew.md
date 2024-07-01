---
layout: ../../layouts/Post.astro
title: 'Instalar PostgreSQL en Mac con Homebrew'
metaTitle: 'Cómo instalar PostgreSQL en un Mac [2024 Tutorial]'
metaDesc: 'Iniciar rápidamente la base de datos Postgres en Mac con Homebrew: Instalar y lanzar PostgreSQL con brew sin esfuerzo.'
image: /images/12-01-2022.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - postgres
  - postgresql
  - homebrew
  - mac
---

Suponga que echó un vistazo a los <a href="https://insights.stackoverflow.com/survey/2021" target="_blank">resultados de la encuesta de desarrolladores de Stack Overflow 2021</a>.

En ese caso, puede ver que **PostgreSQL**, o *Postgres* para abreviar, es ahora la segunda **base de datos** más querida.
<img src="https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/e815f630-26ec-4ce2-6568-f1d655cc3600/article" alt="Stack overflow most loved databases 2021" width="750" height="500" />

Personalmente, también me encanta Postgres. Por lo tanto, es hora de dedicar un artículo sobre **cómo configurar PostgreSQL en un Mac**.

En este tutorial, aprenderá a **instalar Postgres** en un Macintosh usando **Homebrew**, además exploraremos un poco la base de datos 👀.

Si no ha usado Homebrew antes, consulte mi artículo sobre [usar Homebrew](https://daily-dev-tips.com/posts/homebrew-one-package-manager-to-rule-them-all/).

## Cómo instalar Postgres con Homebrew

Lo primero que queremos hacer es **instalar Postgres DB**.

Antes de ejecutar cualquier comando de instalación en Homebrew, es bueno asegurarse de que su instalación esté actualizada.

```bash
brew update
```

Ahora es el momento; para instalar PostgreSQL ejecute este comando:

```bash
brew install postgresql
```

Una vez finalizada la instalación, debería ver esta línea de salida entre otra información:

```bash
This formula has created a default database cluster with:
  initdb --locale=C -E UTF-8 /opt/homebrew/var/postgres
```

¡Eso significa que la base de datos de Postgres está instalada y está listo!

## Iniciar y gestionar una base de datos Postgres

Para **iniciar la base de datos**, ejecute el siguiente comando en la terminal:

```bash
brew services start postgresql
```

Y para **detener la base de datos Postgres**:

```bash
brew services stop postgresql
```

Una vez que la base de datos esté en funcionamiento, queremos crear un **usuario root** para iniciar sesión e interactuar con la base de datos.

```bash
psql postgres
```

Esto lo registrará en el servidor de Postgres.

![Inicio de sesión del servidor Postgres](https://cdn.hashnode.com/res/hashnode/image/upload/v1641191010341/Zl0poJBew.png)

Desde aquí, puede crear un nuevo usuario con una contraseña.

```bash
CREATE ROLE chris WITH LOGIN PASSWORD 'password';
ALTER ROLE chris CREATEDB;
```

El nombre de mi usuario es `chris`, y mi contraseña es muy segura: `password`.

> Nota: Por favor, use contraseñas seguras. Esto es solo una configuración de demostración.

## Conectar a la base de datos PostgreSQL

La forma más fácil de conectarse a Postgres es a través de herramientas de conexión visual de bases de datos.

Si no está seguro de qué cliente usar: he escrito mis [5 mejores clientes de bases de datos SQL](https://daily-dev-tips.com/posts/top-5-mysql-clients-for-mac/).

Usaremos [TablePlus](https://daily-dev-tips.com/posts/top-5-mysql-clients-for-mac/#heading-1-tableplus) para conectarnos a nuestra base de datos PostgreSQL recién creada.

- Abra la aplicación y cree una "nueva conexión".
- Para el tipo, puede elegir "PostgreSQL".

<img src="https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/3c6a3e97-3475-4a11-7b1f-7e47e2e1f200/article" alt="TablePlus new PostgreSQL database connection" width="750" height="500" />

En cuanto a los detalles de la conexión, debe usar:

- Usuario: El que acaba de crear, en mi caso `chris`.
- Contraseña: La contraseña que configuró, en mi caso, `password`.
- Base de datos: Esto será `postgres`.

El resto de los **datos** ya deberían estar configurados correctamente.

Puede probar la conexión haciendo clic en el botón "Test" en la parte inferior. Debería poner todo en verde.

<img src="https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/266b2095-90e3-4056-ebf1-990896472e00/article" alt="Postgres connection green" width="750" height="500" />

Y eso es todo. Ahora está conectado a su base de datos Postgres 🚀

### ¡Gracias por leer y conectemos!

No dude en suscribirse a mi boletín de correo electrónico y conectarse en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
