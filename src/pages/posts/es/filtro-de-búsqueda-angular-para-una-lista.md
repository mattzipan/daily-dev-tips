---
layout: ../../layouts/Post.astro
title: 'Filtro de búsqueda Angular para una lista'
metaTitle: 'Filtro de búsqueda Angular para una lista'
metaDesc: 'Añadiendo un filtro de búsqueda Angular para filtrar una lista de elementos'
image: /images/11-01-2021.jpg
date: 2024-07-02T03:00:00.000Z
modifiedDate: 2024-07-02T03:00:00.000Z
tags:
  - angular
---

Hoy crearemos una función de búsqueda en vivo para una lista en Angular en el artículo de hoy.

Planeo tener una lista renderizada en Angular y un campo de entrada arriba. Si escribimos en este campo, deberíamos ver el contenido de la lista cambiar.

Puedes ver el resultado en este GIF.

![Angular search pipe for a list](https://cdn.hashnode.com/res/hashnode/image/upload/v1609774154572/IH5sfx_R-.gif)

## Configuración del proyecto

Usaremos mi proyecto principal de Angular para este proyecto, ya que no queremos configurar Angular desde cero.

> Nota: Consulta este artículo si planeas [instalar Angular desde cero](https://daily-dev-tips.com/posts/creating-our-first-angular-project/)

Descarga el proyecto de inicio o instálalo tú mismo, luego puedes abrir tu terminal y ejecutar `ng serve`.

## Creando la lista

La siguiente parte es crear un nuevo componente. Este es el componente de Lista.
Podemos usar el generador de Angular para generar este componente por nosotros.

```bash
ng generate component list
```

Luego puedes agregar este componente de lista a tu archivo `app.component.html`.

```html
<li><a routerLink="/welcome" routerLinkActive="active">Bienvenido</a></li>
<li><a routerLink="/list" routerLinkActive="active">Lista
</a></li>
```

Luego necesitamos activar la ruta en nuestro archivo de enrutamiento.
Abre el `app-routing.module.ts`.

Necesitarás importar el Componente en la parte superior.

```js
import { ListComponent } from './list/list.component';
```

Y agregar la siguiente línea como una ruta.

```js
{ path: 'list', component: ListComponent },
```

Ahora deberíamos poder ejecutar nuestra aplicación y visitar la ruta `/list`.

Lo siguiente que queremos agregar es nuestros datos, así que abre el archivo `list.component.ts` y agrega el siguiente conjunto de datos.

```js
people = [
  {
    firstname: 'Chris',
    lastname: 'Bongers',
  },
  {
    firstname: 'Peter',
    lastname: 'Rabbit',
  },
  {
    firstname: 'Donald',
    lastname: 'Duck',
  },
  {
    firstname: 'Lady',
    lastname: 'Gaga',
  },
];
```

Queremos mostrar esta lista en el lado `HTML`, así que necesitamos renderizarla en nuestro archivo HTML.

```html
<ul>
  <li *ngFor="let person of people">
    {{ person.firstname }} {{ person.lastname }}
  </li>
</ul>
```

Si ejecutamos este código, deberíamos ver nuestra lista renderizada.

![Angular rendered list](https://cdn.hashnode.com/res/hashnode/image/upload/v1609743284478/v96F1iWeC.png)

Necesitamos tener un campo de búsqueda en la parte superior de esta lista. Este necesita estar conectado a un modelo para que podamos usar el valor.

Primero, necesitamos habilitar el módulo ReactiveForms.

Podemos agregarlo a nuestro archivo `app.module.ts`.

```js
// Other imports
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...],
  imports: [ReactiveFormsModule, ...],
  providers: [],
  bootstrap: [AppComponent],
})
```

Con esto en su lugar, podemos crear el formulario en nuestro `list.component.ts`.

Lo primero que agregamos es una variable para nuestro searchForm.

```js
searchForm;
```

Luego modificamos el constructor para cargar el formBuilder y crear el formulario de búsqueda.

```js
constructor(private formBuilder: FormBuilder) {
  this.searchForm = this.formBuilder.group({
    search: '',
  });
}
```

Esto creará un formulario que podemos usar en nuestro archivo `HTML`.

Agrega el siguiente formulario en la parte superior de nuestra lista.

```html
<form [formGroup]="searchForm">
  <input formControlName="search" />
</form>
```

> Nota: El formControlName hace referencia al nombre del grupo formBuilder.

## Generando el Angular Search Pipe

Para generar este pipe, podemos ejecutar el siguiente comando.

```bash
ng generate pipe SearchFilter
```

Esto generará y registrará nuestro pipe.

Para usar este pipe, necesitamos agregarlo al ngFor en la lista que creamos en `list.component.ts`.

```html
<li *ngFor="let person of people | searchFilter: searchForm.value.search"></li>
```

Como puedes ver arriba, agregamos el pipe `searchFilter` y pasamos el argumento del valor del campo de búsqueda.

Ahora necesitamos asegurarnos de que este pipe de búsqueda devuelva solo los resultados coincidentes.

Primero, creemos el esquema para este filtro.
Nuestro filtro tiene dos parámetros, uno siendo el input (value) y otro siendo la búsqueda (string).

Usamos TypeScript para definir cómo se ve nuestro valor. En este caso, es un array con un objeto dentro.

Luego verás el `:`, que define la salida para esta función transform.

```js
transform(
  value: { firstname: string; lastname: string }[],
  search: string
): { firstname: string; lastname: string }[] {
  //return something
}
```

Ahora, vamos a crear la función real.

Comenzamos verificando si el valor está establecido.

```js
if (value) {
  // Do something
}
```

Si obtenemos un valor, necesitamos crear una expresión regular para comparar con el parámetro de búsqueda.

```js
const regexp = new RegExp(search, 'i');
```

Luego también queremos obtener las llaves de las propiedades.

```js
const properties = Object.keys(value[0]);
```

Lo que hace lo anterior es obtener las llaves del primer elemento del array.

```js
// ['firstname', 'lastname'];
```

Luego es tiempo de devolver un valor real.

```js
return [
  ...value.filter((item) => {
    return properties.some((property) => regexp.test(item[property]));
  }),
];
```

Esto es un poco complicado. Devolvemos un array `[]`.
Dentro de este array, usamos el operador de propagación para obtener una copia del array de valores.

Usamos el [método filter de JavaScript](https://daily-dev-tips.com/posts/javascript-filter-method/) para filtrar los valores.
Dentro del filtro, devolvemos un booleano porque usamos el [método some de JavaScript](https://daily-dev-tips.com/posts/javascript-some-method/) en el array de propiedades.

Para demostrar lo que sucederá si buscamos `chris`.

Entraremos en el bucle y preguntaremos si una de las propiedades (firstname/lastname) coincide con la expresión regular basada en la cadena de búsqueda.

En el primer caso, esto es verdadero, por lo que el resultado será devuelto como sí. En los otros casos, es falso.

El resultado es un array de 1 objeto, `Chris Bongers`.

![Angular search list result](https://cdn.hashnode.com/res/hashnode/image/upload/v1609773820684/aPLB2C_tp.png)

El pipe de búsqueda completo se verá de la siguiente manera.

```js
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    value: { firstname: string, lastname: string }[],
    search: string
  ): { firstname: string, lastname: string }[] {
    if (value) {
      const regexp = new RegExp(search, 'i');
      const properties = Object.keys(value[0]);
      return [
        ...value.filter((item) => {
          return properties.some((property) => regexp.test(item[property]));
        }),
      ];
    }
  }
}
```

También puedes encontrar este proyecto en [GitHub](https://github.com/rebelchris/angular-starter-demo/tree/search-list).

### ¡Gracias por leer, y conectémonos!

Gracias por leer mi blog. No dudes en suscribirte a mi boletín de correo electrónico y conectarte en [Facebook](https://www.facebook.com/DailyDevTipsBlog) o [Twitter](https://twitter.com/DailyDevTips1)
