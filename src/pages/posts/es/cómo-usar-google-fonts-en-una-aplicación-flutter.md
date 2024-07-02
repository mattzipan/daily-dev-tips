---
layout: ../../layouts/Post.astro
title: 'Cómo usar Google Fonts en una aplicación Flutter'
metaTitle: 'Cómo usar Google Fonts en una aplicación Flutter - Daily Dev Tips'
metaDesc: "Vamos a ver cómo podemos cargar Google Fonts en una aplicación Flutter"
image: /images/15-07-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - flutter
---

Cargar fuentes personalizadas a menudo es necesario para sitios web, aplicaciones y diseño gráfico.
Hoy investigaremos cómo cargar fuentes de Google dentro de una aplicación Flutter.

El resultado se verá así:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/fonts_rho3dy.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/fonts_u7eg1u.mp4" type="video/mp4" />
</video>

Si quieres trabajar conmigo, comenzamos con la aplicación básica de andamiaje que puedes [descargar desde GitHub](https://github.com/rebelchris/flutter/tree/hello-world).

## Instalando el paquete de Google fonts en Flutter

El primer paso es cargar el paquete de Google fonts.
Añade el paquete de Google fonts en las dependencias de tu `pub spec.yml` para hacerlo.

```yaml
dependencies:
  flutter:
    sdk: flutter

  #Load the Google fonts package
  google_fonts: ^2.1.0
```

## Cargando la fuente

El siguiente paso es importar el paquete de fuentes en nuestro archivo dart. Abramos el archivo `lib/main.dart` y coloquemos la siguiente importación.

```dart
import 'package:google_fonts/google_fonts.dart';
```

Ahora podemos usar cualquier fuente de Google que deseemos, pero hay múltiples opciones que podemos utilizar.

## Cargando una fuente de Google para un widget específico de Flutter

El enfoque más básico es establecer la fuente en un widget de Texto específico. Ya tenemos uno en nuestro ejemplo, así que elijamos una fuente divertida y veámosla en acción.

Voy a usar la [fuente Pacifico](https://fonts.google.com/specimen/Pacifico?query=pacifi), porque mostrará mejor cómo funciona.

Ahora agreguemos esta fuente como el estilo para nuestro widget de Texto.

```dart
Text(
  'Hello World 👋',
  textDirection: TextDirection.ltr,
  style: GoogleFonts.pacifico(fontSize: 48),
)
```

Y eso resulta en lo siguiente:

![Fuente Pacifico de Google en la aplicación Flutter](https://cdn.hashnode.com/res/hashnode/image/upload/v1625809212636/1cXeaTq2f.png)

¡Un resultado bastante genial ya!

## Cargando una fuente de Google para la barra de la aplicación en Flutter

Lo mismo se puede usar para cambiar la fuente de la barra de la aplicación si la estás usando.

```dart
appBar: AppBar(
  title: Text(
    'Probando Google Fonts',
    style: GoogleFonts.pacifico(),
  ),
),
```

Y se verá así:

![Barra de aplicaciones con fuentes de Google](https://cdn.hashnode.com/res/hashnode/image/upload/v1625810148151/Z7yCeFPVR.png)

## Cargando fuentes de Google como fuente del tema

Otra cosa que podríamos hacer es cambiar toda la fuente del tema de la aplicación a una fuente de Google.

```dart
MaterialApp(
  theme: ThemeData(
    textTheme: GoogleFonts.pacificoTextTheme(),
  ),
)
```

¡Esto cambiará todos los elementos de texto en nuestra aplicación principal a esta fuente de Google!

Así que si tenemos nuestro texto principal así:

```dart
Text(
  'Hello World 👋',
  textDirection: TextDirection.ltr,
),
```

Y eso resultará en:

![Fuente de Google cargada como tema](https://cdn.hashnode.com/res/hashnode/image/upload/v1625810422716/_aXAC3ddo.png)

> Nota: la barra de aplicaciones no se cambia aquí ya que la fuente del tema no cambiará eso por defecto.

¿Quieres ver cómo funciona esto?
Siéntete libre de revisarlo en [GitHub](https://github.com/rebelchris/flutter/tree/google-fonts).

### ¡Gracias por leer y conectemos!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
