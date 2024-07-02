---
layout: ../../layouts/Post.astro
title: 'Cómo importar un widget local en Flutter'
metaTitle: 'Cómo importar un widget local en Flutter'
metaDesc: 'Tutorial sobre cómo importar un archivo dart local en Flutter'
image: /images/14-07-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - flutter
---

Hasta ahora, hemos tenido una visión bastante básica de [Flutter](https://daily-dev-tips.com/posts/flutter-stateful-and-stateless-widgets/) y cómo funciona todo.
Incluso hicimos una excelente [aplicación de lista de tareas de ejemplo en Flutter](https://daily-dev-tips.com/posts/build-a-todo-list-app-with-flutter/).

Sin embargo, hasta ahora hemos colocado todo nuestro código en el archivo `lib/main.dart`.
Puede que te estés preguntando, está bien, pero esto se vuelve un poco difícil de manejar. Y eso mismo me preguntaba yo.

Así que veamos cómo podemos mover algo de código a otro archivo e importarlo en nuestro archivo principal.

> Nota: esta guía no te dice las mejores prácticas sobre estructuras de carpetas, solo es una introducción sobre cómo funciona.

## Importar un archivo dart local en Flutter

Comencemos de manera sencilla y creemos un pequeño widget que intentaremos incorporar en nuestra aplicación básica.

Vamos a trabajar en la aplicación básica de Flutter. Para empezar, puedes descargar este código en [GitHub](https://github.com/rebelchris/flutter/tree/stateful-widget).

Ahora creemos una nueva carpeta en nuestro `lib` llamada `screens` y coloquemos un archivo llamado `home.dart` dentro de esta carpeta.

![Estructura de carpetas en Flutter](https://cdn.hashnode.com/res/hashnode/image/upload/v1625771768425/-qzpRv7-y.png)

En este archivo, colocaremos el código de nuestro widget básico de la siguiente manera:

```dart
import 'package:flutter/material.dart';

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'You have pushed the button this many times:',
              ),
              Text(
                '$_counter',
              ),
              TextButton(
                onPressed: _incrementCounter,
                child: const Text('Add number'),
              ),
            ]),
      ),
    );
  }
}
```

Y en nuestro archivo `main.dart`, podemos eliminar todo ese código, de modo que se vea así:

```dart
import 'package:flutter/material.dart';

void main() async {
  runApp(
    MaterialApp(debugShowCheckedModeBanner: false, home: MyApp()),
  );
}
```

Sin embargo, tu editor mostrará un error diciendo que no sabe qué es MyApp, ¡y tiene razón!
Así que arreglemos eso importando nuestra nueva pantalla de inicio.

```dart
import 'package:flutter_app/screens/home.dart';
```

Ok, eso tiene sentido, pero ¿de qué se trata este `package:flutter_app`?

El paquete le indica a Flutter de qué paquete cargar algo.
`flutter_app` se refiere a nuestra aplicación. Si te preguntas dónde establecemos esta variable, abre el archivo `pubspec.yaml` y verifica la variable `name` ¡allí!

```yaml
name: flutter_app
```

¡Genial, ¿verdad?! Nuestro pequeño paquete.
Y con este conocimiento, ahora podemos mover ciertos widgets y pantallas a sus propios archivos para crear más estructura en nuestra aplicación.

Si no estás seguro de cómo debería funcionar, también puedes descargar mi código de ejemplo desde [GitHub](https://github.com/rebelchris/flutter/tree/feature/import-files).

### ¡Gracias por leer y mantengámonos conectados!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
