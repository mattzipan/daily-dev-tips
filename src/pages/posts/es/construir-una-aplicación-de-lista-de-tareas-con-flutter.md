---
layout: ../../layouts/Post.astro
title: 'Construir una aplicación de lista de tareas con Flutter'
metaTitle: 'Construir una aplicación de lista de tareas con Flutter'
metaDesc: 'Construir una aplicación de lista de tareas funcional en Flutter y Dart'
image: /images/08-07-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - flutter
---

Hoy vamos a crear una lista de tareas dinámica en Flutter. Podemos agregar nuevos elementos a la lista de tareas y marcarlos como hechos si ya los hemos realizado.

Hay algunos requisitos previos;

Necesitas tener [Flutter instalado](https://daily-dev-tips.com/posts/installing-flutter-on-a-mac/), saber cómo [crear una aplicación básica en Flutter](https://daily-dev-tips.com/posts/flutter-how-it-works-hello-world/), haber leído sobre [widgets y layouts](https://daily-dev-tips.com/posts/exploring-the-flutter-layout-flow/), y conocer los conceptos básicos de [estados en Flutter](https://daily-dev-tips.com/posts/flutter-stateful-and-stateless-widgets/).

Hoy combinaremos este conocimiento y crearemos nuestra primera aplicación en Flutter.
Una lista de tareas, donde puedes agregar nuevos elementos a una lista y marcarlos como hechos ✅.

El resultado final se verá así:

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/flutter_pqubdi.webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/flutter_lcu6dx.mp4" type="video/mp4" />
</video>

## Esquematizando la aplicación básica en Flutter

Para no entrar en muchos detalles, pero para aquellos que comienzan desde cero:

```bash
# create new project
flutter create flutter_todo_app

# navigate to project
cd flutter_todo_app

# run flutter
flutter run
```

Ahora que tenemos una aplicación básica de Flutter en funcionamiento, vamos a eliminar todo del archivo `lib/main.dart`.

> Nota: este es el punto de entrada principal para nuestra aplicación Flutter. Para este artículo, solo usaré ese archivo.

Podemos comenzar importando material dart como un paquete.

```dart
import 'package:flutter/material.dart';
```

El siguiente paso es tener la función principal. En nuestro caso, devolverá una instancia de `TodoApp`, que crearemos en un momento.

```dart
void main() => runApp(
  new TodoApp(),
);
```

Hasta ahora, este TodoApp puede ser en realidad un StatelessWidget. Será el esqueleto alrededor de nuestra lista real.
Queremos aprovechar la aplicación material básica para obtener todo el estilo.

```dart
class TodoApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Todo list',
      home: new TodoList(),
    );
  }
}
```

Como puedes ver en el ejemplo de código anterior, estoy devolviendo un nuevo `MaterialApp` y pasando un título y la función home.
Esta función home devuelve un `TodoList`, otra función que crearemos nosotros mismos.
Este `TodoList` será nuestra lista real y controlará el estado de todos los elementos de la lista de tareas.

Vamos a dirigirnos al TodoList y ver cómo se ve eso:

```dart
class TodoList extends StatefulWidget {
  @override
  _TodoListState createState() => new _TodoListState();
}
```

¿Es eso todo?
Sí, así es. Todo lo que hace el widget es llamar a un estado para evaluar lo que debe suceder y renderizar. En nuestro caso, llamamos al `_TodoListState`. Este contendrá toda la lista y lógica para nuestra aplicación.

```dart
class _TodoListState extends State<TodoList> {
  final TextEditingController _textFieldController = TextEditingController();
  final List<Todo> _todos = <Todo>[];

  @override
  Widget build(BuildContext context) {
	  // Widget template comes here
  }

  // Other functions
}
```

Tomé los conceptos básicos de la función. El estado extiende un cierto estado, en nuestro caso, el widget TodoList.
Luego podemos definir algunas variables, un textController y una lista de tareas pendientes.

Después tenemos nuestro widget, que contendrá la plantilla, y algunas otras funciones que podemos definir más tarde.

Pero volvamos primero a las variables.

```dart
final List<Todo> _todos = <Todo>[];
```

Puede que hayas notado que definimos una lista (array) del tipo `Todo`, pero ¿cómo sabría Flutter cómo se ve un todo?

Y en realidad no lo sabe, así que primero creemos una clase que defina nuestro elemento Todo.
Puedes colocar esto en la sección superior del archivo `main.dart` justo debajo de la importación.

```dart
class Todo {
  Todo({required this.name, required this.checked});
  final String name;
  bool checked;
}
```

Encuentro que esto es muy similar a las definiciones de tipos en TypeScript. Le decimos a Flutter cómo se vería un todo y qué campos son requeridos.
En nuestro caso, tiene un nombre y un estado de verificación.
El estado de verificación no es final ya que lo modificaremos más adelante.

Volviendo a nuestro `_TodoListState`, podemos comenzar a trabajar en nuestro widget para mostrar algo.

```dart
@override
Widget build(BuildContext context) {
	return new Scaffold(
	  appBar: new AppBar(
	    title: new Text('Todo list'),
	  ),
	  body: ListView(
	    padding: EdgeInsets.symmetric(vertical: 8.0),
	    children: _todos.map((Todo todo) {
	      return TodoItem(
	        todo: todo,
	        onTodoChanged: _handleTodoChange,
	      );
	    }).toList(),
	  ),
	  floatingActionButton: FloatingActionButton(
	      onPressed: () => _displayDialog(),
	      tooltip: 'Add Item',
	      child: Icon(Icons.add)),
	);
}
```

Bien, veamos qué está ocurriendo arriba.
Retornamos un Scaffold para nuestra aplicación donde agregamos un AppBar que contendrá un título.
Luego definimos la sección del cuerpo body, que será un widget `ListView` con los todos como hijos.

En este fragmento de código, mapeamos todos los todos en el estado y devolvemos un `TodoItem` para cada elemento. Pasamos el todo y un controlador de cambios a este widget.

Al final, definimos un botón de acción flotante (FAB) que invocará una función llamada `_displayDialog` cuando se presione.

Tenemos varias cosas para revisar en este código:

- Crear un `TodoItem`
- Definir una función `_displayDialog`
- Definir una función `_handleTodoChange`

Vamos a ver cada una de estas partes.

## Creando el TodoItem

El TodoItem es una representación individual para cada elemento de todo en nuestra lista. Nuevamente, este es un widget por sí mismo.

```dart
class TodoItem extends StatelessWidget {
  TodoItem({
    required this.todo,
    required this.onTodoChanged,
  }) : super(key: ObjectKey(todo));

  final Todo todo;
  final onTodoChanged;

  TextStyle? _getTextStyle(bool checked) {
    if (!checked) return null;

    return TextStyle(
      color: Colors.black54,
      decoration: TextDecoration.lineThrough,
    );
  }

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: () {
        onTodoChanged(todo);
      },
      leading: CircleAvatar(
        child: Text(todo.name[0]),
      ),
      title: Text(todo.name, style: _getTextStyle(todo.checked)),
    );
  }
}
```

Como pudiste ver, pasamos un todo y un controlador de cambios a él, así es como lo definimos como un TodoItem.

La siguiente parte es un `TextStyle`. Esto toma un booleano para evaluar si un todo está marcado o no.
Si no está marcado, no retornamos nada. En caso contrario, devolveremos un texto tachado: ~~tachado de la lista~~.

Luego tenemos un widget para mostrar algo realmente.
En nuestro caso, usamos el widget [`ListTile`](https://api.flutter.dev/flutter/material/ListTile-class.html) y agregamos un `onTap` para invocar la función `onTodoChanged`.
También tiene una propiedad `leading`, que contiene la primera letra del todo.
Y un `title`, con nuestro estilo que definimos anteriormente.

Ahora esto podrá renderizar un elemento de todo único en nuestra lista.
Pero hasta ahora, no hemos podido agregar elementos a nuestra lista.
Así que veamos eso.

## Mostrar un diálogo para agregar nuevos Todos

El botón FAB invocará una función llamada `_displayDialog` cuando hagamos clic en él.

Esto debería abrir un diálogo con un área de texto, y como resultado, debería crear un nuevo todo basado en el valor de ese texto.

Crea esta función llamada `_displayDialog` dentro del `_TodoListState`.

```dart
Future<void> _displayDialog() async {
	return showDialog<void>(
	  context: context,
	  barrierDismissible: false, // user must tap button!
	  builder: (BuildContext context) {
	    return AlertDialog(
	      title: const Text('Add a new todo item'),
	      content: TextField(
	        controller: _textFieldController,
	        decoration: const InputDecoration(hintText: 'Type your new todo'),
	      ),
	      actions: <Widget>[
	        TextButton(
	          child: const Text('Add'),
	          onPressed: () {
	            Navigator.of(context).pop();
	            _addTodoItem(_textFieldController.text);
	          },
	        ),
	      ],
	    );
	  },
	);
}
```

Un futuro en Flutter es un valor potencial o un error que estará disponible en algún momento en el futuro.
En nuestro caso, es una cadena de texto después de que el usuario la haya ingresado.

Retornamos un diálogo y dentro del contenido renderizamos un widget `TextField`.
Este widget utiliza el controlador que hemos definido como nuestra variable.

Además, tiene una acción que contiene un botón. Una vez que el usuario presiona este botón, cerramos el diálogo de alerta e invocamos la función `_addTodoItem`.
Dentro de esta función, pasamos la propiedad `text` del `TextField`.

Veamos cómo se verá esta función `_addTodoItem`.

```dart
void _addTodoItem(String name) {
	setState(() {
	  _todos.add(Todo(name: name, checked: false));
	});
	_textFieldController.clear();
}
```

¡Oh wow, eso fue más fácil de lo que podrías pensar, ¿verdad?
Tenemos que llamar a `setState` para provocar un cambio de estado.
Dentro de él, agregamos un nuevo Todo a nuestra lista de Todos.
Después, limpiaremos el texto del campo de texto.

Esto funciona porque una lista en Dart tiene la funcionalidad `add` incorporada. No necesitamos escribirla nosotros mismos.

## Marcar elementos de todo en nuestra lista

La última parte que necesitamos es la opción de marcar elementos de todo y marcarlos como completados.
Para esto, ya hemos agregado un controlador que invoca la función `_handleTodoChange`.

Sigamos adelante y definamos esa función dentro de nuestro `_TodoListState`.

```dart
void _handleTodoChange(Todo todo) {
	setState(() {
	  todo.checked = !todo.checked;
	});
}
```

Como puedes ver, todo lo que hace esta función es cambiar la propiedad `checked` de un todo a su valor opuesto.

Esto significa que si era verdadero, el nuevo valor será falso, y viceversa.

<video autoplay loop muted playsinline>
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/flutter-todo_icjbmn.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/daily-dev-tips/video/upload/q_auto/flutter-todo_rvnzc5.mp4" type="video/mp4" />
</video>

¿Te preguntas cómo funciona esto?
Un cambio de estado en Flutter significa que todo el widget se reconstruirá. Teniendo en cuenta que definimos un estilo que evalúa el estado `checked` de nuestro todo.
¡Así que al cambiar el estado, se realiza una refactorización completa de nuestro widget!
Y ahora muestra un todo marcado.

¿Te preguntas cómo se ve el código completo?
[Puedes ver la aplicación de lista de tareas en Flutter en GitHub](https://github.com/rebelchris/flutter/tree/todolist).

### ¡Gracias por leer y mantengámonos conectados!

Gracias por leer mi blog. Siéntete libre de suscribirte a mi boletín por correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1).
