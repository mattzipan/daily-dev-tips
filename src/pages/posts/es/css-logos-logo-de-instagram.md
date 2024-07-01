---
layout: ../../layouts/Post.astro
title: 'Logos CSS: logo de Instagram'
metaTitle: 'Logos CSS: logo de Instagram'
metaDesc: "Recreemos el logo de Instagram en CSS"
ogImage: /images/18-06-2022.jpg
image: https://daily-dev-tips.com/cdn-cgi/imagedelivery/Bki7Af2hq0JKVFw1XYYMQg/70d66354-fafd-4236-76f5-ddf57f488400
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - css
  - css-logos
---

Estoy seguro de que todos han visto este antes, el logo de Instagram.

Como referencia, es el moderno que se ve así:

![Instagram logo](https://cdn.hashnode.com/res/hashnode/image/upload/v1654670003399/aOsHknZja.png)

## Analizando el logo

Seré honesto, el logo parecía mucho más fácil de crear de lo que realmente fue.

¿Te preguntarás qué es lo complicado de esto?
Todo está en el fondo, verás que incluso mi versión no es perfecta, pero cada imagen de muestra en internet tiene un gradiente de fondo diferente.

Cuando miras de cerca, ves que no es un gradiente particular. Es una especie de gradientes superpuestos.

Vamos a sumergirnos en esto y te mostraré cómo creé mi versión.

## Logo de Instagram en CSS

Lo hago extra desafiante usando solo un div y haciendo todo desde ese único elemento.

```html
<div class="instagram"></div>
```

Empecemos configurando algunas variables que usaremos.

```css
:root {
  --size: 50vmin;
  --white: #fff;
  --blue: #3051f1;
  --purple: #c92bb7;
  --red: #f73344;
  --orange: #fa8e37;
  --yellow: #fcdf8f;
  --yellow_to: #fbd377;
}
```

Luego pasemos a crear el contorno básico de la caja. Usaré unidades `em` ya que permiten una mejor escala de los bordes.

```css
.instagram {
  font-size: var(--size);
  width: 1em;
  aspect-ratio: 1;
  border-radius: 0.2em;
  background: var(--purple);
}
```

He configurado temporalmente el fondo en morado para que puedas ver lo que tenemos hasta ahora.

![Forma del contorno del logo de Instagram](https://cdn.hashnode.com/res/hashnode/image/upload/v1654670347584/6QPRoZWE-.png)

Ahora vamos a sumergirnos en estos gradientes. Es un poco complicado ya que hay un gradiente superpuesto.

Afortunadamente, para nosotros, los gradientes en CSS permiten múltiples instancias que pueden superponerse en un fondo.
Por ejemplo, este es un código válido:

```css
background: linear-gradient(45deg, blue, transparent), radial-gradient(red, transparent);
```

Esto nos daría algo como esto:

![Gradientes superpuestos en CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654670527849/xgwEycQWq.png)

Ahora veamos cómo podemos comenzar. Decidí empezar con el gradiente de fondo azul/morado.

```css
linear-gradient(145deg, var(--blue) 10%, var(--purple) 70%)
```

Esto resulta en el siguiente resultado.

![CSS linear gradient](https://cdn.hashnode.com/res/hashnode/image/upload/v1654670623101/Msg28qgST.png)

Ahora, la parte complicada es superponer los gradientes amarillo, naranja y rojo.
Para lograrlo, debemos asegurarnos de que el gradiente se coloque encima del lineal que acabamos de crear.

```css
background: radial-gradient(
    circle farthest-corner at 28% 100%,
    var(--yellow) 0%,
    var(--yellow_to) 10%,
    var(--orange) 22%,
    var(--red) 35%,
    transparent 65%
  ), linear-gradient(145deg, var(--blue) 10%, var(--purple) 70%);
```

Con esto en su lugar, deberíamos obtener el siguiente resultado.

![Gradientes apilados en CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654670723552/XfxJsLp1s.png)

Y eso es todo, para mí, se ve muy cercano al logo real.

> Nota: Podrías mejorar esto utilizando múltiples gradientes radiales apilados unos sobre otros.

Lo siguiente que necesitamos es el icono del contorno de la cámara, y como ya no tenemos más elementos, tenemos que usar los selectores `:before` y `:after` de nuevo.

Comencemos con el contorno.

```css
.instagram:before {
  content: '';
  color: var(--white);
  position: absolute;
  border-radius: inherit;
  aspect-ratio: 1;
  border: 0.05em solid;
  width: 65%;
}
```

![Borde del contorno de Instagram en CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654670866243/n0kOh1XXb.png)

Luego, para el interior, simplemente usamos el selector after.

```css
.instagram:after {
  content: '';
  color: var(--white);
  position: absolute;
  border-radius: inherit;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 0.05em solid;
  width: 35%;
}
```

![Adición del círculo del logo de Instagram en CSS](https://cdn.hashnode.com/res/hashnode/image/upload/v1654671113649/zBmK_0-xU.png)

Como puedes ver, tanto el before como el after son muy similares. Simplemente hacemos uno más redondeado y pequeño.

Escucho tu pregunta, ¿y qué pasa con el pequeño punto? No nos quedan selectores.
Y es cierto, pero tenemos a nuestro buen amigo el box-shadow que podemos usar para esto.

```css
.instagram:after {
  box-shadow: 0.22em -0.22em 0 -0.18em;
}
```

Con eso en su lugar, deberíamos ver el resultado que ves en este CodePen.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="poaOYPK" data-user="rebelchris" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>Ver el Pen <a href="https://codepen.io/rebelchris/pen/poaOYPK">
  Logos CSS: logo de Instagram</a> por Chris Bongers (<a href="https://codepen.io/rebelchris">@rebelchris</a>)
  en <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async defer src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### ¡Gracias por leer y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
