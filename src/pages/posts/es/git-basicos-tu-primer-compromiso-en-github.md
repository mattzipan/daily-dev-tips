---
layout: ../../layouts/Post.astro
title: 'Conceptos básicos de Git: Tu primer commit en GitHub'
metaTitle: 'Conceptos básicos de Git: Tu primer commit en GitHub'
metaDesc: 'Creación de un nuevo repositorio git y cómo hacer push a GitHub, una guía paso a paso'
image: /images/05-11-2021.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - git
---

Ahora que tenemos una introducción básica sobre [qué es Git](https://daily-dev-tips.com/posts/git-basics-what-is-git/) y [cómo funciona GitHub](https://daily-dev-tips.com/posts/git-basics-what-is-github/), ¡vamos a crear nuestro primer repositorio git y hacer push a GitHub!

Sí, vamos a hacer todo eso hoy.

El resultado es un repositorio en GitHub que tú u otra persona pueden usar para hacer un seguimiento de tu software.

## Inicializar un repositorio git

Un repositorio es una carpeta en tu sistema. Pero esa carpeta aún no sabe que debería ser un repositorio git.

Vamos a cambiar eso. Primero, crea una carpeta de prueba en tu máquina local. Yo la nombraré `git-test`.

```bash
mkdir git-test && cd git-test
```

Los comandos anteriores crearán una carpeta y navegarán a esa carpeta. Puedes ejecutar estos comandos en tu terminal.

Para inicializar un nuevo repositorio git, ejecuta el siguiente comando en esa carpeta.

```bash
git init
```

Deberíamos ver una respuesta como la siguiente.

![Git init exitoso](https://cdn.hashnode.com/res/hashnode/image/upload/v1635139826200/T9C1b4J8-.png)

A partir de ahora, Git hará un seguimiento de los cambios y archivos que agreguemos, ¡lo cual es fantástico!

## Agregar archivos al repositorio

Vamos a agregar un simple archivo `README.md` a nuestro repositorio. Puedes usar un editor para esto.

Dentro de este archivo, coloqué el siguiente markdown para pruebas.

```md
# Hello GitHub
```

Ahora podemos verificar si Git rastreó este cambio usando el comando de estado.

```bash
git status
```

![El archivo ha cambiado, pero no está rastreado en Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140058934/flKgWl9DX.png)

Como puedes ver, el estado menciona que el archivo readme es nuevo o ha cambiado, pero aún no está rastreado.

Para agregar un solo archivo a Git, podemos usar el comando `add` de la siguiente manera:

```bash
git add README.md
```

También puedes agregar todos los archivos abiertos usando un `.`.

```bash
git add .
```

Si ejecutamos el comando `status` nuevamente, deberíamos ver que el archivo readme ahora está rastreado.

![Agregando un archivo a Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140201076/qHqJ1FOb8.png)

## Hacer commit de los cambios

Este cambio ahora está rastreado pero no comprometido como un commit específico. 
Un commit es como un momento en el tiempo para tu código, así que digamos que esta es ahora la verdad. Podemos hacer commit de esto en Git para capturarlo.

El commit puede involucrar múltiples archivos a la vez. No está limitado a cada archivo individual.

Ejecuta el comando `commit`.

```bash
git commit -am "Describe your commit"
```

Déjame explicarte algunos de los parámetros aquí:

- `-a`: Significa hacer commit de todos los cambios en el directorio de trabajo
- `-m`: Pasar un mensaje como el mensaje de commit
- `"MSG"`: El texto allí es tu mensaje de commit y debe describir lo que has hecho

![Cambios de commit en Git](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140522265/Y5gz-82JE.png)

Si volviéramos a ejecutar el estado ahora, veríamos que no hay nada pendiente.

![Estado de Git limpio](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140568723/O4PCISf-sd.png)

Hasta ahora, podemos hacer un seguimiento de cualquier cambio localmente, lo cual es un gran comienzo. Pero lo que realmente queremos lograr es hacer un seguimiento de ello en un sistema distribuido como GitHub.

## Agregar GitHub como un remoto

Dirígete a [GitHub](https://github.com/new) y crea un nuevo repositorio.
Dale a este repositorio un nombre descriptivo para tu proyecto.

![Crear nuevo repositorio en GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140706164/ql8FvPeN7.png)

Una vez hecho esto, ingresa al repositorio vacío en GitHub.
Tiene toda la información que necesitamos, ya que seguiremos el segundo párrafo del código de ejemplo.

![Descripción del repositorio vacío en GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1635140780469/XtUegZPbD.png)

Vuelve a tu terminal en la carpeta del proyecto en la que estamos trabajando.

Ejecuta el siguiente comando que acabas de obtener de GitHub. (Asegúrate de que esta es la URL de tu repositorio)

```bash
git remote add origin git@github.com:rebelchris/git-test.git
```

No hay una retroalimentación real para este paso.

Agregamos un remoto con el nombre `origin` en el paso anterior. Puedes nombrarlo de manera diferente, pero origin es el predeterminado y el más común.

## Hacer push de los cambios de git a GitHub

El último paso que queremos hacer es subir nuestro código a GitHub.

Hacer esto permitirá llevar un seguimiento de nuestros cambios y todos los archivos que agregamos.

Necesitamos ejecutar el siguiente comando para hacer push a GitHub tal como lo acabamos de configurar.

```bash
git push origin master
```

Aquí le decimos a git que haga push a nuestro remoto `origin` en la rama `master`.

![Retroalimentación del comando git push en la terminal](https://cdn.hashnode.com/res/hashnode/image/upload/v1635141007135/FTbA_6bxR.png)

Y si ahora vas a GitHub, deberías ver tu código y commit.

![GitHub mostrando nuestro código de proyecto y commit](https://cdn.hashnode.com/res/hashnode/image/upload/v1635141058782/phQ7q1_KHe.png)

## Haciendo cambios y comiteándolos

Tomemos un tiempo para explorar más cómo funciona esto.

Modifica el archivo readme e incluye más contenido.

```md
# Hello GitHub

Hola GitHub, soy Chris, y acabo de hacer push de código hacia ti.
```

Al mismo tiempo, agrega otro archivo para ver cómo funciona con múltiples archivos.
Creé un archivo simple `test.txt` y agregué algunas palabras.

Ahora sigamos los pasos anteriores nuevamente.

1. **Agrega los archivos**: `git add .`
2. **Haz un nuevo commit**: `git commit -am "Changed readme, added test file"`
3. **Haz push de los cambios**: `git push origin master`

![Pasos de Git para comitear nuevos cambios](https://cdn.hashnode.com/res/hashnode/image/upload/v1635141302146/jhWHiUEyY.png)

Y ahora vemos nuestro nuevo archivo y segundo commit aparecer en GitHub.

![Nuevo commit en GitHub](https://cdn.hashnode.com/res/hashnode/image/upload/v1635141331443/I6SSQKhUQ.png)

¡Espero que hayas disfrutado este artículo y que hayas tenido tu primera experiencia de Git a GitHub!

Puedes encontrar mi proyecto de demostración en [GitHub](https://github.com/rebelchris/git-test) si lo quieres como referencia.

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectar en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
