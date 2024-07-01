---
layout: ../../layouts/Post.astro
title: 'Rutas básicas de API en Laravel'
metaTitle: 'Rutas básicas de API en Laravel'
metaDesc: 'Aprende lo fácil que es crear una API en Laravel'
image: /images/05-04-2021.jpg
date: 2024-07-01T03:00:00.000Z
modifiedDate: 2024-07-01T03:00:00.000Z
tags:
  - php
---

Laravel ya viene con rutas API listas para usar. En el artículo de hoy, demostraré algunos usos básicos sin autenticación.

Más adelante, veremos cómo asegurar nuestras rutas API.

El objetivo de hoy es llamar públicamente a un endpoint de libros y recuperar todos nuestros libros.
También nos gustaría agregar un libro.

> Esto no estará detrás de una capa de autenticación por ahora.

## Registrando las rutas API

En Laravel, podemos registrar nuestras rutas API dentro del archivo `routes/api.php`. Todas las rutas aquí estarán prefijadas con `API`.

Podríamos agregar todas nuestras rutas manualmente así:

```php
Route::get('books', 'BookController@index');
Route::post('books', 'BookController@store');
```

Sin embargo, Laravel viene con otra técnica útil que nos permite crear un controlador de recursos.

Y lo mejor de todo, podemos incluso generarlo.

```bash
php artisan make:controller BookController --resource --model=Book
```

Esto creará un controlador de recursos para nuestro modelo de libro.
Un controlador de recursos viene con las siguientes rutas listas para usar.

| Método    | URL           | Acción  | Nombre de la ruta    |
| --------- |---------------| ------- | -------------------- |
| GET       | `/books`      | index   | books.index          |
| POST      | `/books`      | store   | books.store          |
| GET       | `/books/{id}` | show    | books.show           |
| PUT/PATCH | `/books/{id}` | update  | books.update         |
| DELETE    | `/books/{id}` | destroy | books.destroy        |

Y podemos registrar todas estas rutas en nuestro archivo de rutas API simplemente incluyendo esta línea.

```php
Route::resource('books', BookController::class);
```

## Devolviendo datos de colección en nuestro controlador API

Ahora que nuestros endpoints están funcionando, necesitamos llenarlos para que realmente devuelvan datos.

Comencemos creando un recurso.
Los recursos son una excelente manera de comunicar entre nuestro modelo y la respuesta de la API.

```bash
php artisan make:resource BookResource
```

Una vez creado, dirígete a `BookController.php` y cambia la función de índice a la siguiente.

```php
public function index()
{
    $books = Book::paginate();
    return BookResource::collection($books);
}
```
Vamos a ver si funciona en Insomnia/Postman.

![Testing our API response](https://cdn.hashnode.com/res/hashnode/image/upload/v1617259695834/dptfoS_Pc.png)

¡Y funciona!
Ahora podemos completar el resto de las acciones.

La función show solo devolverá un libro.

```php
/**
 * Display the specified resource.
 *
 * @param  \App\Models\Book  $book
 * @return \Illuminate\Http\Response
 */
public function show(Book $book)
{
	return new BookResource($book);
}
```

Para crear un nuevo libro, podemos usar lo siguiente:

```php
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'year' => 'required|integer'
    ]);

    $book = Book::create($validated);
    return new BookResource($book);
}
```

El validador es una función super cool de Laravel que puede hacer validaciones bastante extensas.

Veamos qué pasa cuando usamos una solicitud incorrecta.

![Laravel Validation](https://cdn.hashnode.com/res/hashnode/image/upload/v1617260390048/OB75twXM_.png)

¡Genial, verdad!
Sin embargo, aún obtenemos un error si lo llenamos ahora.

"message": "Add [title] to fillable property to allow mass assignment on [App\\Models\\Book].",

Eso es porque el título y el año no son fillables en nuestro modelo.
Abre el archivo del modelo Book y agrega lo siguiente.

```php
protected $fillable = ['title', 'year'];
```

Si ahora publicamos de nuevo, deberíamos agregar un libro y obtener ese libro como nuestra respuesta.

![Laravel API create new entity](https://cdn.hashnode.com/res/hashnode/image/upload/v1617260566393/ztDqgSvNi.png)

Con esta función de creación, podemos simplemente crear la función de actualización.
Eso actualizará un libro basado en su ID.

```php
public function update(Request $request, Book $book)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'year' => 'required|integer'
    ]);

    $book->update($validated);
    return new BookResource($book);
}
```

![Update entity Laravel API](https://cdn.hashnode.com/res/hashnode/image/upload/v1617260736894/K2SPVOfP0.png)

La última función que necesitamos es la de eliminar un libro.
Deberíamos poder eliminar un libro basado en su ID también.

```php
public function destroy(Book $book)
{
    $book->delete();
    return response(null, Response::HTTP_NO_CONTENT);
}
```

Y eso es todo. Ahora tenemos nuestro controlador API básico. Construido en poco tiempo y apenas hicimos cosas personalizadas difíciles.

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
