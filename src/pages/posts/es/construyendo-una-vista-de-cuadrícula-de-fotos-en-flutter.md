---
layout: ../../layouts/Post.astro
title: 'Construyendo una vista de cuadrícula de fotos en Flutter'
metaTitle: 'Construyendo una vista de cuadrícula de fotos en Flutter'
metaDesc: 'Cómo construir una cuadrícula de fotos en Flutter'
image: /images/30-07-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - flutter
---

En el artículo de hoy, voy a crear una vista de cuadrícula de fotos en Flutter.
Es muy similar a lo que ves en, por ejemplo, la aplicación de Instagram.

Al final del artículo, obtendrás un resultado como este:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/grid_ls8cad.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/grid_a5mq6u.mp4" type="video/mp4" />
</video>

Para empezar con esto, estoy usando mi artículo anterior donde teníamos una [vista de lista](https://daily-dev-tips.com/posts/navigate-to-a-new-screen-and-back-in-flutter/) como punto de partida.

## Creando la clase PhotoItem

Antes de que construyamos esta increíble aplicación, primero definamos nuestra clase que mantendrá nuestro objeto foto.

```dart
class PhotoItem {
  final String image;
  final String name;
  PhotoItem(this.image, this.name);
}
```

Nada especial. Solo contendrá una imagen y el nombre del autor.
Siéntete libre de agregar más detalles a esto.

También crearemos una lista de elementos de fotos que podemos usar en nuestra vista de cuadrícula.

Puedes colocar el siguiente código en el widget `RouteOne`.

```dart
final List<PhotoItem> _items = [
    PhotoItem(
        "https://images.pexels.com/photos/1772973/pexels-photo-1772973.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "Stephan Seeber"),
    PhotoItem(
        "https://images.pexels.com/photos/1758531/pexels-photo-1758531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "Liam Gant"),
];
```

Estos son dos elementos en nuestro array. Puedes agregar tantos como necesites.

## Renderizar la vista de cuadrícula en Flutter

Ahora veamos cómo podemos renderizar estos elementos dentro de una vista de cuadrícula.

Como cuerpo de nuestro widget `RouteOne`, usamos un `Gridview.builder`, con eso, podemos usar su propio constructor de elementos para renderizar cada elemento.

```dart
body: GridView.builder(
	gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
	  crossAxisSpacing: 0,
	  mainAxisSpacing: 0,
	  crossAxisCount: 3,
	),
	itemCount: _items.length,
	itemBuilder: (context, index) {
	  // Item rendering
	},
),
```

Rápidamente veamos qué está pasando aquí.
El constructor puede usar un delegado que contiene la configuración de la cuadrícula. Como puedes ver, opté por no dejar espacio, por lo que todos los elementos se tocan entre sí.
Y configuré el recuento a tres elementos, lo que significa que cada fila tendrá tres elementos.

Luego definimos el recuento de elementos, como también hicimos para la vista de lista de Flutter.

Y por último, tenemos el constructor de elementos, que recorrerá cada elemento y podrá devolver un widget.

El retorno de este widget para nosotros se verá así:

```dart
return new GestureDetector(
	onTap: () {
	  Navigator.push(
	    context,
	    MaterialPageRoute(
	      builder: (context) => RouteTwo(
	          image: _items[index].image,
	          name: _items[index].name),
	    ),
	  );
	},
	child: Container(
	  decoration: BoxDecoration(
	    image: DecorationImage(
	      fit: BoxFit.cover,
	      image: NetworkImage(_items[index].image),
	    ),
	  ),
	),
);
```

Como puedes ver, estoy envolviendo mi widget en un detector de gestos. Queremos esto para hacer que cada elemento sea clicable.

El hijo será un widget contenedor que incluye la imagen de cada elemento de foto que definimos.

## Navegar a la página de detalles

Como puedes ver arriba, incluimos un detector de gestos para agregar una función de toque.
Lo que significa que cuando hacemos clic en un elemento de nuestra vista de cuadrícula, se empuja a la pila de navegación.
Luego pasamos la imagen y el nombre a la ruta dos.

He modificado la ruta dos para poder recibir estos dos elementos.

```dart
class RouteTwo extends StatelessWidget {
  final String image;
  final String name;

  RouteTwo({Key? key, required this.image, required this.name})
      : super(key: key);
}
```

Así como en la definición de ruta nombrada:

```dart
MaterialApp(debugShowCheckedModeBanner: false, initialRoute: '/', routes: {
  '/': (context) => RouteOne(),
  '/detail': (context) => RouteTwo(image: '', name: ''),
}),
```

Ahora solo queda renderizar la imagen más grande y mostrar el nombre de la persona a quien pertenece esta foto.

```dart
body: Column(
	children: [
	  AspectRatio(
	    aspectRatio: 1,
	    child: Container(
	      width: double.infinity,
	      child: Image(
	        image: NetworkImage(image),
	      ),
	    ),
	  ),
	  Container(
	    margin: const EdgeInsets.all(20.0),
	    child: Center(
	      child: Text(
	        name,
	        style: TextStyle(fontSize: 40),
	      ),
	    ),
	  ),
	],
),
```

Estoy usando un widget columna para renderizar dos elementos hijos.
Uno siendo una relación de aspecto para mantener el tamaño de nuestra imagen, y el otro es el nombre de la persona a quien pertenece esta foto.

Entonces, con este artículo, aprendimos cómo crear una lista de elementos personalizados, crear una vista de cuadrícula en Flutter y tener la opción de navegar a una pantalla detallada con más información.

Si deseas ver el ejemplo de código completo, visita el [repositorio de GitHub](https://github.com/rebelchris/flutter/tree/grid-view) para este código.

### ¡Gracias por leer, y conectemos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
