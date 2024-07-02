---
layout: ../../layouts/Post.astro
title: '¿Qué es exactamente Frontmatter?'
metaTitle: '¿Qué es exactamente Frontmatter?'
metaDesc: '¿Qué es Frontmatter y cómo puedes usarlo en archivos Markdown'
image: /images/16-05-2022.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - markdown
---

Cuando escribo mis artículos que incluyen archivos Markdown o datos, a menudo me refiero a `Frontmatter`.

## ¿Qué es Frontmatter?

Pero, ¿qué es exactamente este Frontmatter?

Frontmatter es una forma de identificar metadatos en archivos Markdown. Los metadatos pueden ser literalmente cualquier cosa que desees, pero a menudo se usan para elementos de datos que tu página necesita y que no deseas mostrar directamente.

Algunos ejemplos de metadatos comunes son:

- Título del post
- Descripción para fines de SEO
- Etiquetas que pertenecen a un documento
- O la fecha en que fue escrito

Estos son solo algunos ejemplos, y puedes hacer lo que quieras con Frontmatter.

## ¿Cómo agregar Frontmatter?

Para agregar Frontmatter a un documento Markdown, debes comenzar escribiendo un bloque de tres puntos en la parte superior de tu archivo.

```js
---
title: Sección Frontmatter
---

# Sección Markdown
```

Puedes ver los tres puntos como un ejemplo en el ejemplo anterior. Todo lo que esté ahí se verá como metadatos.

Debajo de los segundos tres puntos es donde comenzará nuestro archivo Markdown predeterminado.

## Algunas opciones básicas de Frontmatter

Es importante notar que Frontmatter se analiza como bloques YAML, por lo que la indentación es importante.

Por ejemplo, podemos establecer variables regulares con una configuración de dos puntos:

```js
---
title: 'Título del documento'
---
```

O podemos convertirlas en una matriz de objetos:

```js
---
tags:
	- JavaScript
	- Markdown
---
```

Alternativamente, incluso puedes usar la forma de corchetes para definir matrices.

```js
---
tags: ["JavaScript", "Markdown"]
---
```

En casos extremos, es posible que incluso desees tener matrices de objetos multidimensionales.

```js
---
tech:
	- frontend
		stack: Remix
	- backend
		stack: Go
---
```

Además de matrices, es posible que desees usar bloques de texto de varias líneas.

La primera forma de agregar esto es solo visualmente en tu editor de código. Esto no agregará nuevas líneas en el código generado.

```js
---
description: >
	this is a
	multiline
	string
---
```

Lo que producirá: `esto es una cadena de texto de varias líneas`.

Sin embargo, si deseas agregar nuevas líneas, utiliza el método de tubería.

```js
---
description: |
	this is a
	multiline
	string
---
```

Lo que producirá:

```
this is a
multi-line
string
```

## Conclusión

Frontmatter es una forma súper intuitiva de hacer que tus archivos Markdown contengan algunos metadatos, una piedra angular para el SEO. Frontmatter renderiza propiedades MDX como etiquetas para mejorar tus categorías y contenido.

Para mejorar aún más el contenido de tu sitio web, explora <a href="https://storychief.io/blog/seo-tools" target="_blank">herramientas SEO</a> que proporcionan orientación detallada sobre qué incluir y qué evitar en tu contenido.

Puede mejorar tu SEO, datos del sitio web e incluso renderizar adecuadamente las propiedades MDX.

### ¡Gracias por leer y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
